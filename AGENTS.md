# Repository Guidelines

## Architecture Overview
- Stack: Enhance (SSR custom elements) + AWS Architect on AWS Lambda.
- Auth: Session-based; accounts stored via DynamoDB (`arc.tables()`).
- Integrations: Stripe (billing), AWS SES (email), KaTeX (math), Google Analytics.

## Project Structure
- app/pages: HTML routes and layouts (e.g., `app/pages/index.html`). Dynamic routes may use `$` prefix when applicable.
- app/elements: Custom elements `my-*.mjs` returning HTML strings (SSR).
- app/api: Route handlers (e.g., `app/api/reset.mjs`) exporting `get`/`post`.
- app/browser: Client-side scripts for interactivity.
- app/utils: Shared helpers: `questionBank.mjs`, `session.mjs`, `asvabSections.mjs`, `studyGuides.mjs`, etc.
- src/http | src/events | src/scheduled: ARC runtime handlers.
- public: Static assets (images, CSS, PDFs, videos). Served as-is.
- tests: Tape tests (`*-test.js`).

## Dev, Test, Deploy
- `npm start`: Enhance dev server with hot reload.
- `npm test`: Tape tests piped to tap-arc.
- `npm run lint`: ESLint fix for `app/**/*.mjs` (2-space indent).
- Deploy: `arc deploy --staging` | `arc deploy --production`.
- Logs: `arc logs staging app/get-index` (see README.MD for more).
- Environments: Staging https://staging.asvabdrill.com/ | Prod https://asvabdrill.com/

## Coding Style & Patterns
- ES Modules (`.mjs`), Node 18+; 2-space indent; `eslint:recommended`.
- Components: Prefix `my-`; return HTML: `export default (state)=>"<div>...</div>"`.
- API routes: `export async function get(req){ return { json: {...} } }`; `post` may `return { location: '/path' }`.
- Data: `const data = await arc.tables()`; prefer small, pure utilities in `app/utils`.

## Testing Guidelines
- Keep tests fast/deterministic; avoid external network.
- Use Architect sandbox in tests when needed (see `tests/http-test.js`).

## Commit & PRs
- Git history shows many `wip`; prefer imperative, descriptive titles (e.g., `feat(elements): add pricing CTA`).
- PRs: Clear description, linked issues, before/after screenshots for UI, and test notes. Call out any route or schema changes.

## Security & Config
- Config lives in `.arc`, `.enhance/config.json`, `preferences.arc`.
- Do not commit real secrets; manage env with `arc env`. Treat any keys in repo as placeholders.
- Avoid logging PII; scrub sensitive fields in errors.
