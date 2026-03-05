# Objectifs, Hypothèses, Risques et Contraintes

## 1. Objectifs mesurables

### Objectifs produit (phase Design)
- **Valider le problème** : au moins 70% des personnes interrogées expriment une frustration liée au coût ou à l'inaccessibilité de l'apprentissage
- **Identifier les motivations** : comprendre ce qui pousserait quelqu'un à partager une compétence (crédits, reconnaissance, altruisme)
- **Tester l'acceptabilité du concept** : au moins 60% des testeurs du prototype trouvent le concept "intéressant" ou "utile"
- **Recueillir des insights actionnables** : identifier au moins 3 ajustements majeurs suite aux tests utilisateurs

### Objectifs MVP (phase Développement)
- **Démontrer le flux principal** : un utilisateur doit pouvoir publier une compétence, consulter le catalogue, et accéder à un contenu en dépensant des crédits
- **Valider la faisabilité technique** : prouver que le système de crédits et l'échange de compétences peuvent fonctionner dans une application web
- **Obtenir du feedback utilisateur** : permettre à au moins 3 personnes de tester le MVP et recueillir leurs retours

### Métriques de succès du MVP
- Nombre de compétences publiées par les testeurs : **minimum 5**
- Nombre d'accès à des compétences : **minimum 5 consultations**
- Taux de complétion du flux principal : **> 80%** (les testeurs arrivent au bout sans bloquer)
- Temps moyen de compréhension du système : **< 5 minutes** (sans explication externe)

---

## 2. Hypothèses à valider

### Hypothèses utilisateur
1. **Les étudiants et jeunes actifs ont des compétences à partager**, même s'ils ne se considèrent pas comme experts
2. **Le coût est un frein majeur** à l'apprentissage de nouvelles compétences
3. **Les gens sont prêts à échanger** (donner pour recevoir) plutôt qu'à acheter ou consommer gratuitement
4. **La personnalisation et l'accès à l'auteur** ont plus de valeur qu'un simple contenu statique (vs YouTube)

### Hypothèses produit
5. **Un système de crédits simple** (sans argent) est compris et accepté par les utilisateurs
6. **La réciprocité motive la contribution** : les gens partagent parce qu'ils veulent apprendre en retour
7. **Les compétences informelles ont de la valeur** : les utilisateurs font confiance à du contenu partagé par des pairs, même non certifiés
8. **Un MVP simple suffit** pour valider le concept (pas besoin de chat, visio, algorithme de recommandation)

