// ============================================================
//  DONNÉES NARRATIVES — PREMIÈRE GUERRE MONDIALE (1914-1918)
// ============================================================

const WW1_DATA = {

    war: 'ww1',
    warLabel: 'Première Guerre mondiale',
    warYears: '1914 – 1918',

    characters: [
        {
            id: 'soldat',
            emoji: '🪖',
            name: 'Soldat',
            desc: 'Tu pars au front défendre la patrie. La tranchée t\'attend.',
            startNode: 'ww1_soldat_1914'
        },
        {
            id: 'medecin',
            emoji: '🩺',
            name: 'Médecin',
            desc: 'Tu soignes les blessés au plus près des combats. Chaque jour compte.',
            startNode: 'ww1_medecin_1914'
        },
        {
            id: 'civil',
            emoji: '🧑‍🌾',
            name: 'Civil',
            desc: 'La guerre est loin… mais ses effets arrivent jusqu\'à toi.',
            startNode: 'ww1_civil_1914'
        },
        {
            id: 'ouvriere',
            emoji: '🏭',
            name: 'Ouvrière d\'usine',
            desc: 'Tu travailles dans une usine d\'armement. La guerre a besoin de toi.',
            startNode: 'ww1_ouvriere_1914'
        }
    ],

    // ============================================================
    //  NŒUDS NARRATIFS
    //  Structure : { id, year, chapter, text, note?, choices, effect? }
    //  effect : { health, morale } (delta)
    //  choices : [{ text, next, effect?, death? }]
    //  death : true → déclenche l'écran de mort
    // ============================================================

    nodes: {

        // ─────────────────────────────────────────────
        //  SOLDAT — 1914
        // ─────────────────────────────────────────────
        ww1_soldat_1914: {
            year: '1914',
            chapter: 'Chapitre 1 — La mobilisation générale',
            text: `Tu as 19 ans. C'est le 2 août 1914.
Ce matin, des affiches blanches sont collées partout dans ton village : "Ordre de mobilisation générale."
Tes voisins crient de joie. Certains chantent. Ils pensent que ça sera fini avant Noël.

Ton père te serre la main. Ta mère pleure en silence.
Tu montes dans le train avec deux cents autres soldats. Personne ne sait vraiment où on va.`,
            note: `La mobilisation générale de 1914 envoie 3,8 millions de Français au front en quelques semaines. La plupart des soldats pensaient à une guerre courte et victorieuse.`,
            choices: [
                {
                    text: 'Tu cries "Vive la France !" avec les autres, emporté par l\'enthousiasme.',
                    next: 'ww1_soldat_1915_tranchees',
                    effect: { health: 0, morale: +5 }
                },
                {
                    text: 'Tu gardes le silence. Quelque chose te dit que ce ne sera pas si simple.',
                    next: 'ww1_soldat_1915_tranchees',
                    effect: { health: 0, morale: -5 }
                }
            ]
        },

        ww1_soldat_1915_tranchees: {
            year: '1915',
            chapter: 'Chapitre 2 — Les tranchées',
            text: `Nous sommes en janvier 1915. Tu es en Champagne, dans une tranchée.
C'est une longue fosse de boue, de 2 mètres de profondeur. L'eau monte jusqu'aux genoux. Le froid est insupportable.
Les rats courent partout. La nuit, on entend les obus siffler.

Ton camarade Marcel tousse depuis trois jours. En face, les soldats allemands ne sont qu'à 80 mètres.

Soudain, un ordre arrive : "Demain, à l'aube, on monte à l'assaut."`,
            note: `Les tranchées s'étiraient sur 700 km du nord de la France jusqu'à la Suisse. Les soldats vivaient dans des conditions épouvantables : boue, rats, poux, froid, et mort omniprésente.`,
            choices: [
                {
                    text: 'Tu t\'élances à l\'assaut avec tes camarades au signal du sifflet.',
                    next: 'ww1_soldat_1915_assaut',
                    effect: { health: -20, morale: +10 }
                },
                {
                    text: 'Tu restes dans la tranchée, paralysé par la peur. Ton sergent te voit.',
                    next: 'ww1_soldat_1915_peur',
                    effect: { health: 0, morale: -20 }
                }
            ]
        },

        ww1_soldat_1915_assaut: {
            year: '1915',
            chapter: 'Chapitre 2 — L\'assaut',
            text: `Le sifflet retentit.
Tu cours dans no man's land. Le sol est défoncé par les obus, rempli de cadavres.
Les balles sifflent autour de toi. Ton camarade Henri tombe à côté de toi.

Tu avances. Tu avances encore.
Vous atteignez la tranchée allemande. L'ennemi recule.
Mais le lendemain, les Allemands reprennent leurs positions.
Rien n'a changé. On a perdu 200 hommes pour 50 mètres de boue.`,
            note: `Lors de la bataille de la Somme (1916), on compte 1,2 million de morts des deux côtés pour quelques kilomètres de terrain conquis. La guerre de position rend toute avancée dérisoire.`,
            choices: [
                {
                    text: 'Tu veux continuer à te battre. La France doit gagner.',
                    next: 'ww1_soldat_1915_gaz',
                    effect: { health: 0, morale: +5 }
                },
                {
                    text: 'Tu commences à douter. Est-ce que ça valait la peine de mourir pour 50 mètres ?',
                    next: 'ww1_soldat_1915_gaz',
                    effect: { health: 0, morale: -10 }
                }
            ]
        },

        ww1_soldat_1915_peur: {
            year: '1915',
            chapter: 'Chapitre 2 — La peur',
            text: `Ton sergent t'attrape par l'épaule.
"Lâche ! Tu vas passer en cour martiale !"

Mais l'attaque tourne mal. Trop de morts. Ordre de retraite.
Tu as survécu, mais la honte t'écrase.

Les semaines passent. En avril, quelque chose d'inhabituel arrive :
Un nuage jaune-vert s'approche en rampant au ras du sol. Cela sent l'ail et le chlore.
"LES GAZ !"`,
            choices: [
                {
                    text: 'Tu mets ton masque rapidement, comme on te l\'a appris.',
                    next: 'ww1_soldat_1916_verdun',
                    effect: { health: 0, morale: +5 }
                },
                {
                    text: 'Tu paniques et t\'enfuis en courant sans masque.',
                    next: 'ww1_soldat_mort_gaz',
                    effect: { health: -40, morale: -20 }
                }
            ]
        },

        ww1_soldat_mort_gaz: {
            year: '1915',
            chapter: 'Fin',
            text: `Le gaz chlore brûle tes poumons.
Tu t'effondres dans la boue.
Tu n'arriveras jamais à Verdun.`,
            death: true,
            deathTitle: 'Mort dans les gaz',
            deathText: 'Tu as respiré du gaz chlore sans masque de protection. Tes poumons n\'ont pas résisté. Des milliers de soldats sont morts de cette façon entre 1915 et 1918.',
            deathHistorical: 'Les gaz de combat (chlore, phosgène, ypérite) ont été utilisés pour la première fois à Ypres en avril 1915. Ils ont causé plus de 90 000 morts et 1,2 million de blessés pendant la guerre.',
            choices: []
        },

        ww1_soldat_1915_gaz: {
            year: '1915 — Les gaz de combat',
            chapter: 'Chapitre 3 — L\'arme chimique',
            text: `Printemps 1915. Un nuage jaune-vert arrive du côté allemand.
"LES GAZ ! LES GAZ !"

Tu enfiles ton masque à la hâte. Tes mains tremblent.
À côté de toi, un camarade n'a pas eu le temps. Il s'effondre, la bouche grande ouverte, les yeux rouges.

Le gaz chlore brûle tout ce qu'il touche.
Plus tard, tu apprendras que les Allemands viennent d'inventer une nouvelle arme.
La guerre change de visage. Elle devient une machine à tuer industrielle.`,
            note: `Premier usage massif des gaz de combat à Ypres (Belgique), le 22 avril 1915. Environ 5 000 soldats morts en quelques minutes. La France et la Grande-Bretagne utilisèrent ensuite ces armes à leur tour.`,
            choices: [
                {
                    text: 'Tu soignes ton camarade blessé, même si tu prends des risques.',
                    next: 'ww1_soldat_1916_verdun',
                    effect: { health: -10, morale: +15 }
                },
                {
                    text: 'Tu te mets à l\'abri. Tu ne peux rien faire pour lui maintenant.',
                    next: 'ww1_soldat_1916_verdun',
                    effect: { health: 0, morale: -15 }
                }
            ]
        },

        ww1_soldat_1916_verdun: {
            year: '1916',
            chapter: 'Chapitre 4 — Verdun, l\'enfer',
            text: `Février 1916. Tu arrives à Verdun.
C'est la plus grande bataille de la guerre.
Les obus tombent sans arrêt. La terre explose partout.

Le général Pétain te lance, via les affiches : "Ils ne passeront pas !"
Mais chaque jour, des centaines de soldats meurent.

Tu n'as pas dormi depuis 4 jours. Tu ne te souviens plus de la couleur du ciel.
Un matin, tu trouves une lettre de ta mère dans ta poche.
Elle t'a envoyé du pain et te dit qu'elle prie pour toi.`,
            note: `La bataille de Verdun (21 février – 19 décembre 1916) est l'une des plus meurtrières de l'histoire : environ 700 000 morts et blessés des deux côtés pour un front qui ne bougera presque pas.`,
            choices: [
                {
                    text: 'Tu lis la lettre et pleures en silence. Cette chaleur te donne la force de continuer.',
                    next: 'ww1_soldat_1917_mutineries',
                    effect: { health: +10, morale: +20 }
                },
                {
                    text: 'Tu jettes la lettre. Les sentiments n\'ont plus leur place ici.',
                    next: 'ww1_soldat_1917_mutineries',
                    effect: { health: 0, morale: -10 }
                }
            ]
        },

        ww1_soldat_1917_mutineries: {
            year: '1917',
            chapter: 'Chapitre 5 — Le tournant de la guerre',
            text: `Printemps 1917. Après l'échec du général Nivelle sur le Chemin des Dames, quelque chose se brise.

Des soldats refusent de remonter en première ligne. Pas pour fuir, mais pour survivre.
On appelle ça des "mutineries".

Ton régiment est agité. Certains veulent signer une pétition. D'autres ont peur d'être fusillés.
Un sergent chuchote : "Les Russes ont fait leur révolution. Nous, on continue à mourir pour des généraux qui ne viennent jamais au front."`,
            note: `Après l'offensive Nivelle d'avril 1917, près de 40 000 soldats français refusèrent de monter au front. 629 furent condamnés, 49 fusillés. Clémenceau, nommé chef du gouvernement en novembre 1917, relança la guerre.`,
            choices: [
                {
                    text: 'Tu rejoins les mutins. Vous avez le droit de vivre.',
                    next: 'ww1_soldat_1917_mutin',
                    effect: { health: 0, morale: +10 }
                },
                {
                    text: 'Tu restes à ta place. Tu crois encore en la victoire.',
                    next: 'ww1_soldat_1918_fin',
                    effect: { health: 0, morale: -5 }
                }
            ]
        },

        ww1_soldat_1917_mutin: {
            year: '1917',
            chapter: 'Chapitre 5 — Jugé',
            text: `Tu as refusé de partir au front avec ton unité.
Un conseil de guerre t'a jugé.
Tu risquais la mort.
Mais le général Pétain, nommé commandant en chef, veut éviter l'effondrement de l'armée.
Il améliore les conditions : plus de permissions, meilleure nourriture.

Tu es condamné à 5 ans de travaux forcés.
Puis gracié en 1918.

Tu n'auras pas vu la victoire depuis les tranchées.`,
            choices: [
                {
                    text: 'Continue vers la fin de la guerre.',
                    next: 'ww1_soldat_1918_fin',
                    effect: { health: 0, morale: -10 }
                }
            ]
        },

        ww1_soldat_1918_fin: {
            year: '1918',
            chapter: 'Chapitre 6 — L\'Armistice',
            text: `Le 11 novembre 1918, à 11h, les canons se taisent.
Un silence absolu s'installe sur le front. Après 4 ans.

Les soldats se regardent. Certains pleurent. D'autres ne savent pas comment réagir.
On a attendu ce moment si longtemps qu'on n'y croyait plus.

La France est victorieuse. Mais à quel prix ?
10 millions de soldats morts. Des millions de blessés, de mutilés, de "gueules cassées".
Ton village a perdu 40 hommes sur 300.

Tu rentres chez toi. Tu as changé. Tu n'es plus le même gamin de 19 ans.`,
            note: `L'Armistice du 11 novembre 1918 est signé dans un wagon de chemin de fer à Rethondes. La France et ses alliés ont gagné, mais le pays est dévasté : 1,4 million de soldats français sont morts.`,
            choices: [
                {
                    text: 'Voir la fin et le résumé pédagogique.',
                    next: '__END_SURVIVAL__',
                    effect: { health: 0, morale: +30 }
                }
            ]
        },

        // ─────────────────────────────────────────────
        //  MÉDECIN WW1 — 1914
        // ─────────────────────────────────────────────
        ww1_medecin_1914: {
            year: '1914',
            chapter: 'Chapitre 1 — Médecin de guerre',
            text: `Tu as 28 ans, médecin depuis deux ans.
La mobilisation te désigne comme médecin militaire.
On t'envoie rejoindre un régiment dans la Marne.

Dès les premières semaines, les blessés arrivent par centaines.
L'hôpital de campagne est une tente. L'anesthésie manque. Le matériel est insuffisant.
Tu fais ce que tu peux.`,
            note: `Les médecins militaires ont soigné près de 3 millions de blessés français pendant la guerre. Les conditions étaient primitives : manque de médicaments, plaies infectées, et soins sous les bombes.`,
            choices: [
                {
                    text: 'Tu travailles 18 heures par jour pour sauver le plus de soldats possible.',
                    next: 'ww1_medecin_1915_gaz',
                    effect: { health: -15, morale: +10 }
                },
                {
                    text: 'Tu tentes d\'organiser l\'hôpital pour travailler plus efficacement.',
                    next: 'ww1_medecin_1915_gaz',
                    effect: { health: -5, morale: +15 }
                }
            ]
        },

        ww1_medecin_1915_gaz: {
            year: '1915',
            chapter: 'Chapitre 2 — Les victimes des gaz',
            text: `Avril 1915. Des soldats arrivent dans un état horrible.
Leurs yeux brûlent. Ils toussent du sang. Certains sont aveugles.
"C'est du gaz," dit un officier. "Les Allemands ont lancé du chlore."

Tu n'as aucun traitement contre ça.
Tu fais ce que tu peux : eau, oxygène, repos.
Mais beaucoup meurent. Et tu regardes, impuissant.

Un soldat de 17 ans te regarde dans les yeux et te demande : "Docteur, est-ce que je vais mourir ?"`,
            note: `Les effets du gaz chlore sur les poumons étaient dévastateurs. Les médecins étaient totalement démunis face à cette nouvelle arme. L'ypérite (gaz moutarde), utilisé en 1917, causait de graves brûlures.`,
            choices: [
                {
                    text: 'Tu lui mens : "Non, tu vas t\'en sortir." Il mourra deux heures plus tard.',
                    next: 'ww1_medecin_1916_verdun',
                    effect: { health: 0, morale: -15 }
                },
                {
                    text: 'Tu lui tiens la main et restes avec lui jusqu\'au bout.',
                    next: 'ww1_medecin_1916_verdun',
                    effect: { health: 0, morale: +5 }
                }
            ]
        },

        ww1_medecin_1916_verdun: {
            year: '1916',
            chapter: 'Chapitre 3 — Verdun : l\'hôpital débordé',
            text: `Verdun, 1916. Les blessés arrivent par milliers.
Tu opères dans une cave, à la lueur d'une bougie.
Amputation, éclats d'obus, fractures ouvertes…

Les "gueules cassées" — des soldats dont les visages ont été défigurés par les obus — te regardent.
Ils ont 20 ans et ne ressemblent plus à rien.

Tu n'as plus de morphine depuis 3 jours.
Tu dois choisir qui opérer en premier.`,
            choices: [
                {
                    text: 'Tu priorisas les blessés les plus graves, même si certains meurent pendant l\'attente.',
                    next: 'ww1_medecin_1917_tournant',
                    effect: { health: -10, morale: -10 }
                },
                {
                    text: 'Tu soignes les blessés les plus légers pour en sauver le plus possible.',
                    next: 'ww1_medecin_1917_tournant',
                    effect: { health: -5, morale: -5 }
                }
            ]
        },

        ww1_medecin_1917_tournant: {
            year: '1917',
            chapter: 'Chapitre 4 — Épuisement',
            text: `1917. Tu n'as pas dormi plus de 4 heures d'affilée depuis des mois.
Tes mains tremblent quand tu opères.

Les journaux parlent de "l'Union sacrée" : tous les Français, unis pour la victoire.
Les usines fabriquent des obus jour et nuit.
Mais ici, au front, tu vois juste des corps.

Un matin, tu reçois une lettre du gouvernement. On te propose la Légion d'honneur.
Dehors, des soldats chantent La Marseillaise.`,
            note: `L'"Union sacrée" désigne l'accord politique entre tous les partis français (y compris les socialistes) pour soutenir l'effort de guerre. La propagande maintenait le moral à l'arrière.`,
            choices: [
                {
                    text: 'Tu acceptes la décoration. Ton travail mérite d\'être reconnu.',
                    next: 'ww1_medecin_1918_fin',
                    effect: { health: 0, morale: +20 }
                },
                {
                    text: 'Tu refuses. Une médaille ne ramènera pas les morts.',
                    next: 'ww1_medecin_1918_fin',
                    effect: { health: 0, morale: +5 }
                }
            ]
        },

        ww1_medecin_1918_fin: {
            year: '1918',
            chapter: 'Chapitre 5 — Après la victoire',
            text: `11 novembre 1918. C'est fini.

Tu soignes encore quelques blessés quand les cloches sonnent.
La joie explose partout. Mais toi, tu penses aux milliers que tu n'as pas pu sauver.

Les "gueules cassées" devront apprendre à vivre avec leurs visages défigurés.
Les mutilés devront faire leur vie sans bras, sans jambes.
La victoire a un goût amer.

Mais tu reprendras ton cabinet médical en 1919.
Et jusqu'à la fin de ta vie, tu témoigneras de ce que tu as vu.`,
            choices: [
                {
                    text: 'Voir la fin et le résumé pédagogique.',
                    next: '__END_SURVIVAL__',
                    effect: { health: 0, morale: +20 }
                }
            ]
        },

        // ─────────────────────────────────────────────
        //  CIVIL WW1 — 1914
        // ─────────────────────────────────────────────
        ww1_civil_1914: {
            year: '1914',
            chapter: 'Chapitre 1 — La guerre à l\'arrière',
            text: `Tu as 35 ans. Tu travailles dans une ferme en Normandie.
Ton mari est parti à la guerre avec son régiment.
Tes deux enfants ont 8 et 11 ans.

Les hommes du village sont partis. Il ne reste que les vieillards, les femmes et les enfants.
Il faut quand même faire les récoltes. Nourrir les bêtes. Payer les impôts.
Et écrire des lettres à ton mari en priant pour qu'il réponde.`,
            choices: [
                {
                    text: 'Tu travailles du matin au soir pour faire tourner la ferme seule.',
                    next: 'ww1_civil_1915_propagande',
                    effect: { health: -10, morale: +10 }
                },
                {
                    text: 'Tu demandes l\'aide de tes voisines. Vous vous serrez les coudes.',
                    next: 'ww1_civil_1915_propagande',
                    effect: { health: -5, morale: +15 }
                }
            ]
        },

        ww1_civil_1915_propagande: {
            year: '1915',
            chapter: 'Chapitre 2 — La propagande',
            text: `Tu lis le journal chaque matin.
On y dit que les soldats français sont courageux, que la victoire est proche.
Des affiches partout montrent des soldats héroïques.

Mais les lettres de ton mari, quand elles arrivent, racontent autre chose :
la boue, les rats, les camarades morts, l'horreur des gaz.

Le maire t'invite à participer à la collecte de métal : on demande aux familles de donner leurs casseroles pour faire des obus.
Tes enfants veulent participer.`,
            note: `La propagande jouait un rôle crucial dans les deux camps. En France, les journaux ne parlaient presque jamais des défaites ou des mutineries. Les civils ne savaient pas toujours la vérité du front.`,
            choices: [
                {
                    text: 'Tu donnes tes casseroles. La France en a besoin.',
                    next: 'ww1_civil_1916_penuries',
                    effect: { health: 0, morale: +10 }
                },
                {
                    text: 'Tu gardes tes ustensiles. Tu en as besoin pour nourrir tes enfants.',
                    next: 'ww1_civil_1916_penuries',
                    effect: { health: +5, morale: -5 }
                }
            ]
        },

        ww1_civil_1916_penuries: {
            year: '1916',
            chapter: 'Chapitre 3 — Pénuries et rationnement',
            text: `L'hiver 1916 est dur.
Le pain est rationné. Le sucre aussi. Le prix de tout a augmenté.
Ton plus jeune enfant est malade, mais le médecin du village est parti au front.

Une voisine t'apprend que son mari a été tué à Verdun.
Le lendemain, le facteur t'apporte une enveloppe avec les armes de la République dessus.
Ton cœur s'arrête.

Tu déchires l'enveloppe.
C'est un avis de blessure légère. Ton mari est vivant.`,
            choices: [
                {
                    text: 'Tu pleures de soulagement et sers tes enfants dans tes bras.',
                    next: 'ww1_civil_1918_fin',
                    effect: { health: 0, morale: +20 }
                },
                {
                    text: 'Tu te remets au travail immédiatement. Il faut rester forte.',
                    next: 'ww1_civil_1918_fin',
                    effect: { health: -5, morale: +10 }
                }
            ]
        },

        ww1_civil_1918_fin: {
            year: '1918',
            chapter: 'Chapitre 4 — Le retour',
            text: `Ton mari rentre à l'automne 1918.
Mais ce n'est plus le même homme.
Il ne parle pas de ce qu'il a vu. Il se réveille la nuit en criant.
Il a du mal à travailler. Ses mains tremblent.

Les médecins appellent ça "le traumatisme de guerre" ou "obusite".
Ton fils aîné te demande si papa va guérir.
Tu lui réponds : "Avec du temps et de l'amour, oui."

La France a gagné la guerre.
Mais dans chaque foyer, la guerre continue.`,
            note: `Des centaines de milliers de soldats rentrèrent avec des traumatismes psychologiques, appelés alors "obusite" (aujourd'hui PTSD). La reconstruction physique et morale de la France prit des décennies.`,
            choices: [
                {
                    text: 'Voir la fin et le résumé pédagogique.',
                    next: '__END_SURVIVAL__',
                    effect: { health: 0, morale: +10 }
                }
            ]
        },

        // ─────────────────────────────────────────────
        //  OUVRIÈRE WW1 — 1914
        // ─────────────────────────────────────────────
        ww1_ouvriere_1914: {
            year: '1914',
            chapter: 'Chapitre 1 — L\'usine de guerre',
            text: `Tu as 22 ans. Avant la guerre, tu travaillais dans une fabrique de robes.
Maintenant, l'usine est reconvertie : on fabrique des obus.

Depuis que les hommes sont partis au front, les femmes ont pris leur place dans les usines.
Le patron t'a embauchée pour 12 heures par jour, 6 jours sur 7.
Le salaire est moins bon que pour les hommes qui faisaient le même travail avant toi.

Mais c'est un salaire. Et tu te dis que tu travailles pour la France.`,
            note: `Pendant la guerre, les femmes ont massivement rejoint le monde du travail industriel. On les appelait les "munitionnettes". Elles gagnaient en général 20 à 30% de moins que les hommes.`,
            choices: [
                {
                    text: 'Tu acceptes les conditions sans te plaindre. C\'est la guerre.',
                    next: 'ww1_ouvriere_1915_danger',
                    effect: { health: -10, morale: +5 }
                },
                {
                    text: 'Tu demandes une augmentation de salaire. Tu fais le même travail.',
                    next: 'ww1_ouvriere_1915_danger',
                    effect: { health: -5, morale: +15 }
                }
            ]
        },

        ww1_ouvriere_1915_danger: {
            year: '1915',
            chapter: 'Chapitre 2 — Le danger à l\'usine',
            text: `Ton poste : remplir des obus avec de la poudre explosive.
C'est dangereux. Une erreur peut tout faire sauter.
Et ça arrive. La semaine dernière, une explosion a tué trois femmes dans l'atelier d'à côté.

Tu travailles sans protection, les doigts jaunes de poudre.
Des affiches sur les murs montrent des soldats héroïques avec la légende :
"Vous faites autant qu'eux ici !"

Le syndicat veut organiser une grève pour de meilleures conditions.`,
            note: `Les accidents dans les usines d'armement étaient fréquents et mortels. La "poudre jaune" (TNT) colorait la peau des ouvrières en jaune et causait des problèmes de santé graves.`,
            choices: [
                {
                    text: 'Tu rejoins le syndicat. Votre sécurité est prioritaire.',
                    next: 'ww1_ouvriere_1916_greve',
                    effect: { health: 0, morale: +15 }
                },
                {
                    text: 'Tu restes à ton poste. Une grève en temps de guerre, c\'est trahir la France.',
                    next: 'ww1_ouvriere_1917_fin',
                    effect: { health: -10, morale: -5 }
                }
            ]
        },

        ww1_ouvriere_1916_greve: {
            year: '1916',
            chapter: 'Chapitre 3 — La grève',
            text: `La grève dure 3 jours.
Le gouvernement envoie un représentant.
Résultat : les conditions de sécurité s'améliorent légèrement et les salaires augmentent de 10%.

Ce n'est pas grand chose. Mais c'est une victoire.
Ton patron te regarde avec méfiance depuis.

L'économie entière est désormais au service de la guerre.
Trains, acier, charbon, nourriture : tout est organisé pour le front.
On appelle ça "l'économie de guerre".`,
            note: `L'économie de guerre désigne la mobilisation totale des ressources économiques d'un pays au service du conflit militaire. La France produisit 50 000 obus par jour en 1916.`,
            choices: [
                {
                    text: 'Continue vers la fin de la guerre.',
                    next: 'ww1_ouvriere_1917_fin',
                    effect: { health: +5, morale: +10 }
                }
            ]
        },

        ww1_ouvriere_1917_fin: {
            year: '1917 – 1918',
            chapter: 'Chapitre 4 — La fin de la guerre',
            text: `En 1917, les États-Unis entrent en guerre aux côtés de la France.
Les soldats américains arrivent. Le moral remonte.
Les Allemands reculent.

Le 11 novembre 1918, l'armistice est signé.
L'usine s'arrête. On n'a plus besoin de faire des obus.
Mais qu'est-ce qu'on va faire de toi ?

Les hommes reviennent. Les femmes perdent leurs emplois.
"Retournez chez vous, mesdames. Les hommes ont besoin de travailler."

Tu rentres chez toi. La guerre est finie. Mais quelque chose a changé.
Tu as travaillé, produit, résisté. Tu n'es plus la même.`,
            choices: [
                {
                    text: 'Voir la fin et le résumé pédagogique.',
                    next: '__END_SURVIVAL__',
                    effect: { health: 0, morale: +15 }
                }
            ]
        }

    } // fin nodes WW1
}; // fin WW1_DATA
