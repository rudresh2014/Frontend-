import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../../components/ui';
import { Search, Download, Filter } from 'lucide-react';
import styles from '../../pages/Faculty/faculty.module.css';

const mockStudents = [
  { id: 1, name: 'John Doe', email: 'john@college.edu', branch: 'Computer Science', cgpa: 8.5, score: 82 },
  { id: 2, name: 'Alice Smith', email: 'alice@college.edu', branch: 'Electronics', cgpa: 9.1, score: 94 },
  { id: 3, name: 'Bob Johnson', email: 'bob@college.edu', branch: 'Mechanical', cgpa: 7.8, score: 71 },
  { id: 4, name: 'Sarah Williams', email: 'sarah@college.edu', branch: 'Computer Science', cgpa: 8.9, score: 88 },
  { id: 5, name: 'Michael Brown', email: 'michael@college.edu', branch: 'Civil', cgpa: 6.5, score: 55 },
];

export default function StudentTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filtered = mockStudents.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.branch.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.facultyTableContainer}>
      <div className={styles.tableHeader}>
        <div style={{ width: '300px' }}>
          <Input 
            placeholder="Search students..." 
            icon={Search} 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.tableFilters}>
          <Button variant="outline"><Filter size={16} /> Filters</Button>
          <Button variant="outline"><Download size={16} /> Export CSV</Button>
        </div>
      </div>
      
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name & Email</th>
            <th>Branch</th>
            <th>CGPA</th>
            <th>AIRA Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(student => (
            <tr key={student.id}>
              <td>
                <div style={{ fontWeight: 500 }}>{student.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{student.email}</div>
              </td>
              <td>{student.branch}</td>
              <td>{student.cgpa}</td>
              <td>
                <span className={`${styles.scoreBadge} ${student.score > 80 ? styles.scoreHigh : student.score > 60 ? styles.scoreMedium : styles.scoreLow}`}>
                  {student.score}
                </span>
              </td>
              <td>
                <button 
                  className={styles.actionBtn}
                  onClick={() => navigate(`/faculty/student/${student.id}`)}
                >
                  View Profile
                </button>
              </td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan={5} style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
