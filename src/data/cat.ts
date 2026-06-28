import { Disease } from '../types';

export const catData: Disease[] = [
  {
    id: 'cat-etat-mal-epileptique',
    categoryId: 'cat',
    name: "CAT devant un État de Mal Épileptique (EME)",
    definition: {
      concise: "Algorithme de prise en charge en urgence pré-hospitalière et hospitalière d'une crise comitiale anormalement longue ou de crises répétées sans reprise de conscience.",
      importance: "Urgence vitale absolue ! Une crise > 5 min ne s'arrête souvent plus spontanément. Risque neurologique irréversible à 30 min."
    },
    epidemiology: {},
    physiopathology: {
      mechanism: "Échec des mécanismes endogènes d'inhibition des récepteurs GABA, ou activation excessive des récepteurs glutamatergiques. L'hyperactivité neuronale continue entraîne secondairement des lésions neuronales par excitotoxicité."
    },
    etiologies: [
      { cause: "Chez l'épileptique", frequency: "Fréquent", importance: "Non-observance thérapeutique, modification du traitement, infection, manque de sommeil." },
      { cause: "Symptomatique aiguë", frequency: "Très fréquent", importance: "AVC, traumatisme crânien, méningite/encéphalite, troubles hydro-électrolytiques, sevrage (alcool, benzos)." }
    ],
    clinical: {
      functional: ["Savoir la reconnaitre à temps : Ne pas attendre la fin de la crise si elle dépasse les 5 minutes."],
      physical: [
        "1. EME Convulsif : Secousses motrices bilatérales, coma partagé.",
        "2. Temps T1 (5 min) : La crise dure au-delà, traitement obligatoire.",
        "3. EME Non Convulsif : État confusionnel prolongé, troubles aphasiques constants."
      ],
      biological: [],
      gravity: ["Détresse respiratoire, inhalation, hyperthermie maligne, collapsus."]
    },
    diagnosis: {
      biological: [
        "Bilan flash d'entrée :",
        "- Glycémie capillaire IMMÉDIATE (Dextro).",
        "- Ionogramme, Calcémie.",
        "- Toxiques, NFS, CRP."
      ],
      hormonal: [],
      imaging: ["Scanner cérébral dès que possible UNIQUEMENT si patient stabilisé."],
      criteria: [
        "Étape 1 : Constater la durée > 5 min.",
        "Étape 2 : Éliminer l'hypoglycémie."
      ]
    },
    differentialDiagnosis: {
      "Hypoglycémie profonde": "A éliminer d'office par Dextro !",
      "Syncope convulsivante": "Très brève, sur un malaise brutal (baisse TA).",
      "Crise psychogène non-épileptique": "Mouvements asynchrones, résistance à l'ouverture des yeux."
    },
    complications: {
      acute: ["Asphyxie, troubles du rythme cardiaque, rhabdomyolyse."],
      chronic: ["Séquelles mnésiques et cognitives majeures."]
    },
    treatment: {
      firstLine: [
        "Temps T = 0 à 5 min : Liberté des VAS, PLS, O2, VVP. Dosage glycémie !!",
        "Temps T = 5 min : Benzodiazépine IV (ex: Clonazépam 1 mg). Renouvelable 1x si échec après 5 min."
      ],
      secondLine: [
        "Temps T = 10 à 30 min : Antiépileptique d'action prolongée en perfusion (Fosphénytoïne, Valproate ou Lévétiracétam)."
      ],
      specific: [
        "Temps T > 30 min (EME Réfractaire) : Anesthésie générale (Propofol / Midazolam à forte dose) et intubation."
      ],
      surveillance: [
        "Au-delà de 30 minutes : Transfert immédiat en Réanimation.",
        "Monitorage continu et protection des voies aériennes (Intubation).",
        "Mise en place d'un Électroencéphalogramme (EEG) continu."
      ]
    },
    keyPoints: {
      toRemember: [
        "L'hypoglycémie est la première cause à éliminer AVANT TOUT DEVANT UN COMA ! (Dextro).",
        "Ne JAMAIS faire plus de 2 injections de Benzodiazépines (risque de dépression respiratoire massive cumulative).",
        "Une crise qui dure plus de 5 minutes NE S'ARRÊTE SOUVENT PLUS SPONTANÉMENT."
      ],
      traps: [
        "Tarder à intuber un état de mal qui ne répond plus du tout à 30 minutes."
      ],
      faq: [],
      keywords: ["EME", "Clonazépam", "Fosphénytoïne", "Hypoglycémie", "Coma"]
    }
  },
  {
    id: 'cat-syndromes-extrapyramidaux',
    categoryId: 'cat',
    name: "CAT devant des Syndromes Extrapyramidaux",
    definition: {
      concise: "Algorithme d'orientation diagnostique et de prise en charge devant l'apparition de troubles moteurs extrapyramidaux (tremblements, rigidité, lenteur).",
      importance: "Il est crucial de différencier le Syndrome Parkinsonien Iatrogène (réversible et urgent si malin) de la véritable Maladie de Parkinson."
    },
    epidemiology: {},
    physiopathology: {
      mechanism: "Le plus souvent dégénérescence du neurone dopaminergique de la voie nigro-striatale, ou effet de dysrégulation dopaminergique (Iatrogène, par neuroleptiques antagonistes D2)."
    },
    etiologies: [
      { cause: "Maladie de Parkinson primitive", frequency: "Très fréquente", importance: "Dégénératif pur" },
      { cause: "Iatrogène (Neuroleptiques)", frequency: "Fréquent", importance: "Sujet psychiatrique ++, réversible." },
      { cause: "Syndromes Parkinsonien-plus", frequency: "Rare", importance: "Atrophie multi-systématisée (AMS), Paralysie supranucléaire progressive (PSP)." },
      { cause: "Vascularisation / Intoxication", frequency: "Moins fréquent", importance: "État lacunaire du striatum, Intoxication CO ou Manganèse." }
    ],
    clinical: {
      functional: ["Savoir le reconnaitre : Lenteur d'exécution (bradykinésie) et tremblements."],
      physical: [
        "1. Akinésie / Hypokinésie (amimie, perte du ballant du bras).",
        "2. Rigidité plastique en 'tuyau de plomb' (roue dentée).",
        "3. Tremblement de repos (4-6 Hz, régulier, asymétrique)."
      ],
      biological: [],
      gravity: ["Syndrome malin des neuroleptiques : fièvre, rigidité extrême, CPK."]
    },
    diagnosis: {
        biological: [
          "Bilan d'orientation :",
          "- Bilan du Cuivre (si sujet jeune).",
          "- CPK (Si suspicion de syndrome malin)."
        ],
        hormonal: [],
        imaging: [
          "- IRM Cérébrale (Éliminer les causes vasculaires/tumorales).",
          "- DAT-scan (Optionnel : confirme le déficit dopaminergique)."
        ],
        criteria: [
          "Étape 1 : Identifier la triade Parkinsonienne.",
          "Étape 2 : Chercher l'asymétrie et la réponse à la L-DOPA."
        ]
      },
      differentialDiagnosis: {
        "Iatrogénie": "Rechercher la prise de neuroleptiques, antiémétiques (Primpéran).",
        "Tremblement essentiel": "Tremblement d'action/posture (non de repos), bilatéral.",
        "Syndrome pyramidal": "Hypertonie élastique, ROT vifs, signe de Babinski.",
        "Démence à Corps de Lewy": "Hallucinations précoces, fluctuations cognitives."
      },
      complications: {
        acute: ["Syndrome malin des neuroleptiques."],
        chronic: ["Chutes, dépression, hypotension orthostatique."]
      },
      treatment: {
        firstLine: [
          "1. Éliminer l'iatrogénie : Arrêter tout neuroleptique si possible.",
          "2. Si urgence maligne : Arrêt ABSOLU des neuroleptiques, réanimation."
        ],
        secondLine: [
          "Maladie de Parkinson (Sujet âgé) : L-Dopa (Modopar) + Inhibiteur dopa-décarboxylase.",
          "Maladie de Parkinson (Sujet jeune) : Agonistes dopaminergiques en priorité."
        ],
        specific: [
          "Kiné motrice continue.",
          "Anticholinergiques pour le tremblement invalidant du sujet jeune."
        ],
        surveillance: [
          "Adresser au neurologue pour confirmation diagnostique.",
          "Surveillance des dyskinésies et du syndrome d'épuisement ('wearing-off') sous traitement."
        ]
      },
      keyPoints: {
        toRemember: [
          "Triade = Tremblement de repos + Akinésie + Rigidité plastique.",
          "Une asymétrie marquée signe très souvent la maladie de Parkinson.",
          "Un syndrome parkinsonien chez un patient schizophrène = chercher le neuroleptique caché !"
        ],
        traps: [
          "Ignorer un petit tremblement de la main d'un patient sous Haldol.",
          "Confondre avec le tremblement essentiel (qui, lui, touche le mouvement intentionnel et non le repos)."
        ],
        faq: [],
        keywords: ["Syndrome Parkinsonien", "Tremblement de repos", "Akinésie", "Roue dentée", "Neuroleptiques"]
      }
  },
  {
    id: 'cat-paralysie-faciale',
    categoryId: 'cat',
    name: "CAT devant une Paralysie Faciale 'a frigore' (Cabinet de MG)",
    definition: {
      concise: "Prise en charge au cabinet de médecine générale d'une paralysie faciale périphérique, de sa reconnaissance à son traitement et ses critères d'adressage à l'ORL.",
      importance: "Il est primordial d'éliminer les autres causes, de protéger immédiatement l'œil et d'initier une corticothérapie précoce."
    },
    epidemiology: {},
    physiopathology: {
      mechanism: "Paralysie du territoire supérieur et inférieur de l'hémiface, isolée, d'installation rapide (maximale en 24h à 48h)."
    },
    etiologies: [
      { cause: "Paralysie faciale 'a frigore' (idiopathique)", frequency: "La plus fréquente", importance: "Diagnostic d'élimination." }
    ],
    clinical: {
      functional: ["Savoir la reconnaitre : Paralysie du territoire SUPÉRIEUR ET INFÉRIEUR de l'hémiface."],
      physical: [
        "1. Clinique typique : Paralysie ISOLÉE.",
        "2. Installation : MAXIMALE EN 24H/48H.",
        "3. Examen global : EXAMEN NEUROLOGIQUE NORMAL."
      ],
      biological: [],
      gravity: ["Risque oculaire (kératite d'exposition) par défaut d'occlusion palpébrale."]
    },
    diagnosis: {
      biological: [
        "Bilan pour éliminer d'autres causes :",
        "- Diabète : Glycémie à jeun.",
        "- Lyme : Sérologie de Lyme.",
        "- Syphilis : TPHA VDRL.",
        "- Sérologie VIH avec accord du patient."
      ],
      hormonal: [],
      imaging: [],
      criteria: [
        "Étape 1 : Savoir la reconnaitre.",
        "Étape 2 : Éliminer les autres causes possibles de paralysie faciale périphérique."
      ]
    },
    differentialDiagnosis: {
      "Syndrome méningé (fébrile ou afébrile)": "Indique une PL en urgence.",
      "Traumatisme": "ATCD Traumatisme crânien récent ou Fracture du Rocher.",
      "Zona du ganglion géniculé": "Aura - éruption érythémato-vésiculeuse du conduit de l'oreille (Ramsay-Hunt).",
      "Atteinte bilatérale": "Évoquer Sarcoïdose, SEP, ou Polyradiculonévrite.",
      "Ophtalmoplégie": "Chez la jeune femme avec signes neuro -> Examen ophtalmo."
    },
    complications: {
      acute: ["Kératite d'exposition nécessitant une protection oculaire immédiate."],
      chronic: ["Séquelles fonctionnelles si la rééducation est mal conduite."]
    },
    treatment: {
      firstLine: [
        "PROTECTION OCULAIRE en prévention de la kératite :",
        "- Larmes artificielles (jour)",
        "- Pommade vitamine A (nuit)",
        "- Cache oculaire nocturne"
      ],
      secondLine: [
        "CORTICOTHÉRAPIE per os EN URGENCE :",
        "- 1 mg/kg/j pendant 5 jours",
        "- Décroissance sur 10 jours",
        "- Durée totale = 15 jours"
      ],
      specific: [
        "KINÉSITHÉRAPIE + ORTHOPHONIE :",
        "- Massages et exercices miroir",
        "- Usage de chewing-gum",
        "Contre-indication ferme : Électrothérapie."
      ],
      surveillance: [
        "Quand adresser à l'ORL ? TOUTE paralysie faciale périphérique doit être adressée à l'ORL en urgENCE pour : Otoscopie, Tympanométrie, Audiométrie, Palpation parotidienne.",
        "On recherche : Zona du ganglion géniculé, Otite chronique ou cholestéatomateuse, Tumeur parotidienne maligne, Surdité de perception (Neurinome du VIII)."
      ]
    },
    keyPoints: {
      toRemember: [
        "Étape 1: Reconnaitre (Supérieur/Inférieur, isolée, max en 24/48h, exam neuro normal).",
        "Étape 2: Éliminer les infections (VIH, Lyme, Syphilis), diabète, et traumatismes.",
        "Étape 3: Traitement triple : Protection œil, Corticoïdes urgents, Kiné sans électrothérapie."
      ],
      traps: [
        "Omettre de protéger l'œil (Larmes + Pommade + Cache).",
        "Utiliser l'électrothérapie."
      ],
      faq: [],
      keywords: ["A frigore", "Supérieur et Inférieur", "Corticothérapie", "Protection oculaire", "ORL"]
    }
  },
  {
    id: 'cat-hemorragie-meningee',
    categoryId: 'cat',
    name: "CAT devant une Hémorragie Méningée (HSA)",
    definition: {
      concise: "Algorithme d'urgence diagnostique et thérapeutique devant des signes cliniques ou radiologiques de saignement dans l'espace sous-arachnoïdien.",
      importance: "Extrême urgence vitale. Triple risque de mort subite : Hémorragie initiale, resaignement précoce, et ischémie par vasospasme."
    },
    epidemiology: {},
    physiopathology: {
      mechanism: "Irritation méningée par le sang libre (Syndrome méningé) + augmentation brutale de la Pression Intra-Crânienne (PIC). L'étiologie non-traumatique majeure est la rupture d'anévrisme vasculaire ("
    },
    etiologies: [
      { cause: "Rupture d'Anévrisme", frequency: "85%", importance: "Polygone de Willis." },
      { cause: "Idiopathique périmésencéphalique", frequency: "15%", importance: "Bénigne en l'absence d'anévrisme identifié" }
    ],
    clinical: {
      functional: ["Savoir le suspecter : Céphalées en coup de tonnerre (CCT)."],
      physical: [
        "1. Céphalées explosives d'emblée à intensité maximale.",
        "2. Syndrome méningé (Raideur de nuque, photo/phonophobie, vomissements).",
        "3. Troubles de vigilance et paralysie du III (Anévrisme communicante postérieure)."
      ],
      biological: [],
      gravity: ["Troubles de la conscience de profondeur variable, convulsions, collapsus."]
    },
    diagnosis: {
      biological: [
        "Ponction Lombaire (Si examen TDM normal, réaliser à H+12 idéalement):",
        "- Liquide uniformément hémorragique sur 3 tubes (incoagulable).",
        "- Surnageant xanthochromique (jaune, confirme le saignement ancien)."
      ],
      hormonal: [],
      imaging: [
        "- TDM cérébral SANS INJECTION en urgence extrême (Hyperdensité basale).",
        "- Angio-TDM pour cartographier le polygone de Willis et l'anévrisme."
      ],
      criteria: [
        "Étape 1 : Suspecter devant la céphalée explosive.",
        "Étape 2 : Confirmer par le Scanner sans injection."
      ]
    },
    differentialDiagnosis: {
      "Hémorragie intraparenchymateuse": "Déficit focal d'emblée majeur, visualisation TDM différente.",
      "Méningite aiguë": "Hyperthermie intense, survenue progressive, LCR louche (GB) et non hémorragique pur.",
      "Migraine forte": "Début progressif, ATCD connus, calmé par noir/sommeil."
    },
    complications: {
      acute: ["Resaignement (mortel, pic 24-48h).", "Hydrocéphalie aiguë par blocage."],
      chronic: ["Vasospasme artériel (J4 à J14) entraînant un AVC ischémique fatal."]
    },
    treatment: {
      firstLine: [
        "1. Sécuriser & Repos STRICT au lit avec sédation, éviter tout effort/toux.",
        "2. URGENCE : Exclusion de l'anévrisme (Coils endovasculaires ou Clips chirurgicaux) < 48h."
      ],
      secondLine: [
        "3. Lutter contre le vasospasme : NIMODIPINE (Inhibiteur calcique) systématique.",
        "4. Gérer l'hydrocéphalie : Dérivation Ventriculaire Externe (DVE) si HTIC."
      ],
      specific: [
        "Maintien de la TA systolique basse (avant l'exclusion) puis modérée (pendant vasospasme)."
      ],
      surveillance: [
        "Adresser immédiatement en NEURO-RÉANIMATION avec neurochirurgien sur place.",
        "Monitorage quotidien par Doppler Transcrânien (DTC) pour détecter le vasospasme."
      ]
    },
    keyPoints: {
      toRemember: [
        "Un coup de tonnerre dans un ciel serein : C'EST L'HSA avant tout.",
        "Imagerie TDM +++ et PL (dès le TDM négatif) obligatoire si suspicion très forte.",
        "3 Dangers mortels à combattre : Le resaignement (On bouche (coils/clips)), Le vasospasme (Nimodipine), et l'hydrocéphalie (Drain)."
      ],
      traps: [
        "Refuser le diagnostic d'HSA ou renvoyer un jeune céphalalgique sans faire d'examen juste sous prétexte 'qu'il n'a pas de TDM à disposition'.",
        "Ne pas réaliser l'angio-vasculaire."
      ],
      faq: [],
      keywords: ["Coup de tonnerre", "Anevrisme", "Coils", "Nimodipine", "Vasospasme", "Xantochromique"]
    }
  }
];
