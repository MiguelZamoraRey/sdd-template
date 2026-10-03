# AGENTS.md

Convenciones y flujo de trabajo para cualquier agente que trabaje en este repositorio.

## Qué es este proyecto

Este proyecto es un boilerplate para desarrollo con SDD de cualquier proyecto, lo primero que debes hacer es redifinir este AGENTS.md y el README.md para el proyecto que vaya a comenzar el usuario.

## Estructura

- **Constitución**: `docs/constitution.md` (principios innegociables del proyecto).
- **Specs**: `specs/NNN-nombre/` con `spec.md`, `plan.md` y `tasks.md`.
- **Comandos SDD**: `.opencode/command/sdd-*.md` (invoca `/sdd-*`).
- **Skill**: `.agents/skills/sdd/`.

## Flujo de trabajo SDD

Flujo: Constitución → Spec → Clarificación → Plan → Tareas → Implementación → Validación → Cambio.

### Estado de las specs

Una spec pasa por `borrador` → `aprobada` → `implementada` (línea "Estado:" al inicio de `spec.md`).

### 1. Constitución

- `docs/constitution.md` define los principios innegociables. Crea o adapta con `/sdd-constitution`.
- Toda spec, plan y tarea debe cumplirlos.

### 2. Especificar

- Crea `specs/NNN-nombre/spec.md` con `/sdd-spec` o siguiendo la skill `sdd`.
- Requisitos en EARS (`RF-x`: CUANDO / SI…ENTONCES / MIENTRAS / EL SISTEMA) e historias de usuario (`HU-x`).
- La spec describe el QUÉ y el POR QUÉ. Nada de stack, arquitectura ni nombres de archivos.

### 3. Clarificar

- Revisa la spec como un QA con `/sdd-clarify`: ambigüedades, contradicciones, casos límite, conflictos con la constitución y seguridad (OWASP).
- No implementes una spec que no esté `aprobada` o que tenga dudas abiertas `[NECESITA ACLARACIÓN]`.

### 4. Planificar

- Genera `specs/NNN-nombre/plan.md` con `/sdd-plan`: archivos, funciones, algoritmo, interfaz y decisiones justificadas, cubriendo todos los RF.

### 5. Tareas

- Genera `specs/NNN-nombre/tasks.md` con `/sdd-tasks`: tareas de 20-30 min, con los RF que cubre cada una y "Hecho cuando:" verificable.

### 6. Implementar

- Una tarea a la vez con `/sdd-implement`, tests primero.
- Referencia el ID de cada requisito (`RF-x`) en comentarios.

### 7. Validar

- Recorre la spec RF por RF con `/sdd-validate`: qué test cubre cada RF y su resultado.
- Comprueba los criterios de finalización antes de marcar la spec como `implementada`.

### Cambios (mantenimiento)

- Un nuevo requisito va primero a la spec (`/sdd-change`), luego al plan y las tareas, y por último al código.

## Convenciones

- **La spec manda.** No implementes lógica no descrita en la spec sin avisar.
- **Requisitos en EARS** (`RF-x`) verificables; nada de "rápido", "intenso" o "bonito" sin criterio medible.
- **TypeScript estricto.** No uses `any` salvo justificación.
- **Tests** con el comando de test del proyecto; uno por RF cuando aplique.
- **No añadas comentarios** innecesarios; el código debe explicarse por sí mismo.
- **Documentación**: cualquier cambio relevante de arquitectura se refleja en `README.md` y `AGENTS.md`.
- **Commits**: los realiza siempre el mantenedor. Los agentes **nunca** commitean ni hacen push.

## Seguridad

- No commitees secretos ni claves. Usa `.env.example` en lugar de `.env`.
- Valida toda entrada de usuario en backend antes de procesarla.
- Aplica principios OWASP en las specs (validación, autorización, datos sensibles).

## Antes de terminar

- Ejecuta `pnpm test` y `pnpm check` en el/los proyecto(s) afectados.
- Si tocas el frontend, confirma que no hay errores de build (`pnpm build`).

## Memoria

- Al empezar, lee `MEMORY.md` para conocer el estado del proyecto y las decisiones
  tomadas.
- Al terminar una tarea, actualízalo: estado actual, decisiones importantes (con su
  porqué) y errores a evitar.
- Mantenlo breve (máximo ~50 líneas): resume o elimina lo que ya no aporte.
- Si algo se convierte en una regla permanente, propón moverlo a `AGENTS.md` en lugar de
  dejarlo en la memoria.
- No guardes nunca datos sensibles (claves, tokens, datos personales)
