import { useEffect, useState } from 'react';
import { useAuth } from '../lib/AuthContext';
import { db } from '../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Favorite } from '../types';
import { Link } from 'react-router';
import { Star, FileText } from 'lucide-react';
import { handleFirestoreError, OperationType } from '../lib/dbError';

export function FavoritesView() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchFavs = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'users', user.uid, 'favorites'));
        setFavorites(snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Favorite)));
      } catch(e) {
        handleFirestoreError(e, OperationType.LIST, `users/${user.uid}/favorites`);
      }
      setLoading(false);
    }
    fetchFavs();
  }, [user]);

  if (loading) return <div className="text-slate-500 font-medium">Chargement de vos favoris...</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight flex items-center">
           <Star className="w-8 h-8 text-amber-500 mr-3" />
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Mes Favoris</span>
        </h1>
        <p className="mt-2 text-slate-500 text-lg">
           Retrouvez ici toutes les fiches que vous avez sauvegardées.
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 border-dashed">
           <Star className="w-12 h-12 text-slate-300 mx-auto mb-4" />
           <p className="text-slate-500 font-medium">Vous n'avez pas encore de fiches en favoris.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map(f => (
             <Link key={f.id} to={`/disease/${f.diseaseId}`} className="group block p-6 bg-[#fffbf0] rounded-3xl shadow-sm border border-transparent hover:shadow-md hover:border-amber-200 transition-all duration-200 flex flex-col justify-between min-h-[160px]">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                   <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
                </div>
                <div>
                   <h3 className="text-lg font-medium text-amber-900 leading-tight mb-2 group-hover:opacity-80 transition-opacity">{f.diseaseName}</h3>
                   <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Voir la fiche</span>
                </div>
             </Link>
          ))}
        </div>
      )}
    </div>
  );
}
