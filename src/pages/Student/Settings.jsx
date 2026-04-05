import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Button, Input } from '../../components/ui';
import { useAuth } from '../../context/AuthContext';
import { LogOut, Trash2 } from 'lucide-react';
import styles from './student.module.css';

export default function Settings() {
  const { user, logout } = useAuth();

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Settings</h1>
        <p style={{ color: 'var(--text-muted)' }}>Manage your personal account details and preferences.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your basic account information.</CardDescription>
          </CardHeader>
          <CardContent style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
            <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
              <Input label="Full Name" defaultValue={user?.name || ''} />
              <Input label="Email Address" defaultValue={user?.email || ''} readOnly />
              <Button style={{ width: 'fit-content' }}>Save Changes</Button>
            </div>
          </CardContent>
        </Card>

        {/* Security / Password */}
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>Ensure your account is using a long, random password.</CardDescription>
          </CardHeader>
          <CardContent style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
             <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
              <Input label="Current Password" type="password" />
              <Input label="New Password" type="password" />
              <Input label="Confirm New Password" type="password" />
              <Button style={{ width: 'fit-content' }}>Update Password</Button>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card style={{ border: '1px solid var(--danger)' }}>
          <CardHeader>
            <CardTitle style={{ color: 'var(--danger)' }}>Danger Zone</CardTitle>
            <CardDescription>Irreversible and destructive actions.</CardDescription>
          </CardHeader>
          <CardContent style={{ borderTop: '1px solid var(--danger)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
              <div>
                 <h4 style={{ fontWeight: 600 }}>Log Out</h4>
                 <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Log out of your current session on this device.</p>
              </div>
              <Button variant="outline" onClick={logout}>
                <LogOut size={16} style={{ marginRight: '0.5rem' }} /> Log out
              </Button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                 <h4 style={{ fontWeight: 600 }}>Delete Account</h4>
                 <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Permanently remove your account and all associated resume data.</p>
              </div>
              <Button style={{ backgroundColor: 'var(--danger)', color: 'white', border: 'none' }}>
                <Trash2 size={16} style={{ marginRight: '0.5rem' }} /> Delete account
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
