import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui';
import { Users, FileCheck, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Faculty Dashboard</h1>
        <p style={{ color: 'var(--text-muted)' }}>Overview of student performances and resume analytics.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <Card>
          <CardContent style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: 'var(--radius-full, 50%)' }}>
              <Users size={24} />
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>Total Students Registered</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>1,248</h3>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: '#dcfce7', color: '#22c55e', borderRadius: 'var(--radius-full, 50%)' }}>
              <FileCheck size={24} />
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>Resumes Generated</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>985</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: '#fef3c7', color: '#f59e0b', borderRadius: 'var(--radius-full, 50%)' }}>
              <TrendingUp size={24} />
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>Average AIRA Score</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>76.4</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <p style={{color: 'var(--text-muted)'}}>• 15 new students registered today.</p>
          <p style={{color: 'var(--text-muted)'}}>• 80% of students in Computer Science have an AIRA score &gt; 80.</p>
          <p style={{color: 'var(--text-muted)'}}>• The most commonly listed skill is "React".</p>
        </CardContent>
      </Card>
    </div>
  );
}
