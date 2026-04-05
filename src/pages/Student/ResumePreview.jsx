import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Button } from '../../components/ui';
import { Download, Edit2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './student.module.css';

export default function ResumePreview() {
  const navigate = useNavigate();

  return (
    <div className={styles.previewContainer}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Resume Preview</h1>
          <p style={{ color: 'var(--text-muted)' }}>Here is your standardized AIRA resume template.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button variant="outline" onClick={() => navigate('/student/resume-builder')}>
            <Edit2 size={16} style={{ marginRight: '0.5rem' }} /> Edit Details
          </Button>
          <Button>
            <Download size={16} style={{ marginRight: '0.5rem' }} /> Download PDF
          </Button>
        </div>
      </div>

      <div className={styles.resumePaper}>
        <div className={styles.resumeHeader}>
          <h1>JOHN DOE</h1>
          <div className={styles.resumeContact}>
            john.doe@college.edu | +1 234 567 8900 | linkedin.com/in/johndoe
          </div>
        </div>

        <div className={styles.resumeSection}>
          <h2>Education</h2>
          <div className={styles.resumeItem}>
            <div className={styles.resumeItemHeader}>
              <span>State University</span>
              <span>2020 - 2024</span>
            </div>
            <div>B.Tech Computer Science</div>
            <div>CGPA: 8.5/10.0</div>
          </div>
        </div>

        <div className={styles.resumeSection}>
          <h2>Technical Skills</h2>
          <div className={styles.resumeItem}>
            <strong>Languages:</strong> Python, JavaScript, C++
            <br />
            <strong>Frameworks:</strong> React, Express, Django
            <br />
            <strong>Tools:</strong> Git, Docker, AWS
          </div>
        </div>

        <div className={styles.resumeSection}>
          <h2>Projects</h2>
          <div className={styles.resumeItem}>
            <div className={styles.resumeItemHeader}>
              <span>AI Resume Analyzer</span>
              <span>React, Node.js, AI Models</span>
            </div>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Built a comprehensive platform for students to generate standardized resumes.</li>
              <li>Integrated AI evaluation models to provide real-time feedback and scoring.</li>
              <li>Developed role-based dashboards with secure authentication.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
