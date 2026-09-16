# Getting Started

## Step 1: Install

```bash
npm install @step/design-system
```

For React components, also install:

```bash
npm install react clsx tailwind-merge
```

## Step 2: Set Up Styles

### Option A: Any framework (CSS Variables)

Add to your global CSS file:

```css
@import "@step/design-system/css/variables";
@import "@step/design-system/css/fonts";
```

All tokens are now available as CSS custom properties:

```css
.my-component {
  background-color: var(--step-action-default);
  color: var(--step-text-default);
  font-family: var(--step-font-display);
  padding: var(--step-space-4);
  border-radius: var(--step-radius-md);
}
```

### Option B: Tailwind CSS v4

```css
@import "tailwindcss";
@import "@step/design-system/css/tailwind";
@import "@step/design-system/css/fonts";
```

Use tokens as Tailwind utilities:

```html
<div class="bg-step-action-default text-step-text-default p-step-4 rounded-step-md">
  Tailwind with STEP tokens
</div>
```

### Option C: Tailwind CSS v3

```js
// tailwind.config.js
import { stepTheme } from "@step/design-system/tailwind";

export default {
  theme: {
    extend: stepTheme,
  },
};
```

## Step 3: Use Components (React)

```tsx
import { Button, Input, ProgressBar, TopMenu, Footer } from "@step/design-system";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-step-surface-dark text-step-text-default">
      <TopMenu />
      <main className="p-8 space-y-6">
        <h1 className="text-step-h3 font-bold">Dashboard</h1>
        <ProgressBar value={69} label="Term 1 Completion" />
        <Input placeholder="Search students..." />
        <Button variant="primary">Add Student</Button>
      </main>
      <Footer />
    </div>
  );
}
```

## Step 4: Use Icons (React)

```tsx
import { StepLogo, AdminsLogo, FooterLogo } from "@step/design-system";

export default function Header() {
  return (
    <div className="flex items-center gap-2">
      <StepLogo className="text-white" />
      <AdminsLogo className="text-white" />
    </div>
  );
}
```

## Step 5: Use Tokens Directly (TypeScript)

```ts
import { colors, typography, spacing, borders } from "@step/design-system";

console.log(colors.action.default);    // "#554ceb"
console.log(typography.fonts.body);    // "Manrope"
console.log(spacing[4]);               // "16px"
console.log(borders.radii.pill);       // "999px"
```

## Next.js Specific

If you're using Next.js, use `next/font` for optimal font loading:

```tsx
// app/layout.tsx
import { Manrope, Fredoka } from "next/font/google";

const manrope = Manrope({
  variable: "--font-step-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const fredoka = Fredoka({
  variable: "--font-step-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${manrope.variable} ${fredoka.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```
