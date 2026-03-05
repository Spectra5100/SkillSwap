# Maquettes haute fidélité – SkillSwap

Ce document décrit les maquettes haute fidélité du MVP **SkillSwap**, en s’appuyant sur les écrans réellement conçus dans Figma. Les choix UI/UX présentés ici sont directement alignés avec le concept d’apprentissage entre pairs et les besoins identifiés chez les utilisateurs (notamment les étudiants autodidactes).

---

## Écrans réalisés

### 1. Écran d’accueil – Découverte des compétences

L’écran d’accueil permet à l’utilisateur de parcourir rapidement les compétences disponibles.

* Liste de compétences organisée sous forme de **cartes verticales**.
* Barre de recherche et filtres simples (toutes, design, code, crafts) pour faciliter la découverte.
* Chaque carte affiche les informations clés : titre, auteur, note, format (PDF, vidéo, visio) et coût en crédits.

**Justification UX**
Ce layout favorise une lecture rapide et un usage mobile-first. L’utilisateur peut comparer les compétences sans entrer dans le détail, tout en comprenant immédiatement la valeur et l’effort demandé.

---

### 2. Écran de consultation d’une compétence

Cet écran présente le détail d’une compétence sélectionnée (ex : *Apprendre à utiliser Figma*, *Débuter en Python*).

* Mise en avant du **titre**, de l’auteur et de la note dès le haut de l’écran.
* Description courte et structurée pour expliquer ce qui sera appris.
* Bouton principal **Accéder à la compétence** clairement visible.
* Section commentaires placée sous le contenu principal pour renforcer la confiance.

**Justification UX**
La hiérarchie visuelle guide l’utilisateur vers l’action principale tout en lui donnant suffisamment d’éléments pour décider. Les avis rassurent sans alourdir l’écran.

---

### 3. Écran de chat

L’écran de chat permet l’échange direct entre utilisateurs autour d’une compétence.

* Interface inspirée des applications de messagerie classiques.
* Différenciation visuelle claire entre messages envoyés et reçus.
* Accès visible au contexte de la compétence liée à la discussion.

**Justification UX**
Le chat est central dans la logique d’entraide. En reprenant des codes familiers, l’utilisateur peut se concentrer sur l’échange plutôt que sur l’outil.

---

### 4. Écran groupe / discussion liée à une compétence

Cet écran affiche une discussion contextualisée autour d’une compétence spécifique.

* Messages orientés questions/réponses.
* Mise en avant des échanges utiles et concrets.
* Continuité directe avec l’apprentissage de la compétence.

**Justification UX**
Cet espace favorise l’apprentissage collectif et la clarification rapide. Il transforme une compétence statique en expérience interactive.

---

### 5. Écran de création / proposition d’une compétence

Cet écran permet à un utilisateur de proposer une nouvelle compétence à partager.

* Formulaire simple et progressif.
* Champs essentiels uniquement : titre, catégorie, description, ressources jointes.
* Ton rassurant rappelant qu’il n’est pas nécessaire d’être expert.

**Justification UX**
L’objectif est de lever le frein à la contribution. La simplicité du formulaire et l’absence de jargon encouragent les utilisateurs à partager leurs connaissances.

---

## Identité visuelle et palette de couleurs

### 🎯 Couleurs principales

* **Bleu principal — #3B82F6**
  Utilisé pour les boutons principaux, liens et actions clés.

* **Vert secondaire — #10B981**
  Associé aux crédits, validations et actions positives.

* **Jaune / doré — #FCD34D**
  Utilisé comme accent pour les notes, étoiles et indicateurs de qualité.

### 🧱 Couleurs neutres

* Gris foncé (texte principal) — #1F2937
* Gris moyen (texte secondaire) — #6B7280
* Gris clair (fonds / inputs) — #F3F4F6
* Gris très clair (sections) — #F9FAFB
* Blanc — #FFFFFF

Ces couleurs assurent une interface lisible, cohérente et peu fatigante visuellement.

### 🌈 Dégradés

Des dégradés légers sont utilisés ponctuellement (avatars, éléments d’accent) à partir des couleurs principales, avec un maximum de deux couleurs et des transitions douces.

---

## Choix de conception globaux

* Design mobile-first
* Interface simple et rassurante
* Composants cohérents sur l’ensemble des écrans
* Mise en avant systématique des actions principales

Ces choix visent à réduire la charge cognitive et à rendre l’application accessible à des utilisateurs non experts.

---

## Accessibilité

Les maquettes prennent en compte les principes d’accessibilité suivants :

* Contraste suffisant entre texte et arrière-plan
* Tailles de texte lisibles sur mobile
* Boutons larges et espacés pour une interaction facile
* Hiérarchie visuelle claire et constante

L’objectif est de proposer une expérience compréhensible et inclusive, sans complexité inutile.