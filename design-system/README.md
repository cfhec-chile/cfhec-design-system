# CFHEC Chile Design System

> Enterprise-grade Design System for CFHEC Chile's internal platform  
> Built for **Next.js + Tailwind CSS + shadcn/ui**

---

## 1. Foundations

### 1.1 Color Palette

Based on CCCC corporate identity with **Lochmara Blue** as the primary brand color.

#### Primary Colors

| Token | Hex | RGB | CSS Variable | Tailwind |
|-------|-----|-----|--------------|----------|
| Primary | `#0D4F8B` | `13, 79, 139` | `--primary` | `primary` |
| Primary Light | `#336699` | `51, 102, 153` | `--primary-light` | `primary-light` |
| Primary Dark | `#003366` | `0, 51, 102` | `--primary-dark` | `primary-dark` |
| Primary Foreground | `#FFFFFF` | `255, 255, 255` | `--primary-foreground` | `primary-foreground` |

#### Secondary Colors

| Token | Hex | RGB | CSS Variable | Tailwind |
|-------|-----|-----|--------------|----------|
| Secondary | `#64748B` | `100, 116, 139` | `--secondary` | `secondary` |
| Secondary Light | `#94A3B8` | `148, 163, 184` | `--secondary-light` | `secondary-light` |
| Secondary Foreground | `#FFFFFF` | `255, 255, 255` | `--secondary-foreground` | `secondary-foreground` |

#### Neutral Grays

| Token | Hex | CSS Variable | Tailwind | Usage |
|-------|-----|--------------|----------|-------|
| Gray 50 | `#F8FAFC` | `--gray-50` | `gray-50` | Backgrounds |
| Gray 100 | `#F1F5F9` | `--gray-100` | `gray-100` | Subtle backgrounds |
| Gray 200 | `#E2E8F0` | `--gray-200` | `gray-200` | Borders |
| Gray 300 | `#CBD5E1` | `--gray-300` | `gray-300` | Disabled |
| Gray 400 | `#94A3B8` | `--gray-400` | `gray-400` | Placeholder |
| Gray 500 | `#64748B` | `--gray-500` | `gray-500` | Secondary text |
| Gray 600 | `#475569` | `--gray-600` | `gray-600` | Body text |
| Gray 700 | `#334155` | `--gray-700` | `gray-700` | Headings |
| Gray 800 | `#1E293B` | `--gray-800` | `gray-800` | Primary text |
| Gray 900 | `#0F172A` | `--gray-900` | `gray-900` | Darkest |

#### Semantic Colors

| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Success | `#10B981` | `--success` | Positive actions, confirmations |
| Success Light | `#D1FAE5` | `--success-light` | Success backgrounds |
| Warning | `#F59E0B` | `--warning` | Caution, pending states |
| Warning Light | `#FEF3C7` | `--warning-light` | Warning backgrounds |
| Error | `#EF4444` | `--error` | Errors, destructive actions |
| Error Light | `#FEE2E2` | `--error-light` | Error backgrounds |
| Info | `#3B82F6` | `--info` | Informational messages |
| Info Light | `#DBEAFE` | `--info-light` | Info backgrounds |

#### Surface & Background

| Token | Hex (Light) | Hex (Dark) | CSS Variable |
|-------|-------------|------------|--------------|
| Background | `#FFFFFF` | `#0F172A` | `--background` |
| Surface | `#F8FAFC` | `#1E293B` | `--surface` |
| Card | `#FFFFFF` | `#1E293B` | `--card` |
| Border | `#E2E8F0` | `#334155` | `--border` |
| Overlay | `rgba(0,0,0,0.5)` | `rgba(0,0,0,0.7)` | `--overlay` |
| Sidebar | `#0D4F8B` | `#0A3D6E` | `--sidebar-bg` |
| Navbar | `#FFFFFF` | `#1E293B` | `--navbar-bg` |

#### Accessibility

