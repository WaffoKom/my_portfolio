# 🎨 Portfolio Professionnel avec Système de Thème Avancé

## 🚀 Aperçu

Portfolio moderne et professionnel avec un système de design complet basé sur **Tailwind CSS v3**, **Framer Motion** et **React Context API** pour la gestion des thèmes.

---

## ✨ Fonctionnalités Principales

### 🌓 Gestion de Thème
- ✅ **Dark/Light Mode** avec transitions fluides
- ✅ Détection automatique du thème système (`prefers-color-scheme`)
- ✅ Persistance du choix utilisateur (localStorage)
- ✅ Toggle animé avec Framer Motion

### 🎨 Design System
- ✅ Palette de couleurs professionnelle (Primary, Secondary, Accent, Success, Warning, Danger)
- ✅ Typographie cohérente avec Google Fonts (Inter, Sora)
- ✅ Composants réutilisables (Cards, Buttons, Badges, etc.)
- ✅ Effets visuels modernes (Glass morphism, Glow, Shimmer)

### 🎭 Animations
- ✅ **16+ animations Tailwind** personnalisées
- ✅ Animations au scroll avec Framer Motion
- ✅ Micro-interactions (hover, tap, focus)
- ✅ Transitions fluides entre les états

### 📱 Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints optimisés (sm, md, lg, xl, 2xl)
- ✅ Safe area support pour iOS/Android

---

## 🛠️ Stack Technique

### Core
- **React 18.3** - Library UI
- **TypeScript 5.6** - Type safety
- **Vite 5.4** - Build tool ultra-rapide

### Styling
- **Tailwind CSS 3.4** - Framework CSS utility-first
- **PostCSS** - Transformations CSS
- **Autoprefixer** - Compatibilité navigateurs

### Animation
- **Framer Motion 12.38** - Animations déclaratives
- **Custom Tailwind Animations** - 16+ keyframes

### State Management
- **React Context API** - Gestion du thème
- **Redux** - State global (legacy, à migrer)
- **React Hooks** - State local

### Internationalisation
- **i18next** - Traductions FR/EN
- **react-i18next** - Intégration React

### Autres
- **clsx + tailwind-merge** - Gestion des classes CSS
- **React Router DOM** - Navigation
- **FontAwesome** - Icônes
- **React Icons** - Plus d'icônes

---

## 📂 Structure du Projet

```
my_portofolio/
├── src/
│   ├── components/          # Composants React
│   │   ├── Header/         # Header avec theme toggle
│   │   ├── NavBar/         # Navigation latérale
│   │   ├── home/           # Section About/Hero
│   │   ├── Services/       # Services proposés
│   │   ├── Skills/         # Compétences techniques
│   │   ├── projets/        # Portfolio de projets
│   │   ├── career/         # Parcours professionnel
│   │   ├── Testimonials/   # Témoignages
│   │   └── Footer/         # Pied de page
│   │
│   ├── contexts/            # React Contexts
│   │   └── ThemeContext.tsx # Gestion du thème
│   │
│   ├── lib/                 # Utilitaires
│   │   └── utils.ts        # Fonction cn() pour classes
│   │
│   ├── assets/              # Images, fonts, etc.
│   ├── types/               # Types TypeScript
│   ├── actions/             # Redux actions
│   ├── reducers/            # Redux reducers
│   ├── store/               # Redux store
│   │
│   ├── index.css           # Styles Tailwind + custom
│   ├── main.tsx            # Point d'entrée
│   └── App.tsx             # Composant racine
│
├── tailwind.config.js      # Configuration Tailwind
├── postcss.config.js       # Configuration PostCSS
├── vite.config.ts          # Configuration Vite
├── tsconfig.json           # Configuration TypeScript
│
├── THEME_SYSTEM.md         # Documentation du système de thème
├── MIGRATION_NOTES.md      # Notes de migration
└── package.json            # Dépendances
```

---

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18+
- pnpm (recommandé) ou npm

### Installation
```bash
cd my_portofolio
pnpm install
```

### Développement
```bash
pnpm run dev
```
→ Ouvre sur `http://localhost:5173`

### Build Production
```bash
pnpm run build
```

### Preview Production
```bash
pnpm run preview
```

### Lint
```bash
pnpm run lint
```

---

## 🎨 Utilisation du Système de Thème

### Toggle du Thème

```tsx
import { useTheme } from './contexts/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}
```

### Classes Dark Mode

```tsx
// Couleurs adaptatives
<div className="bg-white dark:bg-dark-bg">
  <p className="text-gray-900 dark:text-gray-100">
    Texte qui s'adapte au thème
  </p>
</div>

// Bordures adaptatives
<div className="border border-light-border dark:border-dark-border">
  ...
</div>
```

---

## 🎭 Classes de Composants Disponibles

### Cards
```tsx
<div className="card">Basic card</div>
<div className="card-hover">Card with hover</div>
<div className="card-glow">Card with glow effect</div>
<div className="card-interactive">Clickable card</div>
```

