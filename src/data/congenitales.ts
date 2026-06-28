import { Disease } from '../types';

export const congenitalesData: Disease[] = [
  {
    id: 'neuropathies-hereditaires',
    categoryId: 'congenitales',
    name: 'Neuropathies héréditaires',
    definition: {
      concise: 'Groupe hétérogène de maladies génétiques affectant le système nerveux périphérique (motrices, sensitives, dysautonomiques).',
      importance: 'L\'une des maladies neurologiques héréditaires les plus fréquentes (ex: maladie de Charcot-Marie-Tooth).'
    },
    epidemiology: {
      prevalence: 'Variable selon les formes (CMT: 1/2500)',
      sexe: 'Egal',
      age: 'Souvent enfance ou adulte jeune',
      facteurs: 'Génétique (autosomique dominantes, récessives, liées à l\'X)'
    },
    physiopathology: {
      mechanism: 'Anomalies génétiques entraînant une dégénérescence des axones périphériques ou de la gaine de myéline (cellules de Schwann).'
    },
    etiologies: [
      { cause: 'Mutations génétiques', frequency: '100%', importance: 'PMP22 (CMT1A), MFN2 (CMT2A)' }
    ],
    clinical: {
      functional: ['Faiblesse distale des membres inférieurs ("steppage")', 'Crampes', 'Troubles sensitifs', 'Douleurs neuropathiques'],
      physical: ['Amyotrophie distale ("mollets en coq", "mains de singe")', 'Pieds creux (pes cavus)', 'Abolition des ROT'],
      biological: [],
      gravity: ['Handicap moteur progressif, rétractions tendineuses']
    },
    diagnosis: {
      biological: ['Tests génétiques moléculaires'],
      hormonal: [],
      imaging: [],
      criteria: ['ENMG (Electroneuromyogramme) : montre une atteinte démyélinisante (vitesses très ralenties) ou axonale (amplitudes réduites)']
    },
    differentialDiagnosis: {
      'Neuropathies acquises': 'Chroniques inflammatoires (PIDC), toxiques (alcool), métaboliques (diabète)'
    },
    complications: {
      acute: [],
      chronic: ['Déformation orthopédique sévère, perte d\'autonomie']
    },
    treatment: {
      firstLine: ['Prise en charge orthopédique et rééducation (kinésithérapie)', 'Attelles de maintien (releveurs de pied)'],
      secondLine: ['Chirurgie orthopédique (correction des déformations)'],
      specific: ['Traitement symptomatique des douleurs neuropathiques'],
      surveillance: ['Suivi clinique annuel, conseil génétique']
    },
    keyPoints: {
      toRemember: ['Pieds creux et atrophie distale', 'Atteinte longueur-dépendante', 'CMT est la forme prédominante'],
      traps: ['Ne pas explorer un pied creux neurologique isolé', 'Toxicité de la vincristine'],
      faq: [],
      keywords: ['Charcot-Marie-Tooth', 'Pieds creux', 'ENMG', 'Génétique']
    }
  },
  {
    id: 'ataxies-cerebelleuses',
    categoryId: 'congenitales',
    name: 'Ataxies cérébelleuses',
    definition: {
      concise: 'Atteintes d\'origine génétique du cervelet et de ses voies afférentes/efférentes.',
      importance: 'Grand nombre de formes cliniques (SCA, ataxie de Friedreich) responsables d\'un handicap de la marche sévère.'
    },
    epidemiology: {
      prevalence: 'Rare (Ataxie de Friedreich = 1/50000)',
      sexe: 'Egal',
      age: 'Variable (Friedreich <20-25 ans, SCA à l\'âge adulte)',
      facteurs: 'Héréditaire'
    },
    physiopathology: {
      mechanism: 'Dégénérescence des centres cérébelleux ou des faisceaux spino-cérébelleux. Souvent causée par une expansion de triplets.'
    },
    etiologies: [
      { cause: 'Génétique récessive', frequency: 'Ataxie de Friedreich (FXN)', importance: 'Expansion GAA' },
      { cause: 'Génétique dominante', frequency: 'Ataxies Spino-Cérébelleuses (SCA)', importance: 'Plusieurs gènes impliqués' }
    ],
    clinical: {
      functional: ['Troubles de l\'équilibre, marche maladroite', 'Dysarthrie', 'Troubles de l\'écriture'],
      physical: ['Syndrome cérébelleux statique (syndrome pseudo-ébrieux, élargissement du polygone) et cinétique (hypermétrie, asynergie)', 'Nystagmus', 'Abolition des ROT (dans Friedreich)'],
      biological: [],
      gravity: ['Cardiomyopathie sévère (mortalité dans le Friedreich), perte de la marche']
    },
    diagnosis: {
      biological: ['Tests génétiques ciblés'],
      hormonal: [],
      imaging: ['IRM cérébrale : atrophie cérébelleuse et/ou du tronc cérébral et de la moelle'],
      criteria: ['Clinique + IRM + Test génétique positif']
    },
    differentialDiagnosis: {
      'Ataxies secondaires': 'Alcool, sclérose en plaques, AVC, tumeurs'
    },
    complications: {
      acute: [],
      chronic: ['Fauteuil roulant inéluctable, troubles de la déglutition, insuffisance respiratoire et cardiaque']
    },
    treatment: {
      firstLine: ['Pas de traitement étiologique curatif'],
      secondLine: ['Kinésithérapie motrice (maintien de l\'équilibre et de la souplesse), orthophonie'],
      specific: ['Suivi cardiaque rapproché pour Friedreich'],
      surveillance: ['ECG/Echographie régulières']
    },
    keyPoints: {
      toRemember: ['Ataxie + cardiomyopathie + perte des ROT = Friedreich', 'L\'atrophie du cervelet à l\'IRM est de règle', 'Expansion de triplets fréquente'],
      traps: ['Méconnaître l\'atteinte cardiaque de l\'ataxie de Friedreich'],
      faq: [],
      keywords: ['Ataxie de Friedreich', 'SCA', 'Cardiomyopathie', 'Troubles de l\'équilibre']
    }
  },
  {
    id: 'craniostenoses-cerebrales',
    categoryId: 'congenitales',
    name: 'Crâniosténoses cérébrales',
    definition: {
      concise: 'Fermeture prématurée de l\'une ou plusieurs sutures crâniennes entraînant une déformation du crâne et un risque de compression cérébrale.',
      importance: 'Risque vital et fonctionnel par hypertension intracrânienne.'
    },
    epidemiology: {
      prevalence: '1 sur 2000 à 2500 naissances',
      sexe: 'Variable selon type',
      age: 'Congénitale, se diagnostique chez le nourrisson',
      facteurs: 'Sporadique ou génétique (syndromiques)'
    },
    physiopathology: {
      mechanism: 'Fusion prématurée des sutures empêchant la croissance normale du crâne perpendiculairement à la suture atteinte (+ croissance compensatrice ailleurs).'
    },
    etiologies: [
      { cause: 'Non syndromiques', frequency: 'Fréquent', importance: 'Scaphocéphalie (suture sagittale)' },
      { cause: 'Syndromiques', frequency: 'Rares', importance: 'Syndromes de Crouzon, Apert (mutations FGFR)' }
    ],
    clinical: {
      functional: ['Céphalées, vomissements (si HTIC)'],
      physical: ['Déformation crânienne (scaphocéphalie, plagiocéphalie antérieure, trigonocéphalie, brachycéphalie)', 'Hypertélorisme ou exophtalmie', 'Absence ou petite fontanelle'],
      biological: [],
      gravity: ['HTIC, stase papillaire, atrophie optique, retard mental']
    },
    diagnosis: {
      biological: ['Recherche génétique si aspect syndromique'],
      hormonal: [],
      imaging: ['Scanner (TDM) crânien 3D : fait le diagnostic, précise la suture fusionnée et l\'empreinte sur le cerveau'],
      criteria: ['Aspect visuel + TDM 3D positif']
    },
    differentialDiagnosis: {
      'Plagiocéphalie positionnelle': 'L\'oreille est avancée, absence de bourrelet sutural, TDM 3D normal'
    },
    complications: {
      acute: ['Hypertension Intracrânienne aiguë'],
      chronic: ['Cécité, retard cognitif, préjudice esthétique majeur']
    },
    treatment: {
      firstLine: ['Avis neurochirurgical pédiatrique formel et rapide'],
      secondLine: ['Correction chirurgicale au cours des premiers mois de vie (levée de crâniosténose)'],
      specific: ['Prise en charge maxillofaciale et ophtalmique (formes syndromiques)'],
      surveillance: ['Examen du fond d\'oeil, périmètre crânien']
    },
    keyPoints: {
      toRemember: ['Toujours suspecter devant toute anomalie de forme du crâne du nourrisson', 'Trisomie et mutations FGFR', 'Risque majeur = HTIC'],
      traps: ['Confondre une vraie plagiocéphalie synostotique avec une plagiocéphalie positionnelle'],
      faq: [],
      keywords: ['Scaphocéphalie', 'Sutures', 'HTIC', 'Nourrisson', 'Plagiocéphalie vraie']
    }
  },
  {
    id: 'malformations-charniere-occipito-vertebrale',
    categoryId: 'congenitales',
    name: 'Malformations de la charnière occipito-vertébrale',
    definition: {
      concise: 'Ensemble de malformations osseuses, ligamentaires ou nerveuses au niveau du trou occipital (ex: Malformation de Chiari, impression basilaire).',
      importance: 'Peut provoquer une compression bilatérale ou un blocage de l\'écoulement du liquide cérébro-spinal.'
    },
    epidemiology: {
      prevalence: 'Assez fréquente (Chiari asymptomatiques)',
      sexe: 'Egal',
      age: 'Diagnostic possible à tout âge',
      facteurs: 'Congénitales ou acquises'
    },
    physiopathology: {
      mechanism: 'Anomalie de la base du crâne entraînant un encombrement du foramen magnum et une hernie ou un pincement des structures nerveuses (amygdales cérébelleuses).'
    },
    etiologies: [
      { cause: 'Malformation d\'Arnold-Chiari', frequency: 'Très fréquente', importance: 'Hernie des amygdales cérébelleuses' }
    ],
    clinical: {
      functional: ['Céphalées déclenchées par les efforts à glotte fermée (Toux, rire, Valsalva)', 'Paresthésies, brûlures des membres supérieurs', 'Vertiges, troubles de la déglutition'],
      physical: ['Syndrome sous-lésionnel (Tétraparésie par compression de la jonction bulbo-médullaire)', 'Syndrome bulbaire', 'Syndrome syringomyélique suspendu', 'Nystagmus'],
      biological: [],
      gravity: ['Mort subite par apnée, invalidité tétraplégique']
    },
    diagnosis: {
      biological: [],
      hormonal: [],
      imaging: ['IRM cervico-cérébrale : l\'examen clé. Visualise la hernie des amygdales > 5 mm sous le foramen magnum, et recherche une fente syringomyélique dans la moelle.', 'TDM de la charnière : pour visualiser précisément l\'anatomie osseuse (impression basilaire, assimilation de l\'atlas)'],
      criteria: ['IRM montrant la descente des amygdales ou autre anomalie avec clinique associée']
    },
    differentialDiagnosis: {
      'Tumeurs du foramen magnum': 'Evolutivité plus rapide, souvent origine extra-axiale (méningiome)'
    },
    complications: {
      acute: ['Défaut respiratoire central (compression bulbaire)'],
      chronic: ['Apparition de cavité syringomyélique détruisant la moelle au fil du temps']
    },
    treatment: {
      firstLine: ['Si asymptomatique ou très bien supporté : Abstention thérapeutique et surveillance'],
      secondLine: ['Chirurgie de décompression occipito-cervicale : agrandissement osseux (ouverture du foramen magnum, plastie durale)'],
      specific: [],
      surveillance: ['IRM de contrôle, suivi clinique régulier']
    },
    keyPoints: {
      toRemember: ['Malformation de Chiari', 'Syringomyélie souvent associée', 'Céphalée à la toux (efforts)'],
      traps: ['Méconnaître le risque sur le bulbe et la moelle', 'Passer à côté d\'une syringomyélie associée'],
      faq: [],
      keywords: ['Chiari', 'Foramen magnum', 'Amygdales cérébelleuses', 'Syringomyélie']
    }
  },
  {
    id: 'dysraphies-spinales',
    categoryId: 'congenitales',
    name: 'Dysraphies spinales (spina bifida)',
    definition: {
      concise: 'Anomalies du développement du tube neural, depuis les spina bifida occulta asymptomatiques jusqu\'aux myéloméningocèles invalidants.',
      importance: 'Parmi les anomalies congénitales graves les plus fréquentes, posant l\'indication d\'une supplémentation folique périconceptionnelle.'
    },
    epidemiology: {
      prevalence: '1/1000 naissances',
      sexe: 'Léger excès féminin',
      age: 'Développement intra-utérin',
      facteurs: 'Carence maternelle en Acide folique (Vitamine B9), exposition à des tératogènes (Dépakine/Acide valproïque)'
    },
    physiopathology: {
      mechanism: 'Défaut de fermeture du tube neural lors du premier mois de grossesse (jour 21-28), exposant souvent la moelle.'
    },
    etiologies: [
      { cause: 'Anomalie de l\'embryogenèse', frequency: 'Principale', importance: 'Carence en folates' }
    ],
    clinical: {
      functional: ['Troubles sphinctériens précoces (incontinence urinaire/fécale)', 'Déficit moteur des membres inférieurs'],
      physical: ['Masse pariétale lombosacrée molle et pulsatile (si myéloméningocèle)', 'Atteinte neurologique : flaccidité, anesthésie des membres inférieurs', 'Si forme occulta : anomalie cutanée (touffe de poils, angiome, fossette) sur le trajet rachidien'],
      biological: [],
      gravity: ['Malformation d\'Arnold-Chiari II et hydrocéphalie souvent associées, infection majeure', 'Paraplégie']
    },
    diagnosis: {
      biological: ['Dépistage prénatal : Dosage de l\'Alpha-fœtoprotéine (AFP) dans le sérum maternel et liquide amniotique'],
      hormonal: [],
      imaging: ['Echographie prénatale (+/- IRM foetale)', 'IRM Médullaire postnatale en urgence'],
      criteria: ['Diagnostic anténatal le plus souvent, ou évidence clinique à la naissance']
    },
    differentialDiagnosis: {
      'Tératome sacro-coccygien': 'Masse tumorale souvent très vascularisée sans défaut osseux pur de dysraphie'
    },
    complications: {
      acute: ['Meningite fulgurante néonatale si couverture cutanée rompue', 'Hydrocéphalie aiguë'],
      chronic: ['Insuffisance rénale sévère secondaire à la vessie neurologique, escarres, paraplégie']
    },
    treatment: {
      firstLine: ['Prévention : Acide folique (Vit B9) avant et pendant les premiers mois de grossesse !', 'Prise en charge chirurgicale in utero dans des centres experts ou juste après la naissance'],
      secondLine: ['Fermeture chirurgicale cutanéo-durale post-natale', 'Valve de dérivation si hydrocéphalie associée'],
      specific: ['Sondages urinaires intermittents', 'Prise en charge orthopédique pour stabiliser la colonne et les jambes'],
      surveillance: ['Echographie rénale, orthopédie, IRM']
    },
    keyPoints: {
      toRemember: ['Prévention primordiale par supplémentation en Vitamine B9 périconceptionnelle', 'Dépakine = CI absolue chez la femme en âge de procréer', 'Hydrocéphalie très souvent associée (Arnold Chiari II)'],
      traps: ['Négliger la touffe de poils sacrée d\'un nourrisson (spina occulta)', 'Laisser évoluer une vessie neurologique'],
      faq: [],
      keywords: ['Spina bifida', 'Myéloméningocèle', 'Acide folique', 'Tube neural', 'Arnold-Chiari II']
    }
  }
];
