import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import styles from './layout.module.css';

export default function MainLayout({ role }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.layout}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          style={{ 
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 15 
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
        <Sidebar role={role} />
      </div>
      
      <div className={styles.mainContent}>
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <main className={styles.pageContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
