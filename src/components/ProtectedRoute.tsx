import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../lib/AuthContext';

export function ProtectedRoute() {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center bg-slate-50">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export function AdminRoute() {
  const { role, loading } = useAuth();
  
  if (loading) {
    return null;
  }

  if (role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
