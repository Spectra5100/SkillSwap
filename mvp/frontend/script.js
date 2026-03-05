// SkillSwap - Script principal
// Créé pour le projet Epitech MVP
// TODO: Nettoyer ce code, y'a des trucs qui marchent pas encore

console.log("Script chargé !");

// Gestion de la recherche
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        cards.forEach(card => {
            const title = card.querySelector('.card-title');
            if (title) {
                const titleText = title.textContent.toLowerCase();
                
                if (titleText.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
        
        console.log("Recherche: " + searchTerm);
    });
}

// Animation au chargement des cartes
// J'ai essayé de faire un truc cool mais bon...
window.addEventListener('load', () => {
    const allCards = document.querySelectorAll('.card');
    
    allCards.forEach((card, index) => {
        // Petit délai pour faire apparaître les cartes une par une
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.4s ease';
            
            // J'utilise un petit timeout pour déclencher l'animation
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
});

// Gestion des crédits (pas encore implémenté correctement)
let userCredits = 10; // On commence avec 10 crédits

function updateCredits(amount) {
    userCredits += amount;
    const creditDisplays = document.querySelectorAll('#creditsValue');
    creditDisplays.forEach(display => {
        if (display) {
            display.textContent = userCredits + ' crédits';
        }
    });
}

// Fonction pour débloquer une compétence
// FIXME: Ça bug quand on clique plusieurs fois rapidement
function unlockSkill(cost, skillName) {
    if (userCredits >= cost) {
        userCredits -= cost;
        updateCredits(0); // Je mets à jour l'affichage
        
        // Sauvegarder dans localStorage
        saveToStorage('userCredits', userCredits);
        
        alert('Compétence "' + skillName + '" débloquée ! Il te reste ' + userCredits + ' crédits.');
        
        // TODO: Rediriger vers la page de succès
        window.location.href = 'success.html';
        
        return true;
    } else {
        const needed = cost - userCredits;
        alert('Pas assez de crédits ! Il t\'en manque ' + needed + ' pour débloquer cette compétence.');
        return false;
    }
}

// Fonction pour les onglets (pas utilisée partout pour l'instant)
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
        // Enlever la classe active de tous les onglets
        tabs.forEach(t => t.classList.remove('active'));
        
        // Ajouter la classe active à l'onglet cliqué
        this.classList.add('active');
        
        console.log('Onglet cliqué: ' + this.textContent);
        
        // TODO: Implémenter le filtrage par catégorie
        const filter = this.getAttribute('data-filter');
        if (filter) {
            filterCards(filter);
        }
    });
});

// Filtrage par catégorie
function filterCards(category) {
    const allCards = document.querySelectorAll('.card');
    
    allCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || !category || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    console.log('Filtrage par catégorie:', category);
}

// Gestion du formulaire d'ajout
const addForm = document.querySelector('.form');

if (addForm) {
    addForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Je récupère les valeurs du formulaire
        const title = document.querySelector('#skillTitle');
        const description = document.querySelector('#description');
        
        if (title && description && title.value && description.value) {
            console.log('Nouvelle compétence ajoutée:');
            console.log('Titre: ' + title.value);
            console.log('Description: ' + description.value);
            
            // TODO: Envoyer ça à une API ou sauvegarder en local
            alert('Compétence ajoutée avec succès !');
            
            // Redirection vers la page d'accueil
            window.location.href = 'index.html';
        } else {
            alert('Merci de remplir tous les champs obligatoires !');
        }
    });
}

// Fonction pour ajouter des étoiles
// J'ai fait ça vite fait, faudra l'améliorer
function renderStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating)) {
            stars += '★';
        } else if (i < rating) {
            stars += '⭐'; // Demi-étoile (bon en vrai ça marche pas super)
        } else {
            stars += '☆';
        }
    }
    return stars;
}

// Sauvegarde en localStorage (j'ai commencé à implémenter)
function saveToStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        console.log('Sauvegardé:', key);
    } catch (error) {
        console.error('Erreur de sauvegarde:', error);
    }
}

function loadFromStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Erreur de chargement:', error);
        return null;
    }
}

// Charger les crédits sauvegardés au démarrage
const savedCredits = loadFromStorage('userCredits');
if (savedCredits !== null && savedCredits !== undefined) {
    userCredits = savedCredits;
    updateCredits(0);
    console.log('Crédits chargés depuis localStorage:', userCredits);
}

// Sauvegarder les crédits avant de quitter la page
window.addEventListener('beforeunload', () => {
    saveToStorage('userCredits', userCredits);
});

// Test de quelques trucs
/*
console.log('Test des fonctions:');
console.log(renderStars(4.5));
console.log(renderStars(3.2));
*/

// Easter egg :)
let clickCount = 0;
const logo = document.querySelector('.logo');

if (logo) {
    logo.addEventListener('click', () => {
        clickCount++;
        if (clickCount >= 5) {
            console.log('🎉 Easter egg trouvé ! Tu as cliqué 5 fois sur le logo !');
            alert('Bravo ! Tu as trouvé l\'easter egg ! 🎉\nVoici 50 crédits bonus !');
            userCredits += 50;
            updateCredits(0);
            saveToStorage('userCredits', userCredits);
            clickCount = 0;
        }
    });
}

// Gestion des discussions
// TODO: Implémenter un vrai système de messagerie
const discussionItems = document.querySelectorAll('.discussion-item');

discussionItems.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log('Discussion ouverte');
    });
});

console.log("Tout est initialisé !");
console.log("Crédits actuels:", userCredits);
