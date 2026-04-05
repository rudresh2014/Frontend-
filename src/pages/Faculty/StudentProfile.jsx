import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, Button } from '../../components/ui';
import { ArrowLeft, Download, Eye } from 'lucide-react';
import AIRAScore from '../../components/Student/AIRAScore';
import styles from './faculty.module.css';

export default function StudentProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Button variant="ghost" onClick={() => navigate('/faculty/students')} style={{ marginBottom: '1rem', paddingLeft: 0 }}>
        <ArrowLeft size={16} /> Back to Directory
      </Button>

      <div className={styles.profileHeader}>
        <div className={styles.profileInfo}>
          <div className={styles.profileAvatar}>J</div>
          <div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>John Doe</h1>
            <p style={{ color: 'var(--text-muted)' }}>Computer Science • Batch of 2024</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', fontSize: '0.875rem' }}>
              <span><strong>CGPA:</strong> 8.5</span>
              <span><strong>AIRA Score:</strong> 82/100</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button variant="outline"><Eye size={16} style={{marginRight: '0.5rem'}}/> View Resume</Button>
          <Button><Download size={16} style={{marginRight: '0.5rem'}}/> Download PDF</Button>
        </div>
      </div>

      <div className={styles.profileGrid}>
        <Card>
          <CardHeader>
            <CardTitle>Detailed Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <AIRAScore />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Academic Details</CardTitle>
          </CardHeader>
          <CardContent>
             <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               <li>
                 <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email</p>
                 <p style={{ fontWeight: 500 }}>john.doe@college.edu</p>
               </li>
               <li>
                 <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Completed Projects</p>
                 <p style={{ fontWeight: 500 }}>4</p>
               </li>
               <li>
                 <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Skills Listed</p>
                 <p style={{ fontWeight: 500 }}>12</p>
               </li>
             </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