- All text colors maintain **WCAG 2.1 AA** contrast (4.5:1 minimum)
- Primary blue on white: **7.2:1** ✓
- Interactive elements: minimum **3:1** contrast with adjacent colors

---

### 1.2 Typography

#### Font Family

```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

**Inter** chosen for:
- Excellent multi-language support (Latin, Chinese numerals)
- Professional, clean aesthetics
- Variable font with optimal rendering

#### Type Scale

| Token | Size | Line Height | Weight | Tailwind | Usage |
|-------|------|-------------|--------|----------|-------|
| `display-xl` | 48px | 1.1 | 700 | `text-5xl font-bold` | Hero sections |
| `display-lg` | 36px | 1.2 | 700 | `text-4xl font-bold` | Page titles |
| `heading-1` | 30px | 1.25 | 600 | `text-3xl font-semibold` | Section headers |
| `heading-2` | 24px | 1.3 | 600 | `text-2xl font-semibold` | Subsections |
| `heading-3` | 20px | 1.4 | 600 | `text-xl font-semibold` | Card titles |
| `heading-4` | 18px | 1.4 | 500 | `text-lg font-medium` | Small headers |
| `body-lg` | 16px | 1.6 | 400 | `text-base` | Large body text |
| `body` | 14px | 1.6 | 400 | `text-sm` | Default body |
| `body-sm` | 13px | 1.5 | 400 | `text-[13px]` | Secondary text |
| `caption` | 12px | 1.4 | 400 | `text-xs` | Labels, captions |
| `overline` | 11px | 1.3 | 500 | `text-[11px] font-medium uppercase tracking-wider` | Categories |
| `metric` | 32px | 1.1 | 700 | `text-3xl font-bold tabular-nums` | KPI numbers |

#### Font Weights

| Weight | Value | CSS Variable | Usage |
|--------|-------|--------------|-------|
| Regular | 400 | `--font-regular` | Body text |
| Medium | 500 | `--font-medium` | Buttons, emphasis |
| Semibold | 600 | `--font-semibold` | Headings |
| Bold | 700 | `--font-bold` | Display, metrics |

---

### 1.3 Spacing System

Base unit: **4px**

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `space-0` | 0 | `0` | — |
| `space-0.5` | 2px | `0.5` | Micro spacing |
| `space-1` | 4px | `1` | Tight spacing |
| `space-2` | 8px | `2` | Component internal |
| `space-3` | 12px | `3` | Small gaps |
| `space-4` | 16px | `4` | Default padding |
| `space-5` | 20px | `5` | Medium gaps |
| `space-6` | 24px | `6` | Section spacing |
| `space-8` | 32px | `8` | Large gaps |
| `space-10` | 40px | `10` | Extra large |
| `space-12` | 48px | `12` | Section breaks |
| `space-16` | 64px | `16` | Page sections |
| `space-20` | 80px | `20` | Major sections |

#### Layout Constants

| Token | Value | CSS Variable |
|-------|-------|--------------|
| Navbar Height | 64px | `--navbar-height` |
| Sidebar Width | 260px | `--sidebar-width` |
| Sidebar Collapsed | 72px | `--sidebar-collapsed` |
| Container Max | 1280px | `--container-max` |
| Container Wide | 1440px | `--container-wide` |
| Content Max | 960px | `--content-max` |

#### Grid

- 12-column grid system
- Gutter: 24px (desktop), 16px (mobile)
- Margins: 24px (desktop), 16px (tablet), 16px (mobile)

---

### 1.4 Radii & Shadows

#### Border Radius

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `radius-none` | 0 | `rounded-none` | Sharp edges |
| `radius-sm` | 4px | `rounded-sm` | Badges, tags |
| `radius-md` | 6px | `rounded-md` | Buttons, inputs |
| `radius-lg` | 8px | `rounded-lg` | Cards, dialogs |
| `radius-xl` | 12px | `rounded-xl` | Large cards |
| `radius-2xl` | 16px | `rounded-2xl` | Modals |
| `radius-full` | 9999px | `rounded-full` | Avatars, pills |

#### Shadows

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `shadow-none` | none | `shadow-none` | Flat elements |
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | `shadow-sm` | Subtle lift |
| `shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1)` | `shadow-md` | Cards |
| `shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1)` | `shadow-lg` | Dropdowns |
| `shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.1)` | `shadow-xl` | Modals |
| `shadow-inner` | `inset 0 2px 4px rgba(0,0,0,0.05)` | `shadow-inner` | Pressed states |

---

### 1.5 Iconography

**Primary Library:** [Lucide Icons](https://lucide.dev/)

| Property | Value |
|----------|-------|
| Stroke Width | 1.5px (default), 2px (emphasis) |
| Default Size | 20px |
| Touch Target | Minimum 44×44px |
| Color | Inherit from parent |

#### Size Scale

| Token | Size | Usage |
|-------|------|-------|
| `icon-xs` | 14px | Inline, badges |
| `icon-sm` | 16px | Buttons, inputs |
| `icon-md` | 20px | Default |
| `icon-lg` | 24px | Navigation |
| `icon-xl` | 32px | Empty states |

---

## 2. Components Library

### Navigation

#### Top Navigation Bar

```
┌─────────────────────────────────────────────────────────────┐
│ [Logo]  │ [Search...]           │ [🔔] [🌐 EN ▾] [Avatar ▾] │
└─────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Height | 64px |
| Background | `--navbar-bg` |
| Border | 1px bottom `--border` |
| Shadow | `shadow-sm` |
| Position | Fixed top |
| Z-index | 50 |

