import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Bell, Menu, UserCircle } from 'lucide-react';
import styles from './layout.module.css';

export default function Navbar({ onMenuClick }) {
  const { user } = useAuth();

  return (
    <header className={styles.navbar}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button 
          className="lg-hidden" 
          onClick={onMenuClick}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <Menu size={24} />
        </button>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, margin: 0, display: 'none' }} className="md-block">
          Welcome back, {user?.name.split(' ')[0]}
        </h2>
      </div>

      <div className={styles.userInfo}>
        <span className={styles.userRole}>{user?.role}</span>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', position: 'relative' }}>
          <Bell size={20} style={{ color: 'var(--text-muted)' }} />
          <span style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', background: 'var(--danger)', borderRadius: '50%' }}></span>
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <UserCircle size={32} style={{ color: 'var(--text-muted)' }} />
        </div>
      </div>
    </header>
  );
}
