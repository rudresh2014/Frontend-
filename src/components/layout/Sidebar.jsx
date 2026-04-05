import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, LayoutDashboard, FileText, Users, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import styles from './layout.module.css';

export default function Sidebar({ role }) {
  const { logout } = useAuth();

  const studentLinks = [
    { name: 'Dashboard', path: '/student/dashboard', icon: LayoutDashboard },
    { name: 'View Resume', path: '/student/preview', icon: FileText },
    { name: 'Settings', path: '/student/settings', icon: Settings },
  ];

  const facultyLinks = [
    { name: 'Dashboard', path: '/faculty/dashboard', icon: LayoutDashboard },
    { name: 'Students Directory', path: '/faculty/students', icon: Users },
  ];

  const links = role === 'faculty' ? facultyLinks : studentLinks;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <NavLink to={`/${role}/dashboard`} className={styles.logo}>
          <BookOpen size={24} />
          Resume Analyzer
        </NavLink>
      </div>
      
      <nav className={styles.navLinks}>
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `${styles.navItem} ${isActive ? styles.navItemActive : ''}`
              }
            >
              <Icon size={20} />
              {link.name}
            </NavLink>
          );
        })}
      </nav>

      <div style={{ padding: '1rem', borderTop: '1px solid var(--border)' }}>
        <button 
          onClick={logout}
          className={styles.navItem} 
          style={{ width: '100%', border: 'none', background: 'transparent', cursor: 'pointer' }}
        >
          <LogOut size={20} />
          Log Out
        </button>
      </div>
    </aside>
  );
}