**States:**
- Default: White background
- Scrolled: Add shadow
- Mobile: Hamburger menu

---

#### Side Navigation

| Property | Value |
|----------|-------|
| Width | 260px (expanded), 72px (collapsed) |
| Background | `--sidebar-bg` (Primary Blue) |
| Text | White |
| Active Item | `rgba(255,255,255,0.15)` background |
| Hover | `rgba(255,255,255,0.1)` background |

**Structure:**
```
┌──────────────────┐
│ [Logo]           │
├──────────────────┤
│ 📊 Dashboard     │ ← Active
│ 👥 Team          │
│ 📁 Projects      │
│ 📄 Documents     │
├──────────────────┤
│ ADMIN            │ ← Section label
│ ⚙️ Settings      │
└──────────────────┘
```

---

#### Breadcrumbs

```
Home / Projects / Highway Bridge / Details
```

| Property | Value |
|----------|-------|
| Separator | `/` or `>` |
| Font | `text-sm` |
| Link Color | `--primary` |
| Current | `--gray-500`, not clickable |

---

### Input Components

#### Button

| Variant | Background | Text | Border |
|---------|------------|------|--------|
| Primary | `--primary` | White | None |
| Secondary | Transparent | `--primary` | `--primary` |
| Danger | `--error` | White | None |
| Ghost | Transparent | `--gray-600` | None |
| Link | Transparent | `--primary` | None (underline) |

**Sizes:**

| Size | Height | Padding | Font |
|------|--------|---------|------|
| sm | 32px | 12px | 13px |
| md | 40px | 16px | 14px |
| lg | 48px | 24px | 16px |

**States:**
- Hover: Darken 10%
- Focus: 2px ring `--primary` at 50% opacity
- Disabled: 50% opacity, no pointer
- Loading: Spinner icon, disabled

---

#### Input Field

| Property | Value |
|----------|-------|
| Height | 40px |
| Border | 1px `--border` |
| Border Radius | `radius-md` |
| Padding | 12px horizontal |
| Focus | 2px ring `--primary` |

**States:**
- Default: `--border` border
- Hover: `--gray-400` border
- Focus: `--primary` ring
- Error: `--error` border + text
- Disabled: `--gray-100` background

---

#### Select, Checkbox, Radio, Switch, Textarea, DatePicker

All follow shadcn/ui patterns with CFHEC theme tokens applied.

