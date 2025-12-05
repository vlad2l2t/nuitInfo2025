# ✊ N.I.R.D — RÉSISTANCE 8-BIT

> **ÉQUIPE :** GOONMAXXERS
> **CONTEXTE :** Nuit de l'Info 2025
> **STATUT :** [MISSION ACCOMPLIE]

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)

---

## 📡 TRANSMISSION ENTRANTE

**L'année est 2025.** La fin du support de Windows 10 menace de rendre obsolètes des millions de machines fonctionnelles. L'Empire des GAFAM impose sa loi du "jeter et racheter".

**N.I.R.D (Numérique, Inclusif, Responsable, Durable)** est notre réponse. Ce projet n'est pas juste un site web, c'est un manifeste interactif pour transformer les établissements scolaires en villages numériques autonomes, propulsés par le libre.

---

## 💾 FONCTIONNALITÉS DU SYSTÈME

### 1. 🖥️ Interface Retro-Cyberpunk
Une expérience immersive inspirée des terminaux CRT des années 80/90 et de l'esthétique Hacker :
* **Effets visuels :** Scanlines, Vignetage, Bruit numérique (Noise) et distorsions chromatiques.
* **Ambiance sonore & visuelle :** Animations CSS pures, curseurs personnalisés et typographie brutale.
* **3D Intégrée :** Modèles interactifs (Pingouin Linux, Écran cassé) via `<model-viewer>`.

### 2. 🐍 Protocole SNAKE (Jeu Open Source)
Un module d'entraînement tactique :
* Incarnez **Tux** (la mascotte Linux).
* Votre mission : Dévorer les pommes (logiciels propriétaires).
* Évitez les "kernel panics" (murs) et l'auto-cannibalisme.
* *Moteur physique entièrement codé en JavaScript Vanilla.*

### 3. 🎓 Académie & GrapheneOS
Des modules éducatifs stylisés en Pixel Art :
* Présentation de l'alternative mobile **GrapheneOS**.
* Manifeste pour l'éducation au numérique libre.

### 4. 🚫 Zone 404 - "Classified"
Une gestion d'erreur personnalisée mettant en scène le "Sujet de test #69" (Goofy Cat). Si vous vous perdez, il vous jugera.

---

## 🛠️ ARSENAL TECHNIQUE (Tech Stack)

Ce projet a été conçu sans frameworks lourds pour garantir performance et durabilité (Low-tech philosophy).

* **HTML5 Sémantique :** Structure robuste et accessible.
* **CSS3 Avancé :** * Variables CSS (`:root`) pour la gestion des thèmes.
    * Grid & Flexbox pour la mise en page.
    * Animations `@keyframes` complexes (Glitch, Scanlines, Neige).
* **JavaScript (ES6+) :** Logique du jeu Snake, gestion du DOM, compteurs Uptime.
* **Google Model-Viewer :** Pour l'intégration des éléments 3D glb.

---

## 🚀 DÉPLOIEMENT LOCAL

Pour rejoindre la résistance et lancer le protocole sur votre machine :

1.  **Cloner le dépôt :**
    ```bash
    git clone [https://github.com/ton-pseudo/nird-resistance.git](https://github.com/ton-pseudo/nird-resistance.git)
    cd nird-resistance
    ```

2.  **Lancer le système :**
    * Ouvrez simplement le fichier `index.html` dans votre navigateur préféré (Firefox recommandé pour le respect de la vie privée !).
    * *Note : Pour que les modèles 3D chargent correctement, il est conseillé d'utiliser un serveur local (ex: Live Server sur VSCode).*

---

## 📂 STRUCTURE DES DOSSIERS

```bash
/
├── index.html          # QG Principal
├── academie.html       # Module Pixel Art
├── graphene.html       # Module Mobile Sécurisé
├── snake.html          # Simulation d'entraînement
├── 404.html            # Zone d'erreur
├── style.css           # Styles globaux & Cyberpunk
├── styleAcademie.css   # Styles spécifiques Pixel Art
├── styleSnake.css      # Styles du jeu
├── main.js             # Cerveau du système
└── src/
    ├── img/            # Assets graphiques
    └── 3d/             # Modèles glb (Tux, Monitor)
