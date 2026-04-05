import React from 'react';
import StudentTable from '../../components/Faculty/StudentTable';

export default function StudentList() {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Students Directory</h1>
        <p style={{ color: 'var(--text-muted)' }}>Search and review student profiles and resumes.</p>
      </div>

      <StudentTable />
    </div>
  );
}