### Hypothèses techniques
9. **Un système de crédits peut être géré en front-end** pour le MVP (pas besoin de blockchain ou de calculs complexes)
10. **L'authentification n'est pas obligatoire** pour démontrer le flux principal
11. **Les contenus externes** (liens YouTube, Google Drive) suffisent pour le MVP (pas besoin d'héberger des fichiers)

---

## 3. Risques identifiés

### Risques utilisateur

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| **Les utilisateurs ne voient pas la différence avec YouTube/Coursera** | Élevée | Critique | Insister sur l'aspect "accès à la personne" + interaction dans le pitch et les wireframes |
| **Personne ne veut partager ses compétences** (sentiment de non-légitimité) | Moyenne | Élevé | Valoriser les "compétences informelles" + système de reconnaissance (badges, profils) |
| **Inégalité perçue entre compétences** (Photoshop avancé vs recette de cuisine) | Élevée | Élevé | Introduire crédits variables OU système de réputation pour compenser |
| **Manque de confiance** dans la qualité des contenus partagés | Moyenne | Moyen | Système de feedback simple (utile/pas utile) + profils avec historique |
| **Effet réseau** : l'appli est vide au lancement, personne ne veut être le premier | Élevée | Critique | Pré-remplir le MVP avec 5-10 compétences fictives pour démonstration |

### Risques produit

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| **Le système de crédits est trop complexe** à comprendre | Moyenne | Élevé | Tests utilisateurs sur le prototype + simplification si nécessaire |
| **Les testeurs abandonnent** le flux avant la fin | Moyenne | Moyen | UX simple, guidage clair (tooltips, onboarding) |
| **Le concept semble flou** ("c'est quoi exactement ?") | Élevée | Élevé | Clarifier le pitch + ajouter des exemples concrets dès la page d'accueil |

### Risques techniques

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| **Dépassement du temps imparti** pour développer le MVP | Moyenne | Moyen | Scope MVP très limité : 5 écrans maximum, fonctionnalités essentielles uniquement |
| **Gestion des crédits bugguée** (crédits négatifs, duplication) | Moyenne | Élevé | Tests rigoureux du système de crédits, limitations |

---

## 4. Contraintes

### Contraintes temporelles
- **Phase 1 (Design)** : 1 semaine pour recherche, personas, wireframes, prototype, tests
- **Phase 2 (Développement MVP)** : 1 semaine pour coder, tester, finaliser
- **Date limite finale** : 30/01/2026
- **Défense orale** : 02/2026

### Contraintes d'équipe
- **4 personnes** dans l'équipe
- Compétences variées : design, front-end, recherche utilisateur
- Disponibilité limitée (cours, autres projets)

### Contraintes techniques

#### Technologies
-  **Gratuites uniquement** (pas de services payants)
-  **Front-end web** obligatoire

### Contraintes de scope (MVP)

#### ✅ MUST HAVE (obligatoire dans le MVP)
- Créer un profil simple (nom, bio courte)
- Publier une compétence (titre, description, format, coût en crédits)
- Consulter le catalogue de compétences
- Accéder à un contenu (lien externe, PDF simulé)
- Système de crédits fonctionnel (gagner/dépenser)

#### ⚠️ SHOULD HAVE (souhaitable mais pas critique)
- Feedback simple sur les compétences (utile/pas utile)
- Historique des crédits (transactions)
- Profil utilisateur avec historique des compétences partagées

#### ❌ WON'T HAVE (exclu du MVP)
- Paiement en argent réel
- Système de notation chiffré (étoiles)
- Chat intégré
- Visioconférence intégrée (seulement liens Zoom externes)
- Algorithme de recommandation
- Certification des compétences
- Notifications push
- Application mobile native

### Contraintes légales et éthiques
- **Pas de stockage de données sensibles** (pas de paiements, pas d'infos bancaires)
- **Respect de la vie privée** : données utilisateurs minimales
- **Pas de contenu inapproprié** : modération basique (signalement possible)
- **Accessibilité** : contraste suffisant, navigation au clavier possible

### Contraintes de contenu
- **Formats de compétences acceptés** : PDF (lien externe), vidéo (lien YouTube/Vimeo), lien web
- **Pas d'hébergement de fichiers lourds** dans le MVP (uniquement des liens)
- **Contenu en français** pour le MVP (internationalisation exclue)

---

## 5. Indicateurs de succès du projet

### Phase Design réussie si :
- ✅ Tous les livrables sont produits (benchmark, interviews, personas, wireframes, prototype)
- ✅ Au moins 3 tests utilisateurs réalisés sur le prototype
- ✅ Les retours sont documentés et des ajustements sont apportés
- ✅ Le scope MVP est clairement défini et validé par l'équipe

### Phase Développement réussie si :
- ✅ Le flux utilisateur principal est fonctionnel (publier + consulter + crédits)
- ✅ Le code est propre, commenté et versionné (GitHub)
- ✅ Un README complet explique installation et utilisation
- ✅ Au moins 3 testeurs externes ont pu utiliser le MVP

### Défense réussie si :
- ✅ Le problème et la cible sont clairement exprimés
- ✅ Les choix de design sont justifiés par la recherche utilisateur
- ✅ La démo du MVP fonctionne sans bug
- ✅ L'équipe sait répondre aux questions sur les choix produit et techniques

---

## 6. Plan d'action en cas de dérive

### Si les retours utilisateurs sont très négatifs (< 50% d'intérêt)
→ **Micro-pivot** : ajuster le concept (mentorat peer-to-peer, focus étudiants) et re-tester en 48h

### Si le développement prend du retard
→ **Réduction de scope** : enlever les "Should Have", garder uniquement les "Must Have"

### Si des bugs bloquants apparaissent
→ **Priorisation** : fixer les bugs critiques (crédits, accès aux compétences), reporter les bugs mineurs (UI, textes)

### Si l'équipe perd en motivation
→ **Réunion de recadrage** : rappeler les objectifs, redistribuer les tâches si besoin, célébrer les petites victoires

---

## Conclusion

Ce projet repose sur des **hypothèses fortes** (réciprocité, valeur de l'échange, accessibilité) que nous allons **valider méthodiquement** via la recherche utilisateur et le MVP.

Les **risques identifiés** (effet réseau, inégalité perçue, complexité du système) sont **gérables** avec les stratégies de mitigation proposées.

Les **contraintes** (temps, scope, technologies gratuites) sont **claires et acceptées** par l'équipe.

Notre objectif est de livrer un **MVP fonctionnel** qui démontre le potentiel de SkillSwap, tout en restant **réalistes** sur ce qui est faisable dans le temps imparti.