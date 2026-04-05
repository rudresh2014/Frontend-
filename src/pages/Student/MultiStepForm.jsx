import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Button, Input } from '../../components/ui';
import { Check, Plus, Trash2, Save } from 'lucide-react';
import styles from './student.module.css';

const steps = ['Personal', 'Academic', 'Projects', 'Skills'];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(curr => curr + 1);
    } else {
      // Simulate save and redirect to preview
      setIsSaving(true);
      setTimeout(() => {
        navigate('/student/preview');
      }, 1000);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Input label="First Name" placeholder="John" />
            <Input label="Last Name" placeholder="Doe" />
            <div style={{ gridColumn: '1 / -1' }}>
              <Input label="Email" type="email" placeholder="john.doe@college.edu" />
            </div>
            <Input label="Phone Number" placeholder="+1 234 567 8900" />
            <Input label="LinkedIn URL" placeholder="https://linkedin.com/..." />
          </div>
        );
      case 1:
        return (
          <div style={{ display: 'grid', gap: '1rem' }}>
            <Input label="Degree & Branch" placeholder="B.Tech Computer Science" />
            <Input label="College/University" placeholder="State University" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <Input label="Graduation Year" placeholder="2024" />
              <Input label="CGPA" placeholder="8.5" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className={styles.dynamicList}>
            <div className={styles.dynamicItem}>
              <button className={styles.removeItemBtn}><Trash2 size={16} /></button>
              <Input label="Project Title" placeholder="AI Resume Analyzer" />
              <Input label="Description" placeholder="Built a platform for students..." />
              <Input label="Technologies Used" placeholder="React, Node.js, AI Models" />
            </div>
            <Button variant="outline" className="mt-4" style={{ width: 'fit-content' }}>
              <Plus size={16} style={{ marginRight: '0.5rem' }} /> Add Project
            </Button>
          </div>
        );
      case 3:
        return (
          <div style={{ display: 'grid', gap: '1rem' }}>
            <Input label="Languages" placeholder="e.g., Python, JavaScript, C++" />
            <Input label="Frameworks" placeholder="e.g., React, Express, Django" />
            <Input label="Tools" placeholder="e.g., Git, Docker, AWS" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.formContainer}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Resume Builder</h1>
          <p style={{ color: 'var(--text-muted)' }}>Complete your profile to generate a standardized resume.</p>
        </div>
        <Button variant="secondary" onClick={() => setIsSaving(true)}>
          <Save size={16} style={{ marginRight: '0.5rem' }} /> Auto-saved
        </Button>
      </div>

      <Card>
        <CardContent style={{ padding: '2rem' }}>
          <div className={styles.stepIndicator}>
            {steps.map((step, idx) => (
              <div 
                key={step} 
                className={`${styles.step} ${idx === currentStep ? styles.active : ''} ${idx < currentStep ? styles.completed : ''}`}
              >
                <div className={styles.stepCircle}>
                  {idx < currentStep ? <Check size={16} /> : idx + 1}
                </div>
                <span className={styles.stepLabel}>{step}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem' }}>
            {renderStepContent()}
          </div>

          <div className={styles.formActions}>
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep(curr => Math.max(0, curr - 1))}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button onClick={handleNext} disabled={isSaving}>
              {currentStep === steps.length - 1 ? (isSaving ? 'Generating...' : 'Generate Resume') : 'Next Step'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
