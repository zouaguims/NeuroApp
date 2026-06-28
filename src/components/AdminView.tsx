import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { doc, setDoc, query, collection, orderBy, getDocs, updateDoc, getDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/dbError';
import { fichesData } from '../data/fiches';
import { PremiumPayment } from '../types';
import { CheckCircle, XCircle, AlertCircle, Loader2 } from 'lucide-react';

export function AdminView() {
  const [loading, setLoading] = useState(false);
  const [payments, setPayments] = useState<PremiumPayment[]>([]);

  // Configurable payment settings
  const [ccp, setCcp] = useState('123456789');
  const [rip, setRip] = useState('00799999000012345678');
  const [savingSettings, setSavingSettings] = useState(false);
  const [settingsSuccess, setSettingsSuccess] = useState<string | null>(null);
  const [settingsError, setSettingsError] = useState<string | null>(null);

  useEffect(() => {
    fetchPayments();
    fetchPaymentSettings();
  }, []);

  const fetchPaymentSettings = async () => {
    try {
      const snap = await getDoc(doc(db, 'settings', 'payment'));
      if (snap.exists()) {
        const data = snap.data();
        if (data.ccp) setCcp(data.ccp);
        if (data.rip) setRip(data.rip);
      }
    } catch (e) {
      console.error("Erreur chargement paramètres paiement :", e);
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingSettings(true);
    setSettingsSuccess(null);
    setSettingsError(null);
    try {
      await setDoc(doc(db, 'settings', 'payment'), {
        ccp,
        rip,
        updatedAt: new Date()
      }, { merge: true });
      setSettingsSuccess("Coordonnées de paiement enregistrées avec succès !");
      setTimeout(() => setSettingsSuccess(null), 4000);
    } catch (err: any) {
      console.error("Erreur sauvegarde paramètres paiement :", err);
      setSettingsError("Erreur lors de la sauvegarde : " + err.message);
    } finally {
      setSavingSettings(false);
    }
  };

  const fetchPayments = async () => {
    try {
      const q = query(collection(db, 'payments'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      setPayments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as PremiumPayment)));
    } catch (e) {
      console.error(e);
    }
  };

  const seedAllFiches = async () => {
    setLoading(true);
    try {
      // First seed the original GBS fiche
      const gbsFiche = {
         categoryId: 'peripheriques',
         name: "Syndrome de Guillain-Barré (SGB)",
         definition: {
            concise: "Polyradiculonévrite aiguë post-infectieuse, caractérisée par une paralysie flasque aréflexive ascendante.",
            importance: "Urgence neurologique nécessitant une surveillance respiratoire stricte en réanimation."
         },
         epidemiology: {
            prevalence: "1 à 2 pour 100 000 habitants",
            sexe: "Légère prédominance masculine (1.5/1)",
            age: "Pic entre 50 et 70 ans",
            facteurs: "Infection préalable (1 à 4 semaines avant) souvent respiratoire ou digestive."
         },
         physiopathology: {
            mechanism: "Maladie auto-immune post-infectieuse (mimétisme moléculaire). Les anticorps dirigés contre l'agent infectieux attaquent par erreur la myéline périphérique ou l'axone."
         },
         etiologies: [
            { cause: "Campylobacter jejuni", frequency: "Très fréquente (30%)", importance: "Souvent associé aux formes axonales (AMAN)" },
            { cause: "CMV, EBV", frequency: "Fréquente", importance: "Adolescents et jeunes adultes" },
            { cause: "Mycoplasma pneumoniae", frequency: "Assez Fréquente", importance: "Infections respiratoires" }
         ],
         clinical: {
            functional: ["Paresthésies des extrémités (acroparesthésies)", "Douleurs radiculaires ou myalgies", "Faiblesse musculaire ascendante"],
            physical: ["Déficit moteur bilatéral, symétrique, ascendant", "Abolition des réflexes ostéotendineux (aréflexie)", "Atteinte des nerfs crâniens (VII bilatéral)"],
            biological: ["Dysautonomie (tachycardie, sueurs)"],
            gravity: ["Troubles de la déglutition", "Atteinte respiratoire", "Dysautonomie sévère"]
         },
         diagnosis: {
            biological: ["Ponction Lombaire (Dissociation albumino-cytologique : protéinorachie > 0.4 g/L avec cellules normales)"],
            hormonal: [],
            imaging: ["Pas d'imagerie spécifique", "IRM (rehaussement des racines nerveuses)"],
            criteria: ["Critères de Brighton", "EMG: Démyélinisation (VCN ralenties, allongement des latences distales) ou Atteinte axonale"]
         },
         differentialDiagnosis: {
             "Poliomyélite": "Asymétrique, hypercytose au LCR",
             "Myasténies": "Pas de troubles sensitifs, ROT conservés",
             "Compression médullaire": "Niveau sensitif, syndrome sous-lésionnel",
             "Porphyrie aiguë": "Douleurs abdominales, épisodes psychiatriques"
         },
         complications: {
             acute: ["Détresse respiratoire (intubation)", "Bloc auriculo-ventriculaire", "Thromboses veineuses profondes"],
             chronic: ["Séquelles motrices (10-15%)", "Fatigabilité résiduelle"]
         },
         treatment: {
             firstLine: ["Immunoglobulines intraveineuses (IgIV) : 0.4 g/kg/j pendant 5 jours", "Ou Échanges plasmatiques (4 à 6 séances)"],
             secondLine: [],
             specific: ["Prévention thromboembolique (HBPM)", "Ventilation mécanique si Capacité Vitale < 15 mL/kg"],
             surveillance: ["Monitorage cardio-respiratoire", "Score de Hughes"]
         },
         keyPoints: {
             toRemember: ["SGB = Paresthésies + Déficit Ascendant symétrique + Aréflexie", "Urgence : Surveillance de la déglutition et capacité vitale !", "Dissociation albumino-cytologique souvent retardée (S2)"],
             traps: ["Les corticoïdes sont INUTILES et proscrits", "Un LCR normal à J3 n'élimine pas le diagnostic"],
             faq: [],
             keywords: ["Campylobacter jejuni", "Dissociation Albumino-Cytologique", "IgIV", "Capacité Vitale"]
         }
      };
      await setDoc(doc(db, 'diseases', 'guillain-barre'), gbsFiche);

      // Clear all existing bases category to avoid orphan/empty docs
      const { deleteDoc, query: q, collection: c, where, getDocs: gd } = await import('firebase/firestore');
      const basesQuery = q(c(db, 'diseases'), where('categoryId', '==', 'bases'));
      const basesSnap = await gd(basesQuery);
      
      const deletePromises = basesSnap.docs.map(d => deleteDoc(d.ref));
      await Promise.all(deletePromises);

      // Then seed the new array of diseases
      for (const fiche of fichesData) {
        const { id, ...data } = fiche;
        if (id) {
          await setDoc(doc(db, 'diseases', id), data);
        }
      }
      
      alert('Toutes les fiches (SGB + Nouveautés) ont été injectées avec succès !');

    } catch (e) {
      handleFirestoreError(e, OperationType.CREATE, 'diseases');
    }
    setLoading(false);
  }

  const handleApprove = async (paymentId: string, userId: string) => {
    try {
      await updateDoc(doc(db, 'payments', paymentId), {
        status: 'approved'
      });
      
      const oneYearFromNow = Date.now() + 365 * 24 * 60 * 60 * 1000;
      await updateDoc(doc(db, 'users', userId), {
        plan: 'premium',
        paymentStatus: 'active',
        subscriptionEnd: oneYearFromNow
      });
      fetchPayments();
    } catch (error) {
       console.error(error);
       alert("Erreur lors de l'approbation");
    }
  }

  return (
    <div className="space-y-6">
       <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Administration</h1>
       
       <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold mb-4">Initialisation des données expertes</h2>
          <button onClick={seedAllFiches} disabled={loading} className="px-5 py-2.5 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 disabled:opacity-50 transition-colors">
             {loading ? "Injection en cours..." : "Injecter toutes les fiches de référence"}
          </button>
       </div>

       <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Configuration du Compte de Paiement (<span className="notranslate" translate="no">CCP</span> et <span className="notranslate" translate="no">RIP</span>)</h2>
          <p className="text-slate-600 text-sm mb-6">
            Saisissez vos coordonnées de compte d'administration. Elles seront affichées en temps réel aux utilisateurs sur la page d'abonnement premium pour BaridiMob et <span className="notranslate" translate="no">CCP</span>.
          </p>
          <form onSubmit={handleSaveSettings} className="space-y-4 max-w-xl">
            {settingsSuccess && (
               <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-600" />
                  <p className="font-medium text-sm">{settingsSuccess}</p>
               </div>
            )}
            {settingsError && (
               <div className="p-4 bg-red-50 text-red-800 border border-red-200 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
                  <p className="font-medium text-sm">{settingsError}</p>
               </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Numéro <span className="notranslate" translate="no">CCP</span></label>
                <input 
                  type="text" 
                  value={ccp}
                  onChange={(e) => setCcp(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow"
                  placeholder="Ex: 12345678"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Clé / <span className="notranslate" translate="no">RIP</span></label>
                <input 
                  type="text" 
                  value={rip}
                  onChange={(e) => setRip(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow font-mono"
                  placeholder="Ex: 00799999000012345678"
                  required
                />
              </div>
            </div>
            <div>
              <button 
                type="submit" 
                disabled={savingSettings}
                className="px-5 py-2.5 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 disabled:opacity-50 transition-colors flex items-center gap-2"
              >
                {savingSettings && <Loader2 className="w-4 h-4 animate-spin" />}
                {savingSettings ? "Enregistrement en cours..." : "Enregistrer les coordonnées"}
              </button>
            </div>
          </form>
       </div>

       <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold mb-6">Gestion des Abonnements Premium</h2>
          <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
                <thead>
                   <tr className="border-b border-slate-200 text-sm text-slate-500">
                      <th className="pb-3 px-4 font-medium min-w-[200px]">Utilisateur</th>
                      <th className="pb-3 px-4 font-medium">Référence</th>
                      <th className="pb-3 px-4 font-medium">Date du paiment</th>
                      <th className="pb-3 px-4 font-medium w-48">Justificatif</th>
                      <th className="pb-3 px-4 font-medium text-right w-40">Actions</th>
                   </tr>
                </thead>
                <tbody className="text-sm">
                   {payments.map(payment => (
                     <tr key={payment.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-4 font-medium text-slate-900">
                          <div>{payment.userName}</div>
                          <div className="text-xs text-slate-500">{payment.userEmail}</div>
                        </td>
                        <td className="py-4 px-4 font-mono text-slate-700">{payment.transactionNumber}</td>
                        <td className="py-4 px-4 text-slate-700">{payment.paymentDate}</td>
                        <td className="py-4 px-4">
                           <a href={payment.screenshotUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 font-medium">
                              Voir la capture
                           </a>
                        </td>
                        <td className="py-4 px-4 text-right">
                           {payment.status === 'pending' ? (
                              <button 
                                onClick={() => handleApprove(payment.id, payment.userId)}
                                className="flex items-center justify-end gap-1 px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-lg hover:bg-emerald-200 transition-colors font-medium ml-auto"
                              >
                                <CheckCircle className="w-4 h-4" /> Approuver
                              </button>
                           ) : (
                              <span className="inline-flex items-center gap-1 text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg font-medium">
                                 {payment.status === 'approved' ? 'Validé' : 'Rejeté'}
                              </span>
                           )}
                        </td>
                     </tr>
                   ))}
                   {payments.length === 0 && (
                      <tr>
                         <td colSpan={5} className="py-8 text-center text-slate-500">Aucun paiement trouvé.</td>
                      </tr>
                   )}
                </tbody>
             </table>
          </div>
       </div>
    </div>
  )
}
