import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail } from 'lucide-react';
import { Input, Button } from '../../components/ui';
import styles from './auth.module.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.authHeader}>
          <div className={styles.logo}>
            <BookOpen className={styles.logoIcon} />
            Resume Analyzer
          </div>
          <h1 className={styles.title}>Reset Password</h1>
          <p className={styles.subtitle}>
            {isSent 
              ? "Check your email for instructions" 
              : "Enter your email to receive a password reset link."}
          </p>
        </div>

        <div className={styles.authForm}>
          {!isSent ? (
            <form onSubmit={handleSubmit}>
              <Input 
                label="College Email" 
                type="email" 
                placeholder="name@college.edu"
                icon={Mail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" fullWidth className="mt-4">
                Send Reset Link
              </Button>
            </form>
          ) : (
             <div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
               <p style={{color: 'var(--text-muted)'}}>
                 We've sent a password reset link to <strong>{email}</strong>.
               </p>
             </div>
          )}

          <div className={styles.footer}>
            <Link to="/login" className={styles.footerLink}>Back to login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
