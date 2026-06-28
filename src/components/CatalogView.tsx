import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { collection, query, getDocs } from 'firebase/firestore';
import { Disease } from '../types';
import { Link } from 'react-router';
import { FileText, BookOpen } from 'lucide-react';
import { handleFirestoreError, OperationType } from '../lib/dbError';

import { CATEGORY_STYLES, DEFAULT_CATEGORY_STYLE } from '../lib/categoryStyles';

export function CatalogView() {
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        const q = query(collection(db, 'diseases'));
        const snapshot = await getDocs(q);
        setDiseases(snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Disease)));
      } catch (e) {
        handleFirestoreError(e, OperationType.GET, 'diseases');
      }
      setLoading(false);
    };
    fetchDiseases();
  }, []);

  if (loading) return <div className="text-slate-500 font-medium">Chargement du catalogue...</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-medium tracking-tight flex items-center">
           <BookOpen className="w-7 h-7 text-blue-600 mr-3" />
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Toutes les Fiches</span>
        </h1>
        <p className="mt-2 text-slate-500 text-lg">
           Parcourez l'ensemble de la bibliothèque de fiches médicales neurologiques.
        </p>
      </div>

      {diseases.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 border-dashed">
           <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
           <p className="text-slate-500 font-medium">Le catalogue est vide pour le moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {diseases.map(d => {
            const style = CATEGORY_STYLES[d.categoryId] || DEFAULT_CATEGORY_STYLE;
            const Icon = style.icon;
            return (
             <Link key={d.id} to={`/disease/${d.id}`} className={`group block p-6 ${style.bg} rounded-3xl shadow-sm border border-transparent hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col justify-between min-h-[160px]`}>
                <div className={`w-12 h-12 rounded-2xl ${style.iconBg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                   <Icon className={`w-6 h-6 ${style.iconColor}`} />
                </div>
                <div>
                   <h3 className={`text-lg font-medium ${style.textColor} leading-tight mb-2 group-hover:opacity-80 transition-opacity`}>{d.name}</h3>
                   <span className={`text-xs font-bold ${style.iconColor} uppercase tracking-wider`}>Fiche Experte</span>
                </div>
             </Link>
            )
          })}
        </div>
      )}
    </div>
  );
}
