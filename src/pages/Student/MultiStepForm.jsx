import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Button, Input } from '../../components/ui';
import { Check, Plus, Trash2, ShieldCheck, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import styles from './student.module.css';

const steps = ['Personal', 'Academic', 'Projects', 'Skills'];

export default function MultiStepForm({ isStandalone }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [projects, setProjects] = useState([{ id: 1, title: '', desc: '', tech: '' }]);
  const { completeProfile } = useAuth();
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(curr => curr + 1);
    } else {
      setIsSaving(true);
      setTimeout(() => {
        setIsSaving(false);
        setIsCompleted(true);
        completeProfile();
        
        setTimeout(() => {
          navigate('/student/dashboard');
        }, 2000);
      }, 1500);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Input label="First Name" placeholder="John" required />
            <Input label="Last Name" placeholder="Doe" required />
            <div style={{ gridColumn: '1 / -1' }}>
              <Input label="Email" type="email" placeholder="john.doe@college.edu" required />
            </div>
            <Input label="Phone Number" placeholder="+1 234 567 8900" />
            <Input label="LinkedIn URL" placeholder="https://linkedin.com/..." />
          </div>
        );
      case 1:
        return (
          <div style={{ display: 'grid', gap: '1rem' }}>
            <Input label="Degree & Branch" placeholder="B.Tech Computer Science" required />
            <Input label="College/University" placeholder="State University" required />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <Input label="Graduation Year" placeholder="2024" required />
              <Input label="CGPA" placeholder="8.5" required />
            </div>
          </div>
        );
      case 2:
         return (
          <div className={styles.dynamicList}>
            {projects.map((proj, i) => (
              <div key={proj.id} className={styles.dynamicItem}>
                <button 
                  className={styles.removeItemBtn}
                  onClick={() => setProjects(projects.filter(p => p.id !== proj.id))}
                >
                  <Trash2 size={16} />
                </button>
                <Input label="Project Title" placeholder="AI Resume Analyzer" required />
                <Input label="Description" placeholder="Built a platform for students..." required />
                <Input label="Technologies Used" placeholder="React, Node.js, AI Models" required />
              </div>
            ))}
            <Button 
              variant="outline" 
              className="mt-4" 
              style={{ width: 'fit-content' }}
              onClick={() => setProjects([...projects, { id: Date.now(), title: '', desc: '', tech: '' }])}
            >
              <Plus size={16} style={{ marginRight: '0.5rem' }} /> Add Project
            </Button>
          </div>
        );
      case 3:
        return (
          <div style={{ display: 'grid', gap: '1rem' }}>
            <Input label="Languages" placeholder="e.g., Python, JavaScript, C++" required />
            <Input label="Frameworks" placeholder="e.g., React, Express, Django" />
            <Input label="Tools" placeholder="e.g., Git, Docker, AWS" />
          </div>
        );
      default:
        return null;
    }
  };

  const currentStepProgress = ((currentStep) / (steps.length - 1)) * 100;

  if (isCompleted) {
    return (
      <div style={{ minHeight: isStandalone ? '100vh' : 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-main)' }}>
        <Card style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <CardContent style={{ padding: '3rem 2rem' }}>
            <div style={{ display: 'inline-flex', padding: '1.5rem', background: '#dcfce7', color: '#22c55e', borderRadius: '50%', marginBottom: '1.5rem' }}>
              <ShieldCheck size={48} />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Profile Complete!</h2>
            <p style={{ color: 'var(--text-muted)' }}>Taking you to your dashboard...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div style={{ minHeight: isStandalone ? '100vh' : 'auto', background: isStandalone ? 'var(--bg-main)' : 'transparent', padding: isStandalone ? '3rem 1rem' : '0' }}>
      <div className={styles.formContainer}>
        {isStandalone && (
           <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
               <Sparkles size={28} /> AIRA Onboarding
             </h1>
             <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Let's build your optimized resume setup before continuing.</p>
           </div>
        )}
        
        {!isStandalone && (
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Edit Resume Profile</h1>
            <p style={{ color: 'var(--text-muted)' }}>Update your details to regenerate your resume.</p>
          </div>
        )}

        <Card>
          <CardContent style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ height: '100%', background: 'var(--primary)', width: `${currentStepProgress}%`, transition: 'width 0.3s ease' }} />
              </div>
            </div>

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

            <div style={{ marginTop: '2.5rem' }}>
              {renderStepContent()}
            </div>

            <div className={styles.formActions}>
               <Button 
                variant="outline" 
                onClick={() => setCurrentStep(curr => Math.max(0, curr - 1))}
                disabled={currentStep === 0 || isSaving}
              >
                Back
              </Button>
              <Button onClick={handleNext} disabled={isSaving}>
                {currentStep === steps.length - 1 ? (isSaving ? 'Finalizing...' : 'Complete Profile') : 'Next Step'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
