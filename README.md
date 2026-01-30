# CFHEC Design System

> Shared Tailwind CSS configuration and design tokens for CFHEC Chile's internal platform services.

## Overview

This package provides a centralizeddesign system built on Tailwind CSS v4, ensuring visual consistency across all CFHEC platform services. It includes:

- **Design Tokens**: Colors, typography, spacing, and other foundational variables
- **Tailwind Configuration**: Pre-configured Tailwind setup with CFHEC branding
- **Global Styles**: CSS utilities and component base styles
- **React Components**: Pre-built, fully typed UI components (Button, Card, Input)
- **Dark Mode Support**: Fully themed dark mode

## Installation

### 1. Authenticate with GitHub Packages

Create or edit `~/.npmrc` and add:

```
@cfhec:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Replace `YOUR_GITHUB_TOKEN` with a [GitHub Personal Access Token](https://github.com/settings/tokens) that has the `read:packages` scope.

### 2. Install the Package

```bash
npm install @cfhec-chile/design-system
```

Or with yarn:

```bash
yarn add @cfhec-chile/design-system
```

Or with bun:

```bash
bun add @cfhec-chile/design-system
```

## Usage

### In a Next.js Project

#### 1. Extend the Tailwind Config

In your `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';
import baseConfig from '@cfhec-chile/design-system';

const config: Config = {
  ...baseConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // Add your content paths here
  ],
};

export default config;
```

#### 2. Import Global Styles

In your root layout or `_app.tsx`:

```typescript
import '@cfhec-chile/design-system/styles';
```

Or in your main CSS file:

```css
@import '@cfhec-chile/design-system/styles';
```

### Available Imports

```typescript
// Tailwind config preset
import config from '@cfhec-chile/design-system';

// Global CSS with design tokens
import '@cfhec-chile/design-system/styles';

// Direct Tailwind config import (alternative)
import tailwindConfig from '@cfhec-chile/design-system/tailwind';

// React components
import { Button, Card, Input } from '@cfhec-chile/design-system/components';
```

## React Components

The design system includes fully typed, accessible React components built with Tailwind CSS.

### Button

Flexible button component with multiple variants and sizes:

```tsx
import { Button } from '@cfhec-chile/design-system/components';

// Variants: primary, secondary, outline, ghost, link, destructive
<Button variant="primary" size="lg">Get Started</Button>
<Button variant="outline" size="md">Learn More</Button>
<Button variant="destructive" size="sm">Delete</Button>
```

**Props:**
- `variant`: `'primary'` | `'secondary'` | `'outline'` | `'ghost'` | `'link'` | `'destructive'`
- `size`: `'sm'` | `'md'` | `'lg'` | `'icon'`
- All standard button HTML attributes

### Card

Composable card component with header, content, and footer sections:

```tsx
import { Card } from '@cfhec-chile/design-system/components';

<Card>
  <Card.Header>
    <h3>Revenue Overview</h3>
    <p>Last 30 days</p>
  </Card.Header>
  <Card.Content>
    <div className="kpi-metric">$1,234,567</div>
  </Card.Content>
  <Card.Footer>
    <Button variant="outline">View Details</Button>
  </Card.Footer>
</Card>
```

**Sub-components:**
- `Card.Header`: Card header section
- `Card.Content`: Main card content
- `Card.Footer`: Card footer section

### Input

Text input with error state support:

```tsx
import { Input } from '@cfhec-chile/design-system/components';

<Input 
  placeholder="Enter your email"
  type="email"
/>

// With error state
<Input 
  placeholder="Enter your email"
  error="Please enter a valid email address"
  type="email"
/>
```

**Props:**
- `error`: Optional error message string
- All standard input HTML attributes

## Design Tokens

### Colors

The design system uses CFHEC's corporate blue (`#0D4F8B`) as the primary color with full semantic color support:

- `primary` - CFHEC Blue with light/dark variants
- `secondary` - Neutral gray tones
- `success`, `warning`, `destructive`, `info` - Semantic colors
- Full dark mode support

### Typography

- **Font Families**: Inter (sans), JetBrains Mono (mono)
- **Display Sizes**: `display-xl`, `display-lg`, `metric`
- **Special**: `overline` for section labels

### Layout Constants

- `--navbar-height`: 64px
- `--sidebar-width`: 260px (expanded), 72px (collapsed)
- `--container-max`: 1280px

### Utility Classes

Pre-built component utilities:

```css
.card-base          /* Card styling */
.kpi-metric         /* KPI number display */
.sidebar-nav-item   /* Sidebar navigation */
.page-header        /* Page headers */
.scrollbar-thin     /* Thin scrollbar styling */
.glass              /* Glassmorphism effect */
.text-gradient      /* Gradient text */
```

## Example

```tsx
import '@cfhec-chile/design-system/styles';

export default function Dashboard() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Dashboard</h1>
        <p>Welcome to the CFHEC platform</p>
      </header>
      
      <div className="card-base p-6">
        <div className="section-label">Revenue</div>
        <div className="kpi-metric">$1,234,567</div>
        <div className="trend-up">↑ 12.5%</div>
      </div>
    </div>
  );
}
```

## Publishing Updates

To publish a new version to GitHub Packages:

```bash
# Update version
npm version patch  # or minor, major

# Publish
npm publish
```

## Documentation

For detailed component specifications and design guidelines, see the [`design-system/`](./design-system/) directory.

## Support

For issues or questions, please [open an issue](https://github.com/cfhec-chile/cfhec-design-system/issues) on GitHub.

## License

ISC © CFHEC Chile
