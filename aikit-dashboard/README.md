# AIKit Dashboard (React + Vite)

Quick start

- Install deps: npm install
- Start dev server: npm run dev
- Build: npm run build
- Preview: npm run preview

Notes

- RBAC: simple roles via AuthProvider in src/rbac/AuthContext.tsx
- Services: defined in src/services/aiServices.ts
- Docs: React-based docs live under src/docs/content and are registered in src/docs/registry.ts. If a service has no React doc, it falls back to the static HTML under public/docs via an iframe.
