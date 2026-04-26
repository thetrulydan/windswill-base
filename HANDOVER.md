# Handover: windswill-base Demo - Fine-tuning Remaining Sections

## Current State

We've established a solid foundation with:
- Complete design tokens in CSS (colors, spacing, typography)
- Working Button component with variants (primary, secondary, ghost, destructive, noPadding, active), sizes, loading state, and icon support
- Working Input component with underline style, focus states, number input with custom steppers
- Working Select component with single and multi-select modes

The demo app runs on `pnpm dev:demo` at http://localhost:5174

## What's Been Done (DO NOT REVISIT)

The following sections have already been adapted and are working correctly:
- **Button** - All variants, sizes, states (loading, disabled, active), icons
- **Input** - Text, password, number (with steppers), search, with leading/trailing icons
- **Select** - Single select, multi-select, searchable
- **Colors & Tokens** - Full primitive and semantic palette
- **Spacing & Layout** - Visual spacing demo with tokens

## Task Overview

Go through ALL remaining sections in `apps/demo/src/sections/` and fine-tune/adjust them to match the established design system:

### Design Principles Established
- No border-radius (0px) except for specific components (FilterTabs pills, Avatar)
- No box-shadows
- No gradients
- Minimal, typographic, dark-first design
- Use CSS custom properties (e.g., `var(--color-text)`, `var(--color-surface)`)
- Consistent spacing using rem units
- Buttons: uppercase text, letter-spacing, font-weight 700
- Inputs: underline style (border-bottom only)

### Component Styling Guidelines
1. **Reuse existing components** - Don't duplicate inline styles; use Button, Input, Select, Heading, Text components
2. **Apply consistent styling** - Match the underline style for form inputs
3. **Use design tokens** - Reference CSS variables, not hardcoded colors
4. **Remove default browser styling** - Use `appearance: none`, `border-radius: 0`
5. **No relief/3D effects** - Flat, minimal design only

### Sections to Adapt
Go through each section in `apps/demo/src/sections/`:
- textarea.tsx
- checkbox.tsx
- radio.tsx
- switch.tsx
- slider.tsx
- number-stepper.tsx
- date-picker.tsx
- card.tsx
- modal.tsx
- drawer.tsx
- popover.tsx
- tooltip.tsx
- toast.tsx
- alert.tsx
- badge.tsx
- progress.tsx
- spinner.tsx
- skeleton.tsx
- table.tsx
- tree-view.tsx
- filter-tabs.tsx
- media-card.tsx
- avatar.tsx
- tag-chip.tsx
- section-nav.tsx
- topbar.tsx
- sidebar-demo.tsx
- fab-cluster.tsx
- pagination.tsx
- breadcrumb.tsx
- tabs.tsx
- separator.tsx
- icons.tsx
- icon-button.tsx
- tag-select.tsx
- auth-screen.tsx
- forms.tsx
- charts.tsx
- offline-mode.tsx
- theme-customisation.tsx
- empty-states.tsx
- error-states.tsx
- loading-states.tsx
- app-shell.tsx

### Key CSS Tokens Available
```css
/* Colors */
--color-background, --color-surface, --color-surface-raised, --color-surface-hover
--color-border, --color-border-strong
--color-text, --color-text-muted, --color-text-disabled
--color-success, --color-warning, --color-error, --color-info

/* Typography */
--font-base: 'Atkinson Hyperlegible', sans-serif
--text-xs: 11px, --text-sm: 13px, --text-base: 15px, --text-lg: 18px, --text-xl: 22px

/* Spacing */
--spacing-1 through --spacing-24 (in rem)
```

### Commands
- Run demo: `pnpm dev:demo`
- Check components at: http://localhost:5174

## Important Notes
- Don't modify already-done sections (Button, Input, Select, Colors, Spacing)
- Use existing Button, Input, Select, Heading, Text components from `@windswill/ui/components/`
- Keep components minimal - no decorative styles
- Ensure dark/light theme compatibility using CSS variables
