## symbols-dev

This repo is a Turborepo monorepo.

### Structure

- `apps/web`: Next.js app

### Getting started

```bash
bun install
bun run dev
```

### Common commands

- `bun run dev`: run all dev tasks via Turborepo
- `bun run build`: build all packages via Turborepo
- `bun run lint`: lint all packages via Turborepo
- `bun run start`: start production servers (depends on `build`)

### Run only the web app

```bash
bun run --filter web dev
```
