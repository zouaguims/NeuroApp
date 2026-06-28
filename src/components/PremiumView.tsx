import { useState, useEffect } from 'react';
import { useAuth } from '../lib/AuthContext';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp, updateDoc, doc, getDoc } from 'firebase/firestore';
import { Upload, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function PremiumView() {
  const { user, profile } = useAuth();
  const [transactionNumber, setTransactionNumber] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [ccp, setCcp] = useState("123456789");
  const [rip, setRip] = useState("00799999000012345678");

  useEffect(() => {
    if (!user) return;
    const fetchSettings = async () => {
      try {
        const snap = await getDoc(doc(db, 'settings', 'payment'));
        if (snap.exists()) {
          const data = snap.data();
          if (data.ccp) setCcp(data.ccp);
          if (data.rip) setRip(data.rip);
        }
      } catch (err) {
        console.error("Erreur de chargement des paramètres de paiement :", err);
      }
    };
    fetchSettings();
  }, [user]);
  
  // Need to handle user absence although it's protected route
  if (!user || !profile) return null;

  const currentStatus = profile.paymentStatus;
  const isPremium = profile.plan === 'premium';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !transactionNumber || !paymentDate) {
      setError("Veuillez remplir tous les champs et ajouter une capture d'écran.");
      return;
    }

    setUploading(true);
    setError(null);

    const compressImage = (f: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(f);
        reader.onload = (event) => {
          const img = new Image();
          img.src = event.target?.result as string;
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const MAX_WIDTH = 400;
            const MAX_HEIGHT = 400;
            let width = img.width;
            let height = img.height;

            if (width > height) {
              if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
              }
            } else {
              if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
              }
            }
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(img, 0, 0, width, height);
            resolve(canvas.toDataURL('image/jpeg', 0.5));
          };
          img.onerror = (err) => reject(err);
        };
        reader.onerror = (err) => reject(err);
      });
    };

    let base64Image = "";
    try {
      base64Image = await compressImage(file);
    } catch(e) {
      setError("Erreur lors de la compression de l'image.");
      setUploading(false);
      return;
    }

    const handleFirestoreError = (error: any, operationType: string, path: string) => {
      const errInfo = {
        error: error instanceof Error ? error.message : String(error),
        authInfo: {
          userId: user.uid,
          email: user.email,
          emailVerified: user.emailVerified,
          isAnonymous: user.isAnonymous,
          providerInfo: user.providerData?.map(provider => ({
            providerId: provider.providerId,
            email: provider.email,
          })) || []
        },
        operationType,
        path
      };
      console.error('Firestore Error: ', JSON.stringify(errInfo));
    };

    try {
      await addDoc(collection(db, 'payments'), {
        userId: user.uid,
        userEmail: profile.email,
        userName: profile.displayName,
        transactionNumber,
        paymentDate,
        screenshotUrl: base64Image,
        amount: 700,
        status: 'pending',
        createdAt: serverTimestamp()
      });
    } catch(err: any) {
      handleFirestoreError(err, 'create', 'payments');
      setError("Erreur création paiement: " + err.message);
      setUploading(false);
      return;
    }

    try {
      await updateDoc(doc(db, 'users', user.uid), {
        paymentStatus: 'pending'
      });
      setSuccess(true);
      setUploading(false);
    } catch (err: any) {
      handleFirestoreError(err, 'update', `users/${user.uid}`);
      setError("Erreur mise à jour utilisateur: " + err.message);
      setUploading(false);
      return;
    }
  };

  if (isPremium) {
     return (
       <div className="max-w-3xl mx-auto p-4 sm:p-8 bg-white rounded-3xl shadow-sm border border-slate-200 text-center">
         <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
         <h1 className="text-3xl font-bold text-slate-900 mb-2">Abonnement Premium Actif</h1>
         <p className="text-slate-600 font-medium">Vous avez un accès complet à toutes les fiches. Votre abonnement expire le : {profile.subscriptionEnd ? new Date(profile.subscriptionEnd).toLocaleDateString() : 'N/A'}</p>
       </div>
     );
  }

  if (success || currentStatus === 'pending') {
     return (
       <div className="max-w-3xl mx-auto p-4 sm:p-8 bg-white rounded-3xl shadow-sm border border-slate-200 text-center">
         <Loader2 className="w-16 h-16 text-blue-500 mx-auto mb-4 animate-spin" />
         <h1 className="text-3xl font-bold text-slate-900 mb-2">Paiement en cours de validation</h1>
         <p className="text-slate-600 font-medium max-w-lg mx-auto">Votre demande de paiement a bien été reçue. Un administrateur procédera à la vérification sous peu. Vous recevrez l'accès Premium une fois validé.</p>
       </div>
     );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Abonnement Neurologie Premium</h1>
        <p className="text-slate-300 mb-6">Accédez à toutes les fiches complètes et téléchargez les PDFs.</p>
        <div className="text-4xl font-bold text-emerald-400">700 DA <span className="text-lg text-slate-400 font-medium">/ an</span></div>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Paiement par CCP ou BaridiMob</h2>
        
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8 font-mono text-sm sm:text-base space-y-3">
           <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <span className="text-slate-500 font-sans notranslate" translate="no">CCP :</span>
              <span className="font-bold text-slate-900 notranslate" translate="no">{ccp}</span>
           </div>
           <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <span className="text-slate-500 font-sans notranslate" translate="no">RIP :</span>
              <span className="font-bold text-slate-900 notranslate" translate="no">{rip}</span>
           </div>
           <div className="flex justify-between items-center text-blue-700 bg-blue-50 -mx-6 px-6 -mb-6 py-4 rounded-b-2xl">
              <span className="font-sans font-medium">Référence personnelle :</span>
              <span className="font-bold">NEURO-{user.uid.substring(0, 8).toUpperCase()}</span>
           </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
           {error && (
              <div className="p-4 bg-red-50 text-red-700 rounded-xl flex items-start gap-3">
                 <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                 <p className="font-medium text-sm">{error}</p>
              </div>
           )}

           <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Numéro de transaction / Référence</label>
              <input 
                type="text" 
                value={transactionNumber}
                onChange={(e) => setTransactionNumber(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow"
                placeholder="Ex: 57489392"
                required
              />
           </div>

           <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Date du paiement</label>
              <input 
                type="date" 
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow"
                required
              />
           </div>

           <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Capture d'écran du reçu</label>
              <div className="relative border-2 border-dashed border-slate-300 rounded-xl p-8 hover:bg-slate-50 transition-colors cursor-pointer flex flex-col items-center justify-center text-center">
                 <input 
                   type="file" 
                   accept="image/*"
                   onChange={(e) => setFile(e.target.files?.[0] || null)}
                   className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                   required
                 />
                 <Upload className="w-8 h-8 text-slate-400 mb-3" />
                 {file ? (
                    <span className="font-medium text-slate-900 truncate max-w-full px-4">{file.name}</span>
                 ) : (
                    <span className="font-medium text-slate-500">Cliquez ou glissez une image ici</span>
                 )}
              </div>
           </div>

           <button 
             type="submit" 
             disabled={uploading}
             className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-75 disabled:cursor-not-allowed"
           >
             {uploading && <Loader2 className="w-5 h-5 animate-spin" />}
             {uploading ? 'Envoi en cours...' : 'Envoyer pour validation'}
           </button>
        </form>
      </div>
    </div>
  );
}
