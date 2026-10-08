import { useState, type FormEvent } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { api, getToken, setToken } from '../api';
import './admin.css';

export function AdminLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>(location.state?.error || '');
  const [loading, setLoading] = useState(false);

  if (getToken()) return <Navigate to="/admin" replace />;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      const result = await api.login(email, password);
      setToken(result.token);
      navigate('/admin', { replace: true });
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Connexion impossible.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="admin-page admin-login-page">
      <section className="admin-login-card" aria-labelledby="admin-login-title">
        <Link to="/" className="admin-back-link">← Retour au site</Link>
        <p className="admin-eyebrow">Ifaty Beach Club</p>
        <h1 id="admin-login-title">Administration</h1>
        <p className="admin-muted">Connectez-vous pour gérer les photos de la galerie.</p>
        <form className="admin-form" onSubmit={handleSubmit}>
          <label>
            Adresse e-mail
            <input
              autoComplete="username"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label>
            Mot de passe
            <input
              autoComplete="current-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          {error && <p className="admin-alert" role="alert">{error}</p>}
          <button className="admin-button admin-button-primary" disabled={loading}>
            {loading ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>
      </section>
    </main>
  );
}