### Buttons
```tsx
<button className="btn-primary">Primary</button>
<button className="btn-secondary">Secondary</button>
<button className="btn-outline">Outline</button>
<button className="btn-ghost">Ghost</button>
```

### Glass Morphism
```tsx
<div className="glass">Glassmorphism effect</div>
<div className="glass-strong">Strong glass effect</div>
```

### Gradients de Texte
```tsx
<h1 className="gradient-text">Gradient Text</h1>
<h1 className="gradient-text-vibrant">Vibrant Gradient</h1>
```

### Badges
```tsx
<span className="badge-primary">Primary</span>
<span className="badge-success">Success</span>
<span className="badge-warning">Warning</span>
<span className="badge-danger">Danger</span>
```

---

## ✨ Animations Disponibles

### Fade Animations
- `animate-fade-in` - Simple fade in
- `animate-fade-in-up` - Fade + slide from bottom
- `animate-fade-in-down` - Fade + slide from top
- `animate-fade-in-left` - Fade + slide from left
- `animate-fade-in-right` - Fade + slide from right

### Slide Animations
- `animate-slide-up` - Slide from bottom
- `animate-slide-down` - Slide from top
- `animate-slide-left` - Slide from right
- `animate-slide-right` - Slide from left

### Special Animations
- `animate-scale-in` - Scale in
- `animate-rotate-in` - Rotate + scale in
- `animate-bounce-in` - Bounce in
- `animate-float` - Floating animation
- `animate-gradient` - Animated gradient
- `animate-shimmer` - Shimmer effect

### Délais
- `delay-100` à `delay-500` (par incréments de 100ms)

---

## 🎨 Palette de Couleurs

### Primary (Brand)
- `primary-50` à `primary-950` (Violet/Purple)

### Secondary
- `secondary-50` à `secondary-950` (Cyan/Blue)

### Accent
- `accent-50` à `accent-950` (Orange)

### Semantic
- `success-*` (Vert)
- `warning-*` (Jaune)
- `danger-*` (Rouge)

### Theme Colors
- `light-bg`, `light-card`, `light-border`, etc.
- `dark-bg`, `dark-card`, `dark-border`, etc.

---

## 📱 Responsive Breakpoints

```css
sm:   640px   /* Mobile large */
md:   768px   /* Tablet */
lg:   1024px  /* Desktop */
xl:   1280px  /* Large desktop */
2xl:  1536px  /* Extra large */
```

---

## 🎯 Bonnes Pratiques

### 1. Toujours utiliser les tokens de couleur
✅ `bg-primary-500`
❌ `bg-[#a855f7]`

### 2. Mobile-first
```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

### 3. Dark mode
```tsx
<div className="bg-white dark:bg-dark-bg">
  Always consider dark mode
</div>
```

### 4. Accessibilité
```tsx
<button
  className="btn-primary focus:ring-2"
  aria-label="Descriptive label"
>
  Click me
</button>
```

---

## 🔧 Configuration Avancée

### Ajouter une nouvelle couleur

**1. Modifier `tailwind.config.js`**
```js
colors: {
  brand: {
    500: '#YOUR_COLOR',
  }
}
```

**2. Utiliser**
```tsx
<div className="bg-brand-500">...</div>
```

### Créer un nouveau composant

**1. Ajouter dans `index.css` (@layer components)**
```css
.my-component {
  @apply rounded-lg p-4 bg-white;
  @apply shadow-lg transition-all;
}
```

**2. Utiliser**
```tsx
<div className="my-component">...</div>
```

---

## 📈 Performances

### Build Size
- CSS: ~27 KB (5 KB gzipped)
- JS: ~549 KB (182 KB gzipped)

### Optimisations
- ✅ Purge CSS automatique en production
- ✅ Tree-shaking
- ✅ Code splitting (à améliorer)
- ✅ Lazy loading des images
- ✅ Font preloading

---

## 🐛 Résolution de Problèmes

### Le thème ne persiste pas
→ Vérifier le localStorage dans DevTools

### Les animations ne fonctionnent pas
→ Vérifier que Framer Motion est bien installé

### Les classes Tailwind ne s'appliquent pas
→ Vérifier que le fichier est dans `content` de `tailwind.config.js`

---

## 📚 Documentation Complète

- [THEME_SYSTEM.md](./THEME_SYSTEM.md) - Guide complet du système de thème
- [MIGRATION_NOTES.md](./MIGRATION_NOTES.md) - Notes de migration

---

## 🤝 Contribution

Ce projet est un portfolio personnel. Les suggestions sont bienvenues !

---

## 📝 License

© 2026 DaniloWaffis - WaffoKom. Tous droits réservés.

---

## 🙏 Crédits

- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animations
- **FontAwesome** - Icônes
- **Google Fonts** - Polices (Inter, Sora)

---

**Fait avec ❤️, React et Tailwind CSS**
