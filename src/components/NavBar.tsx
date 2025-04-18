import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation();
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 40px',
      background: 'var(--color-surface)',
      borderRadius: 0,
      marginBottom: 32,
      boxShadow: '0 2px 8px 0 rgba(137,180,250,0.08)',
      width: '100%',
      maxWidth: '100vw',
      minHeight: 64,
      boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', gap: 32 }}>
        <Link
          to="/"
          style={{
            fontWeight: 700,
            color: location.pathname === '/' ? 'var(--color-accent)' : 'var(--color-primary)',
            fontSize: 22,
            letterSpacing: 0.4,
            textDecoration: 'none',
          }}
        >
          Project Creator
        </Link>
        <Link
          to="/projects"
          style={{
            fontWeight: 600,
            color: location.pathname === '/projects' ? 'var(--color-accent)' : 'var(--color-primary)',
            fontSize: 18,
            letterSpacing: 0.2,
            textDecoration: 'none',
          }}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
