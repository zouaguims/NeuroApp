import { useEffect, useState } from 'react';
import { useAuth } from '../lib/AuthContext';
import { db } from '../lib/firebase';
import { collection, getDocs, query, orderBy, setDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import { Category } from '../types';
import { Link } from 'react-router';
import { ChevronRight, Stethoscope, Brain, Activity, Droplet, Heart, Wind, Dna, Bone, AlertTriangle, ShieldAlert, Sparkles, FileText, LucideIcon, ClipboardList, Thermometer } from 'lucide-react';
import { handleFirestoreError, OperationType } from '../lib/dbError';
import { CATEGORY_STYLES, DEFAULT_CATEGORY_STYLE } from '../lib/categoryStyles';

const SEED_CATEGORIES = [
  { id: 'bases', name: 'Bases de Neurologie', order: 1 },
  { id: 'syndromes-compressifs', name: 'SYNDROMES COMPRESSIFS', order: 2 },
  { id: 'troubles-conscience', name: 'TROUBLES DE LA CONSCIENCE', order: 3 },
  { id: 'avc', name: 'ACCIDENTS VASCULAIRES CEREBRAUX', order: 4 },
  { id: 'inflammatoires', name: 'MALADIES INFLAMMATOIRES CEREBRALES', order: 5 },
  { id: 'degeneratives', name: 'MALADIES DEGENERATIVES', order: 6 },
  { id: 'peripheriques', name: 'MALADIES PERIPHERIQUES', order: 7 },
  { id: 'congenitales', name: 'MALADIES CONGENITALES', order: 8 },
  { id: 'traumatismes', name: 'TRAUMATISMES CRANIO - RACHIDIENS', order: 9 },
  { id: 'autres', name: 'AUTRES MALADIES', order: 10 },
  { id: 'cat', name: 'CONDUITES A TENIR', order: 11 },
];

export function Home() {
  const { role } = useAuth();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const [errorInfo, setErrorInfo] = useState<string | null>(null);

  useEffect(() => {
    loadCategories();
  }, [role]);

  const loadCategories = async () => {
    try {
      const q = query(collection(db, 'categories'), orderBy('order', 'asc'));
      const snapshot = await getDocs(q);
      setErrorInfo(null);
      if (snapshot.empty) {
        if (role === 'admin') {
           await seedInitialCategories();
        } else {
           setCategories([]);
           setLoading(false);
        }
      } else {
        setCategories(snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Category)));
        
        // Auto-migrate uppercase names to Title Case for better aesthetics
        // and ensure the new 'cat' category exists
        const hasCat = snapshot.docs.some(d => d.id === 'cat');
        if (!hasCat && role === 'admin') {
           const catConfig = SEED_CATEGORIES.find(c => c.id === 'cat');
           if (catConfig) {
              await setDoc(doc(db, 'categories', 'cat'), {
                 name: 'Conduites à Tenir',
                 order: 2
              });
              setCategories(prev => {
                const newCat = [...prev, { id: 'cat', name: 'Conduites à Tenir', order: 2 }];
                return newCat.sort((a, b) => (a.order || 0) - (b.order || 0));
              });
           }
        }

        snapshot.docs.forEach(async (d) => {
          const data = d.data();
          if (data.id === 'bases' && data.name === 'BASES DE NEUROLOGIE') {
             await updateDoc(doc(db, 'categories', d.id), { name: 'Bases de Neurologie' });
          } else if (data.id === 'cat' && data.name === 'CONDUITES A TENIR') {
             await updateDoc(doc(db, 'categories', d.id), { name: 'Conduites à Tenir' });
          } else if (data.name === data.name.toUpperCase()) {
             const titleCased = data.name.split(' ').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
             await updateDoc(doc(db, 'categories', d.id), { name: titleCased });
          }
        });
        
        // Synchronize all templates into Firestore
           try {
               const { basesData } = await import('../data/bases');
               for (const item of basesData) {
                  const docRef = doc(db, 'diseases', item.id);
                  const docSnap = await getDoc(docRef);
                  if (docSnap.exists() && docSnap.data().content !== item.content) {
                      await setDoc(docRef, item, { merge: true });
                      console.log(`Fiche bases ${item.id} synchronisée !`);
                  }
               }
           } catch(e) {
               console.error("Erreur sync bases", e);
           }

        setLoading(false);
      }
    } catch (e: any) {
      console.error(e);
      if (e.code === 'permission-denied' || e.message?.includes('Missing or insufficient permissions')) {
         setErrorInfo("Impossible de charger les catégories : accès refusé. Veuillez configurer les règles Firestore dans votre console Firebase.");
      } else {
         setErrorInfo("Une erreur est survenue lors du chargement des catégories.");
      }
      setLoading(false);
    }
  };

  const seedInitialCategories = async () => {
    console.log('Seeding categories...');
    try {
       for (const cat of SEED_CATEGORIES) {
          await setDoc(doc(db, 'categories', cat.id), {
             name: cat.name,
             order: cat.order
          });
       }
       loadCategories();
    } catch(err) {
       handleFirestoreError(err, OperationType.CREATE, 'categories');
    }
  };

  if (loading) {
     return <div className="animate-pulse flex space-x-4"><div className="flex-1 space-y-6 py-1"><div className="h-2 bg-slate-200 rounded"></div></div></div>;
  }

  return (
    <div className="space-y-8">
      <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-md border border-blue-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500 rounded-full opacity-50"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4 text-white">Fiches Médicales Neurologiques</h1>
          <p className="text-blue-100 text-lg sm:text-xl font-medium mb-2">
            La bibliothèque de référence pour les internes. Accédez instantanément à vos fiches, catégories et notes essentielles.
          </p>
        </div>
      </div>

      {errorInfo && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-start">
           <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
           <p className="text-red-700">{errorInfo}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((c) => {
          const style = CATEGORY_STYLES[c.id] || DEFAULT_CATEGORY_STYLE;
          const Icon = style.icon;
          return (
          <Link
            key={c.id}
            to={`/category/${c.id}`}
            className={`group block p-6 ${style.bg} rounded-3xl shadow-sm border border-transparent hover:shadow-md hover:border-blue-200 transition-all duration-200 relative overflow-hidden flex flex-col justify-between`}
          >
            <div className={`w-12 h-12 rounded-2xl ${style.iconBg} flex items-center justify-center mb-6`}>
              <Icon className={`w-6 h-6 ${style.iconColor}`} />
            </div>
            <div>
              <h3 className={`text-lg font-medium ${style.textColor} leading-tight group-hover:opacity-80 transition-opacity`}>
                {c.name}
              </h3>
            </div>
          </Link>
        )})}
      </div>
    </div>
  );
}
