import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { BookOpen, MapPin, Lock, Mail } from 'lucide-react';
import { Input, Button } from '../../components/ui';
import styles from './auth.module.css';

export default function Login() {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Mocking an API call
    setTimeout(() => {
      login(email, password, role);
      navigate(`/${role}/dashboard`);
    }, 1000);
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.authHeader}>
          <div className={styles.logo}>
            <BookOpen className={styles.logoIcon} />
            AIRA
          </div>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>Enter your details to access your account.</p>
        </div>

        <form className={styles.authForm} onSubmit={handleLogin}>
          <div className={styles.roleSelect}>
            <button 
              type="button" 
              className={`${styles.roleBtn} ${role === 'student' ? styles.roleBtnActive : ''}`}
              onClick={() => setRole('student')}
            >
              Student
            </button>
            <button 
              type="button" 
              className={`${styles.roleBtn} ${role === 'faculty' ? styles.roleBtnActive : ''}`}
              onClick={() => setRole('faculty')}
            >
              Faculty
            </button>
          </div>

          <Input 
            label="Email" 
            type="email" 
            placeholder={role === 'student' ? "student@college.edu" : "faculty@college.edu"}
            icon={Mail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••"
            icon={Lock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className={styles.optionsRow}>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className={styles.forgotLink}>Forgot password?</Link>
          </div>

          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>

          <div className={styles.footer}>
            Don't have an account? 
            <Link to="/signup" className={styles.footerLink}>Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
