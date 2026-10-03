# MEMORY.md — Diario de Estudio

Memoria del proyecto entre sesiones. Máximo ~50 líneas: resume o elimina lo que ya no
aporte.

## Estado actual

- Template SDD migrada al modelo del curso Mouredev (Día 2): skill `sdd`, 9 comandos `/sdd-*`, estructura `specs/NNN-nombre/{spec,plan,tasks}.md`, `docs/constitution.md`, estados `borrador → aprobada → implementada`.
- Comando `init-project` con sección opcional de MCPs (GitHub, Context7, Playwright, PostgreSQL) que auto-configura `opencode.json` a nivel de proyecto.

## Decisiones (y por qué)

- **SDD basado en el PDF**: requisitos en EARS (`RF-x`: CUANDO/SI-ENTONCES/MIENTRAS/EL SISTEMA) + historias `HU-x`; flujo Constitución→Spec→Clarificación→Plan→Tareas→Implementación→Validación→Cambio; modelo spec-anchored (spec viva). Reemplazo limpio: `spec-writing` y `create-spec`/`review-spec`/`implement-from-spec` borrados.
- Skills en `.agents/skills/` (convención estándar); opencode las auto-descubre, no requiere config.
- MCPs: se configuran en `opencode.json` de la raíz, secretos con `{env:VAR}` + `.env.example` (opencode no lee `.env` del proyecto por defecto para `{env:VAR}`). OAuth remoto se guarda fuera del repo.
- `opencode.json` de la template: mínimo válido (`$schema` + `mcp: {}`). Usar la forma `mcp` de nivel superior (estable v1), **no** `mcp.servers` (esa es de v2 beta) y sin comas finales (el linter las marca).
- Comandos/skill SDD usan el comando de test del proyecto (genérico), no `node --test` hardcodeado.

## Aprendizajes y errores a evitar

- opencode hace `bun install` en `.opencode/` si hay `package.json`; no borrarlo, es la convención.
- Nunca escribir secretos reales en `opencode.json`.

## Próximos pasos

- (vacío por ahora)
