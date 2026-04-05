import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Pages - Auth
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ForgotPassword from './pages/Auth/ForgotPassword';

// Pages - Student
import StudentDashboard from './pages/Student/Dashboard';
import MultiStepForm from './pages/Student/MultiStepForm';
import ResumePreview from './pages/Student/ResumePreview';

// Pages - Faculty
import FacultyDashboard from './pages/Faculty/Dashboard';
import StudentList from './pages/Faculty/StudentList';
import StudentProfile from './pages/Faculty/StudentProfile';

// Layout
import MainLayout from './components/layout/MainLayout';

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (allowedRole && user?.role !== allowedRole) {
    return <Navigate to={`/${user.role}/dashboard`} />;
  }
  return children;
};

function AppRoutes() {
  const { isAuthenticated, user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to={`/${user.role}/dashboard`} /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Student Routes */}
      <Route path="/student" element={
        <ProtectedRoute allowedRole="student">
          <MainLayout role="student" />
        </ProtectedRoute>
      }>
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="resume-builder" element={<MultiStepForm />} />
        <Route path="preview" element={<ResumePreview />} />
      </Route>

      {/* Faculty Routes */}
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