**DatePicker Special:**
- Calendar popover with month/year navigation
- Range selection support
- Locale support (EN/ES/ZH)

---

### Feedback Components

#### Alert

| Variant | Icon | Background | Border |
|---------|------|------------|--------|
| Info | `Info` | `--info-light` | `--info` |
| Success | `CheckCircle` | `--success-light` | `--success` |
| Warning | `AlertTriangle` | `--warning-light` | `--warning` |
| Error | `XCircle` | `--error-light` | `--error` |

---

#### Toast/Notification

| Property | Value |
|----------|-------|
| Position | Top-right |
| Width | 360px max |
| Duration | 5000ms (auto-dismiss) |
| Animation | Slide in from right |

---

#### Modal/Dialog

| Property | Value |
|----------|-------|
| Overlay | `--overlay` |
| Width | 480px (sm), 640px (md), 800px (lg) |
| Padding | 24px |
| Border Radius | `radius-xl` |
| Animation | Fade + scale |

---

#### Empty State

```
┌─────────────────────────────────────┐
│        [Illustration/Icon]          │
│                                     │
│         No projects found           │
│   Create your first project to      │
│        get started.                 │
│                                     │
│        [+ Create Project]           │
└─────────────────────────────────────┘
```

---

### Display Components

#### Card

| Property | Value |
|----------|-------|
| Background | `--card` |
| Border | 1px `--border` |
| Border Radius | `radius-lg` |
| Padding | 24px |
| Shadow | `shadow-sm` (hover: `shadow-md`) |

---

#### KPI Widget

```
┌─────────────────────┐
│ Total Projects      │
│ 127                 │  ← metric size
│ ↑ 12% vs last month │
└─────────────────────┘
```

| Property | Value |
|----------|-------|
| Label | `caption` size, `--gray-500` |
| Value | `metric` size, `--gray-800` |
| Trend Up | `--success` |
| Trend Down | `--error` |

---

#### Data Table

| Property | Value |
|----------|-------|
| Header BG | `--gray-50` |
| Row Border | 1px bottom `--border` |
| Row Hover | `--gray-50` |
| Selected | `--primary` at 5% opacity |
| Pagination | Bottom, with page size select |

---

#### Tabs, Accordion, Badge, Avatar

All follow shadcn/ui patterns with CFHEC theme.

**Avatar Sizes:** 24px (xs), 32px (sm), 40px (md), 48px (lg), 64px (xl)

---

#### Page Header

```
┌─────────────────────────────────────────────────────────────┐
│ ← Back                                                      │
│                                                             │
│ Projects                                    [+ New Project] │
│ Manage all your construction projects                       │
└─────────────────────────────────────────────────────────────┘
```

---

### Internationalization

#### Language Switcher

| Property | Value |
|----------|-------|
| Display | Text only (no flags) |
| Format | "EN", "ES", "中文" |
| Trigger | Dropdown button |
| Position | Navbar right |
| Persistence | localStorage + cookie |

**Languages:**
- `en` - English
- `es` - Español  
- `zh` - 简体中文

**Accessibility:**
- `aria-label="Select language"`
- Keyboard navigable
- Current language announced

---

## 3. Branding Guidelines

### Logo Usage

| Context | Size | Clearance |
|---------|------|-----------|
| Navbar | 40px height | 16px minimum |
| Sidebar | 32px height | 12px minimum |
| Favicon | 32×32px | — |

### Layout Grid

- 12-column grid
- Max content width: 1280px
- Page margins: 24px (desktop), 16px (mobile)

### Page Templates

1. **Dashboard** - KPI widgets + charts + recent activity
2. **Form Page** - Card with form + validation
3. **Table/Listing** - Search + filters + data table + pagination
4. **Details Page** - Header + tabs + content sections

---

