import { Disease } from '../types';
import { FileText, Users, Activity, ListOrdered, Stethoscope, Microscope, BrainCircuit, AlertTriangle, Syringe, Key, Star } from 'lucide-react';
import { cn } from '../lib/utils';
import ReactMarkdown from 'react-markdown';

type Props = {
  disease: Disease;
}

export function FicheViewer({ disease }: Props) {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div className="mb-8">
         <h1 className="text-2xl sm:text-3xl font-medium tracking-tight leading-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
           {disease.name}
         </h1>
         <div className="flex items-center text-sm font-medium text-slate-500">
           <span className="bg-slate-200 px-2.5 py-1 rounded-full text-slate-700">Fiche Standardisée</span>
         </div>
      </div>

      {/* Définition (Bleu) */}
      <section className="bg-blue-600 rounded-2xl shadow-sm text-white overflow-hidden">
        <div className="px-6 py-4 bg-blue-700/50 border-b border-blue-500/50 flex items-center gap-3">
           <FileText className="w-5 h-5 text-blue-200" />
           <h2 className="text-lg font-bold">1. Définition</h2>
        </div>
        <div className="p-6 space-y-4">
           {disease.definition?.concise && <p className="text-lg font-medium leading-relaxed">{disease.definition.concise}</p>}
           {disease.definition?.importance && (
             <div className="bg-blue-800/40 p-4 rounded-xl border border-blue-500/30">
               <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider mb-1 block">Importance Clinique</span>
               <p className="text-blue-50">{disease.definition.importance}</p>
             </div>
           )}
        </div>
      </section>

      {/* Épidémiologie (Bleu clair) */}
      {disease.epidemiology && Object.keys(disease.epidemiology).length > 0 && (
        <section className="bg-sky-100 rounded-2xl border border-sky-200 overflow-hidden text-sky-900">
          <div className="px-6 py-4 bg-sky-200/50 border-b border-sky-300/50 flex items-center gap-3">
             <Users className="w-5 h-5 text-sky-700" />
             <h2 className="text-lg font-bold">2. Épidémiologie</h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
             {disease.epidemiology.prevalence && (
               <div className="bg-white p-4 rounded-xl shadow-sm border border-sky-100">
                 <span className="block text-sky-600 text-xs font-bold uppercase mb-1">Prévalence</span>
                 <p className="font-semibold">{disease.epidemiology.prevalence}</p>
               </div>
             )}
             {disease.epidemiology.sexe && (
               <div className="bg-white p-4 rounded-xl shadow-sm border border-sky-100">
                 <span className="block text-sky-600 text-xs font-bold uppercase mb-1">Sex Ratio</span>
                 <p className="font-semibold">{disease.epidemiology.sexe}</p>
               </div>
             )}
             {disease.epidemiology.age && (
               <div className="bg-white p-4 rounded-xl shadow-sm border border-sky-100">
                 <span className="block text-sky-600 text-xs font-bold uppercase mb-1">Âge de début</span>
                 <p className="font-semibold">{disease.epidemiology.age}</p>
               </div>
             )}
             {disease.epidemiology.facteurs && (
               <div className="bg-white p-4 rounded-xl shadow-sm border border-sky-100">
                 <span className="block text-sky-600 text-xs font-bold uppercase mb-1">Facteurs de risque</span>
                 <p className="font-semibold">{disease.epidemiology.facteurs}</p>
               </div>
             )}
          </div>
        </section>
      )}

      {/* Physiopathologie (Bleu foncé) */}
      {disease.physiopathology && Object.keys(disease.physiopathology).length > 0 && (
        <section className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden text-slate-100 shadow-md">
          <div className="px-6 py-4 bg-slate-900/50 border-b border-slate-700/50 flex items-center gap-3">
             <Activity className="w-5 h-5 text-indigo-400" />
             <h2 className="text-lg font-bold">3. Physiopathologie</h2>
          </div>
          <div className="p-6">
             {disease.physiopathology.mechanism && (
                <div className="prose prose-invert prose-blue max-w-none">
                  <ReactMarkdown>{disease.physiopathology.mechanism}</ReactMarkdown>
                </div>
             )}
          </div>
        </section>
      )}

      {/* Étiologies (Turquoise) */}
      {disease.etiologies && disease.etiologies.length > 0 && (
        <section className="bg-teal-50 rounded-2xl border border-teal-200 overflow-hidden text-teal-900">
          <div className="px-6 py-4 bg-teal-100 border-b border-teal-200 flex items-center gap-3">
             <ListOrdered className="w-5 h-5 text-teal-600" />
             <h2 className="text-lg font-bold">4. Étiologies</h2>
          </div>
          <div className="p-6 overflow-x-auto">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="border-b-2 border-teal-200/50">
                   <th className="pb-3 pt-2 px-4 font-bold text-teal-800">Cause principale</th>
                   <th className="pb-3 pt-2 px-4 font-bold text-teal-800 w-32">Fréquence</th>
                   <th className="pb-3 pt-2 px-4 font-bold text-teal-800 w-1/3">Notes cliniques</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-teal-100">
                 {disease.etiologies.map((et, i) => (
                   <tr key={i} className="hover:bg-teal-100/30 transition-colors">
                     <td className="py-4 px-4 font-medium">{et.cause}</td>
                     <td className="py-4 px-4 text-teal-700 font-semibold">{et.frequency}</td>
                     <td className="py-4 px-4 text-sm text-teal-800/80">{et.importance}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        </section>
      )}

      {/* Clinique (Vert) */}
      {disease.clinical && Object.keys(disease.clinical).length > 0 && (
        <section className="bg-green-600 rounded-2xl border border-green-700 overflow-hidden text-white shadow-md">
          <div className="px-6 py-4 bg-green-700/50 border-b border-green-500/50 flex items-center gap-3">
             <Stethoscope className="w-5 h-5 text-green-200" />
             <h2 className="text-lg font-bold text-white">5. Clinique</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white/10 p-5 rounded-xl border border-white/20">
               <h3 className="text-green-50 font-bold uppercase tracking-wider text-sm mb-3">Signes Fonctionnels</h3>
               <ul className="space-y-2">
                 {disease.clinical.functional?.map((item, i) => (
                   <li key={i} className="flex font-medium"><span className="mr-2 text-green-300">•</span> {item}</li>
                 ))}
               </ul>
             </div>
             <div className="bg-white/10 p-5 rounded-xl border border-white/20">
               <h3 className="text-green-50 font-bold uppercase tracking-wider text-sm mb-3">Signes Physiques</h3>
               <ul className="space-y-2">
                 {disease.clinical.physical?.map((item, i) => (
                   <li key={i} className="flex font-medium"><span className="mr-2 text-green-300">•</span> {item}</li>
                 ))}
               </ul>
             </div>
             {disease.clinical.biological && disease.clinical.biological.length > 0 && (
               <div className="bg-white/10 p-5 rounded-xl border border-white/20 shadow-sm md:col-span-2 text-white">
                 <h3 className="text-green-50 font-bold uppercase tracking-wider text-sm mb-3">Signes Biologiques</h3>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                   {disease.clinical.biological.map((item, i) => (
                     <li key={i} className="flex"><span className="mr-2 text-green-300">»</span> {item}</li>
                   ))}
                 </ul>
               </div>
             )}
          </div>
        </section>
      )}

      {/* Diagnostic (Orange) */}
      {disease.diagnosis && Object.keys(disease.diagnosis).length > 0 && (
        <section className="bg-orange-500 rounded-2xl border border-orange-600 overflow-hidden text-white shadow-md">
          <div className="px-6 py-4 bg-orange-600/50 border-b border-orange-400/50 flex items-center gap-3">
             <Microscope className="w-5 h-5 text-orange-200" />
             <h2 className="text-lg font-bold">6. Diagnostic</h2>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
             {disease.diagnosis.biological && disease.diagnosis.biological.length > 0 && (
                <div>
                  <h3 className="text-orange-100 font-bold uppercase tracking-wider text-sm mb-2 border-b border-orange-400 pb-1">Biologie</h3>
                  <ul className="space-y-1 mt-3">
                    {disease.diagnosis.biological.map((item, i) => (
                      <li key={i} className="flex"><span className="mr-2">⋄</span> {item}</li>
                    ))}
                  </ul>
                </div>
             )}
             {disease.diagnosis.imaging && disease.diagnosis.imaging.length > 0 && (
                <div>
                  <h3 className="text-orange-100 font-bold uppercase tracking-wider text-sm mb-2 border-b border-orange-400 pb-1">Imagerie</h3>
                  <ul className="space-y-1 mt-3">
                    {disease.diagnosis.imaging.map((item, i) => (
                      <li key={i} className="flex"><span className="mr-2">⋄</span> {item}</li>
                    ))}
                  </ul>
                </div>
             )}
             {disease.diagnosis.criteria && disease.diagnosis.criteria.length > 0 && (
                <div className="lg:col-span-2 bg-orange-900/30 p-5 rounded-xl border border-orange-400/30">
                  <h3 className="text-orange-50 font-bold uppercase tracking-wider text-sm mb-3">Critères Diagnostiques</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
                    {disease.diagnosis.criteria.map((item, i) => (
                      <li key={i} className="flex font-medium"><span className="mr-2 text-orange-300">✓</span> {item}</li>
                    ))}
                  </ul>
                </div>
             )}
          </div>
        </section>
      )}

      {/* Complications (Rouge) */}
      {disease.complications && Object.keys(disease.complications).length > 0 && (
        <section className="bg-red-600 rounded-2xl border border-red-700 overflow-hidden text-white shadow-md">
          <div className="px-6 py-4 bg-red-700/50 border-b border-red-500/50 flex items-center gap-3">
             <AlertTriangle className="w-5 h-5 text-red-200" />
             <h2 className="text-lg font-bold">7. Complications & Urgences</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white/10 p-5 rounded-xl border border-red-400/30">
               <h3 className="text-red-100 font-bold uppercase tracking-wider text-sm mb-3">Aiguës</h3>
               <ul className="space-y-2">
                 {disease.complications.acute?.map((item, i) => (
                   <li key={i} className="flex"><span className="mr-2 text-red-300">•</span> {item}</li>
                 ))}
               </ul>
             </div>
             <div className="bg-white/10 p-5 rounded-xl border border-red-400/30">
               <h3 className="text-red-100 font-bold uppercase tracking-wider text-sm mb-3">Chroniques</h3>
               <ul className="space-y-2">
                 {disease.complications.chronic?.map((item, i) => (
                   <li key={i} className="flex"><span className="mr-2 text-red-300">•</span> {item}</li>
                 ))}
               </ul>
             </div>
          </div>
        </section>
      )}

      {/* Traitement (Violet) */}
      {disease.treatment && Object.keys(disease.treatment).length > 0 && (
        <section className="bg-purple-600 rounded-2xl border border-purple-700 overflow-hidden text-white shadow-md">
          <div className="px-6 py-4 bg-purple-700/50 border-b border-purple-500/50 flex items-center gap-3">
             <Syringe className="w-5 h-5 text-purple-200" />
             <h2 className="text-lg font-bold">8. Traitement</h2>
          </div>
          <div className="p-6 space-y-6">
             {disease.treatment.firstLine && disease.treatment.firstLine.length > 0 && (
               <div>
                  <h3 className="text-purple-100 font-bold uppercase tracking-wider text-xs mb-2">Première Intention</h3>
                  <ul className="space-y-1">
                    {disease.treatment.firstLine.map((item, i) => (
                      <li key={i} className="flex font-medium"><span className="mr-2 text-purple-300">➜</span> {item}</li>
                    ))}
                  </ul>
               </div>
             )}
             {disease.treatment.surveillance && disease.treatment.surveillance.length > 0 && (
               <div className="bg-purple-900/30 p-4 rounded-xl border border-purple-500/30">
                  <h3 className="text-purple-100 font-bold uppercase tracking-wider text-xs mb-2">Surveillance</h3>
                  <ul className="space-y-1">
                    {disease.treatment.surveillance.map((item, i) => (
                      <li key={i} className="flex"><span className="mr-2 text-purple-300">👁</span> {item}</li>
                    ))}
                  </ul>
               </div>
             )}
          </div>
        </section>
      )}

      {/* Points Clés du Résidanat (Spécial / Jaune Doré) */}
      {disease.keyPoints && Object.keys(disease.keyPoints).length > 0 && (
        <section className="bg-amber-100 rounded-2xl border-2 border-amber-400 overflow-hidden text-amber-900">
          <div className="px-6 py-4 bg-amber-200/60 border-b border-amber-300 flex items-center gap-3">
             <Key className="w-6 h-6 text-amber-600" />
             <h2 className="text-xl font-black uppercase tracking-wide">Points Clés du Résidanat</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
               <h3 className="text-amber-700 font-bold uppercase tracking-wider text-sm mb-3 flex items-center"><Star className="w-4 h-4 mr-1"/> À retenir absolument</h3>
               <ul className="space-y-2">
                 {disease.keyPoints.toRemember?.map((item, i) => (
                   <li key={i} className="flex font-semibold"><span className="mr-2 text-amber-500">→</span> {item}</li>
                 ))}
               </ul>
             </div>
             <div>
               <h3 className="text-amber-700 font-bold uppercase tracking-wider text-sm mb-3 flex items-center"><AlertTriangle className="w-4 h-4 mr-1"/> Pièges classiques</h3>
               <ul className="space-y-2">
                 {disease.keyPoints.traps?.map((item, i) => (
                   <li key={i} className="flex font-semibold text-red-800"><span className="mr-2 text-red-500">⚠</span> {item}</li>
                 ))}
               </ul>
             </div>
          </div>
        </section>
      )}
    </div>
  );
}
