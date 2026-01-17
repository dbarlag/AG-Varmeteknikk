# AG Varmeteknikk Color Palette

A modern, premium color system that harmonizes with the company logo while elevating the brand to contemporary standards.

## 🎨 Color Philosophy

The palette extracts and refines colors from the AG Varmeteknikk logo:
- **Navy Blue** from the logo text → Modern, trustworthy brand foundation
- **Flame Orange/Red** from the icon → Energy, warmth, and action
- **Black** from the oil drop → Premium sophistication
- **Refined Greys** → Professional, clean aesthetic

---

## 🔷 Brand Colors

### Navy (Primary Brand Color)
Extracted from the logo's deep blue text, refined for modern web use.

- **brand-navy**: `#002B5C` - Main brand color, use for headers and key brand moments
- **brand-navy-light**: `#003D82` - Lighter variant for hover states and accents
- **brand-navy-dark**: `#001A3D` - Darker variant for depth and shadows

**Usage**: Hero sections, primary navigation, brand identity moments

```jsx
<div className="bg-brand-navy text-white">...</div>
```

---

### Blue (Primary CTAs)
Modern, approachable blue for calls-to-action and interactive elements.

- **brand-blue**: `#0066CC` - Primary CTA color
- **brand-blue-light**: `#3399FF` - Hover states and highlights
- **brand-blue-dark**: `#004C99` - Active/pressed states

**Usage**: Buttons, links, interactive elements, form focus states

```jsx
<button className="bg-brand-blue hover:bg-brand-blue-dark">...</button>
```

---

## 🔥 Accent Colors (Heat/Energy)

### Orange (From Logo Flame)
Energetic accent color representing heat and warmth.

- **accent-orange**: `#E84118` - Primary accent for energy/heat contexts
- **accent-orange-light**: `#FF6B4A` - Highlights and gradients
- **accent-orange-dark**: `#C23616` - Deeper warmth

**Usage**: Heat-related content, energy highlights, call-out sections, badges

```jsx
<span className="bg-accent-orange text-white">Varme</span>
```

---

### Red & Yellow
Supporting accent colors for variety and emphasis.

- **accent-red**: `#D32F2F` - Urgency, important notices
- **accent-yellow**: `#FFA000` - Warnings, highlights

**Usage**: Alert badges, special promotions, urgency indicators

```jsx
<div className="border-l-4 border-accent-red">Viktig melding</div>
```

---

## ⚪ Neutral Palette

Premium grey scale for sophisticated, professional aesthetics.

- **neutral-50**: `#FAFAFA` - Lightest, subtle backgrounds
- **neutral-100**: `#F5F5F5` - Card backgrounds, sections
- **neutral-200**: `#E5E5E5` - Borders, dividers
- **neutral-300**: `#D4D4D4` - Inactive elements
- **neutral-400**: `#A3A3A3` - Placeholder text
- **neutral-500**: `#737373` - Secondary text
- **neutral-600**: `#525252` - Body text (lighter)
- **neutral-700**: `#404040` - Body text (standard)
- **neutral-800**: `#262626` - Headings
- **neutral-900**: `#171717` - Primary text
- **neutral-950**: `#0A0A0A` - Pure black alternative

**Usage**: Text hierarchy, backgrounds, borders, shadows

```jsx
<p className="text-neutral-700">Body text</p>
<div className="bg-neutral-100 border border-neutral-200">...</div>
```

---

## ✅ Semantic Colors

### Success (Green)
- **success**: `#10B981`
- **success-light**: `#34D399`
- **success-dark**: `#059669`

**Usage**: Confirmations, completed states, positive feedback

```jsx
<div className="bg-success text-white">Vellykket!</div>
```

---

### Warning (Amber)
- **warning**: `#F59E0B`
- **warning-light**: `#FBBF24`
- **warning-dark**: `#D97706`

**Usage**: Caution messages, important notices

```jsx
<div className="bg-warning-light border-l-4 border-warning-dark">...</div>
```

---

### Error (Red)
- **error**: `#EF4444`
- **error-light**: `#F87171`
- **error-dark**: `#DC2626`

**Usage**: Error messages, validation failures, critical alerts

```jsx
<p className="text-error">Feilmelding</p>
```

---

### Info (Blue)
- **info**: `#3B82F6`
- **info-light**: `#60A5FA`
- **info-dark**: `#2563EB`

**Usage**: Informational messages, tips, helpers

```jsx
<div className="bg-info/10 border border-info">Informasjon</div>
```

---

## 🏢 Surface Colors

Clean, minimal surfaces for content sections.

- **surface-white**: `#FFFFFF` - Pure white
- **surface-light**: `#FAFAFA` - Off-white sections
- **surface-mid**: `#F4F4F5` - Elevated cards
- **surface-dark**: `#E4E4E7` - Subtle borders

**Usage**: Section backgrounds, card surfaces, layering

```jsx
<section className="bg-surface-light">
  <div className="bg-surface-white rounded-lg">...</div>
</section>
```

---

## 📋 Quick Reference Guide

### Common Patterns

**Hero Section**
```jsx
<section className="bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white">
  <h1>Title</h1>
  <button className="bg-brand-blue hover:bg-brand-blue-dark">CTA</button>
</section>
```

**Card with Hover**
```jsx
<div className="bg-white border border-neutral-200 hover:border-brand-blue hover:shadow-lg transition-all">
  ...
</div>
```

**Energy/Heat Section**
```jsx
<div className="bg-gradient-to-r from-accent-orange to-accent-red text-white">
  <h2>Varmeløsninger</h2>
</div>
```

**Text Hierarchy**
```jsx
<h1 className="text-neutral-900">Heading</h1>
<h2 className="text-neutral-800">Subheading</h2>
<p className="text-neutral-700">Body text</p>
<span className="text-neutral-500">Caption</span>
```

---

## 🎯 Design Principles

1. **Navy for Trust**: Use brand-navy for establishing credibility and professionalism
2. **Blue for Action**: Use brand-blue for all CTAs and interactive elements
3. **Orange for Energy**: Use accent-orange sparingly for heat/energy related content
4. **Neutrals for Clarity**: Use neutral scale for clean, readable interfaces
5. **Semantic Colors**: Use only for their intended purpose (success, error, etc.)

---

## 🚀 Tailwind Usage Examples

All colors are available as Tailwind utilities:

```jsx
// Backgrounds
className="bg-brand-navy"
className="bg-brand-blue-light"
className="bg-accent-orange"

// Text
className="text-neutral-700"
className="text-brand-blue"

// Borders
className="border-neutral-200"
className="border-brand-blue"

// Hover States
className="hover:bg-brand-blue-dark"
className="hover:text-brand-navy"

// Opacity
className="bg-brand-blue/10"
className="text-accent-orange/80"
```

---

## 💡 Tips

- **Contrast**: Always ensure sufficient contrast for accessibility (WCAG AA minimum)
- **Hierarchy**: Use color sparingly for emphasis - too many colors create visual noise
- **Consistency**: Stick to the defined palette - avoid introducing arbitrary colors
- **Logo Integration**: The logo will harmonize naturally with the navy and orange tones
