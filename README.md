# 🏠 Dabo International - Site Web React Professionnel

Site web moderne et responsive pour l'agence immobilière Dabo International, développé avec les technologies les plus récentes.

## ✨ Technologies Utilisées

### Frontend Moderne
- **React 18** - Framework JavaScript moderne avec hooks
- **Vite** - Build tool ultra-rapide et moderne
- **Tailwind CSS** - Framework CSS utilitaire avec design system personnalisé
- **Framer Motion** - Animations fluides et professionnelles
- **React Icons** - Icônes SVG optimisées

### Design System
- **Palette de couleurs professionnelle** : Bleu marine, doré, blanc
- **Typographie élégante** : Poppins et Inter
- **Animations sophistiquées** : Transitions, hover effects, scroll animations
- **Responsive design** : Mobile-first, tablette, desktop

## 🚀 Fonctionnalités Avancées

### Interface Utilisateur
- **Navigation fluide** : Menu hamburger responsive avec animations
- **Sections interactives** : Hero, Services, About, Properties, Contact
- **Bouton WhatsApp flottant** : Contact direct avec animation pulse
- **Formulaire de contact** : Validation et feedback utilisateur

### Animations et Interactions
- **Scroll animations** : Effets d'apparition au scroll avec Intersection Observer
- **Hover effects** : Transformations et changements de couleur
- **Loading animations** : Transitions d'entrée des composants
- **Micro-interactions** : Boutons, cartes, liens avec feedback visuel

### Performance
- **Code splitting** : Chargement optimisé des composants
- **Lazy loading** : Images et composants chargés à la demande
- **Tree shaking** : Élimination du code non utilisé
- **Optimisation des assets** : Images SVG, polices web optimisées

## 📁 Architecture du Projet

```
dabo-international-react/
├── public/                 # Assets statiques
├── src/
│   ├── components/         # Composants React modulaires
│   │   ├── Navbar.jsx     # Navigation principale
│   │   ├── Hero.jsx       # Section d'accueil
│   │   ├── Services.jsx   # Services immobiliers
│   │   ├── About.jsx      # À propos de l'agence
│   │   ├── Properties.jsx # Catalogue de biens
│   │   ├── Contact.jsx    # Formulaire de contact
│   │   ├── Footer.jsx    # Pied de page
│   │   └── WhatsAppFloat.jsx # Bouton WhatsApp
│   ├── App.jsx            # Composant principal
│   ├── main.jsx          # Point d'entrée
│   └── index.css         # Styles Tailwind
├── tailwind.config.js     # Configuration Tailwind
├── postcss.config.js      # Configuration PostCSS
└── package.json          # Dépendances et scripts
```

## 🎨 Design System

### Couleurs
```css
Primary (Bleu marine): #0f172a → #f8fafc
Gold (Doré): #fffbeb → #451a03  
Accent (Bleu): #eff6ff → #172554
```

### Typographie
- **Police principale** : Poppins (300-800)
- **Police secondaire** : Inter (300-700)
- **Hiérarchie** : H1 (7xl) → H6 (sm)

### Espacements
- **Container** : max-width 7xl (1280px)
- **Padding sections** : py-24 lg:py-32
- **Gaps** : 4, 6, 8, 12, 16, 24

### Ombres
- **Soft** : 0 2px 15px -3px rgba(0,0,0,0.07)
- **Medium** : 0 4px 25px -5px rgba(0,0,0,0.1)
- **Strong** : 0 20px 25px -5px rgba(0,0,0,0.1)

## 🛠️ Installation et Démarrage

### Prérequis
- Node.js 16+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [repository-url]
cd dabo-international-react

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Scripts Disponibles
```bash
npm run dev      # Serveur de développement (localhost:5173)
npm run build    # Build de production
npm run preview  # Prévisualisation du build
npm run lint     # Linting du code
```

## 📱 Responsive Design

### Breakpoints
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px  
- **Desktop** : > 1024px

### Adaptations
- **Navigation** : Menu hamburger sur mobile
- **Grilles** : 1 colonne mobile → 3 colonnes desktop
- **Typographie** : Taille adaptative avec clamp()
- **Espacements** : Padding et margins responsives

## 🔧 Personnalisation

### Modifier les Couleurs
Éditez `tailwind.config.js` :
```javascript
colors: {
  primary: { /* Palette bleu marine */ },
  gold: { /* Palette doré */ },
  accent: { /* Palette bleu accent */ }
}
```

### Ajouter des Animations
Utilisez Framer Motion :
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Contenu animé
</motion.div>
```

### Modifier le Contenu
Éditez directement les composants dans `src/components/`

## 📞 Configuration WhatsApp

### Numéro de Téléphone
Remplacez `221XXXXXXXXX` par le vrai numéro :
- Format : `https://wa.me/[NUMERO]`
- Exemple : `https://wa.me/221701234567`

### Localisation
- Fichiers à modifier : `Contact.jsx`, `Footer.jsx`, `WhatsAppFloat.jsx`

## 🚀 Déploiement

### Build de Production
```bash
npm run build
```
Le build sera dans le dossier `dist/`

### Déploiement Vercel
```bash
npm i -g vercel
vercel
```

### Déploiement Netlify
1. Connecter le repository GitHub
2. Build command : `npm run build`
3. Publish directory : `dist`

## 📈 Optimisations

### Performance
- **Code splitting** automatique avec Vite
- **Tree shaking** pour éliminer le code mort
- **Compression** des assets
- **Cache** des ressources statiques

### SEO
- **Meta tags** optimisés
- **Structure sémantique** HTML5
- **Images** avec alt text
- **URLs** propres

### Accessibilité
- **Navigation** au clavier
- **Contraste** des couleurs
- **Alt text** pour les images
- **ARIA labels** pour les éléments interactifs

## 🔍 Maintenance

### Mise à Jour des Dépendances
```bash
npm update
npm audit fix
```

### Ajout de Nouvelles Fonctionnalités
1. Créer un nouveau composant dans `src/components/`
2. L'importer dans `App.jsx`
3. Ajouter les styles Tailwind nécessaires

## 📄 Licence

© 2024 Dabo International – Tous droits réservés

## 🤝 Support

Pour toute question ou assistance :
- **Email** : contact@dabointernational.com
- **WhatsApp** : +221 XX XXX XX XX
- **GitHub** : [Repository du projet]

---

**Développé avec ❤️ pour Dabo International**
