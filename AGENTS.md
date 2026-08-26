# Project Working Rules

## Current phase: frontend-first, backend allowed

- Continue prioritizing UI, accessibility, responsiveness, content, and frontend quality.
- Backend work is allowed when a requested feature needs APIs, authentication, databases, server actions, analytics, or production persistence.
- Keep backend changes scoped to the requested feature; do not add speculative infrastructure.
- Hosting is not a prerequisite for backend development. Build and test locally, then adapt deployment configuration after the hosting target is selected.

## Temporary frontend data

- Static fixtures, React state, `sessionStorage`, or `localStorage` may be used only for clearly local preview behavior.
- Never describe browser-local data as secure, shared, synchronized, or production-ready.
- Never store passwords, tokens, personal data, or other secrets in frontend code or browser storage.
- Do not add fake authentication or hard-coded credentials. Use an explicit preview/read-only state instead.

## Backend rules

- Validate untrusted input at the server boundary and enforce authorization server-side.
- Keep credentials and secrets in server-only environment variables; never expose them through client code or `NEXT_PUBLIC_*` variables.
- Agree on data ownership and persistence behavior before adding schema or migration changes.
- Frontend previews may remain browser-local until their corresponding backend feature is requested.

## Frontend completion checks

Run these before declaring a frontend change complete:

```bash
npm run lint
npm run typecheck
npm run build
```

When backend code is changed, also run the smallest relevant API, authentication, or database checks available for that change.

## Required commit and push

- After every completed task that changes project files, run the required checks, commit the task, and push it to the current upstream branch before reporting completion.
- Stage only files that belong to the task. Never include unrelated user changes, secrets, local artifacts, or known junk files.
- Use Conventional Commit format: `<type>(<optional-scope>): <clear summary>`.
- Use `feat`, `fix`, `docs`, `refactor`, `test`, or `chore` as the commit type.
- For a non-trivial commit, add a body that states what changed, why it changed, and which verification commands passed.
- Never force-push or rewrite published history unless the user explicitly requests it.
- If push fails because of authentication, conflicts, or remote availability, keep the verified local commit and report the exact blocker.
