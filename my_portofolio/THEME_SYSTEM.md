# 🎨 Système de Thème Professionnel - Guide Complet

## Vue d'ensemble

Ce portfolio utilise un système de design moderne et professionnel basé sur **Tailwind CSS v3** avec une gestion avancée du thème dark/light.

---

## 🎨 Palette de Couleurs

### Couleurs Principales

#### Primary (Violet/Purple) - Brand Color
```css
primary-50  → #faf5ff  /* Très clair */
primary-100 → #f3e8ff
primary-200 → #e9d5ff
primary-300 → #d8b4fe
primary-400 → #c084fc
primary-500 → #a855f7  /* Base */
primary-600 → #9333ea
primary-700 → #7e22ce
primary-800 → #6b21a8
primary-900 → #581c87
primary-950 → #3b0764  /* Très foncé */
```

#### Secondary (Cyan/Blue)
```css
secondary-500 → #06b6d4  /* Base */
```

#### Accent (Orange)
```css
accent-500 → #f97316  /* Base */
```

### Couleurs Utilitaires

- **Success** (Vert) : `success-500` → #22c55e
- **Warning** (Jaune) : `warning-500` → #eab308
- **Danger** (Rouge) : `danger-500` → #ef4444

### Couleurs de Thème

#### Light Theme
```css
light-bg     → #ffffff  /* Background principal */
light-card   → #fafafa  /* Background cards */
light-hover  → #f4f4f5  /* Hover states */
light-border → #e4e4e7  /* Bordures */
light-muted  → #f4f4f5  /* Éléments désactivés */
```

#### Dark Theme
```css
dark-bg     → #0a0a0b  /* Background principal */
dark-card   → #18181b  /* Background cards */
dark-hover  → #27272a  /* Hover states */
dark-border → #27272a  /* Bordures */
dark-muted  → #3f3f46  /* Éléments désactivés */
```

---

## 🔤 Typographie

### Polices
- **Sans-serif** : Inter (Corps de texte)
- **Display** : Sora (Titres)
- **Monospace** : Fira Code (Code)

### Tailles de Texte
```css
text-xs    → 0.75rem  (12px)
text-sm    → 0.875rem (14px)
text-base  → 1rem     (16px)
text-lg    → 1.125rem (18px)
text-xl    → 1.25rem  (20px)
text-2xl   → 1.5rem   (24px)
text-3xl   → 1.875rem (30px)
text-4xl   → 2.25rem  (36px)
text-5xl   → 3rem     (48px)
text-6xl   → 3.75rem  (60px)
text-7xl   → 4.5rem   (72px)
text-8xl   → 6rem     (96px)
text-9xl   → 8rem     (128px)
```

---

## 🎭 Classes de Composants

### Cards

#### `.card`
Card basique avec style moderne
```tsx
<div className="card">
  {/* Contenu */}
</div>
```

#### `.card-hover`
Card avec effet hover (élévation + translation)
```tsx
<div className="card-hover">
  {/* Contenu interactif */}
</div>
```

#### `.card-glow`
Card avec effet de glow au hover
```tsx
<div className="card-glow">
  {/* Contenu avec effet lumineux */}
</div>
```

#### `.card-interactive`
Card cliquable avec feedback visuel
```tsx
<div className="card-interactive" onClick={handleClick}>
  {/* Contenu cliquable */}
</div>
```

### Glass Morphism

#### `.glass`
Effet verre translucide
```tsx
<div className="glass">
  {/* Contenu avec effet glassmorphism */}
</div>
```

#### `.glass-strong`
Effet verre plus prononcé
```tsx
<div className="glass-strong">
  {/* Contenu avec effet glassmorphism intense */}
</div>
```

### Boutons

#### `.btn-primary`
Bouton principal avec gradient
```tsx
<button className="btn-primary">
  Action Principale
</button>
```

#### `.btn-secondary`
Bouton secondaire
```tsx
<button className="btn-secondary">
  Action Secondaire
</button>
```

#### `.btn-outline`
Bouton avec bordure
```tsx
<button className="btn-outline">
  Outline Button
</button>
```

#### `.btn-ghost`
Bouton transparent
```tsx
<button className="btn-ghost">
  Ghost Button
</button>
```

### Gradients de Texte

#### `.gradient-text`
Texte avec gradient animé (primary → purple)
```tsx
<h1>
  <span className="gradient-text">Texte Gradient</span>
</h1>
```

#### `.gradient-text-vibrant`
Texte avec gradient multicolore
```tsx
<h1>
  <span className="gradient-text-vibrant">Texte Vibrant</span>
</h1>
```

### Badges

```tsx
<span className="badge-primary">Primary</span>
<span className="badge-success">Success</span>
<span className="badge-warning">Warning</span>
<span className="badge-danger">Danger</span>
```

### Sections

#### `.section`
Container de section full-height
```tsx
<section className="section">
  <div className="section-container">
    {/* Contenu centré avec max-width */}
  </div>
</section>
```

---

## ✨ Animations

