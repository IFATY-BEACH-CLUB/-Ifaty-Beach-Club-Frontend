import { Link, NavLink, Outlet } from 'react-router-dom';
import { logout } from '../api';
import { adminSections } from './sections.js';

export function AdminLayout() {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <Link className="admin-brand" to="/">
          <span className="admin-eyebrow">Ifaty Beach Club</span>
          <strong>Administration</strong>
        </Link>
        <nav className="admin-sidebar-nav" aria-label="Administration">
          {adminSections.map((section) => (
            <NavLink
              key={section.key}
              to={`/admin/${section.path}`}
              className={({ isActive }) => `admin-nav-link${isActive ? ' is-active' : ''}`}
            >
              {section.label}
            </NavLink>
          ))}
        </nav>
        <div className="admin-sidebar-footer">
          <Link className="admin-button admin-button-secondary" to="/">Voir le site</Link>
          <button className="admin-button admin-button-secondary" onClick={logout}>Déconnexion</button>
        </div>
      </aside>
      <main className="admin-workspace">
        <Outlet />
      </main>
    </div>
  );
}
