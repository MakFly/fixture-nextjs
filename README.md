# fixture-nextjs

Ploydok Sprint 3 DoD fixture — Next.js 15 app-router minimal.

Dockerfile fournit la voie Docker (`output: "standalone"`, multi-stage, rootless `USER node`).

Pour forcer Nixpacks côté Ploydok, set `buildMethod: "nixpacks"` lors de la création de l'app — Ploydok ignorera le Dockerfile et détectera Next.js automatiquement via Nixpacks.
