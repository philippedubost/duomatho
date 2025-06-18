# DuoMatho - Application d'apprentissage des mathématiques

Une application web interactive inspirée de Duolingo pour l'apprentissage des mathématiques, spécialement conçue pour le programme de 3ème.

## Structure du Projet

### Fichiers de Configuration

- `package.json` : Gère les dépendances du projet et les scripts npm
- `tsconfig.json` : Configuration TypeScript pour le projet
- `tsconfig.node.json` : Configuration TypeScript spécifique pour Node.js
- `vite.config.ts` : Configuration de Vite (bundler et serveur de développement)
- `index.html` : Point d'entrée HTML de l'application

### Source (`src/`)

#### Composants Principaux

- `App.tsx` : Composant racine qui définit la structure de l'application et les routes
- `main.tsx` : Point d'entrée de l'application React

#### Pages (`src/pages/`)

- `Home.tsx` : Page d'accueil affichant la liste des leçons disponibles
- `Lesson.tsx` : Page de leçon interactive avec les exercices et le système de progression

#### Données (`src/data/`)

- `lessons.ts` : Base de données des leçons et questions
  - Définit les interfaces `Question` et `Lesson`
  - Contient toutes les questions organisées par catégories
  - Gère les niveaux de difficulté et les récompenses XP

#### Contexte (`src/context/`)

- `ProgressContext.tsx` : Gestion de l'état global de progression
  - Suit les XP, les streaks et les badges
  - Gère la persistance des données dans le localStorage
  - Fournit des fonctions pour mettre à jour la progression

#### Thème et Styles

- `theme.ts` : Configuration du thème Material-UI
  - Définit les couleurs, typographie et styles globaux
  - Personnalise les composants Material-UI
  - Gère les gradients et animations

- `index.css` : Styles globaux CSS

#### Assets (`public/`)

- `math-icon.svg` : Icône de l'application

## Fonctionnalités Principales

### Système de Progression
- XP (points d'expérience) pour chaque exercice complété
- Streaks (séries) pour encourager la pratique régulière
- Badges pour récompenser les accomplissements
- Progression visuelle avec barres de progression

### Exercices
- Questions à choix multiples avec validation automatique
- Questions à réponse libre pour les calculs simples
- Feedback immédiat avec animations
- Système de combo pour les réponses correctes consécutives

### Interface Utilisateur
- Design moderne avec gradients et animations
- Thème cohérent inspiré de Duolingo
- Interface responsive
- Animations de célébration pour les bonnes réponses

## Technologies Utilisées

- React avec TypeScript
- Material-UI pour l'interface
- React Router pour la navigation
- Framer Motion pour les animations
- Canvas Confetti pour les effets de célébration
- Vite comme bundler et serveur de développement

## Installation

1. Cloner le repository
2. Installer les dépendances : `npm install`
3. Lancer le serveur de développement : `npm run dev`

## Structure des Données

### Leçons
Chaque leçon contient :
- ID unique
- Titre et description
- Icône
- Score requis pour débloquer
- Récompense XP
- Badge associé
- Liste de questions

### Questions
Chaque question contient :
- ID unique
- Type (choix multiple ou texte)
- Niveau de difficulté (1-3)
- Question
- Options (pour les choix multiples)
- Réponse correcte
- Explication
- Récompense XP

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Ajouter de nouvelles questions
- Améliorer l'interface utilisateur
- Corriger des bugs
- Ajouter de nouvelles fonctionnalités
