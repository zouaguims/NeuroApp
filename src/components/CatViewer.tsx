import { Disease } from '../types';
import { FileText, ArrowDown, CheckCircle, AlertTriangle, Stethoscope, Microscope, Syringe, BrainCircuit } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { cn } from '../lib/utils';

type Props = {
  disease: Disease;
}

export function CatViewer({ disease }: Props) {
  return (
    <div className="max-w-4xl mx-auto py-4">
      <div className="mb-6 text-center">
         <h1 className="text-xl sm:text-2xl font-medium tracking-tight leading-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
           {disease.name}
         </h1>
         <div className="flex items-center justify-center space-x-2 text-xs font-bold text-red-600 mb-2 uppercase tracking-widest">
           <span className="bg-red-100 px-3 py-1 rounded-full border border-red-200">Algorithme / Arbre Décisionnel</span>
         </div>
      </div>

      <div className="flex flex-col items-center relative">
        
        {/* Step 1: Reconnaissance */}
        <div className="w-full">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-2 z-10 shadow-sm border-2 border-white">
              1
            </div>
            <div className="w-full bg-white rounded-xl border border-blue-200 shadow-sm overflow-hidden text-center hover:border-blue-300 transition-colors">
              <div className="bg-blue-50 py-2 border-b border-blue-100 flex justify-center items-center">
                <Stethoscope className="w-4 h-4 text-blue-600 mr-2" />
                <h2 className="text-base font-bold text-blue-900">Savoir Reconnaitre & Bilan Initial</h2>
              </div>
              <div className="p-4">
                <p className="font-semibold text-slate-700 text-base mb-3">{disease.definition?.concise}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                   {disease.clinical?.physical && disease.clinical.physical.length > 0 && (
                     <div className="bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                       <h3 className="text-blue-800 text-xs font-bold uppercase mb-2">Clinique</h3>
                       <ul className="space-y-1">
                         {disease.clinical.physical.map((item, i) => (
                           <li key={i} className="flex text-sm text-slate-800 font-medium leading-snug"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" /> {item}</li>
                         ))}
                       </ul>
                     </div>
                   )}
                   {disease.clinical?.functional && disease.clinical.functional.length > 0 && (
                     <div className="bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                       <h3 className="text-blue-800 text-xs font-bold uppercase mb-2">Fonctionnel</h3>
                       <ul className="space-y-1">
                         {disease.clinical.functional.map((item, i) => (
                           <li key={i} className="flex text-sm text-slate-800 font-medium leading-snug"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" /> {item}</li>
                         ))}
                       </ul>
                     </div>
                   )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <ArrowDown className="w-6 h-6 text-slate-300 my-2" />

        {/* Step 2: Diagnostics différentiels et Bilan */}
        <div className="w-full">
           <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm mb-2 z-10 shadow-sm border-2 border-white">
              2
            </div>
            <div className="w-full bg-white rounded-xl border border-indigo-200 shadow-sm overflow-hidden hover:border-indigo-300 transition-colors">
              <div className="bg-indigo-50 py-2 border-b border-indigo-100 flex justify-center items-center">
                <Microscope className="w-4 h-4 text-indigo-600 mr-2" />
                <h2 className="text-base font-bold text-indigo-900">Éliminer les autres causes / Bilan ciblé</h2>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                   {disease.diagnosis?.biological && disease.diagnosis.biological.length > 0 && (
                     <div className="text-center bg-indigo-50/50 p-3 shadow-none border border-indigo-100 rounded-lg">
                       <h3 className="text-indigo-800 text-xs uppercase font-bold mb-2">Bilan Biologique</h3>
                       <div className="space-y-1">
                          {disease.diagnosis.biological.map((item, i) => <div key={i} className="text-slate-700 leading-snug">{item}</div>)}
                       </div>
                     </div>
                   )}
                   {disease.diagnosis?.imaging && disease.diagnosis.imaging.length > 0 && (
                     <div className="text-center bg-indigo-50/50 p-3 shadow-none border border-indigo-100 rounded-lg">
                       <h3 className="text-indigo-800 text-xs uppercase font-bold mb-2">Imagerie</h3>
                       <div className="space-y-1">
                          {disease.diagnosis.imaging.map((item, i) => <div key={i} className="text-slate-700 leading-snug">{item}</div>)}
                       </div>
                     </div>
                   )}
                 </div>
                 {disease.differentialDiagnosis && Object.entries(disease.differentialDiagnosis).length > 0 && (
                   <div className="mt-3 border-t border-indigo-100 pt-3">
                     <h3 className="text-center font-bold text-indigo-700 mb-2 uppercase text-xs tracking-widest">Diagnostics d'élimination</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                       {Object.entries(disease.differentialDiagnosis).map(([key, value], i) => (
                         <div key={i} className="flex flex-col text-center p-2 bg-indigo-50 rounded border border-indigo-100">
                           <span className="font-bold text-indigo-900 mb-0.5 text-sm">{key}</span>
                           <span className="text-indigo-700 text-xs">{value}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}
              </div>
            </div>
          </div>
        </div>

        <ArrowDown className="w-6 h-6 text-slate-300 my-2" />

        {/* Step 3: Traitement */}
        {(disease.treatment?.firstLine?.length || disease.treatment?.secondLine?.length) ? (
          <div className="w-full">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm mb-2 z-10 shadow-sm border-2 border-white">
                3
              </div>
              <div className="w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:border-slate-300 transition-colors text-center">
                <div className="bg-slate-50 py-2 border-b border-slate-200 flex justify-center items-center">
                  <Syringe className="w-4 h-4 text-slate-500 mr-2" />
                  <h2 className="text-base font-bold text-slate-800">Traitement & Prise en Charge</h2>
                </div>
                <div className="p-4">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                     {disease.treatment?.firstLine && disease.treatment.firstLine.length > 0 && (
                       <div className="bg-red-50 text-red-900 p-3 rounded-lg border border-red-100 flex flex-col items-center shadow-none">
                         <div className="font-bold bg-white px-2 py-0.5 rounded text-[11px] text-red-600 uppercase mb-2 shadow-sm border border-red-100">Urgence / 1ère Intention</div>
                         <div className="space-y-1 text-sm text-center">
                           {disease.treatment.firstLine.map((item, i) => (
                             <p key={i} className="font-medium leading-snug">{item}</p>
                           ))}
                         </div>
                       </div>
                     )}
                     {disease.treatment?.secondLine && disease.treatment.secondLine.length > 0 && (
                       <div className="bg-blue-50 text-blue-900 p-3 rounded-lg border border-blue-100 flex flex-col items-center shadow-none">
                         <div className="font-bold bg-white px-2 py-0.5 rounded text-[11px] text-blue-600 uppercase mb-2 shadow-sm border border-blue-100">2ème Ligne / Médical</div>
                         <div className="space-y-1 text-sm text-center">
                           {disease.treatment.secondLine.map((item, i) => (
                             <p key={i} className="font-medium leading-snug">{item}</p>
                           ))}
                         </div>
                       </div>
                     )}
                     {disease.treatment?.specific && disease.treatment.specific.length > 0 && (
                       <div className="bg-emerald-50 text-emerald-900 p-3 rounded-lg border border-emerald-100 flex flex-col items-center shadow-none">
                         <div className="font-bold bg-white px-2 py-0.5 rounded text-[11px] text-emerald-600 uppercase mb-2 shadow-sm border border-emerald-100">Spécifique / Kiné / Chir</div>
                         <div className="space-y-1 text-sm text-center">
                           {disease.treatment.specific.map((item, i) => (
                             <p key={i} className="font-medium leading-snug">{item}</p>
                           ))}
                         </div>
                       </div>
                     )}
                   </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {disease.treatment?.surveillance && disease.treatment.surveillance.length > 0 && (
          <>
            <div className="flex flex-col items-center justify-center pt-2">
              <ArrowDown className="w-6 h-6 text-slate-300 mb-2" />
            </div>
            
            <div className="w-full text-center pb-6">
               <div className="bg-white border text-left flex flex-col md:flex-row items-center justify-center p-4 rounded-xl shadow-sm border-slate-200 gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div className="text-center md:text-left flex-1">
                     <h3 className="text-red-700 font-bold text-sm mb-1 uppercase tracking-wide">Quand Adresser / Réanimation ?</h3>
                     <div className="space-y-1">
                      {disease.treatment.surveillance.map((item, i) => (
                        <p key={i} className="text-slate-800 text-sm font-medium leading-snug">{item}</p>
                      ))}
                     </div>
                  </div>
               </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

