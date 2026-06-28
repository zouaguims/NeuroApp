import { useState } from 'react';
import { Brain, HelpCircle, Check, ArrowRight, ShieldAlert, Sparkles, RefreshCw, Zap, Table } from 'lucide-react';

type Step = 'start' | 'oui_pure' | 'non_branch';

export function LocalisationOrganigramme() {
  const [currentStep, setCurrentStep] = useState<Step>('start');
  const [selectedSubPath, setSelectedSubPath] = useState<string | null>(null);

  const resetSimulator = () => {
    setCurrentStep('start');
    setSelectedSubPath(null);
  };

  const cardsData = [
    {
      id: 'centrale',
      type: 'oui',
      color: 'emerald',
      title: 'ATTEINTE CENTRALE HÉMISPHÉRIQUE',
      subtitle: 'Cortex ou Capsule Interne',
      header: 'HÉMIPLÉGIE PURE',
      signes: ['Face', 'Bras', 'Jambe', '(sur le même côté de l\'hémicorps)'],
      keySigns: ['Hémi-déficit strict', 'Face + Bras + Jambe du même côté'],
      examples: ['AVC de l\'artère cérébrale moyenne', 'Hématome intracérébral'],
      description: 'Le cortex moteur ou la capsule interne sont touchés, entraînant une paralysie complète d\'un seul côté du corps (controlatéral).'
    },
    {
      id: 'tronc',
      type: 'non',
      color: 'amber',
      title: 'ATTEINTE CROISÉE DU TRONC CÉRÉBRAL',
      subtitle: 'Syndromes alternes',
      header: 'Atteinte alternée visage/membres',
      signes: ['Déficit facial (côté lésion)', 'Déficit moteur/sensitif (membre opposé)'],
      keySigns: ['Déficit facial ipsilatéral', 'Déficit moteur/sensitif controlatéral'],
      examples: ['AVC du tronc cérébral', 'Tumeur du tronc cérébral', 'Sclérose en Plaques (SEP)'],
      description: 'Lésion des noyaux des nerfs crâniens (homolatéral) et des voies longues motrices croisées (controlatéral).'
    },
    {
      id: 'moelle',
      type: 'non',
      color: 'blue',
      title: 'ATTEINTE DE LA MOELLE ÉPINIÈRE',
      subtitle: 'Niveau lésionnel médullaire',
      header: 'Paraplégie ou niveau sensitif net sur le torse ?',
      signes: ['Niveau sensitif net (limite franche)', 'Atteinte bilatérale (les deux jambes)'],
      keySigns: ['Paraplégie ou tétraplégie', 'Niveau sensitif net en "ceinture"'],
      examples: ['Traumatisme médullaire', 'Hernie discale compressive', 'Tumeur / SEP médullaire'],
      description: 'Le faisceau nerveux est interrompu à un niveau vertébral précis, coupant la communication en aval.'
    },
    {
      id: 'peripherique',
      type: 'non',
      color: 'purple',
      title: 'ATTEINTE PÉRIPHÉRIQUE DIFFUSE',
      subtitle: 'Polynévrite / Polyneuropathie',
      header: 'Déficit distal (En gants et en chaussettes) et bilatéral ?',
      signes: ['Atteinte distale symétrique', 'En gants (mains) et en chaussettes (pieds)'],
      keySigns: ['Atteinte distale et bilatérale', 'Topographie en "gants et chaussettes"'],
      examples: ['Neuropathies diabétiques', 'Polynévrite alcoolique', 'Carences vitaminiques, toxiques'],
      description: 'Les parties les plus longues et distales des fibres nerveuses dégénèrent en premier, de manière symétrique.'
    }
  ];

  return (
    <div className="my-8 space-y-8 notranslate" translate="no">
      {/* Simulation Box */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-850 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="bg-indigo-500/20 p-2 rounded-xl text-indigo-400">
              <Zap className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h4 className="font-bold text-slate-100">Simulateur Clinique Interactif</h4>
              <p className="text-xs text-slate-400 font-sans">Déterminez la hauteur de la lésion étape par étape</p>
            </div>
          </div>
          {currentStep !== 'start' && (
            <button 
              onClick={resetSimulator}
              className="mt-3 md:mt-0 px-3.5 py-1.5 bg-slate-800 hover:bg-slate-750 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors font-sans"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Recommencer
            </button>
          )}
        </div>

        {/* Step 1: Decision Point */}
        {currentStep === 'start' && (
          <div className="space-y-6 animate-fade-in py-4">
            <div className="max-w-2xl">
              <span className="bg-slate-800 text-slate-300 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full font-sans mb-3 inline-block">Étape 1: Évaluation Initiale</span>
              <h3 className="text-lg md:text-xl font-bold leading-normal text-slate-100">
                Le Déficit (Moteur ou Sensitif) est-il strict, massif et sur <span className="underline decoration-indigo-400 text-indigo-300">TOUT</span> l'hémicorps (Face + Bras + Jambe) ?
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <button 
                onClick={() => setCurrentStep('oui_pure')}
                className="group flex items-center justify-between p-5 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 rounded-2xl text-left transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-emerald-900/20 active:scale-95"
              >
                <div>
                  <span className="font-bold text-emerald-400 text-base block mb-0.5">OUI</span>
                  <span className="text-slate-300 text-xs font-sans">Hémiplégie pure, homogène ou non</span>
                </div>
                <div className="bg-emerald-500/20 p-2 rounded-xl text-emerald-400 group-hover:translate-x-1 transition-transform">
                  <Check className="w-4 h-4" />
                </div>
              </button>

              <button 
                onClick={() => {
                  setCurrentStep('non_branch');
                  setSelectedSubPath('tronc'); // default to first sub-option
                }}
                className="group flex items-center justify-between p-5 bg-slate-800/50 hover:bg-slate-750/50 border border-slate-700 rounded-2xl text-left transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-slate-950/30 active:scale-95"
              >
                <div>
                  <span className="font-bold text-indigo-400 text-base block mb-0.5">NON</span>
                  <span className="text-slate-300 text-xs font-sans">Déficit partiel, croisé ou distal</span>
                </div>
                <div className="bg-indigo-500/10 p-2 rounded-xl text-indigo-400 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Yes (Atteinte Centrale) Result */}
        {currentStep === 'oui_pure' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
            <div className="lg:col-span-2 space-y-4">
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full font-sans">Diagnostic Établi</span>
              <h3 className="text-2xl font-bold text-emerald-400">{cardsData[0].title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">{cardsData[0].description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-xl">
                  <span className="text-xs text-slate-500 font-bold uppercase block mb-1.5 tracking-wider font-sans">Signes Clés</span>
                  <ul className="space-y-1">
                    {cardsData[0].keySigns.map((s, idx) => (
                      <li key={idx} className="text-xs text-slate-200 flex items-start gap-1.5">
                        <span className="text-emerald-400 mt-0.5 font-bold">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-xl">
                  <span className="text-xs text-slate-500 font-bold uppercase block mb-1.5 tracking-wider font-sans">Exemples de pathologie</span>
                  <ul className="space-y-1">
                    {cardsData[0].examples.map((s, idx) => (
                      <li key={idx} className="text-xs text-slate-200 flex items-start gap-1.5">
                        <span className="text-red-400 mt-0.5">⚠</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block mb-2 font-sans">Observations Cliniques</span>
                <p className="text-lg font-bold text-white mb-4">HÉMIPLÉGIE PURE</p>
                <div className="space-y-1.5 text-xs text-slate-300 border-t border-slate-800/80 pt-3">
                  <div className="flex justify-between"><span>Déficit Face :</span> <span className="font-bold text-emerald-400">OUI (unilatéral)</span></div>
                  <div className="flex justify-between"><span>Déficit Bras :</span> <span className="font-bold text-emerald-400">OUI (central)</span></div>
                  <div className="flex justify-between"><span>Déficit Jambe :</span> <span className="font-bold text-emerald-400">OUI (central)</span></div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal mt-4 italic font-sans">
                Atteinte supranucléaire. Le siège de la lésion est typiquement cortical (Cortex moteur) ou sous-cortical (Capsule interne de l'hémisphère cérébral controlatéral).
              </p>
            </div>
          </div>
        )}

        {/* Step 2: No branching (Multiple diagnostics optioned) */}
        {currentStep === 'non_branch' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full font-sans mb-3 inline-block">Étape 2: Choix Clinique (Déficit non-homogène)</span>
              <h3 className="text-base font-bold text-slate-200">Sélectionnez le type de déficit observé chez le malade :</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button 
                onClick={() => setSelectedSubPath('tronc')}
                className={`p-4 text-left rounded-xl transition-all border ${selectedSubPath === 'tronc' ? 'bg-amber-950/30 border-amber-500 text-white shadow-lg' : 'bg-slate-850/50 hover:bg-slate-800/80 border-slate-800 text-slate-300'}`}
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-500 mb-1 font-sans">Atteinte Croisée</span>
                <span className="font-semibold text-xs leading-normal">Visage d'un côté, membre de l'autre</span>
              </button>

              <button 
                onClick={() => setSelectedSubPath('moelle')}
                className={`p-4 text-left rounded-xl transition-all border ${selectedSubPath === 'moelle' ? 'bg-blue-950/30 border-blue-500 text-white shadow-lg' : 'bg-slate-850/50 hover:bg-slate-800/80 border-slate-800 text-slate-300'}`}
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-blue-400 mb-1 font-sans">Atteinte Médullaire</span>
                <span className="font-semibold text-xs leading-normal">Paraplégie ou niveau sensitif net sur le torse</span>
              </button>

              <button 
                onClick={() => setSelectedSubPath('peripherique')}
                className={`p-4 text-left rounded-xl transition-all border ${selectedSubPath === 'peripherique' ? 'bg-purple-950/30 border-purple-500 text-white shadow-lg' : 'bg-slate-850/50 hover:bg-slate-800/80 border-slate-800 text-slate-300'}`}
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-purple-400 mb-1 font-sans">Atteinte Périphérique</span>
                <span className="font-semibold text-xs leading-normal">Déficit distal (gants/chaussettes) bilatéral</span>
              </button>
            </div>

            {/* Sub-path Display details */}
            {selectedSubPath && (
              <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-5 grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
                <div className="lg:col-span-2 space-y-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-ping"></span>
                    <h4 className="text-lg font-bold text-white uppercase tracking-wide">
                      {cardsData.find(c => c.id === selectedSubPath)?.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 font-sans italic">
                    {cardsData.find(c => c.id === selectedSubPath)?.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mt-2">
                    {cardsData.find(c => c.id === selectedSubPath)?.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                    <div className="bg-slate-900/80 p-3.5 border border-slate-850 rounded-xl">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1 tracking-wider font-sans">Signes Cardinaux</span>
                      <ul className="space-y-1">
                        {cardsData.find(c => c.id === selectedSubPath)?.keySigns.map((k, idx) => (
                          <li key={idx} className="text-xs text-slate-200 flex items-start gap-1">
                            <span className="text-indigo-400 font-bold">•</span>
                            <span>{k}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-900/80 p-3.5 border border-slate-850 rounded-xl">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1 tracking-wider font-sans">Causes Fréquentes</span>
                      <ul className="space-y-1">
                        {cardsData.find(c => c.id === selectedSubPath)?.examples.map((k, idx) => (
                          <li key={idx} className="text-xs text-slate-200 flex items-start gap-1">
                            <span className="text-red-400">⚠</span>
                            <span>{k}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1.5 font-sans">Manifestations d'atteinte</span>
                    <p className="font-semibold text-xs text-indigo-300 mb-3">{cardsData.find(c => c.id === selectedSubPath)?.header}</p>
                    <ul className="space-y-1.5">
                      {cardsData.find(c => c.id === selectedSubPath)?.signes.map((s, idx) => (
                        <li key={idx} className="bg-slate-850 px-2.5 py-1.5 rounded text-xs text-slate-100 flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-[10px] text-slate-400 leading-normal mt-4 pt-2 border-t border-slate-850 font-sans">
                    Le diagnostic différentiel repose sur la symétrie, l'atteinte d'une limite sensorielle ou l'association à des paires de nerfs crâniens.
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Complete Flowchart Diagram (Replacing the ASCII Image beautifully!) */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative">
        <div className="flex items-center gap-2 mb-6 border-b border-indigo-100 pb-4">
          <Brain className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-bold text-slate-800">Organigramme de Localisation Neurologique (Hauteur de Lésion)</h3>
        </div>

        {/* Tree Design */}
        <div className="space-y-8 relative">
          
          {/* Main Question Box */}
          <div className="text-center max-w-xl mx-auto py-5 px-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm relative z-10 transition-transform hover:scale-[1.01]">
            <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest block mb-1 font-sans">Question Fondamentale</span>
            <p className="text-sm font-semibold text-slate-900 leading-relaxed">
              Le Déficit (Moteur ou Sensitif) est-il strict, massif et sur <span className="font-extrabold text-indigo-600 text-underline">TOUT</span> l'hémicorps (Face + Bras + Jambe) ?
            </p>
          </div>

          {/* Desktop Visual Connector lines & branches combined beautifully with responsive design */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* CENTRAL CARD */}
            <div className="bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-100 p-5 rounded-2xl relative transition-all hover:scale-[1.02] flex flex-col justify-between">
              <div>
                <span className="bg-emerald-100 text-emerald-800 text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-3 inline-block">OUI ➜ Hémiplégie Pure</span>
                <p className="text-xs text-emerald-600 font-sans font-bold uppercase tracking-wider mb-1">LOCALISATION</p>
                <h4 className="text-sm font-bold text-slate-900 leading-tight mb-2">CENTRALE HÉMISPHÉRIQUE</h4>
                <p className="text-[11px] text-slate-600 leading-snug mb-3 font-sans font-medium">Cortex ou Capsule Interne</p>
                <p className="text-[11px] text-slate-500 font-sans mb-3 text-justify">Atteinte homogène corticale ou sous-corticale unilatérale.</p>
              </div>
              <div className="border-t border-emerald-200/50 pt-2 text-[10px] space-y-1">
                <div className="font-sans font-semibold text-slate-700">Caractéristiques :</div>
                <div className="text-slate-600 flex items-start gap-1"><span className="text-emerald-500">•</span> Hémi-déficit strict</div>
                <div className="text-slate-600 flex items-start gap-1"><span className="text-emerald-500">•</span> ROT vifs, Babinski</div>
              </div>
            </div>

            {/* TRONC CARD */}
            <div className="bg-amber-50/50 hover:bg-amber-50 border border-amber-100 p-5 rounded-2xl relative transition-all hover:scale-[1.02] flex flex-col justify-between">
              <div>
                <span className="bg-amber-100 text-amber-800 text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-3 inline-block">NON ➜ Face / Membre opposé</span>
                <p className="text-xs text-amber-600 font-sans font-bold uppercase tracking-wider mb-1">LOCALISATION</p>
                <h4 className="text-sm font-bold text-slate-900 leading-tight mb-2">TRONC CÉRÉBRAL</h4>
                <p className="text-[11px] text-slate-600 leading-snug mb-3 font-sans font-medium">Syndromes Alternes</p>
                <p className="text-[11px] text-slate-500 font-sans mb-3 text-justify">Lésion des noyaux crâniens ipsilatérale et hémiplégie controlatérale.</p>
              </div>
              <div className="border-t border-amber-200/50 pt-2 text-[10px] space-y-1">
                <div className="font-sans font-semibold text-slate-700">Caractéristiques :</div>
                <div className="text-slate-600 flex items-start gap-1"><span className="text-amber-500">•</span> Atteinte croisée typique</div>
                <div className="text-slate-600 flex items-start gap-1"><span className="text-amber-500">•</span> Nerfs crâniens touchés</div>
              </div>
            </div>

            {/* MOELLE CARD */}
            <div className="bg-blue-50/50 hover:bg-blue-50 border border-blue-100 p-5 rounded-2xl relative transition-all hover:scale-[1.02] flex flex-col justify-between">
              <div>
                <span className="bg-blue-100 text-blue-800 text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-3 inline-block">NON ➜ Niveau Niveau Sensitif</span>
                <p className="text-xs text-blue-600 font-sans font-bold uppercase tracking-wider mb-1">LOCALISATION</p>
                <h4 className="text-sm font-bold text-slate-900 leading-tight mb-2">MOELLE ÉPINIÈRE</h4>
                <p className="text-[11px] text-slate-600 leading-snug mb-3 font-sans font-medium">Lésion Transversale</p>
                <p className="text-[11px] text-slate-500 font-sans mb-3 text-justify">Faisceau coupé à une vertèbre précise, déficit sous-lésionnel.</p>
              </div>
              <div className="border-t border-blue-200/50 pt-2 text-[10px] space-y-1">
                <div className="font-sans font-semibold text-slate-700">Caractéristiques :</div>
                <div className="text-slate-600 flex items-start gap-1"><span className="text-blue-500">•</span> Niveau sensitif net</div>
                <div className="text-slate-600 flex items-start gap-1"><span className="text-blue-500">•</span> Syndrome sous-lésionnel</div>
              </div>
            </div>

            {/* PERIPHERIQUE CARD */}
            <div className="bg-purple-50/50 hover:bg-purple-50 border border-purple-100 p-5 rounded-2xl relative transition-all hover:scale-[1.02] flex flex-col justify-between">
              <div>
                <span className="bg-purple-100 text-purple-800 text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-3 inline-block">NON ➜ Bilatéral distal</span>
                <p className="text-xs text-purple-600 font-sans font-bold uppercase tracking-wider mb-1">LOCALISATION</p>
                <h4 className="text-sm font-bold text-slate-900 leading-tight mb-2">PÉRIPHÉRIQUE DIFFUSE</h4>
                <p className="text-[11px] text-slate-600 leading-snug mb-3 font-sans font-medium">Polynévrite / Polyneuropathie</p>
                <p className="text-[11px] text-slate-500 font-sans mb-3 text-justify">Dégénérescence progressive en gants et chaussettes bilatérale.</p>
              </div>
              <div className="border-t border-purple-200/50 pt-2 text-[10px] space-y-1">
                <div className="font-sans font-semibold text-slate-700">Caractéristiques :</div>
                <div className="text-slate-600 flex items-start gap-1"><span className="text-purple-500">•</span> "Gants et chaussettes"</div>
                <div className="text-slate-600 flex items-start gap-1"><span className="text-purple-500">•</span> ROT abolis ou diminués</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Synthesis Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 px-6 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
          <Table className="w-5 h-5 text-slate-600" />
          <h4 className="font-bold text-slate-800 text-sm">Tableau de Diagnostic Synthétique</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse font-sans text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/50 text-slate-500 uppercase font-bold text-[10px] tracking-wider">
                <th className="p-4">Localisation Lésionnelle</th>
                <th className="p-4">Site Atteint Anatomique</th>
                <th className="p-4">Signes Cliniques Clés</th>
                <th className="p-4">Exemples de Maladies</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-150 text-slate-700">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-bold text-slate-900">Centrale Hémisphérique</td>
                <td className="p-4">Cortex moteur ou Capsule Interne</td>
                <td className="p-4">Hémi-déficit moteur strict, face + bras + jambe homogène et controlatéral</td>
                <td className="p-4 text-slate-600">AVC cérébral sylvien moyen, hématome cérébral</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-bold text-slate-900">Tronc Cérébral</td>
                <td className="p-4">Tronc cérébral (Pédoncule, Pont, Bulbe)</td>
                <td className="p-4">Déficit des nerfs crâniens ipsilatéral, déficit moteur controlatéral (Syndromes alternes)</td>
                <td className="p-4 text-slate-600">AVC du tronc cérébral, Syndrome de Wallenberg, tumeurs</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-bold text-slate-900">Moelle Épinière</td>
                <td className="p-4">Moelle épinière (niveau vertébral compressif)</td>
                <td className="p-4">Paraplégie ou Tétraplégie, niveau sensitif supérieur horizontal net en ceinture</td>
                <td className="p-4 text-slate-600">Traumatisme médullaire, Sclérose en plaques, hernies discales thoraciques</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-bold text-slate-900">Périphérique Diffuse</td>
                <td className="p-4">Nerfs périphériques distaux symétriques</td>
                <td className="p-4">Déficit distal, hypoesthésie bilatérale symétrique en gants et chaussettes</td>
                <td className="p-4 text-slate-600">Polyneuropathie diabétique, polynévrite éthylique, déficits réactifs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
