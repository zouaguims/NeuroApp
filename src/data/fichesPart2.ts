import { Disease } from '../types';

export const extraFichesData: Disease[] = [
  {
    id: 'migraine',
    categoryId: 'autres',
    name: "Migraine",
    definition: {
      concise: "Céphalée primaire épisodique, souvent unilatérale, pulsatile, aggravée par l'effort et associée à des signes digestifs ou sensoriels.",
      importance: "Très fréquente (15% de la population), retentissement majeur sur la qualité de vie (arrêt de travail)."
    },
    epidemiology: {
      prevalence: "12-15% ",
      sexe: "Femme (rapport 3/1)",
      age: "Début entre 10 et 40 ans",
      facteurs: "Génétique, hormones (migraine cataméniale), stress, privation de sommeil, certains aliments."
    },
    physiopathology: {
      mechanism: "Dépression corticale envahissante (aura) suivie d'une inflammation neurogène stérile des vaisseaux méningés via le système trigémino-vasculaire (libération de CGRP)."
    },
    etiologies: [
      { cause: "Prédisposition génétique", frequency: "Très fréquente", importance: "Polygénique" }
    ],
    clinical: {
      functional: ["Céphalée pulsatile, unilatérale (à bascule), modérée à sévère.", "Aggravation par l'effort physique de routine.", "Nausées, vomissements.", "Photophobie, phonophobie."],
      physical: ["Examen neurologique normal entre et pendant les crises."],
      biological: [],
      gravity: ["Statut migraineux (crise > 72h)"]
    },
    diagnosis: {
      biological: [],
      hormonal: [],
      imaging: ["Aucune imagerie si la clinique est typique et l'examen neurologique normal."],
      criteria: ["Critères ICHD-3 : Crises de 4 à 72h, avec au moins 2 caractéristiques (unilatérale, pulsatile, modérée/sévère, aggravation par effort) et au moins 1 signe associé (nausées/vomissements ou photo/phonophobie)."]
    },
    differentialDiagnosis: {
      "Céphalée de tension": "Bilatérale, non pulsatile, intensité légère à modérée, pas aggravée par l'effort, pas de vomissements.",
      "Hémorragie méningée": "Céphalée en coup de tonnerre (urgence).",
      "Tumeur cérébrale": "Céphalée progressive, matinale, signes focaux."
    },
    complications: {
      acute: ["Statut migraineux", "Infarctus migraineux (exceptionnel)"],
      chronic: ["Chronification de la migraine (par abus d'antalgiques > 15j/mois)"]
    },
    treatment: {
      firstLine: ["Traitement de crise PRECOCE : AINS (Ibuprofène, Kétoprofène) ou Triptans (Sumatriptan) si échec AINS."],
      secondLine: ["Traitement de fond (si crises fréquentes/invalidantes) : Bêtabloquants (Propranolol, Métoprolol), Topiramate, Amitriptyline."],
      specific: ["Anti-CGRP (Anticorps monoclonaux) pour les migraines sévères résistantes."],
      surveillance: ["Tenue d'un calendrier des crises (fréquence, efficacité du traitement)."]
    },
    keyPoints: {
      toRemember: ["Ne jamais associer Ergots de seigle et Triptans (risque de vasospasme sévère).", "Aura classique = visuelle (scotome scintillant), durant 15 à 60 min, avant la céphalée.", "Le risque principal du mauvais traitement de crise est la céphalée par abus d'antalgiques."],
      traps: ["Demander une IRM pour toute migraine sans signe d'alarme atypique.", "Confondre avec une céphalée intraitable d'hypertension intracrânienne."],
      faq: [],
      keywords: ["Aura visuelle", "Triptan", "CGRP", "Céphalée chronifiée"]
    }
  },
  {
    id: 'polyneuropathie-longueur-dependante',
    categoryId: 'peripheriques',
    name: "Polynévrite (Polyneuropathie Longueur-Dépendante)",
    definition: {
      concise: "Atteinte symétrique des nerfs périphériques distaux, progressant des pieds vers les genoux puis les mains.",
      importance: "Très fréquente, cause majeure de douleurs neuropathiques et de troubles trophiques."
    },
    epidemiology: {
      prevalence: "Elevée",
      sexe: "Egal",
      age: "Plus fréquent après 50 ans",
      facteurs: "Diabète (cause numéro 1), Alcoolisme chronique, Iatrogène (Chimiothérapies)."
    },
    physiopathology: {
      mechanism: "Souffrance métabolique, toxique ou ischémique (microangiopathie diabétique) du neurone et de son axone. L'atteinte touche d'abord les fibres les plus longues (membres inférieurs)."
    },
    etiologies: [
      { cause: "Diabète", frequency: "Fréquente", importance: "Dépistage annuel indispensable" },
      { cause: "Alcoolo-carentielle", frequency: "Fréquente", importance: "Carence en Vitamine B1" },
      { cause: "Toxique et Médicamenteuse", frequency: "Variable", importance: "Chimiothérapies (Platines, Taxanes), Amiodarone" },
      { cause: "Amylose", frequency: "Rare", importance: "Atteinte dysautonomique majeure associée" }
    ],
    clinical: {
      functional: ["Paresthésies (fourmillements), dysesthésies, brûlures électriques (douleurs neuropathiques) bilatérales des pieds.", "Sensation de marcher sur du coton.", "Instabilité à la marche (ataxie proprioceptive)."],
      physical: ["Abolition des Réflexes Ostéo-Tendineux (ROT) achilléens.", "Hypoesthésie en 'chaussette'.", "Déficit moteur tardif (steppage).", "Troubles trophiques (Mal perforant plantaire)."],
      biological: [],
      gravity: ["Plaie du pied diabétique avec ostéite et amputation."]
    },
    diagnosis: {
      biological: ["Glycémie à jeun, HbA1c, Vitamine B1, B12, EPS, TSH, Bilan hépatique."],
      hormonal: [],
      imaging: [],
      criteria: ["Electroneuromyogramme (ENMG) : Diminution très sévère des amplitudes (atteinte axonale), vitesses de conduction conservées initialement (sauf si démyélinisation)."]
    },
    differentialDiagnosis: {
      "Mononeuropathie multiple (Multinévrite)": "Atteinte asymétrique et asynchrone tronc par tronc (causes: vascularites, diabète).",
      "Syndrome de Guillain-Barré": "Aigu, proximal et distal, démyélinisant, risque respiratoire."
    },
    complications: {
      acute: ["Surinfection de plaie du pied."],
      chronic: ["Amputation", "Arthropathie de Charcot", "Chutes à répétition"]
    },
    treatment: {
      firstLine: ["Traitement étiologique absolu : Équilibre glycémique optimal, Sevrage alcoolique + Vitaminothérapie B1-B6."],
      secondLine: ["Douleurs neuropathiques : Prégabaline, Gabapentine, Amitriptyline (Laroxyl) ou Duloxétine."],
      specific: ["Soins de pédicurie (prise en charge grade 2 et 3)."],
      surveillance: ["Examen des pieds quotidien par le patient, et test au monofilament par le médecin."]
    },
    keyPoints: {
      toRemember: ["Progression 'longueur-dépendante' : touche les pieds bien avant les mains ('chaussettes' puis 'gants').", "Le diabète et l'alcool sont les causes les plus fréquentes.", "Le mal perforant plantaire est la complication redoutable."],
      traps: ["Utiliser des antalgiques simples (Paracétamol, AINS) pour une douleur neuropathique (totalement inefficaces).", "Ne pas examiner les pieds nus du patient."],
      faq: [],
      keywords: ["Longueur-dépendante", "Diabète", "Alcool", "Vitamine B1", "Monofilament"]
    }
  },
  {
    id: 'tumeur-cerebrale-glioblastome',
    categoryId: 'syndromes-compressifs',
    name: "Glioblastome (Astrocytome de grade 4)",
    definition: {
      concise: "Tumeur cérébrale primitive gliale maligne, la plus fréquente et la plus agressive chez l'adulte.",
      importance: "Pronostic vital effroyable, survie médiane de 15 mois malgré un traitement optimal."
    },
    epidemiology: {
      prevalence: "Rare (3-4/100 000)",
      sexe: "Prédominance masculine",
      age: "Autour de 60 ans",
      facteurs: "Radiothérapie encéphalique antérieure. Pas de facteur de risque lié au mode de vie."
    },
    physiopathology: {
      mechanism: "Prolifération anarchique des astrocytes intra-parenchymateux, avec néo-angiogenèse majeure, invasion des structures adjacentes (souvent en aile de papillon via le corps calleux), et zones de nécrose centrale."
    },
    etiologies: [
      { cause: "Primaire (De novo)", frequency: "90%", importance: "Croissance fulgurante." },
      { cause: "Secondaire", frequency: "10%", importance: "Transformation d'un astrocytome de bas grade." }
    ],
    clinical: {
      functional: ["Céphalées d'Hypertension Intracrânienne (HTIC) : matinales, augmentant aux manœuvres de Valsalva, non soulagées par les antalgiques simples.", "Vomissements en jet soulageant la céphalée.", "Épilepsie partielle ou généralisée de novo (sans ATCD).", "Modifications de la personnalité."],
      physical: ["Déficit neurologique focal d'apparition subaiguë (hémiplégie, aphasie, hémianopsie) s'aggravant progressivement.", "Œdème papillaire au fond d'œil (signe tardif de l'HTIC)."],
      biological: [],
      gravity: ["Engagement cérébral (temporel, sous-falcoriel, amygdalien)"]
    },
    diagnosis: {
      biological: ["Mutation IDH1 (sauvage=pire pronostic, muté=meilleur), Méthylation du promoteur MGMT (prédit la réponse à la chimio) - à partir de la pièce anatomopathologique."],
      hormonal: [],
      imaging: ["IRM cérébrale avec Gadolinium ++++ : Lésion intra-parenchymateuse hétérogène, avec une prise de contraste annulaire périphérique (nécrose centrale), entourée d'un vaste œdème vasogénique digitiforme."],
      criteria: ["IRM typique + Confirmation histologique (biopsie stéréotaxique ou résection exérèse)."]
    },
    differentialDiagnosis: {
      "Métastase cérébrale": "Même aspect en cocarde, mais souvent lésions multiples, jonction substance blanche/grise, néoplasie connue.",
      "Abcès cérébral": "Context infectieux, IRM de diffusion fortement restrictive (« hypersignal blanc » franc).",
      "Lymphome cérébral primitif": "Prise de contraste massive homogène, souvent VIH, sensible aux corticoïdes."
    },
    complications: {
      acute: ["Engagement cérébral (urgence vitale)", "Hémorragie intra-tumorale"],
      chronic: ["Récidive inéluctable", "Détérioration cognitive sévère"]
    },
    treatment: {
      firstLine: ["Chirurgie d'exérèse maximale selon les limites fonctionnelles (éveillé parfois).", "Protocole de Stupp (pour sujet <70 ans bon état) : Radiothérapie + Chimiothérapie concomitante par Témozolomide, suivie de Témozolomide seul."],
      secondLine: ["Corticothérapie (Dexaméthasone) à forte dose pour réduire l'oedème et l'HTIC très rapidement.", "Anti-épileptiques (Lévétiracétam) si crises."],
      specific: ["Soins palliatifs de support essentiels (douleurs, angoisses)."],
      surveillance: ["IRM de suivi post-op et clinico-radiologique strict."]
    },
    keyPoints: {
      toRemember: ["Tumeur primitive très agressive, en 'cocarde' nécrotique à l'IRM, provoquant de l'œdème.", "Triade : HTIC, Foyer (déficit) progressif, Épilepsie.", "Toujours penser aux métastases et chercher la tumeur primitive devant ce type d'IRM.", "La corticothérapie fait presque reculer instantanément la clinique grâce à la levée d'œdème."],
      traps: ["Confondre un glioblastome d'emblée avec un AVC (installation, contexte différent).", "Effectuer une ponction lombaire s'il y a un syndrome d'HTIC à l'IRM (Risque immédiat d'engagement foudroyant !)."],
      faq: [],
      keywords: ["Glioblastome", "Témozolomide", "HTIC", "Prise de contraste annulaire", "IDH", "Engagement"]
    }
  },
  {
    id: 'meningiome',
    categoryId: 'syndromes-compressifs',
    name: "Méningiome",
    definition: {
      concise: "Tumeur cérébrale bénigne développée à partir des cellules arachnoïdiennes des méninges.",
      importance: "Tumeur primitive la plus fréquente. Évolution lente, extra-parenchymateuse."
    },
    epidemiology: {
      prevalence: "Très fréquente (jusqu'à 1% des adultes).",
      sexe: "Femme (rapport 2-3/1)",
      age: "Pic entre 50 et 70 ans",
      facteurs: "Hormonodépendance (Grossesse, progestatifs macro-dosés comme Androcur/Lutényl), Radiothérapie antérieure."
    },
    physiopathology: {
      mechanism: "Prolifération extra-axiale, repoussant le cerveau sans l'envahir (le plus souvent). Dure-mère de la ligne médiane, de la faux du cerveau, ou de la convexité."
    },
    etiologies: [
      { cause: "Idiopathique / Hormonale", frequency: "Fréquente", importance: "Stoppé souvent avec l'arrêt des progestatifs." },
      { cause: "Neurofibromatose de type 2 (NF2)", frequency: "Rare", importance: "Méningiomes multiples." }
    ],
    clinical: {
      functional: ["Souvent asymptomatique (découverte fortuite sur IRM pour autre raison).", "Crises d'épilepsie symptomatiques (par irritation corticale).", "Céphalées modérées."],
      physical: ["Déficit focal progressif localisateur selon la zone comprimée : Tiers antérieur de la faux (Syndrome frontal), Tiers moyen (paraparésie spastique)."],
      biological: [],
      gravity: ["Méningiomes de la base du crâne complexes à opérer enveloppant l'artère carotide interne ou les nerfs optiques."]
    },
    diagnosis: {
      biological: [],
      hormonal: [],
      imaging: ["IRM cérébrale (Gado) : Lésion extra-axiale à base d'implantation durale large (« signe de la queue de comète »), isointense en T1, prenant fortement et de manière homogène le contraste.", "Scanner osseux : Hyperostose de l'os crânien en regard de l'attache parfois."],
      criteria: ["Aspect IRM quasi-pathognomonique (attache durale, refoulement de l'encéphale)."]
    },
    differentialDiagnosis: {
      "Métastase durale": "Peut ressembler, mais ATCD de cancer (sein, prostate).",
      "Schwannome": "Angle ponto-cérébelleux, suit les trajets nerveux."
    },
    complications: {
      acute: ["Crises d'épilepsie répétées"],
      chronic: ["Croissance au fil des années, compression neurologique irréversible.", "Transformation en grade atypique (Grade 2) ou anaplasique (Grade 3) rarissime."]
    },
    treatment: {
      firstLine: ["Abstention chirurgicale + Surveillance IRM annuelle : Pour les petits méningiomes asymptomatiques non évolutifs des sujets âgés."],
      secondLine: ["Chirurgie (exérèse totale incluant l'implantation durale = guérison) : Pour les lésions symptomatiques (épilepsie, déficit) ou dont la taille augmente."],
      specific: ["Radiothérapie stéréotaxique ou Radiochirurgie (Gamma Knife) si tumeur résiduelle sur nerf ou chez inopérables.", "TOUJOURS stopper les progestatifs (cyprotérone) et oestroprogestatifs."],
      surveillance: ["IRM itérative."]
    },
    keyPoints: {
      toRemember: ["Surtout chez la femme (hormonodépendant).", "Bénin et lentement évolutif, comprime mais n'envahit pas spontanément.", "L'IRM est la clé (base durale et queue de comète).", "L'abstention avec surveillance est une option très courante."],
      traps: ["Chercher à tout prix à opérer un petit méningiome de 1 cm asymptomatique découvert fortuitement (plus de risques opératoires que la tumeur)."],
      faq: [],
      keywords: ["Extra-axial", "Prise de contraste homogène", "Queue de comète", "Androcur", "Faux du cerveau"]
    }
  },
  {
    id: 'cephalee-tension',
    categoryId: 'autres',
    name: "Céphalée de Tension",
    definition: {
      concise: "Céphalée primaire la plus fréquente, caractérisée par une douleur ressentie comme un étau péricrânien, bilatérale, sans nausées ou vomissements.",
      importance: "Extrêmement fréquente, retentissement socio-professionnel important si chronifiée."
    },
    epidemiology: {
      prevalence: "Très élevée (30-80% population)",
      sexe: "Légère prédominance féminine",
      age: "Adulte jeune et ménopause",
      facteurs: "Stress, anxiété, mauvaise position posturale prolongée (ordinateur), contracture cervicale."
    },
    physiopathology: {
      mechanism: "Pas d'origine vasculaire. Hyper-sensibilisation centrale nociceptive associée à des tensions musculaires péricrâniennes (muscles sous-occipitaux et trapèzes)."
    },
    etiologies: [
      { cause: "Tension musculaire / Stress", frequency: "Principale", importance: "Favorisée par des troubles anxio-dépressifs" }
    ],
    clinical: {
      functional: ["Douleur bilatérale « e tau » pesenteur (casque), non pulsatile.", "Intensité légère à modérée (permet de poursuivre les activités quotidiennes).", "Non aggravée par l'effort physique.", "Pas de nausées, pas de photophobie isolée."],
      physical: ["Palpation de cordons musculaires hypertoniques à la nuque."],
      biological: [],
      gravity: ["Forme chronique : >15 jours/mois pendant >3 mois (Céphalée chronifiée quotidienne)."]
    },
    diagnosis: {
      biological: [],
      hormonal: [],
      imaging: ["Aucune (sauf si apparition de novo avec signes d'alerte, drapeaux rouges)."],
      criteria: ["Céphalée répondant aux critères ICHD (pas de nausées, pas de majoration à l'effort, étau)."]
    },
    differentialDiagnosis: {
      "Migraine": "Pulsatile, unilatérale, aggravée effort, nausées, arrêt de l'activité.",
      "Céphalée par abus d'antalgiques": "Douleur de fond présente tous les matins au réveil, abus médicamenteux."
    },
    complications: {
      acute: [],
      chronic: ["Intrication anxio-dépressive et abus comportemental d'antalgiques de palier 1 souvent inefficaces."]
    },
    treatment: {
      firstLine: ["Traitement de crise aigu : Paracétamol ou AINS (Ibuprofène). Triptans STRICTEMENT INUTILES."],
      secondLine: ["Traitement de fond (si chronique) : Antidépresseurs tricycliques à petite dose (Amitriptyline = Laroxyl).", "Thérapies cognitivo-comportementales (TCC), relaxation, kinésithérapie cervicale douce."],
      specific: ["Sevrage si abus d'antalgiques constaté."],
      surveillance: ["Calendrier des céphalées."]
    },
    keyPoints: {
      toRemember: ["« J'ai un casque vissé sur la tête », avec le moral dans les chaussettes.", "N'abrite pas de nausées, n'empêche pas l'effort.", "Amitriptyline en traitement de fond de la forme chronique."],
      traps: ["Prescrire des opioïdes (tramadol, codéine) qui favorisent la dépendance et la pérennisation, de surcroit inefficaces au long cours."],
      faq: [],
      keywords: ["Etau", "Stress", "Nuque", "Amitriptyline", "Tricycliques", "Relaxation"]
    }
  },
  {
    id: 'nevralgie-trijumeau',
    categoryId: 'autres',
    name: "Névralgie du Trijumeau (Douleur faciale 'Tic douloureux')",
    definition: {
      concise: "Douleur neuropathique paroxystique de la face, fulgurante, brève (secondes) et atroce, touchant une ou plusieurs branches du nerf crânien V.",
      importance: "Douleur réputée la plus intense au monde, altération dramatique de la vie (risque suicidaire)."
    },
    epidemiology: {
      prevalence: "Rare",
      sexe: "Femme modérément plus souvent",
      age: "Surtout après 50 ans",
      facteurs: "Âge, sclérose en plaques (jeune)."
    },
    physiopathology: {
      mechanism: "Conflit neuro-vasculaire (le plus souvent) : la racine du nerf Trijumeau est comprimée par une boucle vasculaire d'une artère cérébelleuse, provoquant une démyélinisation focale et des décharges ectopiques fulgurantes."
    },
    etiologies: [
      { cause: "Essentielle (Conflit neurovasculaire)", frequency: "90%", importance: "Boucle vasculaire compressant V5" },
      { cause: "Secondaire symptomatique", frequency: "10%", importance: "Sclérose en paques, Tumeur de l'angle (Méningiome)" }
    ],
    clinical: {
      functional: ["Douleur en d'éclair fulgurante, type décharge électrique ou coup de poignard.", "Durée brève (1 à 10 secondes) en salves.", "Strictement unilatérale et d'un seul territoire (V2 ou V3 ++) : joue, mâchoire inférieure.", "Déclenchée par l'effleurement d'une 'zone gâchette' (trigger zone) : se moucher, se raser, se brosser les dents, parler."],
      physical: ["Examen neurologique STRITEMENT normal entre les crises (pas d'anesthésie)."],
      biological: [],
      gravity: ["Dénutrition (peur de s'alimenter/mâcher), dépression/suicide."]
    },
    diagnosis: {
      biological: [],
      hormonal: [],
      imaging: ["IRM cérébrale (séquences FIESTA ou CISS pour l'angle) : INDISPENSABLE pour affirmer le conflit neurovasculaire et éliminer une SEP (un jeune avec névralgie du V = SEP jusqu'à preuve du contraire !) ou une tumeur."],
      criteria: ["Douleur paroxystique fulgurante d'un territoire V déclenchée par une zone gâchette sans déficit de la sensibilité associé."]
    },
    differentialDiagnosis: {
      "Douleur dentaire pulpale/rage de dent": "Douleur continue, souvent nocturne, pulsatile",
      "Artérite de Horton": "Douleur temporale avec claudication de la mâchoire (mais douleur ischémique à la mastication longue, et non pas par un effleurement). Vitesse de Sédimentation augmentée."
    },
    complications: {
      acute: ["Dénutrition rapide aiguë par peur d'utiliser la mâchoire."],
      chronic: []
    },
    treatment: {
      firstLine: ["Traitement médical de référence absolu : Carbamazépine (Tégrétol). Efficacité souvent complète, véritable test diagnostique."],
      secondLine: ["Autres antiépileptiques : Oxcarbazépine, Baclofène, Gabapentine, Lamotrigine."],
      specific: ["Chirurgie (si échec/intolérance médicale) : Décompression microvasculaire chirurgicale (Janetta) (on isole le nerf de l'artère avec du teflon), très efficace. Autres options via radiofréquence ou Gamma Knife."],
      surveillance: ["Bilan hépatique et NFS (Carbamazépine)."]
    },
    keyPoints: {
      toRemember: ["Fulgurante, Salves rapides, Territoire visage V2/ V3, Zone gâchette au moindre effleurement.", "L'examen neurologique est normal ! Dès qu'il y a une baisse de sensibilité (anesthésie), il faut craindre une tumeur ou un problème tumoral.", "Tégrétol = Traitement de 1ère intention exclusif et très efficace."],
      traps: ["Fausse errance diagnostique chez les dentistes avec multiples avulsions dentaires inutiles !"],
      faq: [],
      keywords: ["Zone gâchette", "Fulgurance électrique", "Carbamazépine", "Conflit Vasculaire", "Branche maxillaire V2"]
    }
  },
  {
    id: 'huntington',
    categoryId: 'degeneratives',
    name: "Maladie de Huntington",
    definition: {
      concise: "Maladie neurodégénérative héréditaire rare, autosomique dominante, provoquant des mouvements anormaux (chorée), des troubles cognitifs et psychiatriques.",
      importance: "Maladie mortelle (environ 15 ans après les symptômes), incurable, avec un énorme retentissement familial (hérédité)."
    },
    epidemiology: {
      prevalence: "Rare (5/100 000)",
      sexe: "Egal",
      age: "Début adulte (30 à 50 ans)",
      facteurs: "Hérédité Autosomique Dominante exclusive (pénétrance 100%)."
    },
    physiopathology: {
      mechanism: "Expansion de triplets (CAG > 36 répétitions) sur le gène HTT (Chr. 4), produisant une huntingtine anormale toxique. Dégénérescence des neurones du Striatum (Noyau caudé et Putamen), causant la levée de l'inhibition motrice."
    },
    etiologies: [
      { cause: "Génétique", frequency: "100%", importance: "Expansion de CAG. Anticipation (plus sévère de génération en génération si origine paternelle)." }
    ],
    clinical: {
      functional: ["Modifications du comportement inexpliquées.", "Dépression très sévère inaugurale.", "Troubles de la mémoire verbale."],
      physical: ["Mouvements Choréiques : Mouvements involontaires, brusques, arythmiques, explosifs, touchant distalité et face (« danse de Saint-Guy »). Disparaissent au sommeil.", "Troubles de la phonation, saccades oculaires modifiées."],
      biological: [],
      gravity: ["Trouble déglutition majeur menant au choc ou infection, risque suicidaire massif."]
    },
    diagnosis: {
      biological: ["Test Génétique moléculaire sanguin : Mise en évidence de l'expansion CAG. (Conseil génétique strict et encadré par la loi)."],
      hormonal: [],
      imaging: ["IRM cérébrale : Atrophie de la tête du noyau caudé bilatérale (aspect de l'élargissement des cornes antérieures ventriculaires)."],
      criteria: ["Association Chorée + ATCD Familial clair + Diagnostic Moléculaire."]
    },
    differentialDiagnosis: {
      "Chorée de Sydenham": "Post-streptococcique, chez l'enfant, passagère.",
      "Chorée iatrogène": "Post L-Dopa ou post-neuroleptique (dyskinésie tardive)."
    },
    complications: {
      acute: ["Suicide (stade prodromal)."],
      chronic: ["Cachexie extrême (les mouvements dépensent énormément de calories).", "Démence sévère."]
    },
    treatment: {
      firstLine: ["Il n'y a PAS de traitement curatif bloquant la progression."],
      secondLine: ["Soulager la chorée (symptomatique) : Neuroleptiques (Tétrabénazine : Tétrabénazine / Xenazine, ou Tiapride, Halopéridol).", "Antidépresseurs systématiques : ISRS."],
      specific: ["Prise en charge hyper-calorique +++ pour lutter contre la cachexie.", "Orthophonie, Kinésithérapie."],
      surveillance: ["Suivi génétique et d'accompagnement de la parentèle saine."]
    },
    keyPoints: {
      toRemember: ["Triade de la maladie de Huntington = Chorée + Neuropsychiatrique + Cognitif.", "Hérédité Autosomique Dominante (Pénétrance 100%). Gène HTT, Expanions CAG.", "Tétrabénazine pour les mouvements, et régime survitaminé/suralimentation indispensable !"],
      traps: ["Informer le patient ou ses enfants par téléphone (suicide)."],
      faq: [],
      keywords: ["Chorée", "Triplets CAG", "Noyau Caudé", "Dominante", "Tétrabénazine", "Anticipation"]
    }
  },
  {
    id: 'corps-lewy',
    categoryId: 'degeneratives',
    name: "Maladie à Corps de Lewy (DCL)",
    definition: {
      concise: "Deuxième cause de démence neurodégénérative, caractérisée par des dépôts anormaux d'alpha-synucléine intracellulaires.",
      importance: "Moins connue que l'Alzheimer, son pronostic est plus sévère et elle a une hyper-réactivité dramatique aux neuroleptiques."
    },
    epidemiology: {
      prevalence: "2ème cause de démence neurodégénérative (15-20% des démences)",
      sexe: "Slightly more men",
      age: "Moyenne 70 ans",
      facteurs: "Moins de poids génétique que les autres."
    },
    physiopathology: {
      mechanism: "Trouble synucléinopathie. Accumulation d'inclusions rondes cytoplasmiques (Corps de Lewy) dans le tronc cérébral d'abord (substance noire) puis propagation vers des régions corticales (déficits cognitifs + délire)."
    },
    etiologies: [
      { cause: "Sporadique", frequency: "Très fréquente", importance: "" }
    ],
    clinical: {
      functional: ["Fluctuation cognitive extrêmement marquée d'une heure à l'autre ou d'un jour à l'autre (+ alertes paradoxales).", "Hallucinations VISUELLES complexes et détaillées précocement (personnages, animaux).", "Troubles du sommeil paradoxal (RBD, les patients vivent leurs rêves, agitent leurs poings...)."],
      physical: ["Syndrome parkinsonien asymétrique prédominant sur l'akinésie/rigidité (moins de tremblements), avec souvent chutes précoces et troubles posturaux marqués."],
      biological: [],
      gravity: ["Administration accidentelle de neuroleptiques pour calmer le délire: entraîne un syndrome malin et fige total (décès !)."]
    },
    diagnosis: {
      biological: [],
      hormonal: [],
      imaging: ["IRM cérébrale : relative préservation paradoxale de l'hippocampe comparativement à la maladie d'Alzheimer.", "Scintigraphie myocardique MIBG et DAT-Scan pathologique (dénervation sympathique/dopaminergique)."],
      criteria: ["Déclin cognitif de l'attention + Hallucinations visuelles + Syndrome Parkinsonien + Fluctuations + Trouble sommeil."]
    },
    differentialDiagnosis: {
      "Maladie d'Alzheimer": "Les troubles de la mémoire sont précoces, pas d'hallucinations dans les premières années, pas de Parkinson.",
      "Maladie de Parkinson avec démence": "On tolère l'étiquette 'Parkinson+Démence' si la démence suit les signes moteurs APRES un an d'évolution. Si ça commence et c'est en même temps dans la première année = Démence à Corps de Lewy."
    },
    complications: {
      acute: ["Sensibilité foudroyante très toxique aux Neuroleptiques (même atypiques minimes !)."],
      chronic: ["Dépendance rapide, trouble massif autonome (hypotension orthostatique)."]
    },
    treatment: {
      firstLine: ["NE JAMAIS DONNER DE NEUROLEPTIQUES CLASSIQUES (Halopéridol) POUR LES HALLUCINATIONS !! (Exception: si absolu péril, Clozapine à micro-dose sous haute sécurité)."],
      secondLine: ["Inhibiteurs de la cholinestérase (Rivastigmine) = Améliorent à la fois l'attention et parfois même les hallucinations dans cette maladie !"],
      specific: ["L-Dopa efficace modérément ou difficile à titrer (car aggrave les hallucinations).", "Traiter l'hypotension orthostatique."],
      surveillance: ["Chutes."]
    },
    keyPoints: {
      toRemember: ["Fluctuations + Hallucinations visuelles + Syndrome Parkinsonien associé.", "Maladie terrible car la L-Dopa guérit les muscles mais donne des hallucinations, et les antipsychotiques guérissent la folie mais tuent les muscles !", "Rivastigmine est une bonne option."],
      traps: ["Le patient délire à l'Urgences (hallucinations visuelles), vous injectez du Tiapride/Haldol en urgence = état de mal catatonique et décès par arrêt cardio respi."],
      faq: [],
      keywords: ["Syndrome Parkinsonien + Démence la 1ère année", "Hallucinations", "Sommeil paradoxal acté", "Neuroleptiques interdits", "Alpha-synucléine"]
    }
  },
  {
    id: 'dft',
    categoryId: 'degeneratives',
    name: "Démence Frontotemporale (DFT)",
    definition: {
      concise: "Maladie dégénérative frappant sélectivement les lobes frontaux et temporaux, caractérisée par des troubles du comportement majeurs et troubles du langage précoces (aphasiologie), sans amnésie initiale.",
      importance: "Frappe des adultes jeunes (50 ans), ce qui perturbe l'environnement professionnel et conjugal."
    },
    epidemiology: {
      prevalence: "Rare par rapport à Alzheimer",
      sexe: "Egal",
      age: "Début précoce (45 à 65 ans)",
      facteurs: "Forte composante génétique (40% cas familiaux avec MAPT/Tau, progranuline)."
    },
    physiopathology: {
      mechanism: "Inclusions intraneuronales protéiques (soit protéines TAU, soit TDP-43). L'atrophie foudroie d'abord les cortex frontaux orbitofrontaux."
    },
    etiologies: [
      { cause: "Génétique", frequency: "40%", importance: "Gènes C9ORF72 (fréquent et parfois associé à the SLA !)" },
      { cause: "Sporadique", frequency: "60%", importance: "" }
    ],
    clinical: {
      functional: ["TROUBLES DU COMPORTEMENT MAJEURS de novo : Désinhibition sociale (achats compulsifs, grossièretés sexuelles, conduites antisociales).", "Apathie extrême asymétrique, jovialisation niaise (Moria).", "Gloutonnerie, impulsivité (hyperoralité pour le sucré).", "Perte complète d'empathie (froideur affective)."],
      physical: ["L'examen physique reste longtemps normal.", "Symptômes SLA associés dans certaines formes (Gène C9ORF72)."],
      biological: [],
      gravity: ["Ruinant, divorce, licenciement causés par la désinhibition précoce au stade où personne ne suspecte de dégénératif !"]
    },
    diagnosis: {
      biological: [],
      hormonal: [],
      imaging: ["IRM cérébrale : Atrophie isolée des lobes frontaux et parfois temporaux antérieurs. Hypométabolisme frontal au TEP-Scan FDG."],
      criteria: ["Début insidieux de troubles du comportement dominants, sans altération sévère majeure de mémoire spatiale (ILS NE SE PERDENT PAS EN ROUTE au début)."]
    },
    differentialDiagnosis: {
      "Maladie bipolaire ou Schizophrénie tardive": "Touche parfois le psychiatre au début à cause du diagnostic d'un accès maniaque à l'âge adulte tardif.",
      "Tumeur frontale (méningiome)": "Doit être exclue par IRM."
    },
    complications: {
      acute: [],
      chronic: ["Mutisme complet en fin de maladie.", "Absence d'auto-critique du patient (= Anosognosie presque absolue de la maladie)."]
    },
    treatment: {
      firstLine: ["Aucun traitement étiologique existant."],
      secondLine: ["Antidépresseurs ISRS (Sertraline, Trazodone) souvent pour la désinhibition et l'irritabilité."],
      specific: ["Interdiction légale rapide de conduire ou banquière, mise sous tutelle, prévention de comportements inadaptés.", "Accompagnement du conjoint (souffrance insoutenable et perte d'image)."],
      surveillance: ["Evolution vers la perte des mots (Aphasie primaire progressive)."]
    },
    keyPoints: {
      toRemember: ["Ne se perdent pas, mais volent un objet ou pissent en public de manière irréfléchie.", "Désinhibition verbale ou comportementale majeure, perte d'empathie.", "Très souvent intriqué physiopathologiquement et génétiquement (C9orf72) avec la SLA (Charcot)."],
      traps: ["Penser d'abord à Alzheimer : Dans la DFT le MMSE initial peut être strictement Normal de 30/30 si l'examinateur le gendarme bien ! Et la mémoire épisodique marche !"],
      faq: [],
      keywords: ["Désinhibition", "Apathie", "Face antéro-frontale", "Hyper-oralité", "Perte d'empathie", "Sujet jeune", "Moria"]
    }
  },
  {
    id: 'hs-chronique',
    categoryId: 'syndromes-compressifs',
    name: "Hématome Sous-Dural Chronique (HSDc)",
    definition: {
      concise: "Collection sanguine vieillie, enkystée, située entre la dure-mère et l'arachnoïde.",
      importance: "Un des diagnostics neurologiques de réparation chirurgicale (guérison immédiate) les plus satisfaisants, touche massivement les sujets âgés."
    },
    epidemiology: {
      prevalence: "Très fréquente",
      sexe: "Slight Predominance H",
      age: "Sujets très âgés (>75 ans)",
      facteurs: "Alcoolisme (atrophie du cerveau), Traitement anti-thrombotique (Aspirine/AVK)."
    },
    physiopathology: {
      mechanism: "Traumatisme crânien MINIME (souvent oublié !) ayant déchiré les petites veines 'en pont' extra-cérébrales. Saignement veineux très lent progressant en quelques semaines/mois, provoquant une poche sanguine enkystée qui agit par contrainte."
    },
    etiologies: [
      { cause: "Traumatisime Crânien Bénin", frequency: "Très fréquente", importance: "Léger heurt il y a 3 à 6 semaines" }
    ],
    clinical: {
      functional: ["Installation INSDIEUSE sur des semaines :", "Céphalée sourde rebelle, confusion fluctuante.", "Lourdeur/ralentissement psychomoteur majeur (pseudo-démentiel !)."],
      physical: ["Hémiparésie focale discrète et souvent controlatérale.", "Trouble de la marche.", "Obnubilation dans les formes avancées."],
      biological: [],
      gravity: ["Engagement cérébral tardif ou compression irréversible si non détecté."]
    },
    diagnosis: {
      biological: ["Bilan d'hémostase (PT, aPTT, INR, Plaq)."],
      hormonal: [],
      imaging: ["Scanner (TDM) cérébral sans injection : Visualise une collection en croissant périphérique à l'os crânien (concave vers la substance cérébrale), ISO-dense ou HYPO-dense (aspect liquidien sombre, vieux). Réfoule les ventricules."],
      criteria: ["Aspect en croissant extra-axial isodense/hypodense (à la différence de l'épidural aiguë)."]
    },
    differentialDiagnosis: {
      "Maladie d'Alzheimer (Démences rapides)": "Un petit vieux qui 'pousse très vite vers la folie' doit avoir un scanner, c'est l'HSDc curable !!",
      "Glioblastome": "Peut être d'installation rapide avec paralysie."
    },
    complications: {
      acute: ["Si nouveau saignement au sein de la loge ('HSD mixte')."],
      chronic: ["Récidive de la poche liquidienne qui s'effondre après chirurgie de cicatrisation."]
    },
    treatment: {
      firstLine: ["Chirurgie Neurochirurgale (Drainage) : Trous de trépan simple sous anesthésie locale afin d'évacuer et rincer le liquide noirâtre (souvent spectaculaire !)"],
      secondLine: ["Arrêt provisoire des AVK/AOD si non indispensable absolu."],
      specific: ["Patient placé décubitus strict pour permettre la bonne ré-expansion du tissu cérébral."],
      surveillance: ["Suivi par Scanner."]
    },
    keyPoints: {
      toRemember: ["ATCD de traumatisme (cogné une étagère il y a 1 mois, oublié).", "Tableau de démence rapide = éliminer urgemment cela.", "L'aspect TDM : Collection hémisphérique périphérique en Croissant de lune, hypodense.", "Guérison en 24h magique après drainage !"],
      traps: ["Oublier le scanner et le placer en EHPAD avec le mot 'Sénilité foudroyante' !"],
      faq: [],
      keywords: ["Croissant Hypodense", "Personne Agée", "Trauma mineur passé", "Trépanation", "Pseudo-démentiel"]
    }
  },
  {
    id: 'hed',
    categoryId: 'traumatismes',
    name: "Hématome Extradural (HED)",
    definition: {
      concise: "Saignement aigu explosif situé entre l'os du crâne et la dure-mère.",
      importance: "L'urgence neurochirurgicale vitale suprême de la traumatologie, 'Le délai de l'HED se compte en minutes'."
    },
    epidemiology: {
      prevalence: "Fréquent en trauma",
      sexe: "Homme jeune",
      age: "Adulte jeune et Ado",
      facteurs: "Sport, AVP, bagarres."
    },
    physiopathology: {
      mechanism: "Impact très lourd fracturant le crâne, en particulier la portion de l'écaille du temporal, entraînant la section et déchirure de l'artère MÉNINGÉE MOYENNE. L'artère sous haute pression décolle violemment la dure-mère."
    },
    etiologies: [
      { cause: "Traumatisme majeur avec plaie artérielle", frequency: "100%", importance: "Artère méningée moyenne ++" }
    ],
    clinical: {
      functional: ["CÉPHALÉES intolérables."],
      physical: ["Histoire très caractéristique ('Le scénario classique' mais inconstant) : ", "1) Impact avec perte de connaissance initiale courte.", "2) Phase de réveil parfait et limpide de lucidité (INTERVALLE LIBRE).", "3) Quelques heures après, dégradation brutale, coma par hypertension intracrânienne avec une hémiplégie controlatérale, puis une mydriase unilatérale (Engagement temporal)."],
      biological: [],
      gravity: ["Risque d'engagement uncal instantané et mort de façon implacable et foudroyante."]
    },
    diagnosis: {
      biological: [],
      hormonal: [],
      imaging: ["Scanner TDM SANS injection : Signe pathognomonique de COLLECTION EN LENTILLE BICONVEXE (citron), de couleur hyperdense homogène et blanche refoulant la ligne médiane, accompagnée d'une fracture temporelle au-dessus de celle-ci."],
      criteria: ["Lentille biconvexe hyperdense sur TDM non injecté + TC récent."]
    },
    differentialDiagnosis: {
      "Hématome Sous-Dural Aigu (HSDa)": "Déchirure veineuse du parenchyme, l'opacité épouse tout l'hémi-crâne en forme de croissant allongé concave/convexe."
    },
    complications: {
      acute: ["Engagement cérébral massif (coma profond irréversible, libération, arrêt cardio respi).", "Mort."],
      chronic: []
    },
    treatment: {
      firstLine: ["Chirurgie EXTREME URGENCE Neurochirurgicale (Craniotomie décompressive) : on libère l'os, on évacue le caillot dense de l'extérieur du cerveau et ON COAGULE l'artère fuyante."],
      secondLine: ["Réanimation préhospitalière de maintien avant bloc : Manitol IV ou solution hypersaline pour baisser l'HTIC un tout petit peu en transit.", "Intubation et hyperventilation douce transitoire."],
      specific: [],
      surveillance: ["Monitorage de la pression intracrânienne en SI si coma."]
    },
    keyPoints: {
      toRemember: ["Scanner en forme de Lentille Biconvexe (un caillou hyperblanc) !!", "Le dogme : Impact -> Intervalle libre (il a l'air bien, il rentre chez lui) -> Chute dans le coma total", "Traumatisme + Mydriase unilatérale = Appeler immédiatement le neurochirurgien le plus proche."],
      traps: ["Confianter faussement sur l'apparence normale du malade lors de 'l'intervalle libre' (je vais bien je rentre du ski sans scanner) : Mortelle."],
      faq: [],
      keywords: ["Lentille biconvexe", "Intervalle Libre", "Artère Méningée Moyenne", "Mydriase", "Craniotomie"]
    }
  },
  {
    id: 'trauma-craniens',
    categoryId: 'traumatismes',
    name: "Traumatisme Crânien Sévère (Glasgow < 9)",
    definition: {
      concise: "Atteinte cérébrale primaire lors de l'impact direct et lésions secondaires secondaires induisant un coma d'emblée.",
      importance: "1ère cause de mortalité et de handicap grave chez les moins de 40 ans."
    },
    epidemiology: {
      prevalence: "Très elevé",
      sexe: "Homme",
      age: "Jeunes",
      facteurs: "Accident Voix Publique (AVP route/moto sans casque)."
    },
    physiopathology: {
      mechanism: "Lésions de choc inertiel ou décélération rapide: Contusions parenchymateuses nécrotiques directes (frontobasales et temporales), + Lésion axonale diffuse (cisaillement de la substance blanche intracrânienne à grande accélération rotationnelle)."
    },
    etiologies: [
      { cause: "AVP", frequency: "Maj", importance: "" }
    ],
    clinical: {
      functional: ["Coma (Score de Glasgow < 9) d'installation sur site !"],
      physical: ["Rechercher symétrie des pupilles (anisocorie = engagement)", "Déficit sensitivomoteur de type décortication ou décérébration", "Ecoulement ou ecchymose de LCR par le nez (rhinorrhée) / Ecchymose oculaire en lunettes = Signe de FRACTURE DE LA BASE DU CRÂNE !"],
      biological: [],
      gravity: ["ACSOS dramatiques à limiter au maximum ! (Agressions Cérébrales Secondaires d'Origine Systémique)"]
    },
    diagnosis: {
      biological: ["Bilan trauma complet : Gazométrie, NFS, TP, Toxiques, groupe Rhesus."],
      hormonal: [],
      imaging: ["Scanner (TDM) sans injection de la tête au pieds (Total Body Scan) : Recherche hématomes intracrâniens (HED, HSD, contusions oedématiées hémorragiques, petites taches de sang dans les noyaux = lésion axonale diffuse) ET LESIONS RACHIDIENNES CERVICALES ASSOCIÉES SYSTÉMATIQUES."],
      criteria: ["GCS < 9 = Traumatisme Sévère"]
    },
    differentialDiagnosis: {
      "Polytraumatisme avec choc hémorragique seul": "Pas d'HTIC ou coma lié au cerveau pur (mais baisse TA)."
    },
    complications: {
      acute: ["Hypertension intracrânienne menaçante réfractaire.", "Ischémie et Mydriase aréactive bilatérale fixée (Mort Cérébrale)."],
      chronic: ["Etat végétatif persistant / syndrôme d'éveil non-répondant.", "Épilepsie sévère rebelle", "Hydrocéphalie séquellaire.", "Retard cognitif total permanent."]
    },
    treatment: {
      firstLine: ["Préhospitalier (SAMU) : Prévenir l'Hypoxie et l'Hypotension (sont les 2 pires ennemis de l'axone). INTUBATION ORO-TRACHÉALE, ventilation, et sérum hypertonique si pupille inégale."],
      secondLine: ["Réanimation : Maintenir une bonne PPC pression de perfusion. Sédation et analgésie forte continue. Parfois refroidissement corporel et craniectomie de décompression osseuse pour relâcher."],
      specific: ["Maintien de la tête droite alignée collard rigide (le patient a sa moelle épine brisée potentiellement !)."],
      surveillance: ["Monitorage PIC (Pression intracrânienne par capteur)."]
    },
    keyPoints: {
      toRemember: ["GCS < 9 = Coma = Réanimation Initiale + Tube.", "Interdiction formelle de tolérer l'Hypotension ou Hypoxie en TC Sévere. Un seul épisode c'est le doublement de la mortalité !", "Toujours rechercher le traumatisme rachidien cervical associé avant de bouger le cou (Collier)."],
      traps: ["Le patient ne se défend pas il est calme car très alcoolisé (toujours un biais, gérer prioritairement par scanner)"],
      faq: [],
      keywords: ["ACSOS", "Glasgow < 9", "Lésions axonales diffuses", "Collier cervical", "Contusion"]
    }
  },
  {
    id: 'myopathie-duchenne',
    categoryId: 'peripheriques',
    name: "Myopathie de Duchenne (DMD)",
    definition: {
      concise: "Dystrophie musculaire héréditaire très invalidante liée à l'absence de production d'une protéine essentielle des fibres musculaires, la dystrophine.",
      importance: "Maladie dégénérative de l'enfant la plus connue, avec évolution inéluctable vers la chaise roulante puis la perte des fonctions respiratoire et cardiaque."
    },
    epidemiology: {
      prevalence: "1 cas / 3500 naissances mâles",
      sexe: "HOMME exclusivement (transmise par femmes saines porteuses)",
      age: "Diagnostic 3 - 5 ans",
      facteurs: "Génétique liée à l'X (mutations délétères au locus du gène DMD sur Xq21)."
    },
    physiopathology: {
      mechanism: "Absence de dystrophine, qui amarre fermement le cytosquelette à la matrice extracellulaire. Les fibres s'arrachent à chaque contraction, puis la nécrose est relayée par un comblement en tissu adipeux inactif et collagène cicatriciel."
    },
    etiologies: [
      { cause: "Héréditaire", frequency: "Lié à l'X", importance: "Délétions et non-sens" }
    ],
    clinical: {
      functional: ["L'enfant en bas âge chute fréquemment, marche dandinante ('marche du canard').", "Difficultés à monter des escaliers très tôt.", "Le test du signe de Gowers est + : Pour se relever d'une position allongée au sol, l'enfant grimpe sur lui-même avec les mains appuyées sur ses genoux/cuisses."],
      physical: ["Pseudohypertrophie des mollets (aspect musclé mais c'est du gras/fibrose, pas de force).", "Amyotrophie proximale (membres supérieurs/bassin).", "Scoliose d'apparition précoce progressive massive.", "Trouble cognitif neuro-développemental modéré parfois associé."],
      biological: [],
      gravity: ["Cardiomyopathie dilatée grave (insuffisance terminale) et déficit ventilatoire fatal souvent précoce (à la vingtaine/trentaine)."]
    },
    diagnosis: {
      biological: ["CPK sanguin EFFARANT dès l'apparition, > 100 fois la limite de normalité voire plus, qui démontre la souffrance musculaire effroyable."],
      hormonal: [],
      imaging: [],
      criteria: ["Diagnostic de certitude Génétique (prise de sang avec étude du gène DMD).", "Biopsie musculaire : absence totale de marquage de la dystrophine à l'immunohistochimie (rarement faite si test géné clair)."]
    },
    differentialDiagnosis: {
      "Maladie de Becker (BMD)": "Mutation du même gène mais moins sévère (dystrophine partiellement fonctionnelle) : chaise roulante plus tard (20-30 ans), survie meilleure.",
      "Amyotrophie spirale infantile": "Paralysie flasque pure par motoneurone."
    },
    complications: {
      acute: ["Infections pulmonaires d'engorgement en fauteuil."],
      chronic: ["Cardiomyopathie fatale.", "Détresse respiratoire sur dysfonction diaphragmatique.", "Rétractions orthopédiques invalidantes de toutes les chevilles et coudes."]
    },
    treatment: {
      firstLine: ["Aucune méthode pour réparer la protéine en usage simple (nombreux essais d'omission d'exon / Ataluren sur profils spécifiques)."],
      secondLine: ["Corticothérapie en ligne à vie précoce pour retarder la mise en fauteuil ! (Deflazacort ou Prednisone prolongent la marche de qqs années mais induisent des EI majeurs)."],
      specific: ["Prise en charge vitale multidisciplinaire totale : kinésithérapie (étirement doux non maximal), attelles nocturnes.", "Ventilation non-invasive obligatoire après quelques années.", "IEC d'office cardiovasculaire pour ralentir la défaillance cardiaque."],
      surveillance: ["Surveillance EFR asymétrique, monitoring du sommeil, EchoCoeur annuel."]
    },
    keyPoints: {
      toRemember: ["Génétique lié à l'X. Ne touche que les jeunes garçons.", "Le 'Signe de Gowers' et les mollets 'Gonflés' mais pas forts, les CPK qui explosent !", "Mortalité respiratoire ou cardiologique.", "Transmission par la mère."],
      traps: ["Confondre avec une maladie démyélinisante: Ici le muscle est le vrai malade malade organique primaire."],
      faq: [],
      keywords: ["Dystrophine", "Gowers", "Mollets pseudohypertrophiés", "Myopathie Gène X", "CPK gigantèsques", "Fauteuil"]
    }
  }
];
