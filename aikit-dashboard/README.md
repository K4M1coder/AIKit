# AIKit Dashboard (React + Vite)

Quick start

- Install deps: npm install
- Start dev server: npm run dev
- Build: npm run build
- Preview: npm run preview

Notes

- RBAC: simple roles via AuthProvider in src/rbac/AuthContext.tsx
- Services: defined in src/services/aiServices.ts
- Docs: All documentation is integrated as React components under src/docs/content and registered in src/docs/registry.ts. There are no iframe fallbacks; add a DocConfig entry to extend docs.
