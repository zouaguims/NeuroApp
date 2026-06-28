import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { Disease, Category } from '../types';
import { ChevronLeft, Activity } from 'lucide-react';
import { handleFirestoreError, OperationType } from '../lib/dbError';
import { CATEGORY_STYLES, DEFAULT_CATEGORY_STYLE } from '../lib/categoryStyles';

export function CategoryView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState<Category | null>(null);
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [loading, setLoading] = useState(true);

  const [errorInfo, setErrorInfo] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchCategoryAndDiseases = async () => {
      try {
        setErrorInfo(null);
        const catDoc = await getDoc(doc(db, 'categories', id));
        if (catDoc.exists()) {
           setCategory({ id: catDoc.id, ...catDoc.data() } as Category);
        }

        const q = query(collection(db, 'diseases'), where('categoryId', '==', id));
        const snapshot = await getDocs(q);
        setDiseases(snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Disease)));
      } catch (e: any) {
         console.error(e);
         if (e.code === 'permission-denied' || e.message?.includes('Missing or insufficient permissions')) {
            setErrorInfo("Impossible de charger le contenu : accès refusé. Veuillez vérifier les règles de sécurité Firestore de votre base de données Firebase.");
         } else {
            setErrorInfo("Une erreur est survenue lors du chargement de la catégorie.");
         }
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryAndDiseases();
  }, [id]);

  if (loading) return <div className="text-slate-500 font-medium">Chargement des fiches...</div>;

  return (
    <div className="space-y-6">
      <button onClick={() => navigate(-1)} className="text-slate-500 hover:text-blue-600 flex items-center text-sm font-medium transition-colors">
         <ChevronLeft className="w-4 h-4 mr-1" /> Retour
      </button>

      <div>
        {category ? (
           <h1 className="text-2xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">{category.name}</h1>
        ) : (
           <h1 className="text-2xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 capitalize">{id}</h1>
        )}
        <p className="mt-2 text-slate-500 text-lg">
           {diseases.length} fiche{diseases.length !== 1 ? 's' : ''} disponible{diseases.length !== 1 ? 's' : ''}.
        </p>
      </div>

      {errorInfo ? (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-start">
           <p className="text-red-700">{errorInfo}</p>
        </div>
      ) : diseases.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 border-dashed">
           <Activity className="w-12 h-12 text-slate-300 mx-auto mb-4" />
           <p className="text-slate-500 font-medium">Aucune fiche classée dans cette catégorie pour le moment.</p>
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
          )})}
        </div>
      )}
    </div>
  );
}
