import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ForgotPassword from './pages/Auth/ForgotPassword';

import StudentDashboard from './pages/Student/Dashboard';
import MultiStepForm from './pages/Student/MultiStepForm';
import ResumePreview from './pages/Student/ResumePreview';
import Settings from './pages/Student/Settings';

import FacultyDashboard from './pages/Faculty/Dashboard';
import StudentList from './pages/Faculty/StudentList';
import StudentProfile from './pages/Faculty/StudentProfile';

import MainLayout from './components/layout/MainLayout';

const ProtectedRoute = ({ children, allowedRole, requireComplete }) => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) return <Navigate to="/login" />;
  
  if (allowedRole && user?.role !== allowedRole) {
    return <Navigate to={`/${user.role}/dashboard`} />;
  }

  if (requireComplete && user?.role === 'student' && !user?.isProfileComplete) {
    return <Navigate to="/onboarding" />;
  }

  return children;
};

function AppRoutes() {
  const { isAuthenticated, user } = useAuth();

  const getRootRedirect = () => {
    if (!isAuthenticated) return "/login";
    if (user.role === 'student' && !user.isProfileComplete) return "/onboarding";
    return `/${user.role}/dashboard`;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to={getRootRedirect()} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/onboarding" element={
        <ProtectedRoute allowedRole="student">
          {user?.isProfileComplete ? <Navigate to="/student/dashboard" /> : <MultiStepForm isStandalone={true} />}
        </ProtectedRoute>
      } />

      <Route path="/student" element={
        <ProtectedRoute allowedRole="student" requireComplete={true}>
          <MainLayout role="student" />
        </ProtectedRoute>
      }>
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="resume-builder" element={<MultiStepForm />} />
        <Route path="preview" element={<ResumePreview />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="/faculty" element={
        <ProtectedRoute allowedRole="faculty">
          <MainLayout role="faculty" />
        </ProtectedRoute>
      }>
        <Route path="dashboard" element={<FacultyDashboard />} />
        <Route path="students" element={<StudentList />} />
        <Route path="student/:id" element={<StudentProfile />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
