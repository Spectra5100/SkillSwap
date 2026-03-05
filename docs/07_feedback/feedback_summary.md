# Feedback utilisateur — SkillSwap

## Vue d’ensemble

- **Nombre de testeurs :** 3  
- **Dates des tests :** 28/01/2026  
- **Méthode :** Tests utilisateurs modérés (observation + verbalisation)  
- **Support :** Prototype Figma  
- **Devices :** Mobile (majoritairement), Desktop (Alexis)

---

## Résumé

Les tests utilisateurs confirment que **le concept de SkillSwap est globalement compris et apprécié**.  
Les testeurs trouvent la navigation fluide, le design et les couleurs sont unanimement appréciés, et les utilisateurs comprennent rapidement la logique générale : consulter, proposer et échanger des compétences.

Cependant, plusieurs **points de confusion et de friction UX** ont été identifiés, principalement autour :
- de l’accès aux contenus (formats, Zoom, PDF),
- de la visibilité de certaines actions clés,
- du manque de pages “non implémentées” dans le prototype (paramètres, filtres, historique).

---

## Retours détaillés par testeur

### Testeur 1 — Alexis, mobile & desktop

**Profil :** Utilisateur à l’aise avec les interfaces numériques  
**Contexte :** Test sur téléphone et ordinateur

#### Observations

**Navigation & compréhension**
- Apprécie la **barre de filtres** et le scroll
- Comprend que chaque utilisateur possède un compte et peut poster librement
- Remarque qu’il existe **plusieurs chemins pour accéder aux mêmes pages** (perçu positivement)

**Points de confusion / friction**
- Questionnement sur le **calcul des étoiles / scores**
- Le bouton **Zoom ne fonctionne pas** → incompréhension
- Souhaiterait une **gestion plus claire des événements** (ex : Zoom à une heure précise)
- Demande un **contact visible** pour prévenir les sessions Zoom
- Bouton retour jugé **trop haut**, manque d’ergonomie sur téléphone

**Suggestions**
- Version hors ligne ou sans compte pour consulter les contenus gratuits
- Montrer explicitement les pages de connexion / déconnexion
- Différencier clairement le fonctionnement des formats simples (lecture) de celui des formats complexes (Zoom)

**Appréciation globale**
- Bonne appréciation générale
- Apprécie particulièrement le **choix des couleurs**

---

### Testeur 2 — Joshua, mobile

**Profil :** Utilisateur mobile, à l’aise avec les apps sociales

#### Observations

**Compréhension rapide**
- Comprend immédiatement que le bouton **“+” sert à créer une compétence**
- Suit facilement le parcours : compétence → détails → accès → chat
- Accède aux pages sans difficulté

**Navigation**
- Sidebar jugée très claire et utile  
- Navigation perçue comme fluide et intuitive

**Profil**
- Comprend bien la distinction entre compétences postées et acquises
- Apprécie le **switch au niveau du profil entre les compétences**

**Suggestions**
- Ajouter au prototype :
  - pages des boutons paramètres
  - filtres par catégories

**Citations**
> “Je trouve que c’est très fluide, je navigue facilement avec la sidebar, il y a toutes les indications.”

> “Ça ressemble à une application que j’utiliserais.”

**Appréciation globale**
- Très positive

---

### Testeur 3 — Paul, mobile

**Profil :** Utilisateur exploratoire, teste beaucoup par le scroll

#### Observations

**Comportements observés**
- Scroll beaucoup pour chercher des informations
- Cherche un **historique des crédits**

**Points de confusion**
- Un peu perdu dans la transition :
  - page félicitation → chat → retour
- Première incompréhension lors de l’accès au **PDF** (aurait voulu le télécharger ou autre)
- Ne trouve pas l’accès aux **paramètres**

**Points positifs**
- Accède facilement à la page profil
- Apprécie globalement l’application

**Verbatims**
> “Premièrement je me suis perdu en voulant revenir à la page précédente après être entré dans le chat”

> “Pour moi c’est parfait.”

**Suggestion**
- Mieux illustrer les formations sur la page d’accueil

---

## Analyse transversale

### 🟢 Ce qui fonctionne bien (3/3 testeurs)

- Compréhension globale du concept SkillSwap
- Navigation fluide
- Accès au chat facile
- Design et couleurs appréciés
- Logique du profil comprise
- Parcours principal non bloquant

---

### 🔴 Problèmes récurrents

| Problème | Fréquence | Gravité | Impact |
|--------|----------|--------|-------|
| Accès aux paramètres inexistant | 3/3 | 🔴 Critique | Frustration / impression d’incomplétude |
| Formats de contenu peu clairs (PDF, Zoom) | 2/3 | 🟠 Moyen | Confusion sur l’expérience |
| Fonctionnalités non actives dans le prototype | 2/3 | 🟠 Moyen | Frustration |

---

### 🤔 Confusions identifiées

#### Confusion 1 — Accès et gestion des formats (Zoom / PDF)

- **Testeurs concernés :** Alexis, Paul  
- **Symptôme :** Ne savent pas clairement ce qui se passe en cliquant (Zoom non fonctionnel et pas de gestion calendaire du zoom, PDF déroutant)  
- **Impact :** Confusion mais non bloquante  
- **Solution proposée :**
  - Clarifier les formats
- **Priorité :** 🟠

---

#### Confusion 2 — Actions clés peu visibles

- **Testeurs concernés :** Paul, Alexis  
- **Symptôme :** Ceratines pages inaccessibles  
- **Impact :** Ralentit la progression  
- **Solution proposée :**
  - Ajout des pages
- **Priorité :** 🟠

---

## Opportunités identifiées

### Opportunité 1 — Mode exploration sans compte

- **Source :** Alexis  
- **Description :** Permettre de consulter certains contenus gratuitement sans créer de compte  
- **Intérêt :** ⭐⭐☆  
- **Faisabilité :** Moyen terme  
- **Action :** À considérer post-MVP

---

## Conclusion

Les tests utilisateurs confirment que **SkillSwap repose sur une base solide**, tant sur le plan du concept que de l’expérience utilisateur.  
Les utilisateurs comprennent rapidement l’objectif de l’application, naviguent sans difficulté majeure et expriment une réelle envie d’utiliser le produit.

Les principaux axes d’amélioration concernent **la clarification des formats de contenu**, et la **présence de pages attendues** (paramètres, filtres, historique).  

Globalement, le prototype valide l’intention produit.