# Matrice de priorisation — SkillSwap

## Méthode de priorisation : MoSCoW

Nous avons utilisé la **méthode MoSCoW** pour prioriser les fonctionnalités du MVP. Cette méthode classe les fonctionnalités en 4 catégories :

- **Must Have** : Essentiel, le MVP ne peut pas exister sans
- **Should Have** : Important, mais le MVP peut fonctionner sans
- **Could Have** : Souhaitable si le temps le permet
- **Won't Have** : Exclu du MVP, envisagé pour les versions futures

---

## 🔴 MUST HAVE (Obligatoire pour le MVP)

Ces fonctionnalités sont **critiques** et définissent le cœur du produit.

| # | Fonctionnalité | Justification | Statut MVP |
|---|----------------|---------------|------------|
| 1 | **Page d'accueil avec catalogue** | Point d'entrée, permet de découvrir les compétences | ✅ Fait |
| 2 | **Cartes de compétences** | Affichage des informations clés (titre, auteur, note, coût) | ✅ Fait |
| 3 | **Page détail d'une compétence** | Permet de consulter toutes les infos avant d'accéder | ✅ Fait |
| 4 | **Affichage des avis** | Crée la confiance, essentiel pour un réseau social | ✅ Fait |
| 5 | **Bouton "Accéder à la compétence"** | Action principale du flux utilisateur | ✅ Fait |
| 6 | **Formulaire de publication** | Permet aux utilisateurs de proposer des compétences | ✅ Fait |
| 7 | **Profil utilisateur** | Affichage des infos personnelles et crédits | ✅ Fait |
| 8 | **Navigation entre pages** | Permet de parcourir l'application | ✅ Fait |
| 9 | **Design cohérent** | Interface claire et professionnelle | ✅ Fait |
| 10 | **Responsive design** | Utilisable sur mobile et desktop | ✅ Fait |

### Justification des Must Have

**Pourquoi ces fonctionnalités sont critiques :**

- **Pages principales** : Sans catalogue et page détail, impossible de démontrer le concept
- **Avis** : Différenciation clé vs YouTube (aspect social, confiance)
- **Publication** : Démontre la réciprocité (tu donnes, tu reçois)
- **Profil** : L'identité de l'utilisateur dans le système
- **Design** : Première impression, crédibilité du projet

---

## 🟠 SHOULD HAVE (Important mais pas bloquant)

Fonctionnalités qui améliorent significativement l'expérience mais dont l'absence n'empêche pas le MVP de fonctionner.

| # | Fonctionnalité | Justification | Statut MVP |
|---|----------------|---------------|------------|
| 11 | **Filtres par catégorie** | Facilite la découverte, mais on peut naviguer sans | ✅ Fait (UI) |
| 12 | **Barre de recherche** | Améliore la navigation, mais pas critique pour la démo | ✅ Fait (UI) |
| 13 | **Chat de groupe** | Illustre l'aspect communautaire, mais pas le flux principal | ✅ Fait (UI) |
| 14 | **Liste des discussions** | Support du chat, améliore l'expérience sociale | ✅ Fait (UI) |
| 15 | **Édition du profil** | Permet la personnalisation, mais consultation suffit | ✅ Fait |
| 16 | **Page de succès** | Feedback après action, améliore l'UX | ✅ Fait |
| 17 | **Système de crédits visible** | Illustre le concept, même si non fonctionnel | ✅ Fait (visuel) |
| 18 | **Avatars stylisés** | Améliore l'esthétique, renforce l'identité | ✅ Fait (gradients) |

---

## 🟡 COULD HAVE (Souhaitable si temps disponible)

Fonctionnalités qui apportent une valeur ajoutée mais ne sont pas prioritaires.

| # | Fonctionnalité | Justification | Statut MVP |
|---|----------------|---------------|------------|
| 19 | **Authentification** | Utile mais simulable pour la démo | ❌ Non fait |
| 20 | **Backend API** | Nécessaire en production, pas pour le prototype | ❌ Non fait |
| 21 | **Base de données** | Persistance des données, pas critique pour démo | ❌ Non fait |
| 22 | **Système de crédits fonctionnel** | Calculs réels, mais visuel de l'échange et du gain suffit pour valider | ❌ Non fait |
| 23 | **Envoi de messages réel** | Chat fonctionnel, mais UI suffit pour démo | ❌ Non fait |
| 24 | **Upload de fichiers** | Amélioration UX, mais liens externes suffisent | ❌ Non fait |
| 25 | **Recherche fonctionnelle** | Améliore la découverte, mais filtre manuel possible | ❌ Non fait |

**Contraintes principales :**
- ⏱️ **Temps limité** 
- 🛠️ **Compétences techniques**
- 🎯 **Objectif MVP** : Valider l'UX et le design, pas la technique

---

## ⚪ WON'T HAVE (Exclu du MVP, reporté)

Fonctionnalités explicitement rejetées pour le MVP, envisagées pour les versions futures.

| # | Fonctionnalité | Raison de l'exclusion | Horizon |
|---|----------------|----------------------|---------|
| 28 | **Notifications en temps réel** | Nécessite WebSocket, trop complexe | V2 |
| 29 | **Système de paiement** | Hors concept (échange sans argent) | Jamais |
| 30 | **Messagerie privée 1-to-1** | Chat de groupe suffit pour MVP | V2 |
| 31 | **Algorithme de recommandation** | IA/ML hors scope, données insuffisantes | V3 |
| 32 | **Gamification (badges, niveaux)** | Nice-to-have, pas prioritaire | V2 |
| 33 | **Certifications officielles** | Validation externe, complexe | V3+ |
| 34 | **Visioconférence intégrée** | Zoom externe suffit | V3+ |
| 35 | **Application mobile** | Web responsive suffit | V3+ |
| 36 | **Modération automatique** | Gestion communauté, pas nécessaire au début | V2 |
| 37 | **Analytics avancés** | Métrique business, pas critique pour démo | V2 |
| 38 | **Export de données** | RGPD, mais pas critique au lancement | V2 |
| 39 | **Mode sombre** | Confort UX, mais pas bloquant | V2 |
| 40 | **Internationalisation** | Cible FR uniquement au début | V3+ |

### Justification des Won't Have

**Principes de décision :**

1. **Complexité technique** : Fonctionnalités nécessitant infrastructure avancée
2. **Temps de développement**
3. **Hors scope** : Ne correspondent pas au cœur du MVP

---

## 📝 Conclusion

La méthode MoSCoW a permis de **prendre des décisions claires** dans un contexte de **contraintes fortes** (temps, compétences).