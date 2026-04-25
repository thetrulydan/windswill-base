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

## Documentation

- [Tech Stack](docs/tech-stack.md)
- [Repository Structure](docs/structure.md)
- [Application Modes](docs/modes.md)
- [Design System](docs/design-system.md)

## License

MIT