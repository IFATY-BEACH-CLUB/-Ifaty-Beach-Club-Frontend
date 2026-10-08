import { useEffect, useState, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { api, getToken } from '../api';

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = getToken();
  const [authorized, setAuthorized] = useState<boolean | null>(() => (token ? null : false));
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) return;

    let active = true;
    api.me()
      .then(() => {
        if (active) setAuthorized(true);
      })
      .catch((requestError: Error) => {
        if (active) {
          setError(requestError.message);
          setAuthorized(false);
        }
      });
    return () => {
      active = false;
    };
  }, [token]);

  if (!token || authorized === false) {
    return <Navigate to="/admin/login" replace state={{ error }} />;
  }
  if (authorized === null) {
    return <main className="admin-loading" role="status">Vérification de la session…</main>;
  }
  return children;
}
