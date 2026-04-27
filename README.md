# windswill-base

windswill-base is a lightweight, offline-first application foundation. Clone it, rename things, and start building your domain logic immediately without re-solving infrastructure problems.

## Core Principles

- **Offline-first.** The app works completely without internet. Cloud sync is an enhancement, never a requirement.
- **Run anywhere.** Works as a Tauri desktop app, a self-hosted web server, or a browser SPA in cloud mode.
- **One design system.** A full component library with a CSS-variable theming layer.
- **End-to-end TypeScript.** Schemas defined once, shared between frontend and backend.
- **Zero lock-in.** Every dependency is open-source and replaceable.

## Quick Start

```bash
# Clone and reinitialize
git clone https://github.com/windswill/windswill-base my-app
cd my-app
node scripts/init.js    # renames packages, sets app name
pnpm install
pnpm dev               # starts SPA + local backend concurrently
```

## Packages

### @windswill/ui

React 19 component library with semantic design tokens.

```bash
cd packages/ui
pnpm build
```

Key features:
- 40+ components (Button, Input, Select, Modal, Tabs, Table, etc.)
- Semantic color tokens (text-text, text-text-muted, bg-surface, etc.)
- Utility-first CSS (custom classes, no Tailwind config needed)
- Radix UI primitives for accessibility

```jsx
import { Button, Input, Card, Tabs } from '@windswill/ui';
import '@windswill/ui/themes/base.css';

<Card>
  <Input placeholder="Enter name..." label="Name" />
  <Button variant="primary">Submit</Button>
</Card>
```

See [packages/ui/README.md](packages/ui/README.md) for full documentation.

## Documentation

- [Tech Stack](docs/tech-stack.md)
- [Repository Structure](docs/structure.md)
- [Application Modes](docs/modes.md)
- [Design System](docs/design-system.md)

## License

MIT