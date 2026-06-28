import { Outlet, Link, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../lib/AuthContext';
import { Brain, LogOut, BookOpen, Star, Stethoscope, Menu, X, LayoutDashboard, Settings, Search, ClipboardList, FileText, Crown } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState, useEffect, useRef } from 'react';
import { db } from '../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Disease } from '../types';

export function DashboardLayout() {
  const { user, profile, role, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [allDiseases, setAllDiseases] = useState<Disease[]>([]);
  const [searchResults, setSearchResults] = useState<Disease[]>([]);
  const searchWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchDiseases() {
      try {
        const snapshot = await getDocs(collection(db, 'diseases'));
        const diseases = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Disease));
        setAllDiseases(diseases);
      } catch (err) {
        console.error('Error fetching diseases for search:', err);
      }
    }
    fetchDiseases();
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const lowerQuery = searchQuery.toLowerCase();
      const results = allDiseases.filter(d => 
        d.name.toLowerCase().includes(lowerQuery)
      );
      setSearchResults(results.slice(0, 5)); // Limit to 5 results
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, allDiseases]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigation = [
    { name: 'Tableau de bord', href: '/', icon: LayoutDashboard },
    { name: 'Bases de Neurologie', href: '/category/bases', icon: Stethoscope },
    { name: 'Conduites à Tenir', href: '/category/cat', icon: ClipboardList },
    { name: 'Fiches Médicales Neurologiques', href: '/catalog', icon: BookOpen },
    { name: 'Mes Favoris', href: '/favorites', icon: Star },
    { name: 'Abonnement Premium', href: '/premium', icon: Crown },
  ];

  if (!user || !profile) return null;

  const isPremium = profile.plan === 'premium';

  return (
    <div className="min-h-[100dvh] bg-slate-50 print:bg-white flex">
      {/* Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div className={cn(
        "print:hidden fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 flex flex-col shadow-xl",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center h-16 shrink-0 px-6 bg-blue-600">
          <Brain className="w-8 h-8 text-white mr-3" />
          <span className="text-xl font-bold text-white tracking-tight">Neuro Fiches</span>
          <button className="ml-auto text-blue-100 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4 px-3">
          <div className="space-y-1">
            {navigation.map((item) => {
               const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));
               const isPremiumLink = item.href === '/premium';
               return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "group flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? (isPremiumLink ? "bg-amber-100 text-amber-900" : "bg-blue-50 text-blue-700")
                      : "text-slate-700 hover:bg-slate-100/80 hover:text-slate-900"
                  )}
                >
                  <item.icon className={cn("mr-3 h-5 w-5 flex-shrink-0 transition-colors", isActive ? (isPremiumLink ? "text-amber-600" : "text-blue-700") : (isPremiumLink ? "text-amber-500 group-hover:text-amber-600" : "text-slate-400 group-hover:text-slate-600"))} />
                  {item.name}
                  {isPremiumLink && isPremium && <div className="ml-auto bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Actif</div>}
                </Link>
               );
            })}
            
            {role === 'admin' && (
               <div className="mt-4 pt-4 border-t border-slate-200">
                  <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Administration</h3>
                  <Link
                    to="/admin"
                    onClick={() => setSidebarOpen(false)}
                    className="group flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  >
                    <Settings className="mr-3 h-5 w-5 text-slate-400 group-hover:text-slate-600" />
                    Gérer les fiches
                  </Link>
               </div>
            )}
          </div>
        </div>

        <div className="flex-shrink-0 border-t border-slate-200 p-4 bg-slate-50/50">
          <div className="flex items-center">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200 text-blue-700 font-bold">
                 {user.displayName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || 'U'}
              </div>
              {isPremium && (
                <div className="absolute -bottom-1 -right-1 bg-amber-400 rounded-full p-0.5 border-2 border-white">
                  <Crown className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            <div className="ml-3 font-medium text-sm flex-1 truncate">
              <p className="text-slate-900 truncate flex items-center gap-2">
                {user.displayName || 'Interne'}
              </p>
              <p className="text-slate-500 truncate text-xs">{role === 'admin' ? 'Administrateur' : (isPremium ? 'Membre Premium' : 'Membre Gratuit')}</p>
            </div>
            <button
              onClick={logout}
              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Déconnexion"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 print:md:pl-0">
        <header className="print:hidden sticky top-0 z-30 flex items-center h-16 shrink-0 border-b border-slate-200 bg-white/80 backdrop-blur-md px-4 md:px-8">
           <button
             type="button"
             className="p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg mr-4"
             onClick={() => setSidebarOpen(true)}
           >
             <Menu className="w-6 h-6" />
           </button>
           <div className="flex-1 w-full flex">
             <div ref={searchWrapperRef} className="relative w-full max-w-xl flex items-center">
                <Search className="absolute left-3 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Rechercher une maladie, un syndrome..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-full bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                />
                
                {/* Search Results Dropdown */}
                {isSearchFocused && searchQuery.trim().length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50">
                    {searchResults.length > 0 ? (
                      <div className="py-2">
                        {searchResults.map((result) => (
                          <Link
                            key={result.id}
                            to={`/disease/${result.id}`}
                            className="flex items-center px-4 py-3 hover:bg-slate-50 transition-colors"
                            onClick={() => {
                              setIsSearchFocused(false);
                              setSearchQuery('');
                            }}
                          >
                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mr-3 flex-shrink-0">
                              <FileText className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-slate-900 truncate">{result.name}</p>
                              <p className="text-xs text-slate-500 uppercase tracking-wider">Fiche experte</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="px-4 py-6 text-center text-slate-500 text-sm">
                        Aucun résultat pour "{searchQuery}"
                      </div>
                    )}
                  </div>
                )}
             </div>
           </div>
        </header>

        <main className="flex-1 overflow-y-auto print:overflow-visible bg-slate-50 print:bg-white">
          <div className="py-6 px-4 sm:px-6 md:px-8 print:p-0 mx-auto max-w-7xl print:max-w-none">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
