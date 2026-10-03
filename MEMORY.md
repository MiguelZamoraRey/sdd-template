# MEMORY.md — Diario de Estudio

Memoria del proyecto entre sesiones. Máximo ~50 líneas: resume o elimina lo que ya no
aporte.

## Estado actual

- Template migrada a **opencode v2** (binario `opencode2`/v2): agentes multiagente en `.opencode/agents/` con formato `permissions:` (array action/resource/effect), comandos en `.opencode/commands/`, MCP en `mcp.servers`.
- SDD del curso Mouredev: skill `sdd`, 9 comandos `/sdd-*`, estructura `specs/NNN-nombre/{spec,plan,tasks}.md`, `docs/constitution.md`, estados `borrador → aprobada → implementada`.
- Comando `init-project` con sección opcional de MCPs (GitHub, Context7, Playwright, PostgreSQL) que auto-configura `opencode.json` (forma v2).

## Decisiones (y por qué)

- **v2 como objetivo** (el curso usa v2): en agentes `permissions:` es lista ordenada `{action, resource, effect}` (acciones `shell`, `edit`, `subagent`, `read`...); en v1 sería `permission:` mapa (`bash`/`task`). No mezclar.
- **SDD**: requisitos en EARS (`RF-x`: CUANDO/SI-ENTONCES/MIENTRAS/EL SISTEMA) + historias `HU-x`; flujo Constitución→Spec→Clarificación→Plan→Tareas→Implementación→Validación→Cambio; modelo spec-anchored.
- Skills en `.agents/skills/`; v2 las descubre como fuente de compatibilidad.
- MCPs: bajo `mcp.servers` en `opencode.json`, secretos con `{env:VAR}` + `.env.example`. Los servidores se conectan solos; `disabled: true` para desactivar.
- Comandos/skill/agentes usan "el comando de test del proyecto" (genérico), no `node --test` hardcodeado.

## Aprendizajes y errores a evitar

- En v2, la tecla para cambiar de agente es **Shift+Tab** (Tab se usa para autocompletar).
- opencode hace `bun install` en `.opencode/` si hay `package.json`; no borrarlo, es la convención.
- Nunca escribir secretos reales en `opencode.json`.

## Próximos pasos

- (vacío por ahora)