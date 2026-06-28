import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import { db } from '../lib/firebase';
import { doc, getDoc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../lib/AuthContext';
import { Disease, Favorite } from '../types';
import { FicheViewer } from './FicheViewer';
import { CatViewer } from './CatViewer';
import { BasesViewer } from './BasesViewer';
import { ChevronLeft, Star, Download, Loader2, Crown } from 'lucide-react';
import { cn } from '../lib/utils';
import { handleFirestoreError, OperationType } from '../lib/dbError';
import { jsPDF } from 'jspdf';
import domtoimage from 'dom-to-image-more';

export function FicheView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const [disease, setDisease] = useState<Disease | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!id || !user) return;
    const fetchFiche = async () => {
      try {
        const ficheDoc = await getDoc(doc(db, 'diseases', id));
        if (ficheDoc.exists()) {
           setDisease({ id: ficheDoc.id, ...ficheDoc.data() } as Disease);
        }

        const favDoc = await getDoc(doc(db, 'users', user.uid, 'favorites', id));
        setIsFavorite(favDoc.exists());

      } catch (e) {
        handleFirestoreError(e, OperationType.GET, `diseases/${id}`);
      }
      setLoading(false);
    };
    fetchFiche();
  }, [id, user]);

  const toggleFavorite = async () => {
    if (!id || !user || !disease) return;
    try {
       const favRef = doc(db, 'users', user.uid, 'favorites', id);
       if (isFavorite) {
          await deleteDoc(favRef);
          setIsFavorite(false);
       } else {
          await setDoc(favRef, {
             diseaseId: id,
             diseaseName: disease.name,
             createdAt: serverTimestamp()
          });
          setIsFavorite(true);
       }
    } catch(e) {
       console.error("Impossible de modifier les favoris", e);
    }
  }

  const exportPDF = async () => {
     if (!printRef.current || !disease) return;
     setIsExporting(true);
     try {
       const imgData = await domtoimage.toPng(printRef.current, {
         scale: 2,
         bgcolor: '#ffffff',
         width: printRef.current.scrollWidth,
         height: printRef.current.scrollHeight,
         style: {
           transform: 'scale(1)',
           transformOrigin: 'top left'
         }
       });
       const pdf = new jsPDF({
         orientation: 'portrait',
         unit: 'mm',
         format: 'a4'
       });
       
       const imgProps = pdf.getImageProperties(imgData);
       const pdfWidth = pdf.internal.pageSize.getWidth();
       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
       
       let heightLeft = pdfHeight;
       let position = 0;
       const pageHeight = pdf.internal.pageSize.getHeight();

       pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
       heightLeft -= pageHeight;

       while (heightLeft >= 0) {
         position = heightLeft - pdfHeight;
         pdf.addPage();
         pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
         heightLeft -= pageHeight;
       }

       pdf.save(`fiche-${disease.name.toLowerCase().replace(/\\s+/g, '-')}.pdf`);
     } catch (err) {
       console.error("Erreur lors de l'export PDF:", err);
     } finally {
       setIsExporting(false);
     }
  }

  if (loading) return <div className="text-slate-500 font-medium text-center py-20">Chargement de la fiche...</div>;

  if (!disease) return (
     <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-800">Fiche introuvable</h2>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-600 font-medium">Retour</button>
     </div>
  );

  const isPremium = profile?.plan === 'premium' || profile?.role === 'admin';

  return (
    <div className="space-y-4">
      <div className="print:hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
         <button onClick={() => navigate(-1)} className="text-slate-600 hover:text-blue-600 flex items-center font-medium transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" /> Retour
         </button>
         
         <div className="flex items-center gap-3 w-full sm:w-auto">
            <button 
              onClick={toggleFavorite}
              className={cn("flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border font-medium transition-all", 
                 isFavorite 
                   ? "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100" 
                   : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              )}
            >
               <Star className={cn("w-5 h-5", isFavorite ? "fill-amber-500 text-amber-500" : "text-slate-400")} />
               {isFavorite ? 'Enregistré' : 'Favoris'}
            </button>
            <button 
              onClick={exportPDF}
              disabled={isExporting || !isPremium}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-900 text-white font-medium hover:bg-slate-800 transition-all disabled:opacity-75"
            >
               {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />} 
               {isExporting ? 'Export en cours...' : 'Export PDF'}
            </button>
         </div>
      </div>
      
      <div className="relative bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        {!isPremium && (
          <div className="p-4 sm:p-8 pb-0 border-b border-slate-100 flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">{disease.name}</h1>
            <div className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1">
              <Crown className="w-3 h-3" /> Premium
            </div>
          </div>
        )}
        <div 
          ref={printRef} 
          className={cn(
             "print-safe-area print:p-0 print:border-none print:shadow-none p-4 sm:p-8",
             !isPremium && "blur-md select-none pointer-events-none opacity-40 max-h-[60vh] overflow-hidden"
          )}
        >
           {disease.categoryId === 'bases' ? (
             <BasesViewer disease={disease} />
           ) : disease.categoryId === 'cat' ? (
             <CatViewer disease={disease} />
           ) : (
             <FicheViewer disease={disease} />
           )}
        </div>

        {!isPremium && (
           <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-gradient-to-t from-white via-white/80 to-transparent">
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 text-center max-w-sm mt-32">
                 <div className="w-16 h-16 bg-amber-100 flex items-center justify-center rounded-2xl mx-auto mb-6">
                    <Crown className="w-8 h-8 text-amber-600" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-800 mb-2">Contenu Premium</h3>
                 <p className="text-slate-500 mb-8 font-medium">Contenu réservé aux abonnés Premium. Accédez à toutes les fiches neurologiques et fiches résidanat sans limite.</p>
                 <button 
                   onClick={() => navigate('/premium')}
                   className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg shadow-amber-500/30"
                 >
                    Devenir Premium — 700 DA
                 </button>
              </div>
           </div>
        )}
      </div>
    </div>
  );
}
