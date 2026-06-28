import { Disease } from '../types';

export const autresData: Disease[] = [
  {
    id: 'cephalees-trigemino-autonomiques',
    categoryId: 'autres',
    name: "Céphalées Trigémino-Autonomiques (AVF)",
    definition: {
      concise: "Groupe de céphalées primaires unilatérales sévères, caractérisées par des crises douloureuses strictement unilatérales dans le territoire du trijumeau, accompagnées de signes végétatifs autonomiques homolatéraux.",
      importance: "Extrêmement douloureuses (surnommées 'suicide headache'). L'Algie Vasculaire de la Face (AVF) en est le chef de file."
    },
    epidemiology: {},
    physiopathology: {
      mechanism: "Activation du système trigémino-vasculaire et d'un réflexe parasympathique crânien via le noyau salivaire supérieur, souvent déclenchée par l'hypothalamus (qui explique l'aspect circadien)."
    },
    etiologies: [
      { cause: "Algie Vasculaire de la Face (AVF)", frequency: "Principale", importance: "Touche les hommes jeunes, crises de 15min à 3h." },
      { cause: "Hémicrânie paroxystique chronique", frequency: "Rare", importance: "Très sensible à l'indométacine, crises très brèves (2-30 min)." },
      { cause: "SUNCT / SUNA", frequency: "Exceptionnel", importance: "Crises hyper brèves de quelques secondes, très nombreuses conjonctivales." }
    ],
    clinical: {
      functional: [
        "Douleur EXTRÊME, à type de broiement, arrachement, strict unilatéralité toujours du même côté par période (périorbitaire / temporale).",
        "Signes végétatifs homolatéraux : Larmoiement, injection conjonctivale, rhinorrhée (nez qui coule), congestion nasale.",
        "Signe de Claude Bernard-Horner (Myosis, Ptosis).",
        "Agitation majeure pendant la crise (le patient ne tient pas en place, contrairement à la migraine)."
      ],
      physical: ["Le patient déambule pendant les crises. Les crises surviennent par salves de 1 à 8 par jour, souvent à heure fixe (nuit), pendant plusieurs semaines/mois (périodes)."],
      biological: [],
      gravity: ["Retentissement psychologique massif (risque suicidaire)."]
    },
    diagnosis: {
      biological: [],
      hormonal: [],
      imaging: ["IRM cérébrale de règle si présentation atypique (suspicion de lésion hypothalamique ou pituitaire).", "IRM souvent normale."],
      criteria: ["Clinique typique et excellente réponse aux triptans sous-cutanés et oxygène."]
    },
    differentialDiagnosis: {
      "Migraine": "Douleur pulsatile, la patiente se cache dans le noir, pas de larmes abondantes ou d'agitation motrice intense.",
      "Névralgie du Trijumeau": "Décharge électrique de quelques secondes, déclenchée par effleurement (zone gâchette)."
    },
    complications: {
      acute: ["Crises subintrantes, désespoir profond."],
      chronic: ["Formes chroniques (sans rémission de plus de 3 mois)."]
    },
    treatment: {
      firstLine: ["Traitement de CRise : Oxygénothérapie au masque à haute concentration (12-15 L/min pendant 15 min), assèche quasi-instantanément la crise.", "Traitement de CRise : Sumatriptan (Imiject) en SOUS-CUTANÉ (les comprimés sont trop lents)."],
      secondLine: ["Traitement de FOND (des salves) : Vérapamil (Isoptine) à hautes doses sous contrôle ECG."],
      specific: ["Infiltration du nerf grand occipital d'Arnold (Corticostéroïdes), ou lithium en dernier recours."],
      surveillance: ["Suivi par agenda des crises, ECG réguliers sous vérapamil."]
    },
    keyPoints: {
      toRemember: [
        "AVF = Homme, Unilatéral douloureux atroce, Oeil rouge qui pleure, Agitation motrice, Agit la nuit.",
        "Traitement sauveur de crise = Oxygène fort débit et Triptan SC."
      ],
      traps: [
        "Confondre avec une sinusite et donner des antibiotiques (devant la douleur maxillaire et le nez qui coule).",
        "Prescrire du paracétamol ou de l'aspirine : Inefficacité totale."
      ],
      faq: [],
      keywords: ["AVF", "Larmoiement", "Oxygénothérapie", "Sumatriptan SC", "Vérapamil"]
    }
  },
  {
    id: 'tumeurs-cerebrales',
    categoryId: 'autres',
    name: "Tumeurs Cérébrales",
    definition: {
      concise: "Prolifération cellulaire anormale au sein du Système Nerveux Central. Elles peuvent être primitives ou secondaires (métastases).",
      importance: "Responsables d'une hypertension intracrânienne (HTIC) et de déficits neuro-focaux par compression ou infiltration."
    },
    epidemiology: {},
    physiopathology: {
      mechanism: "Augmentation de volume dans une boîte crânienne inextensible conduisant à l'HTIC. L'effet de masse provoque un engagement tissulaire (temporal, amygdalien, sous-falcoriel) pouvant entraîner la mort."
    },
    etiologies: [
      { cause: "Métastases péricérébrales", frequency: "50%", importance: "Multiples, en zone jonctionnelle (Poumon, Sein, rein, mélanome, digestif)." },
      { cause: "Tumeurs gliales primitives", frequency: "Fréquente", importance: "Glioblastome (malignité max, grade 4), Astrocytomes, Oligodendrogliomes." },
      { cause: "Tumeurs extra-axiales (méningiomes)", frequency: "Très fréquente (bénin)", importance: "Base d'implantation durale, comprimant sans envahir le parenchyme." },
      { cause: "Lymphome cérébral primitif", frequency: "Rare", importance: "Fréquent si VIH profond (EBV) ou immunodépression. Extraordinairement corticosensible (Tumeur fantôme)." }
    ],
    clinical: {
      functional: [
        "Syndrome d'HTIC classique : Céphalées (Pire la nuit/matin), résistante aux antalgiques habituels, aggravée couché, vomissements en jet (matinaux), troubles visuels (diplopie VI, flou, éclipses).",
        "Crise d'épilepsie inaugurale (fréquente pour les tumeurs du vertex).",
        "Troubles des fonctions supérieures : Confusion, apathie frontale, ralentissement, syndrome dépressif sévère."
      ],
      physical: [
        "Déficit neurologique local (syndrome focal) d'installation SUB-AIGUË ou PROGRESSIVE (Sur des semaines/mois). Ex: Hémiparésie. Œdème papillaire au Fond d’Œil (Stade de complication HTIC grave)."
      ],
      biological: [],
      gravity: ["Réduction de la conscience = Engagement cérébral imminent (Urgence majeure de réanimation)."]
    },
    diagnosis: {
      biological: ["Bilan pré-opératoire (Hémostase), typage VIH, Marqueurs onco."],
      hormonal: [],
      imaging: [
        "IRM Cérébrale avec Gadolinium : LE GOLD STANDARD.",
        "Scanner thoracique, abdominal, radio, TEP (Pour rechercher un cancer fardouche original primitif si métastases).",
        "TDM cérébral (Urgence en cas d'HTIC pure sans IRM rapide)."
      ],
      criteria: ["La certitude diagnostique est exclusivement ANATOMOPATHOLOGIQUE (Biopsie ou pièce d'exérèse)."]
    },
    differentialDiagnosis: {
      "Hématome sous-dural ou Abcès": "L'image typique à l'IRM oriente, la clinique de l'HTIC subaiguë est la même."
    },
    complications: {
      acute: ["L'engagement cérébral : Mort encéphalique.", "Hémorragie intra-tumorale (Mélanome, rein)."],
      chronic: ["Séquelles neurocognitives, récidive."]
    },
    treatment: {
      firstLine: ["Traitement symptomatique immédiat : CORTICOÏDES (Ex: Solumédrol) à forte dose pour réduire dramatiquement l'oedème vasogénique périphérique (Améliore toujours la clinique).", "Si crise d'épilepsie : Antiépileptique préventif ou curatif (Leppra)."],
      secondLine: ["Chirurgie d'exérèse (totale ou sub-totale) si la tumeur est accessible sans trop abîmer les fonctions (Mapping éveillé par exemple).", "Si inopérable : Biopsie stéréotaxique."],
      specific: ["Radiothérapie (ex: irradiatoin pan-encéphalique pour de multiples métastases) et Chimiothérapie (Témozolomide pour le glioblastome)."],
      surveillance: ["IRM de suivi périodique (selon protocole STUPP par exemple)."]
    },
    keyPoints: {
      toRemember: [
        "Apparition d'épilepsie chez l'adulte (après 50 ans) = Tumeur cérébrale jusqu'à preuve du contraire (IRM!).",
        "Mode subaigu + Foyer + HTIC progressif = suspicion de tumeurs.",
        "Surtout ne jamais faire de Ponction Lombaire (PL) s'il y a un risque de masse / HTIC identifié."
      ],
      traps: [
        "Laver l'absence de scanner d'une épilepsie denovo à 60 ans.",
        "L'erreur fatale de faire une PL avant TDM devant une céphalée matinale avec œdème papillaire (la pression s'effondre dans le rachis, et le cerveau s'engage au fond du crâne, mort subite)."
      ],
      faq: [],
      keywords: ["HTIC", "Métastases", "Corticostéroïdes", "Glioblastome", "Engagement"]
    }
  }
];
