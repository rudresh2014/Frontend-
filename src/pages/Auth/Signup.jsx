import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BookOpen, Lock, Mail, User } from 'lucide-react';
import { Input, Button } from '../../components/ui';
import styles from './auth.module.css';

export default function Signup() {
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');

    // Domain validation restriction
    if (!formData.email.endsWith('@college.edu')) {
      setError('Please use your official @college.edu email address.');
      return;
    }

    setIsLoading(true);
    // Mocking an API call
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.authHeader}>
          <div className={styles.logo}>
            <BookOpen className={styles.logoIcon} />
            AIRA
          </div>
          <h1 className={styles.title}>Create an account</h1>
          <p className={styles.subtitle}>Join AIRA to build and analyze your resume.</p>
        </div>

        <form className={styles.authForm} onSubmit={handleSignup}>
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
            label="Full Name" 
            type="text" 
            placeholder="John Doe"
            icon={User}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />

          <Input 
            label="College Email" 
            type="email" 
            placeholder="name@college.edu"
            icon={Mail}
            error={error}
            value={formData.email}
            onChange={(e) => {
              setFormData({...formData, email: e.target.value});
              setError('');
            }}
            required
          />

          <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••"
            icon={Lock}
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />

          <Button type="submit" fullWidth disabled={isLoading} className="mt-6">
            {isLoading ? 'Creating account...' : 'Create account'}
          </Button>

          <div className={styles.footer}>
            Already have an account? 
            <Link to="/login" className={styles.footerLink}>Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
