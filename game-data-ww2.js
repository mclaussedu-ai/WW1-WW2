// ============================================================
//  DONNÉES NARRATIVES — SECONDE GUERRE MONDIALE (1939-1945)
// ============================================================

const WW2_DATA = {

    war: 'ww2',
    warLabel: 'Seconde Guerre mondiale',
    warYears: '1939 – 1945',

    characters: [
        {
            id: 'soldat',
            emoji: '🪖',
            name: 'Soldat',
            desc: 'Mobilisé en 1939, tu participes à la défense de la France.',
            startNode: 'ww2_soldat_1939'
        },
        {
            id: 'medecin',
            emoji: '🩺',
            name: 'Médecin',
            desc: 'Tu soignes sous l\'occupation. Chaque acte peut être dangereux.',
            startNode: 'ww2_medecin_1939'
        },
        {
            id: 'civil',
            emoji: '🧑‍🌾',
            name: 'Civil',
            desc: 'Tu vis sous l\'occupation nazie en France. La survie est quotidienne.',
            startNode: 'ww2_civil_1939'
        },
        {
            id: 'ouvrier',
            emoji: '🔧',
            name: 'Ouvrier',
            desc: 'Tu travailles dans une usine réquisitionnée par les Allemands.',
            startNode: 'ww2_ouvrier_1940'
        },
        {
            id: 'resistant',
            emoji: '✊',
            name: 'Résistant(e)',
            desc: 'Tu as choisi de te battre de l\'intérieur contre l\'occupant.',
            startNode: 'ww2_resistant_1940'
        }
    ],

    nodes: {

        // ─────────────────────────────────────────────
        //  SOLDAT WW2 — 1939
        // ─────────────────────────────────────────────
        ww2_soldat_1939: {
            year: '1939',
            chapter: 'Chapitre 1 — La drôle de guerre',
            text: `Le 3 septembre 1939. La France déclare la guerre à l'Allemagne.
Tu as 21 ans. Tu es appelé sous les drapeaux.

On t'envoie surveiller la frontière.
Mais rien ne se passe. Les mois passent. On appelle ça "la drôle de guerre."
Les soldats attendent, jouent aux cartes, s'ennuient.

Le général en chef est confiant : "La ligne Maginot nous protège."
Une série de fortifications infranchissables le long de la frontière.
Personne ne peut passer par là.

Mais en mai 1940, l'armée allemande contourne la ligne Maginot par la Belgique…`,
            note: `La "drôle de guerre" dure 8 mois (septembre 1939 – mai 1940) : deux pays en guerre qui ne se battent pas vraiment. La ligne Maginot, construite dans les années 1930, fut inutile car les Allemands l'ont contournée.`,
            choices: [
                {
                    text: 'Tu te prépares au combat. Tu sens que quelque chose va arriver.',
                    next: 'ww2_soldat_1940_defaite',
                    effect: { health: 0, morale: +5 }
                },
                {
                    text: 'Tu te détends. Avec la ligne Maginot, rien ne peut arriver.',
                    next: 'ww2_soldat_1940_defaite',
                    effect: { health: +5, morale: -10 }
                }
            ]
        },

        ww2_soldat_1940_defaite: {
            year: '1940',
            chapter: 'Chapitre 2 — La débâcle',
            text: `Mai 1940. En six semaines, l'armée française s'effondre.
Les Panzers allemands avancent à une vitesse terrifiante.
Tes camarades fuient dans tous les sens.
Des millions de civils encombrent les routes. On appelle ça "l'Exode".

Ton régiment est cerné. Le choix est simple :
rendre les armes ou tenter de fuir.

À la radio, tu entends le maréchal Pétain qui dit : "Je fais à la France le don de ma personne."
Il annonce qu'il va demander l'armistice aux Allemands.
La France capitule le 22 juin 1940.`,
            note: `En juin 1940, 8 à 10 millions de Français fuient devant l'avancée allemande : c'est "l'Exode". Le gouvernement signe l'armistice le 22 juin 1940. La France est divisée en zone occupée (nord) et zone libre (sud).`,
            choices: [
                {
                    text: 'Tu te rends aux Allemands. Tu ne veux pas mourir inutilement.',
                    next: 'ww2_soldat_1940_prisonnier',
                    effect: { health: 0, morale: -20 }
                },
                {
                    text: 'Tu tentes de rejoindre l\'Angleterre pour continuer à te battre.',
                    next: 'ww2_soldat_1940_angleterre',
                    effect: { health: -15, morale: +20 }
                }
            ]
        },

        ww2_soldat_1940_prisonnier: {
            year: '1940 – 1944',
            chapter: 'Chapitre 3 — Prisonnier de guerre',
            text: `Tu es fait prisonnier.
On t'emmène en Allemagne dans un Stalag (camp de prisonniers de guerre).
Pendant 4 ans, tu travailles dans une ferme allemande.
La nourriture est insuffisante. Le froid intense.

Mais tu es traité conformément à la Convention de Genève : on ne te torture pas.
Tu reviens en France en 1945, maigri, épuisé.

Tu apprendras ce que tu as manqué :
les bombardements, les rafles, la déportation des Juifs.
La France a vécu l'horreur sans toi.`,
            choices: [
                {
                    text: 'Continue vers la fin de la guerre.',
                    next: 'ww2_soldat_1945_fin',
                    effect: { health: -20, morale: -10 }
                }
            ]
        },

        ww2_soldat_1940_angleterre: {
            year: '1940',
            chapter: 'Chapitre 3 — Les Forces Françaises Libres',
            text: `Tu t'embarques sur un bateau à Dunkerque.
À Londres, tu entends à la radio la voix du général De Gaulle :

"La France a perdu une bataille, mais la France n'a pas perdu la guerre !"

Tu rejoins les Forces Françaises Libres (FFL).
Tu t'entraînes. Tu participes aux campagnes d'Afrique du Nord (1942), de Sicile (1943).

En juin 1944, c'est le débarquement en Normandie.
Les Alliés envahissent la France.
Tu touches à nouveau le sol français après 4 ans.`,
            note: `Le 18 juin 1940, le général de Gaulle lance son appel depuis Londres sur la BBC. Seuls quelques milliers de soldats rejoindront la France Libre au départ, mais ils formeront le noyau de la libération.`,
            choices: [
                {
                    text: 'Tu débarques en Normandie avec les Alliés.',
                    next: 'ww2_soldat_1944_debarquement',
                    effect: { health: -10, morale: +20 }
                }
            ]
        },

        ww2_soldat_1944_debarquement: {
            year: '1944',
            chapter: 'Chapitre 4 — Le Débarquement',
            text: `6 juin 1944. "Jour J."
Tu arrives sur la plage normande dans une barque de débarquement.
Les obus tombent. Les hommes tombent.
La mer est rouge.

Mais les Allemands cèdent. Centimètre par centimètre.
En août 1944, Paris est libéré.
Les Parisiens descendent dans les rues. C'est la fête.

Tu vois une vieille femme pleurer et un gamin embrasser ta joue.
"Merci, merci," répète-il.

Ce moment vaut quatre ans de combats.`,
            note: `Le Débarquement du 6 juin 1944 est la plus grande opération militaire de l'histoire : 156 000 soldats alliés débarquèrent en Normandie. Paris fut libéré le 25 août 1944.`,
            choices: [
                {
                    text: 'Continue vers la fin de la guerre.',
                    next: 'ww2_soldat_1945_fin',
                    effect: { health: -5, morale: +30 }
                }
            ]
        },

        ww2_soldat_1945_fin: {
            year: '1945',
            chapter: 'Chapitre 5 — La fin de la guerre',
            text: `8 mai 1945. L'Allemagne capitule.
La guerre est finie en Europe.

Mais on apprend l'ampleur des horreurs.
Les camps de la mort nazis : Auschwitz, Buchenwald, Treblinka.
6 millions de Juifs assassinés. Des millions d'autres victimes.

En août 1945, les États-Unis lancent deux bombes atomiques sur le Japon.
Hiroshima, le 6 août. Nagasaki, le 9 août.
La guerre totale a atteint son paroxysme.
Des villes entières effacées en quelques secondes.

Le 2 septembre 1945, c'est la fin de la Seconde Guerre mondiale.`,
            note: `La Seconde Guerre mondiale a fait entre 60 et 80 millions de morts dans le monde. C'est le conflit le plus meurtrier de l'histoire. La moitié des victimes étaient des civils.`,
            choices: [
                {
                    text: 'Voir la fin et le résumé pédagogique.',
                    next: '__END_SURVIVAL__',
                    effect: { health: 0, morale: +10 }
                }
            ]
        },

        // ─────────────────────────────────────────────
        //  MÉDECIN WW2 — 1939
        // ─────────────────────────────────────────────
        ww2_medecin_1939: {
            year: '1939',
            chapter: 'Chapitre 1 — Médecin sous l\'occupation',
            text: `Tu as 35 ans, médecin de campagne dans un village de Normandie.
En juin 1940, les soldats allemands arrivent.
Ils réquisitionnent ta salle d'attente pour en faire un bureau militaire.

Tu dois soigner tes patients normalement.
Mais un officier allemand te dit : "Docteur, vous soignerez en priorité nos soldats."

Le lendemain, une famille juive — les Lévy — se présente à ton cabinet.
Ils ont besoin de faux certificats médicaux pour ne pas être fichés.`,
            note: `Les Juifs en France devaient se déclarer et porter l'étoile jaune dès 1942. Les faux papiers médicaux ou d'identité ont permis à certains de survivre.`,
            choices: [
                {
                    text: 'Tu acceptes de faire les faux certificats. Tu risques ta vie.',
                    next: 'ww2_medecin_1942_rafles',
                    effect: { health: -5, morale: +20 }
                },
                {
                    text: 'Tu refuses. C\'est trop dangereux. Tu as une famille à protéger.',
                    next: 'ww2_medecin_1942_rafles_b',
                    effect: { health: 0, morale: -20 }
                }
            ]
        },

        ww2_medecin_1942_rafles: {
            year: '1942',
            chapter: 'Chapitre 2 — Les rafles',
            text: `Juillet 1942. "La Rafle du Vel d'Hiv."
En deux jours, 13 000 Juifs sont arrêtés à Paris par la police française.
Des hommes, des femmes, des enfants.
Ils sont entassés au Vélodrome d'Hiver avant d'être déportés.

La famille Lévy te prévient : "Ils viennent nous chercher."
Tu les caches dans ta cave pendant trois jours.
La Gestapo frappe à ta porte.

"Avez-vous vu des Juifs dans le quartier ?"`,
            note: `La rafle du Vél d'Hiv (16-17 juillet 1942) fut organisée par la police française sur ordre nazi. Sur les 13 000 personnes arrêtées, seulement 811 survécurent aux camps.`,
            choices: [
                {
                    text: '"Non, je n\'ai rien vu." Tu mens. Les Lévy survivent.',
                    next: 'ww2_medecin_1944_liberation',
                    effect: { health: -10, morale: +25 }
                },
                {
                    text: 'Tu paniques et dis la vérité. Les Lévy sont emmenés.',
                    next: 'ww2_medecin_1944_honte',
                    effect: { health: 0, morale: -30 }
                }
            ]
        },

        ww2_medecin_1942_rafles_b: {
            year: '1942',
            chapter: 'Chapitre 2 — La rafle',
            text: `Tu as refusé d'aider les Lévy.
Quelques mois plus tard, tu les vois traverser la rue avec l'étoile jaune.
Puis tu ne les vois plus.

On dit qu'ils ont été emmenés dans des "camps de travail" en Allemagne.
Tu sais, au fond de toi, que c'est pire que ça.
La honte te ronge.

Mais tu continues à soigner. Tu te dis que tu protèges ta famille.
En 1944, les Alliés débarquent.`,
            choices: [
                {
                    text: 'Continue vers la libération.',
                    next: 'ww2_medecin_1944_honte',
                    effect: { health: 0, morale: -20 }
                }
            ]
        },

        ww2_medecin_1944_honte: {
            year: '1944 – 1945',
            chapter: 'Chapitre 3 — La libération et la honte',
            text: `Août 1944. Les Alliés libèrent la Normandie.
Les Allemands partent.

On commence à connaître l'ampleur de la catastrophe.
Les camps de la mort en Pologne. Auschwitz. Les chambres à gaz.
6 millions de Juifs tués.

Tu apprends que la famille Lévy n'a pas survécu.
Tu penses à ta décision de ne pas les aider.
Cette décision te hantera toute ta vie.`,
            choices: [
                {
                    text: 'Voir la fin et le résumé pédagogique.',
                    next: '__END_SURVIVAL__',
                    effect: { health: 0, morale: -10 }
                }
            ]
        },

        ww2_medecin_1944_liberation: {
            year: '1944',
            chapter: 'Chapitre 3 — La libération',
            text: `Août 1944. Les Alliés libèrent ton village.
Les Allemands partent. Les gens fêtent dans les rues.

La famille Lévy sort de leur cachette.
Ils pleurent. Tu pleures.
"Merci, docteur. Vous nous avez sauvé la vie."

Tu apprends ce qu'il s'est passé dans les camps.
Auschwitz. Les chambres à gaz. L'extermination industrielle.
6 millions de Juifs tués par le régime nazi.

Ce que tu as fait — aider, résister, risquer ta vie — avait un sens.
Un immense sens.`,
            choices: [
                {
                    text: 'Voir la fin et le résumé pédagogique.',
                    next: '__END_SURVIVAL__',
                    effect: { health: 0, morale: +30 }
                }
            ]
        },

        // ─────────────────────────────────────────────
        //  CIVIL WW2 — 1939
        // ─────────────────────────────────────────────
        ww2_civil_1939: {
            year: '1939',
            chapter: 'Chapitre 1 — L\'occupation',
            text: `Tu as 16 ans quand la guerre commence.
En juin 1940, les soldats allemands entrent dans Paris.
Des soldats en uniforme vert-gris défilent sous l'Arc de Triomphe.
Des croix gammées sur les bâtiments.

Le maréchal Pétain est au pouvoir. Il dit qu'il faut "collaborer" avec les Allemands.
C'est ce qu'on appelle "l'État français" ou le régime de Vichy.

Ta famille reçoit des tickets de rationnement.
250 g de pain par jour. Pas de viande certains jours.`,
            note: `L'Occupation dure de juin 1940 à août-septembre 1944. Le régime de Vichy collabore activement avec l'Allemagne nazie. Les Français sont divisés : résistants, collaborateurs, et la majorité "attentiste" qui subit.`,
            choices: [
                {
                    text: 'Tu t\'adaptes à la vie sous l\'occupation. Pas le choix.',
                    next: 'ww2_civil_1941_etoile',
                    effect: { health: 0, morale: -5 }
                },
                {
                    text: 'Tu écoutes Radio Londres en secret la nuit. "Les Français parlent aux Français."',
                    next: 'ww2_civil_1941_etoile',
                    effect: { health: -5, morale: +10 }
                }
            ]
        },

        ww2_civil_1941_etoile: {
            year: '1941 – 1942',
            chapter: 'Chapitre 2 — L\'étoile jaune',
            text: `Mai 1942. Une nouvelle loi oblige tous les Juifs à porter une étoile jaune dans les espaces publics.
Ton voisin, Monsieur Nathan, sort dans la rue avec l'étoile sur son manteau.
Tu le regardes dans les yeux. Il baisse les siens.

Des enfants à l'école commencent à être retirés de leur classe.
On dit qu'ils sont "envoyés ailleurs". Personne ne sait vraiment où.

Un matin, tu trouves Monsieur Nathan en larmes devant sa porte.
"Ils ont arrêté ma fille cette nuit."`,
            note: `Le port obligatoire de l'étoile jaune fut instauré en France occupée en juin 1942. C'est une étape dans la politique d'exclusion et d'extermination des Juifs par les nazis.`,
            choices: [
                {
                    text: 'Tu proposes de l\'aide à Monsieur Nathan. Tu vas acheter ses courses pour lui.',
                    next: 'ww2_civil_1943_sto',
                    effect: { health: 0, morale: +20 }
                },
                {
                    text: 'Tu fermes ta porte. Tu ne veux pas avoir d\'ennuis.',
                    next: 'ww2_civil_1943_sto',
                    effect: { health: 0, morale: -20 }
                }
            ]
        },

        ww2_civil_1943_sto: {
            year: '1943',
            chapter: 'Chapitre 3 — Le STO',
            text: `Février 1943. Tu as maintenant 20 ans.
Tu reçois une lettre. C'est la convocation pour le STO : Service du Travail Obligatoire.
Tu dois partir travailler en Allemagne dans une usine.
En deux ans, 650 000 Français seront envoyés de force en Allemagne.

Ton ami Jean dit : "Moi, je pars dans le maquis plutôt."
Certains résistants se cachent dans les forêts et les montagnes.
Si tu pars au STO, tu travailles pour les nazis.
Si tu fuis, tu deviens hors-la-loi.`,
            note: `Le STO (Service du Travail Obligatoire) contraignait les jeunes hommes français à travailler en Allemagne pour l'économie de guerre nazie. Beaucoup choisirent de rejoindre la Résistance plutôt que de partir.`,
            choices: [
                {
                    text: 'Tu pars au STO. C\'est obligatoire et tu protèges ta famille.',
                    next: 'ww2_civil_1944_sto_retour',
                    effect: { health: -15, morale: -20 }
                },
                {
                    text: 'Tu rejoins le maquis avec Jean. Tu refuses de travailler pour l\'ennemi.',
                    next: 'ww2_civil_1944_maquis',
                    effect: { health: -10, morale: +25 }
                }
            ]
        },

        ww2_civil_1944_sto_retour: {
            year: '1943 – 1945',
            chapter: 'Chapitre 4 — Travail forcé',
            text: `Tu travailles pendant deux ans dans une usine à Stuttgart.
Les bombardements alliés font trembler les murs chaque nuit.
Dresden, à 200 km, est presque entièrement détruite en février 1945 par des raids aériens.

Tu rentres en France en mai 1945.
Certains te regardent avec méfiance. "Tu as travaillé pour les nazis."
La libération est fêtée, mais pas pour toi.`,
            note: `Le bombardement de Dresde (13-14 février 1945) par les Alliés anglo-américains détruisit la ville en grande partie et tua entre 22 000 et 25 000 personnes. Ce bombardement reste controversé : était-il militairement nécessaire ?`,
            choices: [
                {
                    text: 'Voir la fin et le résumé pédagogique.',
                    next: '__END_SURVIVAL__',
                    effect: { health: 0, morale: -5 }
                }
            ]
        },

        ww2_civil_1944_maquis: {
            year: '1943 – 1944',
            chapter: 'Chapitre 4 — Le maquis',
            text: `Tu te caches avec Jean dans une ferme du Vercors.
Vous sabotez des voies ferrées. Vous cachez des aviateurs alliés tombés en France.
C'est dangereux. Si la Gestapo vous attrape, c'est la torture et la mort.

En juillet 1944, les Allemands lancent une offensive massive contre le maquis du Vercors.
L'armée de l'air nazie bombarde vos positions.
Vous vous battez, mais vous êtes submergés.
Jean est tué.`,
            choices: [
                {
                    text: 'Tu te bats jusqu\'au bout et tu réussis à fuir.',
                    next: 'ww2_civil_1944_liberte',
                    effect: { health: -25, morale: +15 }
                },
                {
                    text: 'Tu te rends aux Allemands.',
                    next: 'ww2_civil_mort_maquis',
                    effect: { health: -30, morale: -20 }
                }
            ]
        },

        ww2_civil_mort_maquis: {
            year: '1944',
            chapter: 'Fin',
            text: `Les Allemands t'ont arrêté.
Ils t'ont torturé pour obtenir des informations sur la Résistance.
Tu n'as rien dit.
Tu es mort fusillé, comme des centaines de résistants.`,
            death: true,
            deathTitle: 'Mort pour la liberté',
            deathText: 'Tu as été tué par les nazis pour avoir résisté à l\'occupation. Tu n\'as pas parlé sous la torture. Ton sacrifice fait partie de l\'histoire de la Résistance française.',
            deathHistorical: 'Des dizaines de milliers de résistants français furent tués ou déportés pendant l\'Occupation. Leur courage a contribué à la libération de la France.',
            choices: []
        },

        ww2_civil_1944_liberte: {
            year: '1944',
            chapter: 'Chapitre 5 — La Libération',
            text: `Août 1944. Les Alliés avancent.
Les Allemands se retirent.

Tu entres dans Paris libéré.
Les cloches sonnent. Les gens pleurent de joie.
Sur les Champs-Élysées, de Gaulle défile.

Tu penses à Jean, mort au maquis.
À Monsieur Nathan et sa fille.
À tous ceux qui ne verront pas cette victoire.

La liberté a un goût de larmes.`,
            choices: [
                {
                    text: 'Voir la fin et le résumé pédagogique.',
                    next: '__END_SURVIVAL__',
                    effect: { health: 0, morale: +20 }
                }
            ]
        },

        // ─────────────────────────────────────────────
        //  OUVRIER WW2 — 1940
        // ─────────────────────────────────────────────
        ww2_ouvrier_1940: {
            year: '1940',
            chapter: 'Chapitre 1 — L\'usine sous occupation',
            text: `Tu travailles dans une usine de pièces automobiles à Lyon.
En juillet 1940, les Allemands arrivent.
L'usine est réquisitionnée. On fabrique désormais des pièces pour les camions militaires allemands.

Tu n'as pas le choix : travailler ou perdre ton emploi, tes tickets de rationnement, peut-être pire.
Mais fabriquer des pièces pour les nazis, c'est les aider à gagner.

Ton chef d'atelier, Fernand, te chuchote un matin : "Je sais des gens de la Résistance. Ils ont besoin de saboteurs dans les usines."`,
            note: `L'économie française fut entièrement au service de l'Allemagne pendant l'Occupation : usines, matières premières, main-d'œuvre. La résistance ouvrière passait souvent par le sabotage discret.`,
            choices: [
                {
                    text: 'Tu suis Fernand. Tu vas saboter les pièces discrètement.',
                    next: 'ww2_ouvrier_1942_sabotage',
                    effect: { health: -5, morale: +20 }
                },
                {
                    text: 'Tu refuses. C\'est trop risqué. Tu as une femme et un enfant.',
                    next: 'ww2_ouvrier_1943_sto',
                    effect: { health: 0, morale: -10 }
                }
            ]
        },

        ww2_ouvrier_1942_sabotage: {
            year: '1942',
            chapter: 'Chapitre 2 — Le sabotage',
            text: `Depuis six mois, tu fais des pièces défectueuses.
Des roulements à billes légèrement mal calibrés. Des soudures un peu trop fragiles.
Les camions allemands tombent en panne plus souvent.

Un jour, la Gestapo débarque dans l'usine.
Ils ont des soupçons. Ils alignent tous les ouvriers et interrogent tout le monde.
Fernand est arrêté.

Il te regarde avant qu'on l'emmène. Il ne dit rien.
Tu n'as jamais eu aussi peur de ta vie.`,
            choices: [
                {
                    text: 'Tu continues le sabotage seul, en l\'honneur de Fernand.',
                    next: 'ww2_ouvrier_1944_fin',
                    effect: { health: -10, morale: +15 }
                },
                {
                    text: 'Tu arrêtes. C\'est trop dangereux. Fernand est peut-être mort à cause de toi.',
                    next: 'ww2_ouvrier_1944_fin',
                    effect: { health: +5, morale: -15 }
                }
            ]
        },

        ww2_ouvrier_1943_sto: {
            year: '1943',
            chapter: 'Chapitre 2 — Le STO',
            text: `Tu travailles normalement pour les Allemands.
Mais en 1943, le STO est instauré.
Même les ouvriers des usines réquisitionnées peuvent être envoyés en Allemagne.

On vient te chercher.
Tu es envoyé dans une usine à Cologne.
Les bombardements alliés sont de plus en plus fréquents.
Chaque nuit, tu te demandes si tu vas survivre jusqu'au matin.`,
            choices: [
                {
                    text: 'Continue vers la fin de la guerre.',
                    next: 'ww2_ouvrier_1944_fin',
                    effect: { health: -20, morale: -15 }
                }
            ]
        },

        ww2_ouvrier_1944_fin: {
            year: '1944 – 1945',
            chapter: 'Chapitre 3 — La fin',
            text: `1944. Les Alliés avancent. L'Allemagne est bombardée.
Tu rentres en France après la libération.

L'usine rouvre. On fabrique à nouveau des pièces civiles.
La reconstruction commence.

Tu vois dans le journal les photos des camps de concentration libérés.
Auschwitz, Buchenwald, Bergen-Belsen.
Des milliers de survivants-squelettes.

La réalité du nazisme t'apparaît dans toute son horreur.
Comment des humains ont-ils pu faire ça ?`,
            choices: [
                {
                    text: 'Voir la fin et le résumé pédagogique.',
                    next: '__END_SURVIVAL__',
                    effect: { health: 0, morale: +10 }
                }
            ]
        },

        // ─────────────────────────────────────────────
        //  RÉSISTANT(E) WW2 — 1940
        // ─────────────────────────────────────────────
        ww2_resistant_1940: {
            year: '1940',
            chapter: 'Chapitre 1 — Le choix de résister',
            text: `18 juin 1940. À la radio, une voix :
"La France a perdu une bataille, mais la France n'a pas perdu la guerre !"
C'est le général de Gaulle depuis Londres.

Les Allemands occupent Paris. Le maréchal Pétain collabore avec Hitler.
Mais toi, tu ne peux pas accepter ça.

Tu rejoins un petit groupe dans ton quartier.
Vous distribuez des tracts clandestins : "Non à l'Occupation !"
C'est illégal. La peine, c'est la mort ou la déportation.

Mais tu ne pouvais pas rester les bras croisés.`,
            note: `La Résistance française s'organisa progressivement à partir de 1940. Elle regroupa des gens de tous horizons : communistes, gaullistes, catholiques, juifs, étrangers. Jean Moulin unifia les mouvements sous l'autorité de De Gaulle en 1943.`,
            choices: [
                {
                    text: 'Tu distribues les tracts de nuit, dans les boîtes aux lettres.',
                    next: 'ww2_resistant_1941_reseaux',
                    effect: { health: -5, morale: +20 }
                },
                {
                    text: 'Tu écoutes les messages de la BBC pour transmettre des informations.',
                    next: 'ww2_resistant_1941_reseaux',
                    effect: { health: 0, morale: +15 }
                }
            ]
        },

        ww2_resistant_1941_reseaux: {
            year: '1941',
            chapter: 'Chapitre 2 — Les réseaux',
            text: `Tu entres dans un vrai réseau de résistance.
On t'appelle par un pseudonyme : "Luc".
Tu ne connais que les gens directement autour de toi, pour ta sécurité.

Tes missions : faire passer des messages codés, cacher des aviateurs alliés, transmettre des informations sur les mouvements de troupes allemandes.

Un soir, ton contact "Mathieu" ne se présente pas au rendez-vous.
On t'avertit : "Mathieu a été arrêté. La Gestapo cherche des membres de son réseau."
Tu es peut-être grillé.`,
            note: `Les réseaux de résistance fonctionnaient en cellules indépendantes pour limiter les dégâts en cas d'arrestation. La Gestapo (police secrète nazie) était redoutée pour ses méthodes de torture pour obtenir des informations.`,
            choices: [
                {
                    text: 'Tu disparais immédiatement. Tu changes d\'adresse.',
                    next: 'ww2_resistant_1942_cache',
                    effect: { health: -5, morale: +5 }
                },
                {
                    text: 'Tu continues comme si de rien n\'était. Tu as confiance dans le réseau.',
                    next: 'ww2_resistant_1942_arrestation',
                    effect: { health: 0, morale: +10 }
                }
            ]
        },

        ww2_resistant_1942_arrestation: {
            year: '1942',
            chapter: 'Chapitre 3 — Arrêté',
            text: `La Gestapo frappe à ta porte à l'aube.
Ils savent tout.

Tu es emmené et interrogé pendant 48 heures.
Ils veulent des noms.
Tu ne donnes rien.

Tu es déporté dans un camp de concentration en Allemagne.
Buchenwald. La faim, le froid, le travail forcé, la déshumanisation.
Seras-tu encore là quand les Américains arriveront ?`,
            choices: [
                {
                    text: 'Tu survives jusqu\'à la libération du camp.',
                    next: 'ww2_resistant_1945_survie_camp',
                    effect: { health: -30, morale: -20 }
                },
                {
                    text: 'Tu meurs d\'épuisement et de maladie dans le camp.',
                    next: 'ww2_resistant_mort_camp',
                    effect: { health: -40, morale: -30 }
                }
            ]
        },

        ww2_resistant_mort_camp: {
            year: '1943',
            chapter: 'Fin',
            text: `Tu n'as pas survécu au camp.
Mais tu n'as jamais parlé sous la torture.
Aucun de tes camarades n'a été dénoncé à cause de toi.

Ton nom est gravé sur le monument aux morts de ton village.`,
            death: true,
            deathTitle: 'Mort en déportation',
            deathText: 'Tu es mort dans un camp de concentration nazi après avoir refusé de parler sous la torture. Ta résistance a protégé tes camarades. Tu es un héros de la Résistance française.',
            deathHistorical: 'Environ 90 000 résistants français furent déportés dans des camps nazis. La moitié n\'en reviendra pas. Parmi eux, Jean Moulin, chef de la Résistance, mort sous la torture en 1943.',
            choices: []
        },

        ww2_resistant_1942_cache: {
            year: '1942 – 1944',
            chapter: 'Chapitre 3 — Dans l\'ombre',
            text: `Tu te caches pendant plusieurs mois chez une famille agricole dans le Lot.
Tu uses d'une fausse identité : "Henri Blanchard."
Tu continues à aider : tu héberges des familles juives en fuite.
Tu transmets des informations aux Alliés.

Un jour, tu croises dans la rue un homme qui te reconnaît.
C'est un ancien voisin. Il sait qui tu es vraiment.
Il te sourit et continue son chemin.

Il ne te dénoncera pas.`,
            choices: [
                {
                    text: 'Continue vers la libération.',
                    next: 'ww2_resistant_1944_liberation',
                    effect: { health: -5, morale: +15 }
                }
            ]
        },

        ww2_resistant_1944_liberation: {
            year: '1944',
            chapter: 'Chapitre 4 — La libération',
            text: `Été 1944. Les Alliés débarquent en Normandie.
La Résistance se soulève partout en France.
Tu participes à la libération de ta ville, les armes à la main.

Quand les Allemands se rendent, tu te souviens de tout ce que tu as risqué.
Les quatre ans dans l'ombre. La peur quotidienne.
Les camarades arrêtés, torturés, tués.

Mais c'était la bonne décision.
Et maintenant, les gens dans la rue te serrent la main.`,
            choices: [
                {
                    text: 'Voir la fin et le résumé pédagogique.',
                    next: '__END_SURVIVAL__',
                    effect: { health: 0, morale: +30 }
                }
            ]
        },

        ww2_resistant_1945_survie_camp: {
            year: '1945',
            chapter: 'Chapitre 4 — Libéré du camp',
            text: `Avril 1945. Les soldats américains ouvrent les portes de Buchenwald.
Tu pèses 40 kg. Tu tiens à peine debout.

Mais tu es vivant.

Le soldat américain qui te tend du chocolat pleure.
Tu ne comprends pas vraiment sa langue, mais tu comprends son regard.

De retour en France, tu mettras des années à raconter.
Les gens ne te croiront pas toujours.
"C'est trop horrible, c'est impossible," diront certains.

Tu témoigneras jusqu'à la fin de ta vie.
Pour que ça ne se reproduise jamais.`,
            note: `Les camps de concentration nazis furent libérés par les Alliés entre 1944 et 1945. Les images des survivants choquèrent le monde. Les procès de Nuremberg (1945-1946) jugèrent les criminels de guerre nazis.`,
            choices: [
                {
                    text: 'Voir la fin et le résumé pédagogique.',
                    next: '__END_SURVIVAL__',
                    effect: { health: 0, morale: +20 }
                }
            ]
        }

    } // fin nodes WW2
}; // fin WW2_DATA