## 4. Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          light: "hsl(var(--success-light))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          light: "hsl(var(--warning-light))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-bg))",
          foreground: "hsl(var(--sidebar-foreground))",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-xl": ["3rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-lg": ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }],
        metric: ["2rem", { lineHeight: "1.1", fontWeight: "700" }],
      },
      spacing: {
        navbar: "var(--navbar-height)",
        sidebar: "var(--sidebar-width)",
        "sidebar-collapsed": "var(--sidebar-collapsed)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

---

## 5. CSS Variables

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Layout */
    --navbar-height: 64px;
    --sidebar-width: 260px;
    --sidebar-collapsed: 72px;
    --container-max: 1280px;

    /* Colors - Light Mode */
    --background: 0 0% 100%;
    --foreground: 215 25% 27%;
    --card: 0 0% 100%;
    --card-foreground: 215 25% 27%;
    --primary: 209 83% 29%;
    --primary-light: 210 50% 40%;
    --primary-dark: 210 100% 20%;
    --primary-foreground: 0 0% 100%;
    --secondary: 215 16% 47%;
    --secondary-foreground: 0 0% 100%;
    --muted: 210 40% 96%;
    --muted-foreground: 215 16% 47%;
    --accent: 210 40% 96%;
    --accent-foreground: 215 25% 27%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --success: 160 84% 39%;
    --success-light: 152 76% 91%;
    --warning: 38 92% 50%;
    --warning-light: 48 96% 89%;
    --border: 214 32% 91%;
    --input: 214 32% 91%;
    --ring: 209 83% 29%;
    --radius: 0.5rem;
    --sidebar-bg: 209 83% 29%;
    --sidebar-foreground: 0 0% 100%;
  }

  .dark {
    --background: 222 47% 11%;
    --foreground: 210 40% 98%;
    --card: 215 28% 17%;
    --card-foreground: 210 40% 98%;
    --primary: 209 83% 40%;
    --primary-light: 210 50% 50%;
    --primary-dark: 210 100% 30%;
    --primary-foreground: 0 0% 100%;
    --secondary: 215 19% 35%;
    --secondary-foreground: 0 0% 100%;
    --muted: 215 28% 17%;
    --muted-foreground: 215 16% 57%;
    --accent: 215 28% 17%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 215 28% 24%;
    --input: 215 28% 24%;
    --ring: 209 83% 40%;
    --sidebar-bg: 210 100% 18%;
    --sidebar-foreground: 0 0% 100%;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-sans antialiased;
  }
}
```

---

## 6. Folder Structure

```
design-system/
├── README.md                 # This file
├── foundations/
│   ├── colors.md
│   ├── typography.md
│   ├── spacing.md
│   ├── effects.md
│   └── iconography.md
├── components/
│   ├── navigation.md
│   ├── inputs.md
│   ├── feedback.md
│   ├── display.md
│   └── internationalization.md
├── branding/
│   └── guidelines.md
└── templates/
    ├── dashboard.md
    ├── form-page.md
    ├── table-page.md
    └── details-page.md
```

---

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| CSS Variables | kebab-case | `--primary-light` |
| Tailwind Classes | kebab-case | `text-primary-light` |
| Components | PascalCase | `PageHeader` |
| Props | camelCase | `isLoading` |
| Files | kebab-case | `page-header.tsx` |
| Tokens | camelCase | `primaryLight` |

---

## Quick Reference

### Essential Imports

```tsx
// Components (shadcn/ui)
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

// Icons (Lucide)
import { Home, User, Settings } from "lucide-react";

// Fonts (next/font)
import { Inter } from "next/font/google";
```

### Color Quick Reference

| Use Case | Light | Dark |
|----------|-------|------|
| Page Background | `bg-background` | Auto |
| Cards | `bg-card` | Auto |
| Primary Actions | `bg-primary` | Auto |
| Text | `text-foreground` | Auto |
| Borders | `border-border` | Auto |
| Sidebar | `bg-sidebar` | Auto |

---

*CFHEC Chile Design System v1.0*  
*Built for Next.js + Tailwind CSS + shadcn/ui*
