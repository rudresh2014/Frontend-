import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Bell, UserCircle } from 'lucide-react';
import styles from './layout.module.css';

export default function Navbar({ onMenuClick }) {
  const { user } = useAuth();
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className={styles.navbar}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, margin: 0, display: 'none' }} className="md-block">
          Welcome back, {user?.name?.split(' ')[0]}
        </h2>
      </div>

      <div className={styles.userInfo}>
        <span className={styles.userRole}>{user?.role}</span>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', position: 'relative' }}>
          <Bell size={20} style={{ color: 'var(--text-muted)' }} />
          <span style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', background: 'var(--danger)', borderRadius: '50%' }}></span>
        </button>
        
        <div style={{ position: 'relative' }}>
          <div 
            onClick={() => setShowProfile(!showProfile)} 
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
          >
            <UserCircle size={32} style={{ color: 'var(--text-muted)' }} />
          </div>
          
          {showProfile && (
            <div style={{
              position: 'absolute', top: '100%', right: 0, marginTop: '0.5rem',
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)', padding: '1rem',
              boxShadow: 'var(--shadow-md)', minWidth: '200px', zIndex: 50
            }}>
              <p style={{ fontWeight: 600 }}>{user?.name}</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{user?.email}</p>
              <div style={{ borderTop: '1px solid var(--border)', marginTop: '0.75rem', paddingTop: '0.75rem' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Account Level: <strong style={{ color: 'var(--primary)' }}>Standard</strong></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
