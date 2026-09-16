# @step/design-system

A framework-agnostic design system package for STEP projects. Provides design tokens, CSS custom properties, Tailwind CSS theme, React components, and icons — all extracted from the STEP Figma design file.

## Installation

```bash
npm install @step/design-system
# or
pnpm add @step/design-system
```

### Peer Dependencies (for React components)

```bash
npm install react clsx tailwind-merge
```

## Quick Start

### 1. Import CSS Custom Properties

Any framework — pure CSS variables:

```css
@import "@step/design-system/css/variables";
```

### 2. Or Use with Tailwind CSS v4

```css
@import "tailwindcss";
@import "@step/design-system/css/tailwind";
```

### 3. Or Use with Tailwind CSS v3

```js
// tailwind.config.js
import { stepTheme } from "@step/design-system/tailwind";

export default {
  theme: {
    extend: stepTheme,
  },
};
```

### 4. Load Fonts

```css
@import "@step/design-system/css/fonts";
```

### 5. Use Components (React)

```tsx
import { Button, Input, ProgressBar, TopMenu, Footer } from "@step/design-system";

export default function App() {
  return (
    <>
      <TopMenu />
      <Button variant="primary">Get Started</Button>
      <Input placeholder="Search..." />
      <ProgressBar value={69} />
      <Footer />
    </>
  );
}
```

## Package Structure

```
@step/design-system
├── css/
│   ├── variables.css      # CSS custom properties (all tokens)
│   ├── tailwind.css        # Tailwind v4 @theme block
│   └── fonts               # Font loading (see below)
├── fonts/
│   └── font-face.css       # @font-face declarations
├── tokens/
│   ├── colors.ts           # Color tokens (TypeScript)
│   ├── typography.ts       # Font tokens
│   ├── spacing.ts          # Spacing scale
│   ├── borders.ts          # Border radius + stroke widths
│   ├── colors.json         # Color tokens (JSON, framework-agnostic)
│   └── index.ts            # Barrel exports
├── tailwind/
│   ├── theme.ts            # Tailwind v3 theme extension
│   └── index.ts
├── components/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── ProgressBar.tsx
│   ├── TopMenu.tsx
│   ├── Footer.tsx
│   └── index.ts
├── icons/
│   ├── svg/                # Raw SVG files
│   ├── index.tsx           # React icon components
│   └── index.ts
├── utils/
│   ├── cn.ts               # clsx + tailwind-merge helper
│   └── index.ts
└── index.ts                # Main entry point
```

## Tokens

| Category   | File                            | What's Included                                    |
| ---------- | ------------------------------- | -------------------------------------------------- |
| Colors     | `tokens/colors.ts` / `.json`   | 16 color tokens: text, action, border, surface, contrast |
| Typography | `tokens/typography.ts`          | Manrope (body) + Fredoka (display), sizes, weights, line-heights |
| Spacing    | `tokens/spacing.ts`             | 4px → 64px scale                                  |
| Borders    | `tokens/borders.ts`             | 6 radius sizes (inc. 999px pill) + stroke widths   |

## Components

| Component     | Description                                    |
| ------------- | ---------------------------------------------- |
| `Button`      | Primary/secondary/error/ghost variants, pill radius |
| `Input`       | Dark background, outlined border, pill shape   |
| `ProgressBar` | Horizontal bar with label, filled + empty states |
| `TopMenu`     | STEP logo bar with contact support link         |
| `Footer`      | Footer with logo and sign out button            |

## Framework Support

- **Vanilla CSS**: Import `css/variables.css` — use `var(--step-*)` variables
- **Tailwind CSS v3**: Extend `tailwind/theme.ts`
- **Tailwind CSS v4**: Import `css/tailwind.css`
- **React**: Use components from `components/`
- **Other frameworks**: Use `tokens/colors.json` + CSS variables

## Fonts

- **Manrope** — body text, inputs, labels
- **Fredoka** — headings, buttons, brand elements

Load via:
1. `@import "@step/design-system/css/fonts"` (simplest)
2. `next/font/google` (recommended for Next.js — see `fonts/README.md`)
3. HTML `<link>` tag (see `fonts/README.md`)

## License

Internal — STEP team use only.
