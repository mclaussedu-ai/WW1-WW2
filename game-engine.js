// ============================================================
//  MOTEUR DE JEU — 1914-1945 : SURVIVRE À LA GUERRE
// ============================================================

// ─── ÉTAT DU JEU ───────────────────────────────────────────
const gameState = {
    war: null,          // 'ww1' | 'ww2'
    character: null,    // objet personnage
    currentNode: null,  // id du nœud courant
    health: 100,
    morale: 80,
    visitedNodes: [],   // historique pour le résumé
    alive: true,
    data: null          // WW1_DATA ou WW2_DATA
};

// ─── SÉLECTIONS INITIALES ──────────────────────────────────
function selectWar(warId) {
    gameState.war = warId;
    gameState.data = warId === 'ww1' ? WW1_DATA : WW2_DATA;
    buildCharacterGrid();
    showScreen('screen-character-choice');
}

function buildCharacterGrid() {
    const grid = document.getElementById('character-grid');
    grid.innerHTML = '';
    gameState.data.characters.forEach(char => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <div class="character-emoji">${char.emoji}</div>
            <div class="character-name">${char.name}</div>
            <div class="character-desc">${char.desc}</div>
        `;
        card.addEventListener('click', () => selectCharacter(char));
        grid.appendChild(card);
    });
}

function selectCharacter(char) {
    gameState.character = char;
    gameState.currentNode = char.startNode;
    gameState.health = 100;
    gameState.morale = 80;
    gameState.visitedNodes = [];
    gameState.alive = true;

    // Labels header
    document.getElementById('game-war-label').textContent = gameState.data.warLabel;
    document.getElementById('game-character-label').textContent = char.emoji + ' ' + char.name;

    showScreen('screen-game');
    loadNode(char.startNode);
}

// ─── CHARGEMENT D'UN NŒUD ──────────────────────────────────
function loadNode(nodeId) {
    const nodes = gameState.data.nodes;
    const node = nodes[nodeId];

    if (!node) {
        console.error('Nœud introuvable :', nodeId);
        return;
    }

    gameState.currentNode = nodeId;
    gameState.visitedNodes.push(nodeId);

    // Mise à jour header
    document.getElementById('game-year-label').textContent = node.year || '';

    // Contenu narratif
    const chapterEl = document.getElementById('game-chapter');
    const narrativeEl = document.getElementById('game-narrative');
    const noteEl = document.getElementById('game-historical-note');
    const choicesEl = document.getElementById('game-choices');

    chapterEl.textContent = node.chapter || '';
    chapterEl.classList.remove('narrative-animate');
    void chapterEl.offsetWidth;
    chapterEl.classList.add('narrative-animate');

    narrativeEl.innerHTML = formatText(node.text || '');
    narrativeEl.classList.remove('narrative-animate');
    void narrativeEl.offsetWidth;
    narrativeEl.classList.add('narrative-animate');

    if (node.note) {
        noteEl.textContent = node.note;
        noteEl.style.display = 'block';
    } else {
        noteEl.style.display = 'none';
    }

    // Scroll vers le haut
    document.getElementById('game-content') || window.scrollTo(0, 0);
    document.querySelector('.game-content')?.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Gestion mort
    if (node.death) {
        showDeathOverlay(node);
        return;
    }

    // Choix
    choicesEl.innerHTML = '';
    const letters = ['A', 'B', 'C'];
    (node.choices || []).forEach((choice, i) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.setAttribute('data-letter', letters[i] || String(i + 1));
        btn.textContent = choice.text;
        btn.addEventListener('click', () => makeChoice(choice));
        // Apparition progressive
        btn.style.opacity = '0';
        btn.style.transform = 'translateX(-10px)';
        choicesEl.appendChild(btn);
        setTimeout(() => {
            btn.style.transition = 'all 0.4s ease';
            btn.style.opacity = '1';
            btn.style.transform = 'translateX(0)';
        }, 300 + i * 150);
    });

    // Vérifier fin du jeu
    if (node.choices && node.choices.length === 1 && node.choices[0].next === '__END_SURVIVAL__') {
        // Le seul choix mène à la fin
    }
}

function formatText(text) {
    // Formater le texte : sauts de ligne → paragraphes
    const paragraphs = text.split('\n\n').filter(p => p.trim());
    return paragraphs.map(p => {
        const lines = p.split('\n').map(l => l.trim()).filter(l => l);
        return '<p>' + lines.join('<br>') + '</p>';
    }).join('');
}

// ─── FAIRE UN CHOIX ────────────────────────────────────────
function makeChoice(choice) {
    // Désactiver tous les boutons
    document.querySelectorAll('.choice-btn').forEach(btn => btn.disabled = true);

    // Appliquer les effets
    if (choice.effect) {
        applyEffect(choice.effect);
    }

    const nextNode = choice.next;

    // Pause dramatique avant de charger le prochain nœud
    setTimeout(() => {
        if (nextNode === '__END_SURVIVAL__') {
            showEndScreen();
        } else {
            loadNode(nextNode);
        }
    }, 500);
}

function applyEffect(effect) {
    if (effect.health !== undefined) {
        gameState.health = Math.max(0, Math.min(100, gameState.health + effect.health));
    }
    if (effect.morale !== undefined) {
        gameState.morale = Math.max(0, Math.min(100, gameState.morale + effect.morale));
    }
    updateStats();

    // Si santé à 0 → mort
    if (gameState.health <= 0) {
        gameState.health = 0;
        updateStats();
    }
}

function updateStats() {
    const healthFill = document.getElementById('stat-health');
    const moraleFill = document.getElementById('stat-morale');
    const healthVal = document.getElementById('stat-health-val');
    const moraleVal = document.getElementById('stat-morale-val');

    if (healthFill) healthFill.style.width = gameState.health + '%';
    if (moraleFill) moraleFill.style.width = gameState.morale + '%';
    if (healthVal) healthVal.textContent = gameState.health;
    if (moraleVal) moraleVal.textContent = gameState.morale;
}

// ─── OVERLAY MORT ──────────────────────────────────────────
function showDeathOverlay(node) {
    gameState.alive = false;
    document.getElementById('death-title').textContent = node.deathTitle || 'Tu n\'as pas survécu…';
    document.getElementById('death-text').textContent = node.deathText || '';
    document.getElementById('death-historical').textContent = node.deathHistorical || '';
    document.getElementById('overlay-death').style.display = 'flex';
}

function closeDeathOverlay() {
    document.getElementById('overlay-death').style.display = 'none';
    showPedagogicalSummary();
}

// ─── ÉCRAN DE FIN ──────────────────────────────────────────
function showEndScreen() {
    showScreen('screen-end');

    const isAlive = gameState.alive;
    const charName = gameState.character.name;
    const warLabel = gameState.data.warLabel;
    const healthFinal = gameState.health;
    const moraleFinal = gameState.morale;

    let icon, title, text, quote;

    if (moraleFinal >= 60 && healthFinal >= 50) {
        icon = '🌅';
        title = 'Tu as survécu.';
        text = `En tant que ${charName} pendant la ${warLabel}, tu as traversé des épreuves que la plupart des gens n'imaginent pas.
Tu as vu des amis mourir, subi la peur, la faim, l'horreur de la guerre.
Mais tu es là. Vivant(e).
Et maintenant, tu peux témoigner.`;
        quote = '"On ne peut pas comprendre la guerre depuis un livre. Il faut avoir froid dans les pieds, la boue jusqu\u2019aux genoux, et entendre les obus siffler au-dessus de sa t\u00eate." \u2014 Un poilu de 1914';
    } else if (healthFinal >= 30) {
        icon = '🕯️';
        title = 'Tu as survécu... difficilement.';
        text = `La guerre t'a laissé des cicatrices profondes.
Physiques et mentales.
Tu as survécu, mais quelque chose s'est brisé en toi.
Comme des millions d'autres après les deux guerres mondiales.
La reconstruction sera longue.`;
        quote = '"Ils ont gagn\u00e9 la guerre mais ils ont perdu quelque chose qu\u2019aucune m\u00e9daille ne peut remplacer." \u2014 T\u00e9moignage d\u2019un v\u00e9t\u00e9ran';
    } else {
        icon = '🌧️';
        title = 'La survie au prix fort.';
        text = `Tu as survécu, mais tu portes le poids de la guerre.
Des choix difficiles, des situations impossibles.
La guerre n'épargne personne.
Même les survivants gardent des blessures invisibles toute leur vie.`;
        quote = '"La vraie victoire de la guerre, c\'est quand plus personne ne veut en faire une." — Pensée d\'après-guerre';
    }

    const endContent = document.getElementById('end-content');
    endContent.innerHTML = `
        <div class="end-icon">${icon}</div>
        <h2 class="end-title">${title}</h2>
        <div class="end-text">${formatText(text)}</div>
        <blockquote class="end-quote">${quote}</blockquote>
        <div class="end-actions">
            <button class="btn btn-primary" onclick="showPedagogicalSummary()">📚 Voir le résumé pédagogique</button>
            <button class="btn btn-secondary" onclick="restartGame()">🔄 Rejouer</button>
        </div>
    `;
}

// ─── RÉSUMÉ PÉDAGOGIQUE ────────────────────────────────────
function showPedagogicalSummary() {
    document.getElementById('overlay-death').style.display = 'none';
    showScreen('screen-summary');

    buildLivedSummary();
    buildNotions();
    buildReperes();
}

function buildLivedSummary() {
    const container = document.getElementById('summary-lived-content');
    const nodes = gameState.data.nodes;
    const visitedNodes = gameState.visitedNodes;
    const charName = gameState.character.name;

    let livedItems = [
        { emoji: '👤', text: `Tu incarnais un <strong>${charName}</strong> pendant la <strong>${gameState.data.warLabel}</strong>.` }
    ];

    // Générer un résumé basé sur les nœuds visités
    visitedNodes.forEach(nodeId => {
        const node = nodes[nodeId];
        if (!node) return;
        if (node.year && node.chapter) {
            livedItems.push({
                emoji: getYearEmoji(node.year),
                text: `<strong>${node.year}</strong> — ${node.chapter.replace('Chapitre \\d+ — ', '').replace(/Chapitre \d+ — /, '')}`
            });
        }
    });

    if (gameState.alive) {
        livedItems.push({ emoji: '✅', text: 'Tu as <strong>survécu</strong> jusqu\'à la fin de la guerre.' });
    } else {
        livedItems.push({ emoji: '💀', text: 'Ton personnage <strong>n\'a pas survécu</strong> à la guerre.' });
    }

    container.innerHTML = livedItems.map(item =>
        `<div class="lived-item"><span class="lived-emoji">${item.emoji}</span><span>${item.text}</span></div>`
    ).join('');
}

function getYearEmoji(year) {
    if (year.includes('1914') || year.includes('1939')) return '📋';
    if (year.includes('1915') || year.includes('1940')) return '⚔️';
    if (year.includes('1916') || year.includes('1941') || year.includes('1942')) return '💣';
    if (year.includes('1917') || year.includes('1943')) return '🔄';
    if (year.includes('1918') || year.includes('1944') || year.includes('1945')) return '🕊️';
    return '📅';
}

function buildNotions() {
    const grid = document.getElementById('notions-grid');

    const notions = [
        {
            title: '⚔️ La violence de masse',
            desc: 'Des millions de soldats et civils tués. Les deux guerres mondiales sont les conflits les plus meurtriers de l\'histoire humaine.'
        },
        {
            title: '🏭 La mobilisation économique',
            desc: 'Les usines tournent 24h/24 pour fabriquer des armes. Toute l\'économie est au service de la guerre (économie de guerre).'
        },
        {
            title: '📢 La propagande',
            desc: 'Les gouvernements contrôlent l\'information pour maintenir le moral. On cache les défaites, on magnifie les victoires.'
        },
        {
            title: '👨‍👩‍👧 Les civils dans la guerre',
            desc: 'Pour la première fois dans l\'histoire, les civils sont autant touchés que les soldats : bombardements, rationnement, occupation.'
        },
        {
            title: '✊ La Résistance (WW2)',
            desc: 'Des milliers de personnes ont risqué leur vie pour s\'opposer à l\'occupation nazie. Leur courage a contribué à la libération.'
        },
        {
            title: '💀 La Shoah',
            desc: '6 millions de Juifs assassinés par les nazis pendant la Seconde Guerre mondiale. C\'est le génocide le plus documenté de l\'histoire.'
        }
    ];

    // Filtrer selon la guerre
    let filteredNotions = notions;
    if (gameState.war === 'ww1') {
        filteredNotions = notions.filter(n => !n.title.includes('WW2') && !n.title.includes('Résistance') && !n.title.includes('Shoah'));
    }

    grid.innerHTML = filteredNotions.map(notion =>
        `<div class="notion-card">
            <h4>${notion.title}</h4>
            <p>${notion.desc}</p>
        </div>`
    ).join('');
}

function buildReperes() {
    const container = document.getElementById('reperes-content');
    const isWW1 = gameState.war === 'ww1';

    const reperesWW1 = [
        { year: '1914', desc: 'Assassinat de l\'archiduc François-Ferdinand → Début de la guerre. Mobilisation générale en France.' },
        { year: '1915', desc: 'Première utilisation des gaz de combat à Ypres. Guerre de tranchées sur le front ouest.' },
        { year: '1916', desc: 'Bataille de Verdun (700 000 morts). Bataille de la Somme. Les "gueules cassées".' },
        { year: '1917', desc: 'Mutineries françaises. Révolution russe. Entrée en guerre des États-Unis.' },
        { year: '1918', desc: 'Armistice du 11 novembre. Fin de la guerre. Environ 10 millions de morts militaires.' }
    ];

    const reperesWW2 = [
        { year: '1939', desc: 'Hitler envahit la Pologne (1er septembre). La France et l\'Angleterre déclarent la guerre à l\'Allemagne.' },
        { year: '1940', desc: 'Défaite française en 6 semaines. Armistice. Occupation. Appel de De Gaulle (18 juin).' },
        { year: '1941', desc: 'Invasion de l\'URSS. Attaque de Pearl Harbor → Les États-Unis entrent en guerre.' },
        { year: '1942', desc: 'Rafle du Vél d\'Hiv (France). STO. Déportation massive des Juifs vers les camps.' },
        { year: '1944', desc: 'Débarquement en Normandie (6 juin). Libération de Paris (25 août).' },
        { year: '1945', desc: 'Libération des camps. Capitulation allemande (8 mai). Bombes atomiques sur Hiroshima et Nagasaki. Fin de la guerre (2 septembre).' }
    ];

    const reperes = isWW1 ? reperesWW1 : reperesWW2;
    container.innerHTML = reperes.map(r =>
        `<div class="repere-item">
            <span class="repere-year">${r.year}</span>
            <span class="repere-desc">${r.desc}</span>
        </div>`
    ).join('');
}

// ─── NAVIGATION ────────────────────────────────────────────
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
        target.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function restartGame() {
    document.getElementById('overlay-death').style.display = 'none';
    gameState.war = null;
    gameState.character = null;
    gameState.currentNode = null;
    gameState.health = 100;
    gameState.morale = 80;
    gameState.visitedNodes = [];
    gameState.alive = true;
    gameState.data = null;
    showScreen('screen-war-choice');
}

// ─── INITIALISATION ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Assurer que l'écran titre est visible au démarrage
    showScreen('screen-title');

    // Keyboard shortcuts pour les choix (A, B, C)
    document.addEventListener('keydown', (e) => {
        const key = e.key.toUpperCase();
        const btns = document.querySelectorAll('.choice-btn:not(:disabled)');
        const letters = ['A', 'B', 'C'];
        const idx = letters.indexOf(key);
        if (idx !== -1 && btns[idx]) {
            btns[idx].click();
        }
    });
});