### Animations de Fade
```css
animate-fade-in        /* Fade in simple */
animate-fade-in-up     /* Fade + slide up */
animate-fade-in-down   /* Fade + slide down */
animate-fade-in-left   /* Fade + slide left */
animate-fade-in-right  /* Fade + slide right */
```

### Animations de Slide
```css
animate-slide-up       /* Slide from bottom */
animate-slide-down     /* Slide from top */
animate-slide-left     /* Slide from right */
animate-slide-right    /* Slide from left */
```

### Animations de Scale
```css
animate-scale-in       /* Scale in */
animate-scale-out      /* Scale out */
```

### Animations Spéciales
```css
animate-rotate-in      /* Rotate + scale in */
animate-bounce-in      /* Bounce in */
animate-float          /* Floating animation */
animate-pulse-slow     /* Slow pulse */
animate-spin-slow      /* Slow spin */
animate-gradient       /* Animated gradient */
animate-shimmer        /* Shimmer effect */
```

### Délais d'Animation
```css
delay-100  /* 100ms delay */
delay-200  /* 200ms delay */
delay-300  /* 300ms delay */
delay-400  /* 400ms delay */
delay-500  /* 500ms delay */
```

---

## 🎨 Effets Décoratifs

### Glow Effect
```tsx
<div className="glow-effect">
  {/* Le glow apparaît au hover */}
</div>
```

### Shimmer Effect
```tsx
<div className="shimmer">
  {/* Effet de brillance animé */}
</div>
```

### Skeleton Loaders
```tsx
<div className="skeleton h-20 w-full" />
```

---

## 🌓 Gestion du Thème

### Context Provider

Le thème est géré via React Context (`ThemeContext.tsx`).

```tsx
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}
```

### Classes Dark Mode

Tailwind utilise le préfixe `dark:` pour les styles en mode sombre :

```tsx
<div className="bg-white dark:bg-dark-bg">
  <p className="text-gray-900 dark:text-gray-100">
    Texte adaptatif
  </p>
</div>
```

---

## 🎯 Bonnes Pratiques

### 1. Utiliser les tokens de couleur
✅ **Bon**
```tsx
<div className="bg-primary-500 text-white">...</div>
```

❌ **Mauvais**
```tsx
<div style={{ backgroundColor: '#a855f7' }}>...</div>
```

### 2. Préférer les classes de composants
✅ **Bon**
```tsx
<div className="card-hover">...</div>
```

❌ **Mauvais**
```tsx
<div className="rounded-3xl p-6 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2">...</div>
```

### 3. Responsive Design
Toujours penser mobile-first :
```tsx
<div className="text-base sm:text-lg lg:text-xl">
  Texte responsive
</div>
```

### 4. Accessibilité
Utiliser les classes focus et aria :
```tsx
<button className="btn-primary focus:ring-2 focus:ring-primary-500">
  Accessible Button
</button>
```

---

## 📦 Extensions Possibles

### Ajouter une nouvelle couleur de thème

1. Modifier `tailwind.config.js` :
```js
colors: {
  brand: {
    500: '#YOUR_COLOR',
    // ... autres nuances
  }
}
```

2. Utiliser dans les composants :
```tsx
<div className="bg-brand-500">...</div>
```

### Créer une nouvelle classe de composant

1. Ajouter dans `index.css` dans `@layer components` :
```css
.my-component {
  @apply rounded-lg p-4 bg-white shadow;
  @apply transition-all duration-300;
}
```

2. Utiliser :
```tsx
<div className="my-component">...</div>
```

---

## 🚀 Performances

### Purge CSS
Tailwind purge automatiquement les classes inutilisées en production.

### Classes Dynamiques
⚠️ Éviter les classes dynamiques :
```tsx
// ❌ Mauvais - la classe sera purgée
<div className={`text-${color}-500`}>...</div>

// ✅ Bon - utiliser une fonction
const colorClass = color === 'primary' ? 'text-primary-500' : 'text-secondary-500';
<div className={colorClass}>...</div>
```

---

## 📚 Ressources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Color Palette Generator](https://uicolors.app/)
- [Tailwind UI Components](https://tailwindui.com/)

---

## 🎨 Exemples d'Usage

### Card avec Gradient et Glow
```tsx
<div className="card-glow">
  <h3 className="gradient-text">Titre Magnifique</h3>
  <p className="text-gray-600 dark:text-gray-400">
    Description du contenu...
  </p>
  <button className="btn-primary mt-4">
    Action
  </button>
</div>
```

### Hero Section
```tsx
<section className="section">
  <div className="section-container text-center">
    <h1 className="animate-fade-in-up">
      <span className="gradient-text">Titre Principal</span>
    </h1>
    <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 animate-fade-in-up delay-100">
      Sous-titre descriptif
    </p>
    <div className="flex gap-4 justify-center mt-8 animate-fade-in-up delay-200">
      <button className="btn-primary">Commencer</button>
      <button className="btn-outline">En savoir plus</button>
    </div>
  </div>
</section>
```

---

**Créé avec ❤️ et Tailwind CSS**
