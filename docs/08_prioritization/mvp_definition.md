# Définition du MVP — SkillSwap

## Vue d'ensemble

Le MVP (Minimum Viable Product) de SkillSwap est une **application web statique** développée en **HTML, CSS et JavaScript pur**. L'objectif est de démontrer le flux utilisateur principal et de valider l'expérience utilisateur sans backend fonctionnel.

**Approche retenue :** Prototype interactif haute-fidélité avec données simulées.

---

## 🎯 Flux utilisateur principal

Le MVP démontre le parcours suivant :

```
1. Accueil (index.html)
   → Consulter le catalogue de compétences
   → Filtrer par catégories
   ↓
2. Détail d'une compétence (detail-*.html)
   → Voir les informations complètes
   → Lire les avis
   → "Accéder" à la compétence (simulé)
   ↓
3. Succès (success.html)
   → Confirmation d'accès
   → Retour au catalogue
   
// Flux secondaires
4. Proposer une compétence (ajout.html)
   → Formulaire de publication (simulé)
   
5. Profil utilisateur (profil.html)
   → Consulter son profil
   → Modifier ses informations (edit-profil.html)
   
6. Discussions (discussions.html)
   → Liste des groupes de discussion
   
7. Chat (chat.html)
   → Conversation liée à une compétence (simulée)
```

---

## ⚙️ Fonctionnalités minimales

### ✅ Fonctionnalités implémentées (frontend statique)

#### 1. Navigation

- ✅ Header persistant
- ✅ Menu utilisateur (profil, discussions)
- ✅ Navigation entre les pages

#### 2. Catalogue de compétences

- ✅ Affichage de cartes de compétences
- ✅ Informations visibles : titre, auteur, format, coût, note
- ✅ Filtres par catégorie (Toutes, Design, Code, Crafts, etc.)
- ✅ Barre de recherche

#### 3. Détail d'une compétence

- ✅ Affichage des informations complètes
- ✅ Description détaillée
- ✅ Format (PDF, Vidéo, Zoom) et coût en crédits
- ✅ Section avis avec notes et commentaires
- ✅ Bouton "Accéder à la compétence" (redirection vers success.html)

#### 4. Publication d'une compétence

- ✅ Formulaire avec champs : titre, catégorie, description, format, lien

#### 5. Profil utilisateur

- ✅ Affichage des informations : nom, email, bio, crédits
- ✅ Avatar stylisé (gradient)
- ✅ Historique des compétences consultées et crées
- ✅ Édition du profil

#### 6. Discussions

- ✅ Liste des groupes de discussion
- ✅ Indication du nombre de participants
- ✅ Dernier message visible
- ✅ Badge de nouveaux messages

#### 7. Chat de groupe

- ✅ Interface de messagerie
- ✅ Distinction visuelle messages envoyés/reçus
- ✅ Affichage des participants
- ✅ Champ de saisie

#### 8. Design & UX

- ✅ Palette de couleurs cohérente (bleu #3B82F6, vert #10B981, jaune #FCD34D)
- ✅ Typographie Inter
- ✅ Composants réutilisables (cartes, boutons, formulaires)
- ✅ Responsive design (mobile-first)
- ✅ Dégradés sur les avatars
- ✅ Ombres et arrondis cohérents

---

## 🚫 Ce qui est explicitement exclu du MVP

### Fonctionnalités non implémentées

#### Système d'authentification complet

- ❌ Inscription avec validation email
- ❌ Connexion sécurisée
- ❌ Récupération de mot de passe
- ❌ Gestion des sessions
- ❌ OAuth (connexion Google/Facebook)

#### Système de crédits réel

- ❌ Transaction de crédits entre utilisateurs
- ❌ Historique détaillé des transactions
- ❌ Système de remboursement

#### Base de données et persistance

- ❌ Stockage des utilisateurs
- ❌ Stockage des compétences
- ❌ Stockage des avis
- ❌ Stockage des messages de chat

#### Fonctionnalités avancées

- ❌ Notifications en temps réel
- ❌ Messagerie privée one-to-one
- ❌ Système de recommandations
- ❌ Algorithme de matching
- ❌ Gamification (badges, niveaux)
- ❌ Tableau de bord analytique
- ❌ Export de données
- ❌ Modération des contenus

#### Fonctionnalités sociales avancées

- ❌ Système de "follow"
- ❌ Partage sur réseaux sociaux
- ❌ Mentions et tags
- ❌ Commentaires imbriqués
- ❌ Réactions emoji

#### Accessibilité et internationalisation

- ❌ Support multilingue
- ❌ Lecteur d'écran optimisé
- ❌ Mode sombre
- ❌ Personnalisation de l'interface

---

### Structure des fichiers

```
frontend/
├── index.html              # Page d'accueil
├── detail-*.html           # Pages détail (x5)
├── ajout.html              # Formulaire publication
├── profil.html             # Profil utilisateur
├── edit-profil.html        # Édition profil
├── discussions.html        # Liste des chats
├── chat.html               # Conversation
├── success.html            # Confirmation
├── style.css               # Styles globaux
├── script.js               # Scripts partagés
├── assets/
│   └── logo.png            # Logo SkillSwap
└── README.md               # Documentation
```
---

## 🚀 Prochaines étapes (post-MVP)

### Phase 2 : Backend et persistance

**Priorité**
1. Implémenter le backend
2. Créer la base de données
3. Système d'authentification
4. API pour les compétences
5. Système de crédits fonctionnel
6. Persistance des avis
7. Chat (temps réel)

---
