const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/$/, '');
const TOKEN_KEY = 'ifaty_admin_token';

export type GalleryItem = {
  id: number;
  image: string;
  imageUrl: string;
  created_at: string;
  updated_at: string;
};

type RequestOptions = RequestInit & {
  authenticated?: boolean;
  redirectOnUnauthorized?: boolean;
};

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  if (window.location.pathname !== '/admin/login') {
    window.location.assign('/admin/login');
  }
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const {
    authenticated = true,
    redirectOnUnauthorized = true,
    headers,
    ...fetchOptions
  } = options;
  const requestHeaders = new Headers(headers);
  const token = authenticated ? getToken() : null;

  if (token) requestHeaders.set('Authorization', `Bearer ${token}`);
  if (!(fetchOptions.body instanceof FormData) && fetchOptions.body !== undefined) {
    requestHeaders.set('Content-Type', 'application/json');
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...fetchOptions,
    headers: requestHeaders,
  });

  if (response.status === 401 && redirectOnUnauthorized) logout();
  if (!response.ok) {
    const payload = await response.json().catch(() => null) as { error?: string } | null;
    throw new Error(payload?.error || `La requête a échoué (${response.status}).`);
  }
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

export const api = {
  login: (email: string, password: string) =>
    request<{ token: string; user: { id: number; email: string } }>('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      authenticated: false,
      redirectOnUnauthorized: false,
    }),
  me: () => request<{ user: { id: number; email: string } }>('/api/admin/me'),
  getGallery: () => request<GalleryItem[]>('/api/gallery', { authenticated: false }),
  createGalleryItem: (body: FormData) =>
    request<GalleryItem>('/api/gallery', { method: 'POST', body }),
  updateGalleryItem: (id: number, body: FormData) =>
    request<GalleryItem>(`/api/gallery/${id}`, { method: 'PUT', body }),
  deleteGalleryItem: (id: number) =>
    request<void>(`/api/gallery/${id}`, { method: 'DELETE' }),
};
