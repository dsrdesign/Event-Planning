# EventBooking - Application de réservation d'événements

Une application mobile développée avec **React Native via Expo** permettant aux utilisateurs de réserver des places pour des événements, consulter leurs réservations et gérer leur profil.  
Ce projet suit une **architecture hexagonale (Clean Architecture)** afin de garantir une séparation claire des responsabilités, une testabilité optimale et une grande maintenabilité.

---

## Démarrage rapide

### Prérequis

- Node.js >= 18
- Expo CLI installé globalement :

```bash
npm install -g expo-cli
```

### Installation

```bash
git clone https://github.com/dsrdesign/Event-Planning.git
cd Event-Planning
npm install
```

### Lancer l'application

```bash
npx expo start
```

Scanner le QR code avec l'application **Expo Go** pour tester sur un appareil mobile.

---

## Architecture du projet

L'application est structurée selon une **architecture hexagonale (ou onion)** avec une séparation nette entre le **Domaine** (logique métier) et l’**Infrastructure** (UI, stockage, navigation...).

### I. Domaine (Core)

#### 1. Models

Contient les entités métier (`User`, `Event`, `Reservation`, etc.).

#### 2. Use Cases

Contient les cas d’usage représentant la logique métier (ex : `CreateReservationUseCase`, `GetAllEventsUseCase`, etc.).

#### 3. Repositories

Définit les interfaces/contrats d’accès aux données (`EventRepository`, `ReservationRepository`, etc.).

#### 4. Gateways

Contient les implémentations concrètes des `repositories`, ici en **inMemory** pour simuler un backend.

### II. Infrastructure (Interface, outils, persistance)

#### 1. App

Fichier racine initialisant les providers (auth, repositories, navigation, etc.).

#### 2. Store

Utilise **Zustand** pour la gestion de l’état global (ex : réservations utilisateur).

#### 3. Components

Composants UI réutilisables.

#### 4. Constants

Constantes globales (couleurs, données simulées, etc.).

#### 5. Contexts

Providers React (AuthProvider, RepositoryProvider...).

#### 6. Hooks

Hooks personnalisés (`useRepositories`, `useAuth`, etc.).

#### 7. Tests

Tests unitaires et d’intégration (Seuls les tests des use case sont disponible).

#### 8. Assets

Images, polices, illustrations, etc.

---

## Librairies principales

| Librairie                             | Rôle                                        |
|--------------------------------------|---------------------------------------------|
| `expo-router`                        | Navigation inspirée de Next.js              |
| `zustand`                            | Gestion de l'état simple et efficace       |
| `@react-native-picker/picker`        | Composant select multiplateforme natif      |
| `react-native-modal-datetime-picker` | Sélecteur de date/heure convivial           |
| `react-hook-form`                    | Gestion avancée de formulaires (future)     |

---

## Gestion de l'état

Nous avons choisi **Zustand** pour sa simplicité, sa compatibilité avec React Native, et sa capacité à persister un état local léger sans complexité inutile. Idéal pour des données comme les réservations.

---

## Hypothèses & Simplifications

- Aucune API distante utilisée : tout est simulé en mémoire.
- Gestion utilisateur simulée avec objets `User` injectés localement.
- Aucune base de données : données statiques (mocks).
- Pas de persistance locale (pas de SecureStore ou AsyncStorage).
- Authentification simulée via un provider React.
- Aucune validation complexe (pas de Zod ou Yup).
- Les événements ont une date + heure unique et une capacité max simplifiée.

---

## Justification de l'approche

### Pourquoi Clean Architecture ?

- **Testabilité** : chaque couche testable indépendamment.
- **Réutilisabilité** : logique métier découplée de l’interface.
- **Séparation des responsabilités** : la UI ne contient aucune logique métier.
- **Évolutivité** : facilité d’intégration d’une vraie API REST plus tard.

### Pourquoi cette stack technique ?

- **Expo** : expérience de dev fluide et rapide.
- **Zustand** : état local simple, efficace, et persistant.
- **expo-router** : routing clair, inspiré de Next.js.
- **react-hook-form** : validation efficace et flexible (prochainement).

---

## Utilisateurs test

| Email              | Rôle     | Mot de passe |
|--------------------|----------|--------------|
| kola@group.com     | ADMIN    | kola         |
| roland@group.com   | CUSTOMER | roland       |



---

## 👨‍💻 À propos de Moi

Je suis un développeur Mid-Level en ingénierie logiciel avec une forte sensibilité à l’architecture logicielle, la scalabilité et la maintenabilité des projets.  

J’ai volontairement structuré cette solution avec une complexité maîtrisée :

- Utilisation de la Clean Architecture pour garantir un découplage fort.
- Mock de données en mémoire pour simuler un backend sans alourdir l’intégration.
- Gestion d’état avec Zustand, plus léger que Redux pour une app mobile.
- Séparation stricte des rôles (admin vs client) et responsabilités dans le domaine.

Cette solution est conçue pour évoluer rapidement vers une API REST réelle et une persistance de données.
