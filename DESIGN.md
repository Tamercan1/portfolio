# Design System

This document captures the design rules and tokens for this portfolio.
Follow these when adding new sections or components.

---

## Color Tokens

All colors are CSS custom properties defined in `src/index.css`.

| Token              | Value                        | Usage                                |
|--------------------|------------------------------|--------------------------------------|
| `--bg`           | `#0B0D12`                  | Page background                      |
| `--bg-raised`    | `#11141B`                  | Cards, frames, hover states          |
| `--bg-raised-2`  | `#161A23`                  | Frame top bars, deeper surfaces      |
| `--border`       | `#242833`                  | Default borders, section dividers    |
| `--border-strong`| `#333A4A`                  | Chip borders, focused borders        |
| `--text`         | `#E7E9EE`                  | Primary text, headings               |
| `--text-soft`    | `#9AA1B2`                  | Body text, descriptions              |
| `--text-faint`   | `#666D7E`                  | Captions, monospace labels, hints    |
| `--accent`       | `#7C9CFF`                  | Accent bar, underlines, pills        |
| `--accent-soft`  | `rgba(124,156,255,0.13)`   | Pill backgrounds                     |
| `--accent-strong`| `#B4C6FF`                  | Hover accent, role subtitle          |
| `--star`         | `rgba(231,233,238,0.55)`   | SVG star decorations                 |

---

## Typography

Fonts are loaded from Google Fonts (see `index.html` and `index.css`).

| Role         | Family               | Weights   | Usage                              |
|--------------|----------------------|-----------|------------------------------------|
| Display/UI   | Space Grotesk        | 500–700   | All `h1`–`h4`, nav brand, section headings |
| Body         | Inter                | 400–600   | All body text, descriptions        |
| Mono         | JetBrains Mono       | 400–500   | Class `.mono`, chips, labels, code  |

### Scale (approximate)
- `h1` hero: **56px** (38px mobile)
- `h2` section: **28–32px**
- `h2` contact: **clamp(28px, 5vw, 40px)**
- `h3` project title: **19–30px**
- Body: **16px**
- Small/eyebrow: **13–14.5px**
- Micro: **10.5–12.5px**

---

## Spacing

The max-width container is **1120px** via `.wrap`.

| Context             | Value       |
|---------------------|-------------|
| Section padding     | 104px top/bottom (72px mobile) |
| Wrap horizontal     | 32px (20px mobile)              |
| Section gap (grid)  | 40–64px                         |

---

## Buttons

Two variants. Both use the `.btn` base class.

| Class         | Background    | Text      | Border      | Hover                              |
|---------------|---------------|-----------|-------------|------------------------------------|
| `.btn-primary` | `--text`   | `--bg`  | `--text`  | bg → `--accent-strong`           |
| `.btn-ghost`   | transparent  | `--text` | `--border-strong` | border → `--text-soft`  |

Both lift **2px** on hover and return on `:active`.

---

## Chips / Tags

`.chip.mono` — small bordered tags for tech stacks.

- Border: `--border-strong`
- Text: `--text-soft`
- Hover: border → `--accent`, text → `--text`

---

## Section Structure

Every section follows this shell:

```tsx
<section id="anchor">
  <div className="wrap">
    <div className="section-head reveal" ref={headRef}>
      <span className="bar" />   {/* accent bar */}
      <h2>Section Title</h2>
    </div>
    {/* content */}
  </div>
</section>
```

- Sections are separated by `border-top: 1px solid var(--border)` (automatic via CSS).
- The first section (Hero) has no top border.

---

## Scroll Reveal Animation

Use the `useReveal` hook from `src/hooks/useReveal.ts`.

```tsx
const ref = useReveal<HTMLDivElement>();
<div className="reveal" ref={ref}>...</div>
```

- Elements start at `opacity: 0` and `translateY(20px)`.
- When they enter the viewport the `in` class is added, animating them to full opacity.
- Threshold: **15%** visible, with a **-60px** bottom margin.
- Respects `prefers-reduced-motion`.

For staggered children (e.g. project rows), pass `style={{ transitionDelay: `${index * 0.08}s` }}` on each child.

---

## Animations

| Name        | Usage                                   |
|-------------|-----------------------------------------|
| `rise`    | Hero content entrance (per-child delay) |
| `drawLine`| SVG path stroke draw (hero deco, learn lines) |
| `starIn`  | SVG star fade-in                        |
| `twinkle` | Selected stars pulse opacity            |

All animations are disabled under `prefers-reduced-motion: reduce`.

---

## Content Configuration

**Never hardcode content in components.** All text, data, and URLs live in:

| File                            | What to edit                                         |
|---------------------------------|------------------------------------------------------|
| `src/config/portfolio.config.ts` | All portfolio content: identity, projects, about, learning, contact |
| `src/config/links.ts`           | All external URLs: GitHub, LinkedIn, email, project links |

**To add a new project**, push an object into `OTHER_PROJECTS` in `portfolio.config.ts`.

---

## Adding a New Section

1. Add its content to `portfolio.config.ts` (export a `const`).
2. Create `src/components/MySection.tsx` using `useReveal` for animations.
3. Import and place it in `src/App.tsx` between existing sections.
4. Add section styles to `src/index.css` following the token/naming conventions above.
