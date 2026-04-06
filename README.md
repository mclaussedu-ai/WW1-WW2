# 1914 — 1945 : Survivre à la Guerre

> **Livre dont vous êtes le héros** — Jeu pédagogique sur les deux guerres mondiales pour des élèves de 1ère professionnelle.

---

## 🎯 Objectifs pédagogiques

- Comprendre les repères chronologiques des deux guerres mondiales
- Appréhender la notion de **guerre totale**
- Montrer l'impact de la guerre sur les individus (soldats ET civils)
- Faire vivre des situations concrètes et historiquement ancrées

---

## 🎮 Structure du jeu

### Fichiers
```
index.html               → Page principale
css/style.css            → Styles immersifs (thème sépia/guerre)
js/game-data-ww1.js      → Données narratives WWI (4 personnages)
js/game-data-ww2.js      → Données narratives WWII (5 personnages)
js/game-engine.js        → Moteur de jeu (navigation, stats, fins)
```

### Flux de jeu
1. **Écran titre** → présentation du jeu
2. **Choix de la période** → WWI (1914–1918) ou WWII (1939–1945)
3. **Choix du personnage** → selon la période choisie
4. **Jeu narratif** → étapes chronologiques avec choix à chaque scène
5. **Fin de partie** → écran de survie ou mort
6. **Résumé pédagogique** → notions clés, repères, définition guerre totale

---

## 👥 Personnages disponibles

### Première Guerre mondiale (WWI)
| Personnage | Nœud de départ | Thèmes abordés |
|---|---|---|
| 🪖 Soldat | `ww1_soldat_1914` | Tranchées, gaz, Verdun, mutineries |
| 🩺 Médecin | `ww1_medecin_1914` | Soins au front, gueules cassées, trauma |
| 🧑‍🌾 Civil | `ww1_civil_1914` | Propagande, pénuries, arrière |
| 🏭 Ouvrière d'usine | `ww1_ouvriere_1914` | Économie de guerre, condition féminine |

### Seconde Guerre mondiale (WWII)
| Personnage | Nœud de départ | Thèmes abordés |
|---|---|---|
| 🪖 Soldat | `ww2_soldat_1939` | Drôle de guerre, débâcle, FFL, Débarquement |
| 🩺 Médecin | `ww2_medecin_1939` | Occupation, rafles, protection des Juifs |
| 🧑‍🌾 Civil | `ww2_civil_1939` | Occupation, étoile jaune, STO, maquis |
| 🔧 Ouvrier | `ww2_ouvrier_1940` | Réquisition, sabotage, STO |
| ✊ Résistant(e) | `ww2_resistant_1940` | Réseaux, Gestapo, déportation, libération |

---

## ⚙️ Mécaniques de jeu

- **2 stats** : Santé (❤️) et Moral (🧠) — chaque choix les modifie
- **Choix narratifs** (2-3 par scène) avec raccourcis clavier A/B/C
- **Mort possible** → overlay avec contexte historique + accès au résumé
- **Notes historiques** après chaque scène importante
- **Personnages historiques** mentionnés : Pétain, Clémenceau, De Gaulle, Hitler, Churchill

---

## 📚 Contenu pédagogique intégré

### Notions couvertes
- ⚔️ Violence de masse (Verdun, Shoah, bombardements)
- 🏭 Économie de guerre (usines d'armement, STO, réquisitions)
- 📢 Propagande (affiches, Union sacrée, radio de Vichy)
- 👨‍👩‍👧 Mobilisation des civils (femmes au travail, rationnement, exode)
- 🌍 Dimension mondiale (guerre totale)
- ✊ Résistance (réseaux, maquis, déportation)

### Repères chronologiques générés automatiquement
- **WWI** : 1914 → 1915 → 1916 → 1917 → 1918
- **WWII** : 1939 → 1940 → 1941 → 1942 → 1943 → 1944 → 1945

### Définition en conclusion
**Guerre totale** : conflit qui mobilise l'ensemble de la société (soldats, civils, économie, propagande).

---

## 🎨 Choix de design

- Typographies : *Special Elite* (titre), *Crimson Text* (narration), *Oswald* (UI)
- Palette : sépia / brun / rouge guerre sur fond noir
- Responsive (mobile-first)
- Animations douces pour l'immersion
- Scrollbar et boutons stylisés au thème

---

## 🔄 Améliorations possibles

- Ajout de sons d'ambiance (obus, silence, chants)
- Sauvegarde locale (localStorage) pour continuer une partie
- Mode "classe" avec score pédagogique collectif
- Ajout de documents historiques (photos, affiches, extraits de lettres)
- Version imprimable des résumés pédagogiques
- Questions de QCM en fin de partie pour évaluation

---

*Jeu conçu à des fins pédagogiques — Lycée professionnel, classe de 1ère.*
