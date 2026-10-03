# sdd-boilerplate

Este proyecto es un boilerplate para desarrollar con SDD (Spec-Driven Development) cualquier proyecto. Usa `/init-project` para reescribir este README y el AGENTS.md con la descripción real del proyecto.

## Requisitos

Esta template usa **opencode v2** (beta). Instálalo con:

```bash
curl -fsSL https://opencode.ai/v2/install | bash
```

v2 usa formatos propios: agentes con `permissions:` (array `action/resource/effect`), MCP bajo `mcp.servers` y comandos en `.opencode/commands/`. El cambio de agente en la TUI es **Shift+Tab**.

## Flujo de trabajo (SDD)

1. **Constitución**: `docs/constitution.md` define los principios innegociables (`/sdd-constitution`).
2. **Spec**: crea `specs/NNN-nombre/spec.md` con requisitos en EARS (`RF-x`) e historias de usuario (`HU-x`), estado `borrador` (`/sdd-spec`).
3. **Clarificación**: revísala como un QA (`/sdd-clarify`).
4. **Plan**: genera `specs/NNN-nombre/plan.md` (`/sdd-plan`).
5. **Tareas**: divide el plan en tareas de 20-30 min con "Hecho cuando:" (`/sdd-tasks`).
6. **Implementación**: una tarea a la vez, tests primero (`/sdd-implement`).
7. **Validación**: recorre la spec RF por RF y verifica los criterios de finalización (`/sdd-validate`).

Los cambios de requisitos van primero a la spec (`/sdd-change`). Consulta `AGENTS.md` para el detalle.

## Estructura

- `docs/constitution.md` — principios innegociables.
- `specs/NNN-nombre/` — cada spec con `spec.md`, `plan.md` y `tasks.md` (plantillas en `specs/_template/`).
- `.opencode/commands/sdd-*.md` — comandos `/sdd-*`.
- `.agents/skills/sdd/` — skill de SDD.

## Convenciones SDD

- Estado: `borrador → aprobada → implementada`.
- Requisitos en EARS (`RF-x`): CUANDO / SI…ENTONCES / MIENTRAS / EL SISTEMA.
- Nunca implementes una spec que no esté `aprobada` ni con dudas `[NECESITA ACLARACIÓN]`.
- Detalle en `AGENTS.md`.