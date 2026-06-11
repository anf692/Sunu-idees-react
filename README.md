# Sunu-Idées — Documentation Complète

> **Sunu** signifie *"notre"* en wolof. Sunu-Idées, c'est **notre espace d'idées** — une application React d'affichage de cartes d'idées, conçue pour explorer les fondamentaux du développement front-end moderne.

---

## Table des matières

1. [Présentation du projet](#1-présentation-du-projet)
2. [Concepts React utilisés](#2-concepts-react-utilisés-et-expliqués-simplement)
3. [Architecture du projet](#3-architecture-du-projet)
4. [Installation et lancement](#4-installation-et-lancement)
5. [Explication du code](#5-explication-du-code)
6. [Ce que j'ai appris](#6-ce-que-jai-appris)

---

## 1. Présentation du projet

### Ce que fait l'application

**Sunu-Idées** est une application web construite avec React qui permet d'afficher des **cartes d'idées** de manière visuelle et interactive.

Imagine un tableau de post-its numérique : chaque carte représente une idée, avec un titre, une description, et la possibilité d'interagir avec elle.

### Aperçu des fonctionnalités

| Fonctionnalité | Description |
|---|---|
| 🗂️ Affichage de cartes | Chaque idée est affichée dans une carte visuelle |
| 👆 Interaction utilisateur | L'utilisateur peut interagir avec les cartes (like, expand, etc.) |
| 🧭 Navigation | Plusieurs pages accessibles via React Router |
| ⚡ Réactivité | L'interface se met à jour sans recharger la page |

### Aperçu visuel

```
┌─────────────────────────────────┐
│         🌍 Sunu-Idées           │
│  [ Accueil ]  [ À propos ]      │
├─────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐    │
│  │ 💡 Idée 1│  │ 💡 Idée 2│    │
│  │          │  │          │    │
│  │ Détails..│  │ Détails..│    │
│  │  [♥ 0]  │  │  [♥ 0]  │    │
│  └──────────┘  └──────────┘    │
└─────────────────────────────────┘
```

---

## 2. Concepts React utilisés et expliqués simplement

### 2.1 — Le Composant

**En une phrase :** Un composant, c'est une brique réutilisable de ton interface.

**Analogie du monde réel :**
> Pense à une maison LEGO. Chaque pièce (fenêtre, porte, mur) est un composant. Tu peux réutiliser la même fenêtre plusieurs fois sans la refabriquer.

En React, un composant est une **fonction JavaScript** qui retourne du HTML (qu'on appelle JSX).

```jsx
// Un composant simple — c'est juste une fonction !
function Bonjour() {
  return <h1>Bonjour, monde !</h1>;
}

// On l'utilise comme une balise HTML
<Bonjour />
```

Dans Sunu-Idées, les composants principaux sont :
- `CardIdee` → la carte parente qui gère la liste
- `CardItem` → une carte individuelle (composant enfant)

---

### 2.2 — Les Props

**En une phrase :** Les props, c'est la façon dont un composant parent **envoie des données** à un composant enfant.

**Analogie du monde réel :**
> Imagine un formulaire de commande au restaurant. Le serveur (composant parent) donne ta commande (props) au cuisinier (composant enfant). Le cuisinier reçoit l'info et prépare le plat.

```jsx
// Le parent envoie des données via des "attributs"
<CardItem titre="Créer une app mobile" description="Utiliser React Native" />

// L'enfant les reçoit dans un objet appelé "props"
function CardItem(props) {
  return (
    <div>
      <h2>{props.titre}</h2>
      <p>{props.description}</p>
    </div>
  );
}

// Version moderne avec déstructuration (plus propre)
function CardItem({ titre, description }) {
  return (
    <div>
      <h2>{titre}</h2>
      <p>{description}</p>
    </div>
  );
}
```

**⚠️ Règle importante :** Les props sont **en lecture seule**. L'enfant ne peut pas les modifier directement. Les données circulent toujours **du parent vers l'enfant**, jamais l'inverse.

---

### ⚡ 2.3 — Le State (useState)

**En une phrase :** Le state, c'est la **mémoire interne** d'un composant — quand il change, l'affichage se met à jour automatiquement.

**Analogie du monde réel :**
> Pense à un compteur sur un distributeur automatique. Chaque fois que quelqu'un achète quelque chose, le compteur diminue et l'affichage se met à jour. Le compteur = le state.

```jsx
import { useState } from 'react';

function CardItem({ titre, description }) {
  // [valeurActuelle, fonctionPourModifier] = useState(valeurInitiale)
  const [likes, setLikes] = useState(0);

  function ajouterLike() {
    setLikes(likes + 1); // ← React re-affiche automatiquement !
  }

  return (
    <div>
      <h2>{titre}</h2>
      <p>{description}</p>
      <button onClick={ajouterLike}>
        ♥ {likes}
      </button>
    </div>
  );
}
```

**Comprendre useState en 3 règles :**

| Règle | Explication |
|---|---|
| Ne jamais modifier le state directement | ❌ `likes = 5` &nbsp;&nbsp; ✅ `setLikes(5)` |
| Chaque composant a son propre state | Deux `CardItem` ont des compteurs indépendants |
| Modifier le state = React re-affiche | C'est la magie de React ! |

---

### 2.4 — La prop `key` dans les listes

**En une phrase :** La `key` est un identifiant unique que React utilise pour suivre chaque élément d'une liste.

**Pourquoi c'est important ?**
> Imagine une classe avec 30 élèves. Si tu appelles juste "L'élève de la 3ème rangée", c'est flou. Si tu dis "Fatou Diallo", c'est précis. La `key`, c'est le prénom unique de chaque élément.

```jsx
const idees = [
  { id: 1, titre: "App mobile", description: "React Native" },
  { id: 2, titre: "Site web", description: "React + Tailwind" },
  { id: 3, titre: "API REST", description: "Django REST Framework" },
];

function CardIdee() {
  return (
    <div>
      {idees.map((idee) => (
        // La key est OBLIGATOIRE et doit être UNIQUE
        <CardItem
          key={idee.id}
          titre={idee.titre}
          description={idee.description}
        />
      ))}
    </div>
  );
}
```

**Erreur fréquente :** Utiliser l'index du tableau comme key (`key={index}`) peut causer des bugs si la liste change. Utilise toujours un **identifiant unique** (id de base de données, etc.).

---

### 2.5 — Le flux unidirectionnel (one-way data flow)

**En une phrase :** Dans React, les données descendent toujours du parent vers l'enfant, jamais l'inverse.

```
App (données globales)
  └── CardIdee (reçoit les idées via props)
        └── CardItem (reçoit titre + description via props)
              └── Bouton (déclenche une action locale via state)
```

**Visualisation :**

```
┌─────────────┐
│    App.jsx  │  ← Source de vérité
│  idees = [] │
└──────┬──────┘
       │ props (données qui descendent)
       ▼
┌─────────────────┐
│   CardIdee.jsx  │
└────────┬────────┘
         │ props
         ▼
┌──────────────┐
│  CardItem    │  ← State local (likes) géré ici
│  useState()  │
└──────────────┘
```

---

### 2.6 — React Router (Navigation entre pages)

**En une phrase :** React Router permet de naviguer entre différentes "pages" sans recharger le navigateur.

**Analogie :**
> Sans React Router, changer de page = recharger = perdre toutes les données. Avec React Router, c'est comme changer de chaîne TV : l'écran change mais la TV reste allumée.

**Les 4 éléments clés :**

| Élément | Rôle | Analogie |
|---|---|---|
| `BrowserRouter` | Enveloppe toute l'app | Le système de navigation du bâtiment |
| `Routes` | Conteneur des routes | Le panneau d'affichage des destinations |
| `Route` | Une route = une page | Une porte vers une salle spécifique |
| `Link` | Lien de navigation | Un panneau indicateur |

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Menu de navigation */}
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À propos</Link>
      </nav>

      {/* Définition des pages */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<APropos />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 3. Architecture du projet

### 📁 Arborescence des fichiers

```
sunu-idees/
│
├── public/
│   └── index.html          → Point d'entrée HTML (ne pas toucher)
│
├── src/
│   ├── components/
│   │   ├── CardIdee.jsx    → Composant parent : gère la liste de cartes
│   │   └── CardItem.jsx    → Composant enfant : une carte individuelle
│   │
│   ├── pages/
│   │   ├── Accueil.jsx     → Page d'accueil
│   │   └── APropos.jsx     → Page "À propos"
│   │
│   ├── Router.jsx          → Configuration des routes
│   ├── App.jsx             → Composant racine de l'application
│   ├── main.jsx            → Point d'entrée JavaScript (Vite)
│   └── index.css           → Styles globaux
│
├── package.json            → Liste des dépendances
├── vite.config.js          → Configuration de Vite
└── README.md               → Ce fichier !
```

### Rôle de chaque fichier

| Fichier | Rôle | Qui l'utilise |
|---|---|---|
| `main.jsx` | Injecte React dans le HTML | Automatique (ne pas modifier) |
| `App.jsx` | Composant racine, importe Router | `main.jsx` |
| `Router.jsx` | Définit les routes/pages | `App.jsx` |
| `CardIdee.jsx` | Affiche toutes les cartes | Pages qui en ont besoin |
| `CardItem.jsx` | Affiche une carte + gère les likes | `CardIdee.jsx` |

---

## 4. Installation et lancement

### Prérequis

Avant de commencer, assure-toi d'avoir installé :

1. **Node.js** (version 18 ou plus récente)
   - Vérifie avec : `node --version`
   - Télécharger sur : [nodejs.org](https://nodejs.org)

2. **npm** (inclus avec Node.js)
   - Vérifie avec : `npm --version`

3. **Git** (pour cloner le projet)
   - Vérifie avec : `git --version`

### Commandes étape par étape

```bash
# Étape 1 : Cloner le projet depuis GitHub
git clone https://github.com/ton-username/sunu-idees.git

# Étape 2 : Aller dans le dossier du projet
cd sunu-idees

# Étape 3 : Installer toutes les dépendances
npm install

# Étape 4 : Lancer l'application en mode développement
npm run dev
```

### Vérification

Si tout fonctionne, tu verras dans ton terminal :

```
  VITE v5.x.x  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Ouvre ton navigateur sur **http://localhost:5173** — l'application est là ! 🎊

---

## 5. Explication du code

### 5.1 — `App.jsx`

Le composant racine. Il est le **chef d'orchestre** : il importe le Router et lance toute l'application.

```jsx
// src/App.jsx

import Router from './Router';    // On importe notre système de navigation
import './index.css';             // On importe les styles globaux

function App() {
  return (
    // Router contient TOUT — il gère la navigation
    <Router />
  );
}

export default App;
```

**Ce fichier fait quoi ?**
- Il est le **point d'entrée** de l'interface
- Il délègue toute la logique de navigation à `Router.jsx`
- Il reste volontairement simple : une seule responsabilité

---

### 📄 5.2 — `Router.jsx`

Ce fichier définit **quelle page afficher** selon l'URL.

```jsx
// src/Router.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';

function Router() {
  return (
    // BrowserRouter : active la navigation dans toute l'app
    <BrowserRouter>

      <Routes>
        {/* Quand l'URL est "/", affiche la page Accueil */}
        <Route path="/" element={<Accueil />} />

        {/* Quand l'URL est "/a-propos", affiche la page APropos */}
        <Route path="/a-propos" element={<APropos />} />
      </Routes>

    </BrowserRouter>
  );
}

export default Router;
```

**Lecture ligne par ligne :**

| Ligne | Explication |
|---|---|
| `import { BrowserRouter... }` | On importe les outils de navigation depuis la librairie |
| `<BrowserRouter>` | Active le système de navigation (obligatoire, une seule fois) |
| `<Routes>` | Conteneur qui dit "voici toutes mes pages possibles" |
| `<Route path="/" ...>` | Si l'URL = "/", affiche ce composant |

---

### 5.3 — `CardIdee.jsx` (composant parent)

Ce composant **gère la liste** d'idées et les distribue aux cartes enfants.

```jsx
// src/components/CardIdee.jsx

import CardItem from './CardItem';  // On importe le composant enfant

// Les données des idées (dans un vrai projet, elles viendraient d'une API)
const idees = [
  {
    id: 1,
    titre: "Créer une app mobile",
    description: "Développer une application avec React Native pour Android et iOS"
  },
  {
    id: 2,
    titre: "Lancer un blog",
    description: "Partager mes connaissances sur le développement web africain"
  },
  {
    id: 3,
    titre: "Apprendre Django",
    description: "Maîtriser le backend Python pour construire des APIs robustes"
  },
];

function CardIdee() {
  return (
    <div className="cards-container">

      {/* On parcourt le tableau avec .map() */}
      {idees.map((idee) => (

        // Pour chaque idée, on crée un CardItem
        // La key est OBLIGATOIRE dans les listes !
        <CardItem
          key={idee.id}
          titre={idee.titre}
          description={idee.description}
        />

      ))}

    </div>
  );
}

export default CardIdee;
```

**Pourquoi ce composant est "parent" ?**
> Il **possède les données** (le tableau `idees`) et les **distribue** à ses enfants `CardItem`. C'est lui qui décide quoi afficher et comment.

---

### 5.4 — `CardItem.jsx` (composant enfant avec useState)

C'est le composant le plus riche : il **reçoit des données** via props ET **gère son propre state** (les likes).

```jsx
// src/components/CardItem.jsx

import { useState } from 'react';  // On importe le hook useState

// Déstructuration des props : on extrait directement titre et description
function CardItem({ titre, description }) {

  // State local : chaque carte a son propre compteur de likes
  // likes = valeur actuelle | setLikes = fonction pour modifier
  const [likes, setLikes] = useState(0);

  // Fonction déclenchée au clic sur le bouton
  function handleLike() {
    setLikes(likes + 1);  // On ajoute 1 au compteur
    // React détecte le changement et re-affiche automatiquement !
  }

  return (
    <div className="card-item">

      {/* On affiche les données reçues via props */}
      <h2 className="card-titre">{titre}</h2>
      <p className="card-description">{description}</p>

      {/* Bouton qui déclenche handleLike au clic */}
      <button
        className="card-like-btn"
        onClick={handleLike}
      >
        ♥ {likes} {likes === 1 ? "like" : "likes"}
      </button>

    </div>
  );
}

export default CardItem;
```

**Le flux de données pour ce composant :**

```
CardIdee (parent)
    │
    │  props : { titre: "App mobile", description: "..." }
    ▼
CardItem (enfant)
    │
    │  state local : { likes: 0 }
    │  → change à chaque clic sur le bouton
    ▼
Affichage mis à jour automatiquement
```

---

## 6. Ce que j'ai appris

### 6.1 — Différence entre Vanilla JS et React

| Aspect | Vanilla JS (avant) | React (maintenant) |
|---|---|---|
| **Modifier l'affichage** | `document.getElementById(...).innerHTML = ...` | Modifier le state → React s'en charge |
| **Réutilisabilité** | Copier-coller le code HTML | Créer un composant, l'utiliser partout |
| **Gestion des données** | Variables globales, difficile à suivre | State + Props, flux clair et prévisible |
| **Navigation** | `window.location.href = ...` (rechargement) | `<Link>` React Router (pas de rechargement) |
| **Structure** | Un gros fichier HTML + JS | Des petits composants spécialisés |

**Exemple concret :**

```javascript
// ❌ Vanilla JS — manipulation directe du DOM
document.querySelector('#like-btn').addEventListener('click', function() {
  let count = parseInt(document.querySelector('#counter').textContent);
  document.querySelector('#counter').textContent = count + 1;
});

// ✅ React — déclaratif et lisible
const [vote, setVote] = useState(0);
<button onClick={() => setVote(likes + 1)}>♥ {likes}</button>
```

Le code React dit **QUOI** afficher. Le code Vanilla JS dit **COMMENT** modifier le DOM. React est plus lisible !

---

### 🐛 6.2 — Erreurs commises et corrections

#### Erreur 1 : Oublier la `key` dans les listes

```jsx
// ❌ Sans key — React affiche un avertissement dans la console
{idees.map((idee) => (
  <CardItem titre={idee.titre} />
))}

// ✅ Avec key — React peut identifier chaque élément
{idees.map((idee) => (
  <CardItem key={idee.id} titre={idee.titre} />
))}
```

**Symptôme :** Warning dans la console : *"Each child in a list should have a unique 'key' prop"*

---

#### Erreur 2 : Modifier le state directement

```jsx
// Ne JAMAIS faire ça — React ne détecte pas le changement !
function Comptevote() {
  vote = vote + 1;  // Cette ligne ne déclenche PAS de re-rendu
}

// Toujours utiliser la fonction setter
function Comptevote() {
  setVote(vote + 1);  // React détecte le changement et re-affiche
}
```

**Symptôme :** Le compteur ne s'affiche pas mis à jour dans l'interface

---

#### Erreur 3 : Mal nommer les composants

```jsx
// Nom qui commence par une minuscule
function cardItem() { ... }
<cardItem />  // React croit que c'est une balise HTML native !

// Nom qui commence par une MAJUSCULE
function CardItem() { ... }
<CardItem />  // React reconnaît que c'est un composant personnalisé
```

**Règle :** En React, tout composant personnalisé **doit** commencer par une majuscule.

---

#### Erreur 4 : Confondre props et state

```jsx
// Essayer de modifier une prop depuis l'enfant
function CardItem({ titre }) {
  titre = "Nouveau titre";  // INTERDIT — les props sont en lecture seule
}

// Si tu as besoin de modifier, utilise le state
function CardItem({ titre }) {
  const [titreMod, setTitreMod] = useState(titre);  // Copie dans le state
  setTitreMod("Nouveau titre");  // Maintenant c'est OK
}
```

---

## Récapitulatif des concepts maîtrisés

Bravo ! En construisant Sunu-Idées, tu as appris à :

- ✅ Créer et utiliser des **composants** React
- ✅ Passer des données parent → enfant avec les **props**
- ✅ Gérer l'état local d'un composant avec **useState**
- ✅ Afficher des listes dynamiques avec `.map()` et la prop **key**
- ✅ Comprendre le **flux unidirectionnel** des données
- ✅ Naviguer entre pages avec **React Router**

---

## Pour aller plus loin

### Prochaines étapes suggérées

1. **Ajouter une vraie base de données** → Connecter à une API Django REST Framework
2. **Persistance des likes** → Sauvegarder avec localStorage ou une API
3. **Formulaire d'ajout** → Permettre à l'utilisateur d'ajouter ses propres idées
4. **Filtrage et recherche** → Filtrer les cartes par catégorie ou mot-clé
5. **Déploiement** → Publier l'app sur Vercel ou Netlify gratuitement

### Ressources utiles

| Ressource | Lien | Pour quoi |
|---|---|---|
| Doc officielle React | [react.dev](https://react.dev) | Référence complète |
| React Router | [reactrouter.com](https://reactrouter.com) | Navigation |
| Tailwind CSS | [tailwindcss.com](https://tailwindcss.com) | Styles rapides |
| Vite.js | [vitejs.dev](https://vitejs.dev) | Outil de build utilisé |
| Africa's Talking | [africastalking.com](https://africastalking.com) | SMS en Afrique |

---

*Documentation rédigée par Assane — Projet Sunu-Idées*
*Stack : React 18 + Vite + React Router DOM*

