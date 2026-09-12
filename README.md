# sdd-boilerplate

Este proyecto es un boilerplate para proyectos con sdd debes cambiar el readme y el agents cuando el usuario defina que es loq ue quiere hacer.

**Flujo de trabajo (SDD)**

1. Escribe la spec en `specs/features/` (estado `draft`), siguiendo `specs/_template.md` y `.opencode/skill/spec-writing/SKILL.md`.
2. Revísala y pásala a `review` → `approved`.
3. Implementa referenciando cada criterio (`AC-x`, `CE-x`) y genera un test por criterio/caso de error.
4. Verifica con `pnpm test`, `pnpm check` y `pnpm build`.
5. Actualiza la spec a `implemented` y reporta cobertura.

## Convenciones SDD

- Una spec = una responsabilidad (ver `specs/features/`).
- Estado: `draft → review → approved → implemented`.
- Nunca implementes una spec que no esté `approved`.
- Detalle en `AGENTS.md`.
