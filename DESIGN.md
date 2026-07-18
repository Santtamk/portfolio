---
name: Warm Editorial Portfolio
colors:
  primary: "#19271e"     # Spruce green (headings, dark text)
  secondary: "#3a4a40"   # Forest gray (body text)
  tertiary: "#e76f51"    # Burnt Coral (interactive actions, accents)
  neutral: "#f2f4f2"     # Soft Sage Mist (main background)
  surface: "#ffffff"     # Pure White (cards, content panels)
  line: "#d4dad4"        # Thin Sage Border (dividers, borders)
  panel-bg: "#e7ece7"    # Dark Sage tint (nav pill, badge backing)
  accent-soft: "#fdf0ed" # Soft Coral Tint (highlight backings)
typography:
  headline-display:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.2
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.05em
rounded:
  sm: 4px
  md: 12px
  lg: 24px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 64px
components:
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 24px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 12px 24px
---

# Warm Editorial Portfolio

## Overview
An approachable, insight-driven showcase portfolio for a developer who builds websites by understanding users and businesses. The visual style is modeled after clean, high-quality literary publications.

## Colors
- **Primary Ink (#19271e):** A deep, organic Spruce green for headings and high-contrast text. It replaces harsh absolute black.
- **Secondary Ink (#3a4a40):** A soft Forest gray for body paragraphs to reduce visual strain.
- **Interactive Coral (#e76f51):** A warm, approachable burnt coral accent for active buttons, hover states, and critical actions.
- **Background Sage (#f2f4f2):** A calming, soft sage mist that feels organic, approachable, and distinct from standard white or dark tech grids.

## Typography
- **Headings (Newsreader):** A beautiful, editorial serif. Adds warmth, character, and an intellectual, reflective feel to the text.
- **Body & Labels (Manrope):** A clean, friendly, geometric sans-serif loaded via Next.js Google Fonts. Highly legible and approachable.

## Layout & Motion
- **Left-Pinned Summary / Right-Scroll Stream:** The homepage layout pins the core philosophy on the left (on desktop viewports), keeping your statement about "understanding first, code second" in continuous view as users scroll through your selected case studies on the right.
- **Transitions:** Scroll-triggered staggered entry reveals for page sections, using spring physics (`type: "spring", stiffness: 100, damping: 20`).

## Shapes & Radii
- **Consistent Rounded Corners:** Card structures use `rounded-3xl` (`24px`) for a friendly, approachable aesthetic.
- **Interactive Badges/Pills:** Nav elements, tech tags, and CTA buttons use `rounded-full` (`9999px`) for physical, pill-like contours.

## Do's and Don'ts
- **Do** start case studies with the "Core Insight" or "Problem Understood" before showing code.
- **Don't** use generic stock SVGs or default blue/purple colors.
- **Do** maintain a high contrast ratio for coral accents against light backgrounds (minimum WCAG AA 4.5:1).
- **Don't** add section borders or divider lines where simple negative space can organize content.
