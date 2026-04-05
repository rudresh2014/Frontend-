import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Button } from '../../components/ui';
import { Trophy, FileText, Target, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AIRAScore from '../../components/Student/AIRAScore';
import styles from './student.module.css';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Dashboard</h1>
          <p style={{ color: 'var(--text-muted)' }}>Here is your current progression and AIRA score breakdown.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button variant="outline" onClick={() => navigate('/student/resume-builder')}>
            Edit Resume
          </Button>
          <Button onClick={() => navigate('/student/preview')}>
            View Resume
          </Button>
        </div>
      </div>

      <div className={styles.statsRow}>
        <Card>
          <CardContent style={{ padding: '1.5rem' }}>
            <div className={styles.statCard}>
              <div className={styles.statIcon} style={{ background: '#dbeafe', color: '#3b82f6' }}>
                <Trophy size={24} />
              </div>
              <div className={styles.statInfo}>
                <h4>Overall AIRA Score</h4>
                <p>82 / 100</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent style={{ padding: '1.5rem' }}>
            <div className={styles.statCard}>
               <div className={styles.statIcon} style={{ background: '#dcfce7', color: '#22c55e' }}>
                <FileText size={24} />
              </div>
              <div className={styles.statInfo}>
                <h4>Resume Completeness</h4>
                <p>100%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent style={{ padding: '1.5rem' }}>
             <div className={styles.statCard}>
               <div className={styles.statIcon} style={{ background: '#fef3c7', color: '#f59e0b' }}>
                <Target size={24} />
              </div>
              <div className={styles.statInfo}>
                <h4>Profile Views</h4>
                <p>12</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className={styles.dashboardGrid}>
        <Card>
          <CardHeader>
            <CardTitle>Score Breakdown</CardTitle>
            <CardDescription>Visual analysis of your resume parameters based on AI evaluation.</CardDescription>
          </CardHeader>
          <CardContent>
            <AIRAScore />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Action Items</CardTitle>
            <CardDescription>Suggestions to improve your score.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Award size={18} style={{ color: 'var(--primary)', marginTop: '2px' }} />
                <div>
                  <p style={{ fontWeight: 500, fontSize: '0.875rem' }}>Add more certifications</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Your technical skills are strong, but formal certifications will boost credibility.</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Award size={18} style={{ color: 'var(--warning)', marginTop: '2px' }} />
                <div>
                  <p style={{ fontWeight: 500, fontSize: '0.875rem' }}>Detail Internship Impact</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Use quantifiable metrics in your internship descriptions.</p>
                </div>
              </li>
            </ul>
            <div style={{ marginTop: '3.5rem' }}>
              <Button fullWidth onClick={() => navigate('/student/resume-builder')}>
                 Regenerate Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
