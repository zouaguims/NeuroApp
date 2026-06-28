import { BrowserRouter, Routes, Route, useParams } from 'react-router';
import { AuthProvider } from './lib/AuthContext';
import { ProtectedRoute, AdminRoute } from './components/ProtectedRoute';
import { DashboardLayout } from './components/DashboardLayout';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { CategoryView } from './components/CategoryView';
import { FicheView } from './components/FicheView';
import { AdminView } from './components/AdminView';
import { FavoritesView } from './components/FavoritesView';
import { CatalogView } from './components/CatalogView';
import { PremiumView } from './components/PremiumView';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<CategoryView />} />
              <Route path="/catalog" element={<CatalogView />} />
              <Route path="/disease/:id" element={<FicheView />} />
              <Route path="/favorites" element={<FavoritesView />} />
              <Route path="/premium" element={<PremiumView />} />
              
              <Route element={<AdminRoute />}>
                <Route path="/admin" element={<AdminView />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
