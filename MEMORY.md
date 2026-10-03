# MEMORY.md — Diario de Estudio

Memoria del proyecto entre sesiones. Máximo ~50 líneas: resume o elimina lo que ya no
aporte.

## Estado actual

- Comando `init-project` con sección opcional de MCPs (GitHub, Context7, Playwright, PostgreSQL) que auto-configura `opencode.json` a nivel de proyecto.

## Decisiones (y por qué)

- Skills en `.agents/skills/` (convención estándar); opencode las auto-descubre, no requiere config.
- MCPs: se configuran en `opencode.json` de la raíz, secretos con `{env:VAR}` + `.env.example` (opencode no lee `.env` del proyecto por defecto para `{env:VAR}`). OAuth remoto se guarda fuera del repo.
- `opencode.json` de la template: mínimo válido (`$schema` + `mcp: {}`). Usar la forma `mcp` de nivel superior (estable v1), **no** `mcp.servers` (esa es de v2 beta) y sin comas finales (el linter las marca).

## Aprendizajes y errores a evitar

- opencode hace `bun install` en `.opencode/` si hay `package.json`; no borrarlo, es la convención.
- Nunca escribir secretos reales en `opencode.json`.

## Próximos pasos

- (vacío por ahora)
