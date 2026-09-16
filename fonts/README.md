# STEP Design System — Fonts

## Fonts Used

| Font | Weights | Usage |
|------|---------|-------|
| **Fredoka** | 300, 400, 500, 600, 700 | Display, headings, brand elements |
| **Manrope** | 200, 300, 400, 500, 600, 700, 800 | Body text, UI labels, inputs |

## Usage Options

### Option 1: CSS Import (simplest)

```css
@import "@step/design-system/css/fonts";
```

### Option 2: Next.js `next/font` (recommended for Next.js)

```tsx
import { Manrope, Fredoka } from "next/font/google";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Layout({ children }) {
  return (
    <html className={`${manrope.variable} ${fredoka.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### Option 3: HTML `<link>` tag

```html
<link
  rel="preconnect"
  href="https://fonts.googleapis.com"
/>
<link
  rel="preconnect"
  href="https://fonts.gstatic.com"
  crossorigin
/>
<link
  href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
  rel="stylesheet"
/>
```

## CSS Variable Mapping

Once loaded, use these CSS variables:

```css
font-family: var(--step-font-body);     /* Manrope */
font-family: var(--step-font-display);  /* Fredoka */
```
