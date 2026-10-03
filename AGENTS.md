# AGENTS.md

Convenciones y flujo de trabajo para cualquier agente que trabaje en este repositorio.

## Qué es este proyecto

Este proyecto es un boilerplate para desarrollo con SDD de cualquier proyecto, lo primero que debes hacer es redifinir este AGENTS.md y el README.md para el proyecto que vaya a comenzar el usuario.

## Estructura

- **Specs**: `specs/{features,api,data}/`.
- **Comandos SDD**: `.opencode/command/`.
- **Skills**: `.agents/skills/spec-writing/` (specs).

## Flujo de trabajo SDD

### Estado de las specs

Una spec pasa por `draft` → `review` → `approved` → `implemented` (campo `status` del frontmatter).

### 1. Especificar

- Crea el archivo en `specs/<tipo>/` con nombre en kebab-case.
- Usa la plantilla `specs/_template.md`.
- Sigue `.agents/skills/spec-writing/SKILL.md`: una spec = una responsabilidad, criterios en formato "Dado X, cuando Y, entonces Z", sin detalles de implementación.
- Frontmatter obligatorio: `id`, `title`, `status`, `created`, `updated`, `owner`.

### 2. Revisar

- Valida que los criterios sean testeables, que haya casos de error y alcance definido.
- No implementes una spec que no esté en `approved`.

### 3. Implementar

- Lee la spec completa, verifica que esté `approved`.
- Referencia el ID de cada criterio (`AC-x`, `CE-x`) en comentarios.
- Genera un test por criterio de aceptación y por caso de error.
- Reporta cobertura: criterios cubiertos, casos de error cubiertos, pendientes.

## Convenciones

- **TypeScript estricto.** No uses `any` salvo justificación.
- **Tests** en archivos `*.test.ts` dentro de `src/` del proyecto correspondiente.
- **No añadas comentarios** innecesarios; el código debe explicarse por sí mismo.
- **No implementes** lógica no descrita en la spec sin avisar.
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
