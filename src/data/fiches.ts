import { Disease } from '../types';

export const fichesData: Partial<Disease>[] = [
  {
    id: 'hic',
    categoryId: 'syndromes-compressifs',
    name: "Hypertension Intracrânienne (HIC)",
    definition: {
      concise: "Augmentation de la pression à l'intérieur de la boîte crânienne (PIC > 15 mmHg chez l'adulte), dépassant les capacités de compensation du secteur céphalo-rachidien.",
      importance: "Urgence diagnostique et thérapeutique. Risque d'engagement cérébral et de cécité définitive."
    },
    epidemiology: {
      prevalence: "Fréquente en neurochirurgie et réanimation",
      sexe: "Dépend de l'étiologie",
      age: "Tous âges",
      facteurs: "Tumeurs, traumatismes, thromboses veineuses, infections."
    },
    physiopathology: {
      mechanism: "La boîte crânienne est inextensible. Selon la loi de Monro-Kellie, l'ajout d'un volume (tumeur, hématome, œdème) entraîne d'abord l'expulsion de LCR et de sang veineux (phase de compensation), puis une élévation exponentielle de la pression."
    },
    etiologies: [
      { cause: "Processus expansif (Tumeur, Abcès, Hématome)", frequency: "Très fréquente", importance: "HIC localisée puis généralisée" },
      { cause: "Hydrocéphalie (défaut de résorption ou blocage du LCR)", frequency: "Fréquente", importance: "Dilatation ventriculaire" },
      { cause: "Œdème cérébral (lésionnel, ischémique, toxique)", frequency: "Fréquente", importance: "Souvent post-traumatique ou post-AVC" },
      { cause: "HIC bénigne (idiopathique)", frequency: "Rare", importance: "Femme jeune, obèse" }
    ],
    clinical: {
      functional: ["Céphalées : Diffuses, matinales ou en 2ème partie de nuit, rebelles aux antalgiques, exagérées par l'effort/toux", "Vomissements : Faciles, en jet, soulageant parfois les céphalées", "Troubles visuels : Baisse d'acuité visuelle, diplopie (atteinte du VI)"],
      physical: ["Troubles de la conscience (obnubilation)", "Troubles neurovégétatifs (bradycardie, HTA - Réflexe de Cushing)", "Œdème papillaire bilatéral au fond d'œil (tardif)"],
      biological: [],
      gravity: ["Signes d'engagement : Mydriase unilatérale (temporal), coma, rigidité de décérébration, troubles respiratoires (amygdalien)"]
    },
    diagnosis: {
      biological: [],
      hormonal: [],
      imaging: ["Scanner (TDM) cérébral sans et avec injection : Examen de 1ère intention. Montre l'étiologie, l'effacement des sillons, la compression ventriculaire.", "IRM cérébrale : Plus sensible pour les tumeurs ou thromboses veineuses."],
      criteria: ["Clinique typique + Imagerie montrant le syndrome de masse ou l'œdème"]
    },
    differentialDiagnosis: {
      "Migraine": "Céphalées pulsatiles, unilatérales, crises",
      "Glaucome aigu": "Œil rouge et douloureux, baisse de vision unilatérale"
    },
    complications: {
      acute: ["Engagement cérébral (temporal, amygdalien, central) : décès imminent", "Ischémie cérébrale (baisse de la Pression de Perfusion Cérébrale)"],
      chronic: ["Atrophie optique et cécité définitive (évolution de l'œdème papillaire)"]
    },
    treatment: {
      firstLine: ["Position demi-assise (30°)", "Osmothérapie : Mannitol 20% ou Sérum salé hypertonique", "Corticothérapie (si œdème vasogénique d'origine tumorale)"],
      secondLine: ["Sédation et intubation/ventilation (hypocapnie modérée cible 30-35 mmHg)", "Dérivation ventriculaire externe (DVE) si hydrocéphalie", "Craniectomie décompressive (cas extrêmes)"],
      specific: ["Traitement de la cause : Exérèse de tumeur, évacuation d'un hématome."],
      surveillance: ["Monitorage de la PIC (capteur intraparenchymateux)", "Examen pupillaire toutes les heures", "Score de Glasgow"]
    },
    keyPoints: {
      toRemember: ["Triade classique : Céphalées matinales + Vomissements en jet + Baisse d'acuité visuelle.", "PONCTION LOMBAIRE CONTRE-INDIQUÉE avant l'imagerie (risque d'engagement).", "La bradycardie associée à une hypertension artérielle (Réflexe de Cushing) est un signe de gravité extrême."],
      traps: ["Attribuer des vomissements en jet à une gastro-entérite chez l'enfant", "Réaliser une PL devant des céphalées sans avoir fait d'imagerie ou de fond d'œil."],
      faq: [],
      keywords: ["Engagement cérébral", "Loi de Monro-Kellie", "Mannitol", "Œdème papillaire", "Contre-indication PL"]
    }
  },
  {
    id: 'avc-ischemique',
    categoryId: 'avc',
    name: "Accident Vasculaire Cérébral (AVC) Ischémique",
    definition: {
      concise: "Déficit neurologique soudain d'origine vasculaire, causé par l'infarctus d'une zone du parenchyme cérébral à la suite d'une occlusion artérielle.",
      importance: "Urgence absolue (Time is brain). 1ère cause de handicap moteur acquis de l'adulte."
    },
    epidemiology: {
      prevalence: "Très fréquente (environ 80% de tous les AVC)",
      sexe: "Prédominance masculine",
      age: "Augmente de façon drastique après 65 ans",
      facteurs: "HTA (facteur n°1), Diabète, Tabac, Hypercholestérolémie, FA (Fibrillation Atriale)"
    },
    physiopathology: {
      mechanism: "L'occlusion d'une artère cérébrale entraîne une zone d'ischémie centrale cellulaire irréversible (cœur de l'infarctus) entourée d'une zone hypoperfusée réversible mais menacée (pénombre ischémique), cible des traitements de reperfusion."
    },
    etiologies: [
      { cause: "Athérosclérose", frequency: "Fréquente (30%)", importance: "Gros vaisseaux, sténose carotidienne" },
      { cause: "Cardio-embolique", frequency: "Fréquente (20%)", importance: "Fibrillation Atriale, thrombus intra-VG" },
      { cause: "Maladies des petites artères (Lacunes)", frequency: "Fréquente (20%)", importance: "Liée à l'HTA et au diabète (lipohyalinose)" },
      { cause: "Dissection artérielle (carotide/vertébrale)", frequency: "Rare (mais 1ère cause chez le sujet jeune)", importance: "Souvent post-traumatique (cervicalgies)" }
    ],
    clinical: {
      functional: ["Apparition SOUDAINE (d'emblée maximale)", "Déficit moteur/sensitif d'un hémicorps (hémiplégie, hémianesthésie)", "Aphasie (si hémisphère majeur)", "Troubles visuels : Amaurose transitoire, Hémianopsie Latérale Homonyme (HLH)"],
      physical: ["Dépend du territoire : Sylvien (brachio-facial, aphasie), Cérébral antérieur (crural), Vertébro-basilaire (syndrome alterne, cérébelleux, nerfs crâniens)"],
      biological: [],
      gravity: ["Troubles de la conscience, troubles de la déglutition, score NIHSS élevé (> 15)"]
    },
    diagnosis: {
      biological: ["Bilan pré-thrombolyse : Hémostase, Plaquettes, Glycémie (éliminer une hypoglycémie !)", "Bilan étiologique : Bilan lipidique, HbA1c"],
      hormonal: [],
      imaging: ["IRM Cérébrale (Diffusion = hyper-signal précoce indiquant ischémie, FLAIR = normal si récent, T2* = élimine hémorragie, TOF = occlusion)", "TDM Cérébral sans injection si IRM indisponible (élimine une hémorragie)"],
      criteria: ["Clinique soudaine + Imagerie confirmant l'ischémie et l'absence d'hémorragie"]
    },
    differentialDiagnosis: {
      "Hémorragie intracérébrale": "Même clinique, différenciée par l'imagerie",
      "Hypoglycémie": "Systématiquement éliminer (Dextro à l'arrivée)",
      "Crise épileptique / Paralysie de Todd": "Déficit post-critique",
      "Aura migraineuse": "Marche migraineuse progressive (et non soudaine)"
    },
    complications: {
      acute: ["Transformation hémorragique de l'infarctus", "Œdème cérébral et engagement (infarctus malin)", "Pneumopathie de déglutition"],
      chronic: ["Séquelles motrices (hémiplégie spastique)", "Aphasie séquellaire", "Épilepsie vasculaire", "Dépression"]
    },
    treatment: {
      firstLine: ["Appel au 15, transfert en UNV (Unité Neuro-Vasculaire)", "Thrombolyse IV (rt-PA) si < 4h30 du début des signes et sans contre-indications", "Thrombectomie mécanique si occlusion d'un gros vaisseau proximal et < 6h (parfois jusqu'à 24h selon imagerie de perfusion)"],
      secondLine: ["Aspirine 160-300 mg/j (si pas de thrombolyse, ou 24h après)"],
      specific: ["Gestion de la TA : respecter l'HTA à la phase aiguë (ne traiter que si > 220/120 ou > 185/110 si thrombolyse)", "Prévention: Anticoagulants (si cause cardio-embolique), Antiagrégants (si athérome)"],
      surveillance: ["Score NIHSS, Température, Glycémie, Saturation O2 (lutte contre les ACSOS)"]
    },
    keyPoints: {
      toRemember: ["SOUDAINETÉ = Vasculaire.", "Time is Brain : Alerte immédiate (UNV).", "Lutte contre les ACSOS (Agressions Cérébrales Secondaires d'Origine Systémique) : Hyperthermie, Hyperglycémie, Hypoxie, Hypotension.", "Respecter l'HTA initiale ! C'est elle qui maintient la perfusion de la pénombre."],
      traps: ["Faire baisser la tension artérielle en urgence à 120/80 (aggrave l'ischémie).", "Oublier la glycémie capillaire devant un déficit soudain."],
      faq: [],
      keywords: ["Pénombre ischémique", "Thrombolyse", "Thrombectomie", "UNV", "Score NIHSS", "IRM Diffusion"]
    }
  },
  {
    id: 'sclerose-en-plaques',
    categoryId: 'degeneratives',
    name: "Sclérose en Plaques (SEP)",
    definition: {
      concise: "Maladie inflammatoire chronique du central (SNC) caractérisée par une démyélinisation focale évoluant par poussées.",
      importance: "Première cause de handicap sévère non traumatique chez l'adulte jeune."
    },
    epidemiology: {
      prevalence: "100 pour 100 000 habitants en France",
      sexe: "Forte prédominance féminine (3 femmes pour 1 homme)",
      age: "Début entre 20 et 40 ans",
      facteurs: "Facteurs génétiques (HLA DR15), environnementaux (carence Vitamine D)."
    },
    physiopathology: {
      mechanism: "Rupture de tolérance : lymphocytes auto-réactifs traversent la barrière hémato-encéphalique et déclenchent une réaction auto-immune contre la myéline."
    },
    etiologies: [
      { cause: "Auto-immune", frequency: "100%", importance: "IgG intrathécales oligoclonales." }
    ],
    clinical: {
      functional: ["Troubles visuels (Baisse visuelle NORB douloureuse)"],
      physical: ["Signe de Lhermitte (décharge électrique à la flexion de nuque)", "Syndrome pyramidal"],
      biological: [],
      gravity: ["Formes progressives primaires", "Handicap moteur sévère"]
    },
    diagnosis: {
      biological: ["Ponction Lombaire (LCR) : Bandes Oligoclonales (BOC)."],
      hormonal: [],
      imaging: ["IRM encéphalique : Plaques en hyper-signal T2/FLAIR périventriculaires."],
      criteria: ["Dissémination Espace et Temps (McDonald)."]
    },
    differentialDiagnosis: {
      "Maladie de Lyme": "Neuroborréliose",
      "Lupus / Gougerot": "Maladies systémiques"
    },
    complications: {
      acute: ["Poussées sévères invalidantes"],
      chronic: ["Spasticité", "Vessie neurologique", "Fatigue", "Déclin cognitif"]
    },
    treatment: {
      firstLine: ["Poussée : Corticothérapie bolus (Methylprednisolone IV, 1g/j, 3j)."],
      secondLine: ["Fond : Interférons β, Acétate de glatiramère, Ocrelizumab."],
      specific: ["Symptomatique : Antispastiques."],
      surveillance: ["Suivi EDSS", "IRM annuelle"]
    },
    keyPoints: {
      toRemember: ["McDonald: Dissémination Espace/Temps", "Névrite Optique Rétrobulbaire inaugurale."],
      traps: ["Confondre phénomène d'Uhthoff (lié à la fièvre) et poussée."],
      faq: [],
      keywords: ["Bandes oligoclonales", "Signe de Lhermitte"]
    }
  },
  {
    id: 'epilepsie',
    categoryId: 'troubles-conscience',
    name: "Épilepsie",
    definition: {
      concise: "Répétition spontanée de crises épileptiques (décharges neuronales hypersynchrones excessives).",
      importance: "Statut épileptique = urgence vitale."
    },
    epidemiology: {
      prevalence: "1% de la population",
      sexe: "Égalité H/F",
      age: "Pics : Enfance et Sujet âgé",
      facteurs: "Privation de sommeil, alcool, drogues, toxiques."
    },
    physiopathology: {
      mechanism: "Déséquilibre excitation/inhibition corticale."
    },
    etiologies: [
      { cause: "Structurelles", frequency: "Fréquente (adulte)", importance: "Tumeur, AVC, Séquelle" },
      { cause: "Génétiques", frequency: "Fréquente (enfant)", importance: "Épilepsie absence" },
      { cause: "Infectieuses", frequency: "Relativement fréquente", importance: "Encéphalite herpétique" }
    ],
    clinical: {
      functional: ["Crise Généralisée Tonico-Clonique : Phase Tonique, Phase Clonique, Phase Résolutive (stertor, perte d'urine)."],
      physical: ["Morsure latérale de langue.", "Confusion post-critique.", "Paralysie de Todd (déficit transitoire)."],
      biological: [],
      gravity: ["État de mal épileptique (> 5 minutes de crise)."]
    },
    diagnosis: {
      biological: ["Ionogramme, Glycémie, Alcoolémie."],
      hormonal: [],
      imaging: ["IRM cérébrale : INDISPENSABLE chez l'adulte."],
      criteria: ["EEG : Pointes, ondes lentes, pointes-ondes."]
    },
    differentialDiagnosis: {
      "Syncope vasovagale": "Pas de confusion prolongée.",
      "Crises psychogènes (CNEP)": "Yeux fermés serrés, longue durée."
    },
    complications: {
      acute: ["Traumatisme", "Luxation", "État de mal"],
      chronic: ["SUDEP (Mort subite inattendue)."]
    },
    treatment: {
      firstLine: ["PLS, sécurisation", "Traitement de fond : Lamotrigine, Lévétiracétam (Dépakine CI chez femme procréer)."],
      secondLine: ["Chirurgie selon indication."],
      specific: ["État de mal : Clonazépam IV."],
      surveillance: ["Tolérance au traitement."]
    },
    keyPoints: {
      toRemember: ["Morsure LATÉRALE de la langue", "Valproate (Dépakine) TÉRATOGÈNE.", "Urgence si crise > 5 min."],
      traps: ["Confondre myoclonies syncopales et crise."],
      faq: [],
      keywords: ["Crise tonico-clonique", "Valproate"]
    }
  },
  {
    id: 'parkinson',
    categoryId: 'degeneratives',
    name: "Maladie de Parkinson",
    definition: {
      concise: "Dégénérescence des neurones dopaminergiques de la substance noire.",
      importance: "Handicap moteur progressif du sujet âgé."
    },
    epidemiology: {
      prevalence: "2% des > 65 ans",
      sexe: "Prédominance masculine",
      age: "Début vers 60 ans",
      facteurs: "Âge, facteurs environnementaux."
    },
    physiopathology: {
      mechanism: "Dénervation dopaminergique striatale, accumulation de corps de Lewy (alpha-synucléine)."
    },
    etiologies: [
      { cause: "Idiopathique", frequency: "Majoritaire", importance: "" }
    ],
    clinical: {
      functional: ["Lenteur (bradykinésie)", "Tremblement au repos", "Hypertonie (rigidité)."],
      physical: ["Triade parkinsonienne : Akinésie, Rigidité (roue dentée), Tremblement (repos, lent, asymétrique)."],
      biological: [],
      gravity: ["Chutes, démence parkinsonienne tardive."]
    },
    diagnosis: {
      biological: [],
      hormonal: [],
      imaging: ["IRM cérébrale NORMALE.", "DaTscan si doute diagnostique."],
      criteria: ["Diagnostic clinique (Asymétrie, efficacité de la L-Dopa)."]
    },
    differentialDiagnosis: {
      "Tremblement essentiel": "D'action/attitude, symétrique, sensible alcool.",
      "Syndrome parkinsonien iatrogène": "Neuroleptiques (métoclopramide)."
    },
    complications: {
      acute: ["Syndrome malin (arrêt dopathérapie)."],
      chronic: ["Dyskinésies (effet on-off) au long cours."]
    },
    treatment: {
      firstLine: ["L-Dopa", "Agonistes dopaminergiques (< 65 ans)."],
      secondLine: ["Inhibiteurs MAO-B."],
      specific: ["Stimulation sous-thalamique profonde si sévère."],
      surveillance: ["Troubles du contrôle des impulsions sous agonistes (jeu, achats)."]
    },
    keyPoints: {
      toRemember: ["Tremblement REPOS asymétrique", "L-Dopa à vie", "Troubles impulsions sous agonistes."],
      traps: ["Prescrire du Primperan (Neuroleptique !)."],
      faq: [],
      keywords: ["Triade parkinsonienne", "L-Dopa", "Roue dentée"]
    }
  },
  {
    id: 'meningite-herpes',
    categoryId: 'inflammatoires',
    name: "Encéphalite Herpétique",
    definition: {
      concise: "Infection aiguë du SNC par Herpès Simplex Virus (temporo-frontale).",
      importance: "Urgence infectieuse absolue et létale sans ACICLOVIR très précoce."
    },
    epidemiology: {
      prevalence: "Rare",
      sexe: "Égalité H/F",
      age: "Tous âges",
      facteurs: "Immunodépression relative."
    },
    physiopathology: {
      mechanism: "Nécrose hémorragique temporo-frontale virale HSV."
    },
    etiologies: [
      { cause: "HSV1", frequency: "90%", importance: "Adulte" },
      { cause: "HSV2", frequency: "10%", importance: "Nouveau-né" }
    ],
    clinical: {
      functional: ["Fièvre, céphalées, troubles du jugement/comportement."],
      physical: ["Crises focales épileptiques complexes temporales.", "Confusion fébrile/coma."],
      biological: [],
      gravity: ["Engagement et décès."]
    },
    diagnosis: {
      biological: ["Ponction Lombaire (après scanner si coma) : Pléiocytose lymphocytaire, protéinorachie modérée.", "PCR HSV LCR (positif)."],
      hormonal: [],
      imaging: ["IRM encéphalique : Hypersignal T2/FLAIR temporal interne asymétrique.", "EEG : Ondes périodiques temporales."],
      criteria: ["Confusion + fièvre + encéphalite temporale IRM + PCR positive."]
    },
    differentialDiagnosis: {
      "Méningite bactérienne": "PNN LCR +++",
      "Listériose / Abcès": "IRM différencie."
    },
    complications: {
      acute: ["État de mal"],
      chronic: ["Syndrome de Korsakoff (atteinte bi-hippocampique)."]
    },
    treatment: {
      firstLine: ["ACICLOVIR IV 10-15mg/kg/8h EN URGENCE MAXIMALE (AVANT PCR)."],
      secondLine: [],
      specific: ["Sédation, antiépileptiques"],
      surveillance: ["Fonction rénale (cristallurie sous Aciclovir) -> Hyperhydratation."]
    },
    keyPoints: {
      toRemember: ["Confusion fébrile focalisée = Aciclovir !", "IRM : Atteinte fronto-temporale."],
      traps: ["Retarder le traitement sans PCR, ou oublier l'hydratation (rein)."],
      faq: [],
      keywords: ["Aciclovir", "Lobe temporal"]
    }
  },
  {
    id: 'avc-hemorragique',
    categoryId: 'avc',
    name: "Accident Vasculaire Cérébral (AVC) Hémorragique",
    definition: {
      concise: "Rupture d'un vaisseau sanguin à l'intérieur du parenchyme cérébral, entraînant la formation d'un hématome.",
      importance: "Urgence vitale. Mortalité plus élevée que l'AVC ischémique (30-50% à 1 mois)."
    },
    epidemiology: {
      prevalence: "15 à 20% des AVC",
      sexe: "Prédominance masculine",
      age: "Augmente avec l'âge",
      facteurs: "Hypertension artérielle (HTA) ++, Angiopathie amyloïde (sujet âgé), Alcoolisme chronique"
    },
    physiopathology: {
      mechanism: "Microanévrismes de Charcot-Bouchard (HTA) sur les petites artères perforantes ou dépôts amyloïdes corticaux se rompant, provoquant un hématome qui comprime le cerveau avec œdème péri-lésionnel."
    },
    etiologies: [
      { cause: "Hypertension Artérielle", frequency: "Très fréquente", importance: "Hématomes profonds (ganglions de la base, thalamus, tronc)" },
      { cause: "Angiopathie amyloïde", frequency: "Fréquente", importance: "Sujet âgé, hématomes lobaires superficiels récidivants" },
      { cause: "Rupture de Malformation Artério-Veineuse (MAV)", frequency: "Rare", importance: "Sujet jeune" },
      { cause: "Iatrogène (Anticoagulants)", frequency: "Augmentation", importance: "Surdosage AVK ou AOD" }
    ],
    clinical: {
      functional: ["Céphalées brutales d'emblée maximales", "Vomissements fréquents en début de tableau", "Déficit neurologique focal d'installation brutale ou rapidement progressive"],
      physical: ["Hémiplégie massive", "Troubles de la conscience (fréquents et précoces)", "Signes d'engagement cérébral possible"],
      biological: [],
      gravity: ["Score de Glasgow bas, engagement, inondation ventriculaire"]
    },
    diagnosis: {
      biological: ["Bilan de coagulation complet en urgence (NFS, Plaquettes, TP, TCA) pour chercher et antagoniser un trouble de l'hémostase."],
      hormonal: [],
      imaging: ["Scanner (TDM) cérébral SANS injection : Examen clé, montre une hyperdensité spontanée intra-parenchymateuse.", "Angioscanner ou Angio-IRM si suspicion de MAV (sujet jeune, localisation atypique)."],
      criteria: ["Clinique de déficit brutal + Hyperdensité spontanée au TDM"]
    },
    differentialDiagnosis: {
      "AVC Ischémique": "La clinique est indiscernable initialement, seul le TDM fait la différence.",
      "Tumeur cérébrale saignant": "Hématome atypique (IRM requise)"
    },
    complications: {
      acute: ["Engagement temporal/amygdalien", "Hydrocéphalie aiguë (si inondation ventriculaire)", "Resaignement précoce"],
      chronic: ["Séquelles motrices/cognitives sévères", "Épilepsie vasculaire tardive"]
    },
    treatment: {
      firstLine: ["Appel au 15, Hospitalisation réanimation ou UNV", "Contrôle STRICT et URGENT de la Tension Artérielle (Cible TAS < 140 mmHg) par Nicardipine ou Urapidil IV.", "Antagonisation en urgence (Vit.K + PPSB si AVK, Idarucizumab si Dabigatran)"],
      secondLine: ["Dérivation ventriculaire externe (DVE) si hydrocéphalie"],
      specific: ["Chirurgie d'évacuation discutée si hématome cérébelleux > 3 cm avec compression du tronc."],
      surveillance: ["Monitorage neuroologique, PIC si coma."]
    },
    keyPoints: {
      toRemember: ["HTA est la cause n°1 des hématomes profonds.", "Angiopathie amyloïde = cause n°1 des lobaires chez le sujet âgé.", "Scanner sans injection : Hyperdensité spontanée.", "Cible TA drastique < 140 mmHg."],
      traps: ["Donner de l'aspirine devant un déficit brutal sans imagerie", "Tarder à antagoniser un patient sous AVK."],
      faq: [],
      keywords: ["Hématome intracérébral", "Angiopathie amyloïde", "Antagonisation AVK", "Microanévrismes Charcot-Bouchard"]
    }
  },
  {
    id: 'hemorragie-meningee',
    categoryId: 'avc',
    name: "Hémorragie Sous-Arachnoïdienne (HSA)",
    definition: {
      concise: "Irruption de sang dans les espaces sous-arachnoïdiens, souvent secondaire à la rupture d'un anévrisme intracrânien.",
      importance: "Urgence vitale (haut risque de resaignement mortel)."
    },
    epidemiology: {
      prevalence: "5% des AVC",
      sexe: "Légère prédominance féminine",
      age: "Moyenne 50-60 ans",
      facteurs: "Tabagisme actif, HTA, Alcool, Antécédents familiaux."
    },
    physiopathology: {
      mechanism: "Rupture de la paroi d'un anévrisme sacculaire au niveau des bifurcations du polygone de Willis. Le sang inonde les citernes de la base, entraînant hypertension intracrânienne brutale, réaction méningée et vasospasme secondaire."
    },
    etiologies: [
      { cause: "Rupture d'anévrisme", frequency: "85%", importance: "Polygone de Willis (Communicante antérieure, Sylvienne...)" },
      { cause: "Idiopathique / Non anévrismale", frequency: "15%", importance: "Hémorragie périmésencéphalique bénigne" },
      { cause: "Traumatique", frequency: "Très fréquente", importance: "Contexte différent (TCC)" }
    ],
    clinical: {
      functional: ["Céphalée en « coup de tonnerre » : d'emblée maximale, atroce, inhabituelle.", "Photophobie, phonophobie", "Vomissements"],
      physical: ["Syndrome méningé (raideur de nuque, signe de Kernig et Brudzinski)", "Pas de déficit sensitivo-moteur dans les formes pures.", "Mais atteinte du III (ptosis, mydriase) = Anévrisme communicante postérieure !"],
      biological: [],
      gravity: ["Coma profond d'emblée, crises convulsives"]
    },
    diagnosis: {
      biological: ["Ponction lombaire : Si TDM normal, LCR de couleur xantochromique, GR élevés inaltérés, surnageant jaune."],
      hormonal: [],
      imaging: ["Scanner (TDM) sans injection : 1ère intention. Hyperdensité dans les sillons corticaux, les vallées sylviennes et les citernes de la base.", "Angioscanner ou Artériographie : Pour localiser et caractériser l'anévrisme."],
      criteria: ["Céphalée en coup de tonnerre + TDM montrant HSA ou PL xantochromique"]
    },
    differentialDiagnosis: {
      "Méningite aiguë": "Syndrome infectieux, installation moins foudroyante",
      "Migraine": "Pas de céphalée en coup de tonnerre"
    },
    complications: {
      acute: ["Resaignement (surtout premières 24h, mortalité > 60%)", "Vasospasme artériel (J4 à J14) -> Ischémie retardée", "Hydrocéphalie aiguë"],
      chronic: ["Hyponatrémie (syndrome de perte de sel)", "Hydrocéphalie chronique à pression normale"]
    },
    treatment: {
      firstLine: ["Hospitalisation en urgence (Neurochir/Réa)", "Repos strict au lit de décubitus, antalgiques", "Traitement de l'anévrisme : Exclusion par Embolisation endovasculaire (coils) ou par Clip chirurgical (craniotomie)"],
      secondLine: ["Prévention du vasospasme : Nimodipine IV ou per os", "Maintien normovolémie/normotension"],
      specific: ["DVE si hydrocéphalie"],
      surveillance: ["Doppler transcrânien quotidien (recherche du vasospasme)."]
    },
    keyPoints: {
      toRemember: ["Céphalée en 'coup de tonnerre' = TDM cérébral immédiat.", "L'anévrisme communicante antérieure est le plus fréquent.", "Atteinte du III douloureux = signe localisateur (Anévrisme Communicante Postérieure).", "Vasospasme artériel de J4 à J14 (Doppler + Nimodipine)."],
      traps: ["Penser à une simple migraine", "Ne pas faire de PL face à un TDM normal dans les premières heures."],
      faq: [],
      keywords: ["Céphalée en coup de tonnerre", "Anévrisme", "Vasospasme", "Nimodipine", "Xantochromique", "Artériographie"]
    }
  },
  {
    id: 'myasthenie',
    categoryId: 'peripheriques',
    name: "Myasthénie (Myasthenia Gravis)",
    definition: {
      concise: "Maladie auto-immune de la jonction neuromusculaire post-synaptique.",
      importance: "Risque de crise myasthénique (détresse respiratoire et troubles de la déglutition) pouvant engager le pronostic vital."
    },
    epidemiology: {
      prevalence: "Rare",
      sexe: "Pic féminin vers 20-30 ans, pic masculin vers 60 ans",
      age: "Bimodale",
      facteurs: "Thymome (15%), hyperplasie thymique (60%)"
    },
    physiopathology: {
      mechanism: "Auto-anticorps (anti-RACh ou anti-MuSK) bloquant et détruisant les récepteurs à l'acétylcholine sur la plaque motrice musculaire. Défaut de transmission neuromusculaire (bloc post-synaptique)."
    },
    etiologies: [
      { cause: "Auto-immune pure", frequency: "Majoritaire", importance: "Associée souvent à une hyperplasie thymique" },
      { cause: "Paranéoplasique", frequency: "15%", importance: "Secondaire à un Thymome (tumeur du thymus)" }
    ],
    clinical: {
      functional: ["Fatigabilité musculaire à l'effort, régressive au repos", "Fluctuation : majoration en fin de journée", "Atteinte oculaire : Ptosis (tombée paupière), Diplopie (vision double)", "Atteinte bulbaire : Troubles de la phonation (voix nasonnée), mastication, déglutition"],
      physical: ["Déficit moteur à l'effort répété", "Pas de trouble sensitif, ROT normaux, pas d'amyotrophie"],
      biological: [],
      gravity: ["Crise myasthénique : dyspnée, paralysie respiratoire nécessitant l'intubation"]
    },
    diagnosis: {
      biological: ["Dosage des Anticorps : Anti-RACh (Récepteurs Acétylcholine) positifs dans 85% des formes généralisées. Anti-MuSK si anti-Rach négatifs."],
      hormonal: [],
      imaging: ["Scanner thoracique : INDISPENSABLE de rechercher un Thymome (ou hyperplasie)"],
      criteria: ["Clinique oscillante + EMG + Anticorps positifs (+/- test thérapeutique aux anticholinestérasiques)."]
    },
    differentialDiagnosis: {
      "Syndrome miasthénique de Lambert-Eaton": "Bloc pré-synaptique, associé à un cancer du poumon petite cellule, amélioration du déficit à l'effort (facilitation).",
      "Botulisme": "Syndrome anticholinergique, signes digestifs",
      "SLA": "Fasciculations, pas de fluctuation à l'effort"
    },
    complications: {
      acute: ["Crise myasthénique (nécessite IgIV ou Plamaphérèse)", "Crise cholinergique (surdosage médicamenteux)"],
      chronic: ["Invalidité fonctionnelle (formes réfractaires)"]
    },
    treatment: {
      firstLine: ["Traitement symptomatique : Anticholinestérasiques per os (Pyridostigmine/Mestinon, Ambénonium/Mytélase) pour augmenter l'acétylcholine dans la fente synaptique.", "Thymectomie si thymome, ou chez la femme jeune avec Ac anti-Rach avec hyperplasie."],
      secondLine: ["Traitement de fond immunosuppresseur : Corticoïdes, Azathioprine (Imurel), Mycophénolate (CellCept)."],
      specific: ["En crise myasthénique aiguë : Immunoglobulines IV ou Échanges plasmatiques.", "Contre-indications médicamenteuses TRES strictes ! (Curarisants, Aminosides, Macrolides, Bêtabloquants...)"],
      surveillance: ["Capacité vitale en cas de crise."]
    },
    keyPoints: {
      toRemember: ["Fluctuation nycthémérale + fatigabilité à l'effort = Myasthénie.", "Troubles oculaires (ptosis, diplopie) indolores souvent révélateurs.", "Absolument réaliser un scanner thoracique (recherche Thymome).", "Énormément de médicaments contre-indiqués (Curarisants, Bêtabloquants, Aminosides, Macrolides...)."],
      traps: ["Confondre avec un AVC tronc basilaire", "Prescrire un bêtabloquant ou un macrolide (déclenche une crise respiratoire vitale !)."],
      faq: [],
      keywords: ["Plaque motrice", "Anti-RACh", "Thymome", "Ptosis", "Mestinon", "Fatigabilité"]
    }
  },
  {
    id: 'sclerose-laterale-amyotrophique',
    categoryId: 'degeneratives',
    name: "Sclérose Latérale Amyotrophique (SLA) - Maladie de Charcot",
    definition: {
      concise: "Maladie dégénérative rapide et fatale des motoneurones moteurs centraux (cortex) et périphériques (corne antérieure de la moelle épinière).",
      importance: "Pronostic sombre : 3 à 5 ans de survie après le diagnostic, décès par détresse respiratoire."
    },
    epidemiology: {
      prevalence: "2-3 pour 100 000 habitants",
      sexe: "Légère prédominance masculine",
      age: "Moyenne au diagnostic 60 ans",
      facteurs: "Idiopathique (90%), Formes génétiques (SOD1, C9orf72 - 10%)"
    },
    physiopathology: {
      mechanism: "Dégénérescence des motoneurones conduisant à l'association d'un syndrome pyramidal (central) et neurogène périphérique (périphérique) sur un même territoire corporel."
    },
    etiologies: [
      { cause: "Sporadique", frequency: "90%", importance: "Pas de cause retrouvée" },
      { cause: "Familiale", frequency: "10%", importance: "Gènes SOD1, TARDBP, C9orf72" }
    ],
    clinical: {
      functional: ["Faiblesse musculaire progressive, asymétrique", "Troubles de la déglutition, modifications de la voix (dysarthrie)", "Crampes ++"],
      physical: ["Syndrome syndrome pyramidal (Hyperréflexie, Babinski, hypertonie spastique)", "Syndrome neurogène périphérique (Amyotrophie sévère, fasciculations diffuses, déficit moteur)", "PAS DE TROUBLES SENSITIFS, PAS DE TROUBLES SPHINCTÉRIENS, OCULOMOTRICITÉ CONSERVÉE"],
      biological: [],
      gravity: ["Atteinte respiratoire (diaphragme) -> asyphxie", "Atteinte bulbaire -> fausses routes majeurs"]
    },
    diagnosis: {
      biological: ["CPK normaux ou modérément augmentés (lyse musculaire)"],
      hormonal: [],
      imaging: ["IRM Médullaire et cérébrale : Pour NORMALE (éliminer les diagnostics différentiels comme une myélopathie cervicarthrosique)."],
      criteria: ["Électromyogramme (EMG) : Tracé neurogène sévère (dénervation active), vitesses de conduction normales.", "Critères de El Escorial (association central/périphérique sur plusieurs étages corticaux, bulbaires, cervicaux, lombaires)."]
    },
    differentialDiagnosis: {
      "Myélopathie cervicarthrosique": "Comprime la moelle cervicale (pyramidal MI et amyotrophie MS), mais souvent troubles sensitifs.",
      "Neuropathie motrice avec blocs de conduction": "EMG différent, traitable par IgIV"
    },
    complications: {
      acute: ["Pneumopathie d'inhalation", "Détresse respiratoire terminale"],
      chronic: ["Dénutrition sévère, syndrome de glissement, paralysie flasque totale"]
    },
    treatment: {
      firstLine: ["Riluzole (inhibiteur du glutamate) : allonge modérément la survie (de qqs mois).", "Prise en charge pluridisciplinaire (Kinésithérapeute, Orthophoniste, Ergothérapeute)."],
      secondLine: ["Gastrostomie d'alimentation (quand CV baisse ou fausses routes majeurs)", "Ventilation non invasive (VNI) au masque."],
      specific: ["Pas de soins curatifs existants", "Soins palliatifs en fin de vie (accompagnement de la détresse ventilatoire par morphiniques/midazolam)"],
      surveillance: ["Explorations Fonctionnelles Respiratoires (EFR / Capacité Vitale) tous les 3 mois.", "Poids régulier (dénutrition)"]
    },
    keyPoints: {
      toRemember: ["Association Motoneurone Central (Pyramidal) + Motoneurone Périphérique (Amyotrophie/Fasciculations) = SLA.", "Fonctions sensitives, sphinctériennes, et oculomotrices TOUJOURS intègres.", "Absolument éliminer une simple myélopathie cervicale (IRM de la moelle).", "Décès respiratoire dans les 3 à 5 ans."],
      traps: ["Chercher des troubles sensitifs dans la maladie de Charcot.", "Opérer des sténoses cervicales banales sans avoir fait d'EMG."],
      faq: [],
      keywords: ["Motoneurone central", "Corne antérieure", "Fasciculations", "Babinski + Amyotrophie", "Riluzole"]
    }
  },
  {
    id: 'meningite-bacterienne',
    categoryId: 'inflammatoires',
    name: "Méningite Bactérienne de l'Adulte",
    definition: {
      concise: "Infection aiguë sévère bactérienne des espaces sous-arachnoïdiens et du liquide cérébro-spinal (LCR).",
      importance: "Urgence médicale thérapeutique EXTREME (mortalité et séquelles neurologiques élevées)."
    },
    epidemiology: {
      prevalence: "Problème de santé publique",
      sexe: "Égale",
      age: "Pneumocoque (extrêmes de la vie, immunodéprimés), Méningocoque (sujets jeunes, collectivités).",
      facteurs: "Splénectomie, alcoolisme, asplénie (Pneumocoque). Vie en communauté (Méningocoque). Immunodépression, grossesse, sujet très âgé (Listéria)."
    },
    physiopathology: {
      mechanism: "Bactériémie se propageant dans le LCR ou brèche ostéo-méningée. L'inflammation méningée majeure entraîne pus, œdème et lésions vasculaires."
    },
    etiologies: [
      { cause: "Streptococcus pneumoniae (Pneumocoque)", frequency: "60%", importance: "Mortalité forte, séquelle surdi-mutité. Pas de contage." },
      { cause: "Neisseria meningitidis (Méningocoque)", frequency: "25%", importance: "Potentiel épidémique, purpura fulminans ++" },
      { cause: "Listeria monocytogenes", frequency: "10%", importance: "Sujets âgés ou femmes enceintes. Atteinte rhomboencéphalique (paires crâniennes)." }
    ],
    clinical: {
      functional: ["Syndrome infectieux franc (Fièvre élevée > 39°C, frissons)", "Syndrome méningé : Céphalées violentes, photophobie, phonophobie, vomissements en jet"],
      physical: ["Raideur de nuque, signe de Kernig, signe de Brudzinski", "A rechercher IMPÉRATIVEMENT bébé déshabillé : Purpura nécrotique (Purpura Fulminans)."],
      biological: [],
      gravity: ["Troubles de la conscience (coma, obnubilation) -> Méningo-encéphalite", "Purpura extensif -> Choc septique", "Signes de focalisation"]
    },
    diagnosis: {
      biological: ["Ponction Lombaire (LCR) : trouble/purulent. Hyperprotéinorachie (> 1g/L), Hypoglycorachie franche (Glycorachie < 0,4 * Glycémie), PNN altérés très augmentés. Examen direct au Gram.", "Hémocultures avant ATB."],
      hormonal: [],
      imaging: ["Scanner (TDM) cérébral AVANT la PL uniquement si : Signes de focalisation, crises convulsives, Glasgow < 11, immunodépression ou anomalies de la coagulation."],
      criteria: ["LCR purulent riche en polynucléaires avec hypoglycorachie."]
    },
    differentialDiagnosis: {
      "Méningite virale": "Liquide clair, lymphocytaire, normoglycorachique. Évolution bénigne.",
      "Hémorragie méningée": "Céphalée ++ mais apyrétique."
    },
    complications: {
      acute: ["Purpura fulminans / Choc", "Engagement cérébral", "Empyème ou Abcès intracrânien"],
      chronic: ["Surdité sévère (surtout pneumocoque)", "Épilepsie secondaire", "Retard de développement psychomoteur (enfant)"]
    },
    treatment: {
      firstLine: ["ANTIBIOTHÉRAPIE BACTÉRICIDE PROBABILISTE IV EN URGENCE : C3G (Céfotaxime ou Ceftriaxone) forte dose. Si suspicion de Listéria, rajouter Amoxicilline et Gentamicine.", "Si Purpura Fulminans : injection de Ceftriaxone IM au domicile par le généraliste, avant transport SAMU !"],
      secondLine: ["Corticothérapie adjuvante (Dexaméthasone) AVANT ou DANS LES 12h de la première dose d'ATB (prévient les séquelles auditives au Pneumocoque)."],
      specific: ["Isolement Gouttelettes absolu (pour le méningocoque).", "Déclaration obligatoire ARS si Méningocoque ! Prophylaxie des sujets contacts."],
      surveillance: ["État de conscience, Température."]
    },
    keyPoints: {
      toRemember: ["Pneumocoque : gravité, otite/brèche associée. Méningocoque : épidémie, jeune, purpura.", "Le retard au traitement antibiotique = perte de chances de survie.", "Glycorachie très basse (< 50% de la glycémie) oriente systématiquement vers la bactérie.", "Dexaméthasone pour limiter les séquelles."],
      traps: ["Retarder la 1ère dose d'antibiotique à l'hôpital en attendant le scanner ou un avis." , "Faire TDM avant PL chez un sujet normal avec un tableau typique simple."],
      faq: [],
      keywords: ["Pneumocoque", "Méningocoque", "Purpura Fulminans", "C3G Urgence", "Hypoglycorachie", "Dexaméthasone"]
    }
  },
  {
    id: 'alzheimer',
    categoryId: 'degeneratives',
    name: "Maladie d'Alzheimer",
    definition: {
      concise: "Maladie dégénérative du cerveau causant une perte progressive, irréversible et globale des fonctions cognitives, aboutissant à une démence.",
      importance: "Première cause de démence dans le monde (enjeu de santé majeur suite au vieillissement)."
    },
    epidemiology: {
      prevalence: "Très fréquente",
      sexe: "Légère prédominance féminine",
      age: "Risque très fortement corrélé à l'âge (5% des plus de 65 ans, 20% des plus de 80 ans)",
      facteurs: "Age (facteur num 1), Susceptibilité génétique (ApoE4), Risques cardiovasculaires."
    },
    physiopathology: {
      mechanism: "2 lésions histologiques obligatoires : Plaques séniles extra-cellulaires (accumulation de peptide β-amyloïde) ET Dégénéréscence neurofibrillaire intra-neuronal (Protéine TAU hyperphosphorylée). Atrophie cortico-sous-corticale."
    },
    etiologies: [
      { cause: "Majorité Sporadique", frequency: "99%", importance: "Début tardif (>65 ans)" },
      { cause: "Génétique autosomique dominante", frequency: "1%", importance: "Début précoce (PSEN1, PSEN2, APP)" }
    ],
    clinical: {
      functional: ["Syndrome amnésique de type hippocampique (oubli à mesure, ne retient pas la nouvelle information, l'indiçage n'aide pas !).", "Aphasie (manque du mot), Apraxie (impossibilité d'effectuer des gestes, habillage), Agnosie (non reconnaissance des visages ou des objets)."],
      physical: ["Longtemps l'examen neurologique physique reste strictement normal !", "A un stade évolué très sévère: hypertonie oppositionnelle, troubles de la marche, mutisme."],
      biological: [],
      gravity: ["Perte totale d'autonomie (GIR 1 ou 2), dénutrition, chutes, complications de décubitus."]
    },
    diagnosis: {
      biological: ["La ponction lombaire, dans l'avenir (biomarqueurs), montre une $\\beta$-Amyloide basse et un TAU élevé dans le LCR (réservée aux formes atypiques ou précoces jeunes). Test vitamines B12, TSH obligatoires pour élim. démences curables."],
      hormonal: [],
      imaging: ["IRM cérébrale indispensable : Élimine tumeurs, hydrocéphalie, ou multiples AVCs. Confirme l'atrophie hippocampique et corticale.", "TEP au FDG : hypométabolisme temporo-pariétal."],
      criteria: ["Déclin mnésique de type hippocampique + Syndrome aphaso-apraxo-agnosique + Retentissement fonctionnel majeur (autonomie) + IRM en accord."]
    },
    differentialDiagnosis: {
      "Démences Vasculaires": "Début brutal post AVC (marche d'escalier), signes focaux moteurs.",
      "Démence Frontotemporale (DFT)": "Troubles du comportement précoces purs, préservation initiale de la mémoire spatiale.",
      "Démence à Corps de Lewy (DCL)": "Fluctuations, Hallucinations visuelles très claires, syndrome parkinsonien.",
      "Confusion aiguë": "Brutal, réversible (infection, toxique, médicaments)."
    },
    complications: {
      acute: ["Syndromes confusionnels ajoutés fréquents.", "Troubles majeurs du comportement (agressivité, errances nocturnes)."],
      chronic: ["Dépendance totale et cachexie ou fausses routes."]
    },
    treatment: {
      firstLine: ["Aucun traitement curatif actuellement (Ac monoclonaux anti-amyloïdes en plein developpement).", "Les traitements symptomatiques (anticholinestérasiques) ont été déremboursés en France (balance bénéfice/risque)."],
      secondLine: ["Prise en charge bio-psycho-sociale : Orthophonie, soutien aux aidants, psychométricien, ALD 100%, protection de justice (sauvegarde de justice, tutelle)."],
      specific: ["Eviter les sédatifs et repérage systématique des douleurs ou malaises causant des agitations.", "Antidépresseur (ISRS) en cas de dépression (très fréquente la 1ère année)."],
      surveillance: ["Suivi du score MMSE (Mini Mental State Examination), autonomie iADL."]
    },
    keyPoints: {
      toRemember: ["Amnésie de type HIPPOCAMPIQUE (oubli à mesure, l'indice ne l'aide pas).", "S'accompagne très souvent d'Aphasie, Agnosie et Apraxie.", "Le suivi du patient et le soutien psychologique à l'AIDANT est la clé du tuteur !"],
      traps: ["Porter un pronostique Alzheimer après un simple épisode confuso-onirique lors d'une infection urinaire en pédiatrie", "Oublier de chercher un hématome sous-dural chronique ou une hypothyroïdie, qui peuvent faire un tableau pseudo-démentiel guérissable !"],
      faq: [],
      keywords: ["Amnésie hippocampique", "ApoE4", "Protéine Tau", "Plaques séniles", "MMSE"]
    }
  }
];

import { extraFichesData } from './fichesPart2';
import { basesData } from './bases';
import { catData } from './cat';
import { autresData } from './autres';
import { congenitalesData } from './congenitales';

fichesData.push(...extraFichesData);
fichesData.push(...basesData);
fichesData.push(...catData);
fichesData.push(...autresData);
fichesData.push(...congenitalesData);

