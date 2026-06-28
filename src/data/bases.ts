import { Disease } from '../types';

export const basesData: Disease[] = [
  {
    id: 'rappels-anatomophysiologiques',
    categoryId: 'bases',
    name: 'I. Rappels Anatomophysiologiques',
    content: `
## 1. Introduction au Système Nerveux

Le système nerveux est le super-ordinateur du corps humain. Il recueille des informations (sensibilité), les analyse (intégration) et déclenche une réponse (motricité, sécrétion).

### 📊 Les Deux Grands Systèmes
| Système | Composition | Fonction principale |
|---------|-------------|---------------------|
| **SNC** (Central) | Encéphale (Cerveau, Tronc, Cervelet) + Moelle épinière | Centre de commande et de traitement |
| **SNP** (Périphérique) | Nerfs crâniens (12 paires) + Nerfs spinaux (31 paires) | Câblage de transmission (vers/depuis le SNC) |

> 💡 **Le Mot Clé**
> **Afférent** = Arrive au cerveau (Sensitif).
> **Efférent** = S'éloigne du cerveau (Moteur).

---

## 2. L'Encéphale (Cerveau et Cervelet)

### Le Cerveau
Il est constitué de deux hémisphères reliés par le **corps calleux**.
| Lobe | Fonction Dominante | Syndrome Clinique (si lésion) |
|------|--------------------|-------------------------------|
| **Frontal** | **Motricité volontaire**, Raisonnement | Hémiplégie, Aphasie de Broca, Syndrome frontal |
| **Pariétal** | **Sensibilité** (aire somesthésique), Spatial | Hémianesthésie, Héminégligence, Apraxie |
| **Temporal** | **Audition**, Mémoire, Langage | Aphasie de Wernicke (jargon), Amnésie |
| **Occipital** | **Vision** | Hémianopsie Latérale Homonyme (HLH) |

> 🚨 **Très fréquent en examen : La Dominance Hémisphérique**
> Chez 95% des droitiers, l'hémisphère **GAUCHE** est l'hémisphère dominant, c'est lui qui héberge les centres du **LANGAGE**.

### Le Cervelet
Chef d'orchestre de la **coordination des mouvements**, de **l'équilibre**, et du **tonus**.
> 🧠 **Corrélation Anatomoclinique** :
> Une lésion du cervelet donne des signes **HOMOLATÉRAUX** (du même côté). La clinique est la **dysmétrie**, l'**adiadococinésie** et la **dysarthrie**.

---

## 3. Tronc Cérébral & Moelle Épinière

### Le Tronc Cérébral
Lieu de passage obligatoire. Composé de haut en bas : **Mésencéphale, Pont (Protubérance), Bulbe**.
- Ses lésions causent des **syndromes alternes** (ex: Atteinte d'un nerf crânien d'un côté, et paralysie du corps de l'autre).
- Les voies motrices (pyramidales) croisent la ligne médiane à la base du bulbe (décussation). Un AVC Droit ➔ Hémiplégie Gauche.

### La Moelle Épinière
Logée dans le rachis.
- **Substance Grise au centre** (Corne Antérieure = Motrice, Corne Postérieure = Sensitive).
- **Substance Blanche en périphérie** (Cordons de passage ascendants/descendants).
> 🚨 **Très fréquent en examen : Fin de la moelle**
> La moelle épinière s'arrête en **L1-L2** ! En dessous, c'est la **Queue de Cheval** (racines nerveuses flottantes).

---

## 4. Histologie du Tissu Nerveux

Le tissu nerveux est composé de deux grandes familles de cellules : les **Neurones** (conduction) et la **Névroglie** (soutien).

### Les Cellules Gliales (Névroglie)
| Cellule | Localisation | Rôle clé | Pathologie associée |
|---------|--------------|----------|---------------------|
| **Astrocytes** | SNC | Barrière Hémato-Encéphalique, Nutrition | Glioblastome |
| **Oligodendrocytes**| SNC | Gaine de myéline (plusieurs axones) | Sclérose en Plaques |
| **Cellules de Schwann**| SNP | Gaine de myéline (un seul axone) | Syndrome de Guillain-Barré |
| **Microglie** | SNC | Macrophages résidents (Immunité) | Inflammation |

---

## 5. Physiologie du LCS et Vascularisation

### Le Liquide Cérébro-Spinal (LCS / LCR)
- **Rôle** : Amortisseur mécanique et épurateur (système lymphatique du cerveau).
- **Circuit** : Sécrété par les **plexus choroïdes** (dans les ventricules) ➔ circule dans les ventricules et espaces sous-arachnoïdiens ➔ réabsorbé par les **Granulations de Pacchioni** (villosités arachnoïdiennes) dans la circulation veineuse.
- **Pathologie** : Le défaut de résorption (ex: après une hémorragie méningée) cause une **Hydrocéphalie**.

### Vascularisation Cérébrale
Le cerveau est irrigué par 4 artères principales (2 carotides internes, 2 vertébrales) qui fusionnent à la base du crâne pour former le **Polygone de Willis**.
- L'obstruction de l'**Artère Cérébrale Moyenne (Sylvienne)**, soit 80% des AVC ischémiques, cause une **hémiplégie à prédominance brachio-faciale** et une aphasie si l'hémisphère dominant est touché.
- L'obstruction d'une **Artère Cérébrale Antérieure** donne une hémiplégie à prédominance **crurale** (jambe).

---

## 6. Le Système Limbique et les Nerfs Crâniens

### Le Système Limbique
C'est le cerveau des émotions, de l'instinct et de la mémoire.
- **Hippocampe** : Mémoire épisodique (apprentissage). Sa dégénérescence = Maladie d'Alzheimer.
- **Amygdale** : Centre de la peur et des émotions.
- **Circuit de Papez** : Boucle de la mémoire (Hippocampe ➔ Fornix ➔ Corps Mamillaires). L'atteinte des corps mamillaires (Alcool/Carence B1) donne le **Syndrome de Korsakoff** (amnésie antérograde et fabulations).

### Les 12 Paires Crâniennes
*"Olah (I) Ophélie (II) Occupe-toi (III) De Ton (IV) Trier (V) Moteur (VI) Face (VII) A (VIII) Glouglou (IX) Vague (X) Accessoire (XI) Hypnotique (XII)"*
- Ciblées : III, IV, VI (Mouvements Oculaires), V (Sensibilité face), VII (Motricité face), VIII (Audition/Équilibre), IX, X (Déglutition, Végétatif vagal), XI (Cou/Haut épaule).
`
  },
  {
    id: 'imagerie-systeme-nerveux',
    categoryId: 'bases',
    name: 'II. Imagerie du Système Nerveux',
    content: `
## 1. Scanner (TDM) vs IRM Cérébrale

Deux modalités d'imagerie fondamentales en neurologie.

### 📊 Tableau Comparatif

| Paramètre | Scanner (TDM) | IRM Cérébrale |
|-----------|---------------|---------------|
| **Technologie** | Rayons X | Champ Magnétique + Ondes radio |
| **Durée** | Très rapide (< 5 min) | Longue (15 - 30 min) |
| **Disponibilité/Coût**| Importante, Moins cher | Limitée, Plus lourd |
| **Avantages**| Sang frais vif (Hémorragie), Os (Fracture) | Tissus mous, Ischémie ultra-précoce, Tumeurs |
| **Inconvénients / CI**| Grossesse (relatif), Rayonnement, Insuffisance rénale (si iodé) | Pacemaker, Implants cochléaires, Corps étrangers ferromagnétiques, Claustrophobie |

> 💡 **L'ASTUCE MNÉMOTECHNIQUE : Le saignement**
> - Au Scanner : Le sang récent est **Hyperdense** (Blanc comme l'os).
> - À l'IRM (séquence T2*) : L'hémosidérine est **Noire** (Hyposignal / Artefact de susceptibilité magnétique).

---

## 2. L'Exploration Vasculaire

### Le Doppler Transcrânien (DTC) et des TSA
L'échographie-Doppler est l'examen de débrouillage non-invasif par excellence.
- **Doppler des TSA** (Troncs Supra-Aortiques) : Évalue les artères carotides et vertébrales au cou. Idéal pour repérer des sténoses athéromateuses.
- **Doppler Transcrânien** : Permet la surveillance du Vasospasme (fréquent et fatal après une Hémorragie Méningée).

### L'Angioscanner et L'Angio-IRM
L'exploration vasculaire repose aujourd'hui sur le scanner et l'IRM (qui a remplacé l'artériographie conventionnelle diagnostique).
- **L'Angiographie-TDM** : Exige l'injection d'iode. Résolution ++. Visualise le caillot (thrombus) avant une thrombectomie.
- **L'Angio-IRM (ARM)** : Peut repérer le polygone de Willis SANS injection (séquence en temps de vol ou TOF).

---

## 3. La Neurologie Interventionnelle (NRI)

C'est "la chirurgie par l'intérieur des vaisseaux". Le cathéter monte depuis la fémorale ou la radiale vers le crâne.
1. **La Thrombectomie Mécanique (AVC ischémique)** : On aspire ou on extrait le caillot via un stent "retriever". (Fenêtre d'action : ~6 heures, voir plus selon l'imagerie).
2. **L'Embolisation (Anévrismes)** : On place des spires de platine (Coils) pour boucher un anévrisme qui a saigné ou risque de le faire.
`
  },
  {
    id: 'ponction-lombaire-pl',
    categoryId: 'bases',
    name: 'II. Ponction Lombaire (PL)',
    content: `
## 1. La Technique et Ses Risques

La Ponction Lombaire permet de recueillir le Liquide Cérébro-Spinal (LCS) pour analyse.
La moelle se terminant en L1-L2, l'aiguille est placée **entre les épineuses L4-L5** (au niveau de la ligne bimastiaque/crêtes iliaques).

### 📊 Illustration du Trajet de l'Aiguille

{{AIGUILLE_ILLUSTRATION}}

> 🚨 **VITAL - LA CONTRE-INDICATION ABSOLUE :**
> L'Hypertension intracrânienne (HTIC) sur **Lésion Focale** (Tumeur, Abcès, Hématome).
> **POURQUOI ?** Vider du liquide en bas crée une différence de pression. Le cerveau est alors aspiré vers le bas et s'engage à travers le trou occipital ➔ **Arrêt cardiorespiratoire immédiat.**
> *Règle : Tout patient avec œdème papillaire, déficit focal, ou signe d'HTIC doit avoir un Scanner Cébral AVANT la PL.*

---

## 2. Les Normes du LCS (À connaître par ❤️)

Voici le profil d'un Liquide Cérébro-Spinal **normal** chez l'adulte :

- **Pression d'ouverture** : < 15-20 cm H₂O
- **Aspect visuel** : "Eau de roche" (parfaitement translucide)
- **Protéinorachie** : 0,20 à 0,40 g/L (max 0.40)
- **Cellularité** : < 5 éléments / mm³ (pas de polynucléaires, très peu de lymphocytes)
- **Glycorachie** : Environ 50% de la Glycémie sanguine concomitante
- **Lactates** : < 3,2 mmol/L

### Corrélation Pathologique Express :
| Pathologie | Aspect | Protéines | Cellules | Glycorachie |
|------------|--------|-----------|----------|-------------|
| **Méningite Bactérienne** | Peau, trouble | ⬆️⬆️ > 1 g/L | ⬆️ Polynucléaires | ⬇️ Effondrée |
| **Méningite Virale** | Clair | ⬆️ discrète | ⬆️ Lymphocytes | Normale |
| **Hémorragie Méningée** | Rosé, sanglant | ⬆️ | Érythrocytes (GR) | Normale |
| **Guillain-Barré** | Clair | ⬆️ > 0,4 g/L | Normale (<5) | Normale |
*(Pour le GBS, c'est ce qu'on nomme la **Dissociation Albumino-Cytologique**)*
`
  },
  {
    id: 'examen-neurologique',
    categoryId: 'bases',
    name: 'III. Examen Neurologique',
    content: `
## 1. L'Interrogatoire Neurologique

L'interrogatoire représente **80% du diagnostic** en neurologie.
L'élément le plus critique est **la temporalité d'installation des troubles** :

- ⚡ **Installation Brutale** (Secondes, minutes) : Origine vasculaire (Saignement, Infarctus Cérébral).
- 📈 **Installation Subaiguë** (Jours, semaines) : Inflammatoire, Infectieux ou Métabolique.
- 🐢 **Installation Insidieuse & Progressive** (Mois, années) : Dégénératif (Alzheimer) ou Tumoral de bas grade.

---

## 2. Examen de la Motricité

### Le Tonus Musculaire (Évaluation de la raideur)
Il existe 2 grands types d'hypertonies (raideurs) à ne jamais confondre :
1. **L'Hypertonie Spastique (ou "Élastique")** : Résiste au mouvement, puis "cède en lame de canif", accentuée par la vitesse. Souvent unilatérale. ➔ **Atteinte Pyramidale** (CORTEX/VOIES MOTRICES).
2. **L'Hypertonie Plastique (ou "En tuyau de plomb")** : Résistance continue, par à-coups ("roue dentée"). ➔ **Atteinte Extra-Pyramidale** (SYNDROME PARKINSONIEN).

### Les Réflexes Ostéotendineux (ROT)
On tape sur le tendon, ce qui déclenche une contraction réflexe sans passer par le cerveau (Arc réflexe médullaire).
- **ROT Abolis / Diminués** : Atteinte du Nerf Périphérique, de la Racine ou dysfonction de l'Arc lui-même.
- **ROT Vifs, Diffusés, Polycinétiques** : Le cortex ne contrôle plus la moelle. Signe massif d'**atteinte Centrale (Pyramidale)**.

> 🚨 **Le TRÈS célèbre Signe de Babinski**
> Stimulation de la plante du pied d'arrière en avant sur le bord externe.
> Réponse normale = Flexion des orteils.
> **Réponse pathologique (Signe de Babinski)** = Extension lente et majestueuse du gros orteil.
> C'est le **Témoin Absolu d'une atteinte Pyramidale (Centrale) !**

---

## 3. Sensibilité et Coordination

### Le Test de Romberg (L'équilibre profond)
Le patient est debout, pieds joints. On lui demande de fermer les yeux.
- **Aggravation majeure à l'occlusion des yeux** : Le patient tenait debout uniquement grâce à la vue. C'est un trouble **Proprioceptif** (Sensibilité profonde).
- **Titubation immédiate / Chute systématique y compris yeux ouverts** : L'atteinte est **Cérébelleuse** ou **Vestibulaire**.

### La Coordination
Examen du Cervelet via :
- Test doigt-nez : **Dysmétrie** (le patient va trop loin et tape la joue).
- Les Marionnettes : **Adiadococinésie** (Incapacité à enchaîner le mouvement rapide).
`
  },
  {
    id: 'syndromes-topographiques',
    categoryId: 'bases',
    name: 'IV. Syndromes Topographiques',
    content: `
## 1. Localiser la Lésion par le Raisonnement

En neurologie, aucun scanner ne remplace la méthode : *"La fonction fait l'anatomie"*. 
Un ensemble de signes associés permet toujours de situer la *hauteur* de la panne.

{{LOCALISATION_ORGANIGRAMME}}

---

## 2. Tableaux des Grands Syndromes Raccourcis

### 1. Le Syndrome Pyramidal (Atteinte Centrale)
C'est la lésion de la voie de commande volontaire (AVC, Tumeur corticale, SEP).
- **Atteinte motrice** : Déficit moteur (Hémiplégie, paraplégie).
- **Tonus** : Raideur spastique.
- **Réflexes** : ROT très vifs, diffusés, polycinétiques.
- **Signe exclusif** : Babinski positif.
- *Remarque*: Il n'y a (presque) jamais de perte de muscle (amyotrophie) car le muscle a son nerf trophic.

### 2. Le Syndrome Périphérique / Neurogène (Atteinte distale)
C'est la lésion des nerfs crâniens, spinaux ou des racines (Guillain-Barré, Sciatique, Diabète).
- **Atteinte motrice** : Déficit localisé flasque.
- **Muscles** : Fonte musculaire rapide (Amyotrophie) + Petites contractions sous la peau (Fasciculations).
- **Réflexes** : ROT abolis ou très diminués.

### 3. Les Syndromes Frontal & Cérébelleux
| Syndrome | Zone lésée | Manifestation Type |
|----------|------------|--------------------|
| **Syndrome Frontal** | Lobe Frontal avant | Troubles du comportement sociaux, perte d'inhibition globale (Moria), impulsivité, apathie profonde. Réflexes archaïques (Grabbing). |
| **Syndrome Cérébelleux** | Cervelet (Fosse postérieure) | Ivresse sans alcool. Marche ébrieuse, parole scandée, nystagmus (yeux qui vibrent), tremblement lors de l'action. |

### 4. Le Syndrome de la Queue de Cheval 🚨 (L'Urgence absolue)
La moelle se finit en L2. Compresser les racines inférieures (L2-S5) (ex: Hernie discale géante L4-L5) donne ce syndrome grave.
- **Topographie** : Atteinte pluriradiculaire des jambes.
- **Symptômes** : Paraplégie flasque des 2 jambes, **Anesthésie en Culotte de Cheval/Selle**, Disparition des ROT rotuliens et achilléens.
- **LA GRAVITÉ** : Rétention Aiguë d'Urine indisponible et Incontinence / Perte de tonus du sphincter anal.
- *Catégorie* : Extrême urgence Neuro-Chirurgicale (IRM + Bloc opératoire avant 6 heures pour ne pas être sondé à vie).
`
  }
];
