---
description: Inicializa un nuevo proyecto SDD: pregunta de qué va, configura MCPs opcionales y reescribe AGENTS.md y README.md adaptados al stack del usuario.
agent: build
---

Voy a configurar este repositorio como base de tu nuevo proyecto. Antes de tocar nada, necesito saber de qué va.

## 1. Recopilar información

Si `$ARGUMENTS` ya contiene una descripción del proyecto, úsala como punto de partida y solo pregunta lo que falte.

Usa la herramienta `question` (con opciones múltiples y la opción "Type your own answer" habilitada) y preguntas de texto libre para recopilar, en este orden:

1. **Nombre del proyecto** — texto libre.
2. **Descripción y público** — qué hace y para quién (1-2 frases, texto libre).
3. **Tipo de proyecto** — opciones: Web app / API o backend / CLI o herramienta / Librería o SDK / App móvil / Procesamiento de datos.
4. **Stack o lenguaje principal** — opciones razonables para el tipo elegido (p. ej. TS+React, TS+Node, Python, Go, Rust…) + texto libre. Si el usuario no lo sabe, propón uno y confírmalo.
5. **Gestor de paquetes** — opciones: pnpm, npm, yarn, bun, pip, cargo, go modules… + texto libre.
6. **Comandos de verificación** — texto libre: comandos de test, typecheck/lint y build del proyecto. Si no los conoce, propón convenciones razonables para el stack y confírmalas.
7. **Estructura del código** — texto libre: monorepo vs un solo paquete, dónde va `src/` (si aplica).

No asumas el stack ni los comandos: pregúntalos siempre, proponiendo opciones.

## 2. Configurar MCPs (opcional)

Pregunta si quiere usar servidores MCP:

1. **¿Quieres configurar MCPs?** — Sí / No. Si responde No, salta este paso.
2. **Selección de MCPs** — opción múltiple, recomendados según el tipo de proyecto del paso 1:
   - **GitHub** — issues, PRs y Actions. Remote, sin secretos en config (OAuth automático). Útil en casi cualquier proyecto.
   - **Context7** — documentación actual de librerías. Remote, sin API key. Recomendado para cualquier stack.
   - **Playwright** — verificación de UI / E2E en navegador real. Local. Recomendado para Web apps.
   - **PostgreSQL** — inspección de esquema y consultas. Local, requiere `DATABASE_URL`. Recomendado si hay base de datos.
   - Sugerencias por tipo: Web app → Playwright + Context7 (+ GitHub); API o backend → PostgreSQL + Context7 (+ GitHub); CLI o librería → Context7 (+ GitHub); Datos → PostgreSQL + Context7; Móvil → Context7 (+ GitHub).
   - Recuerda: cada MCP añade sus tools al contexto del modelo. Recomienda 3-6 como máximo, solo los que el proyecto vaya a usar.
3. **Escribe la configuración** en `opencode.json` de la raíz del proyecto (crea el archivo con `$schema` si no existe y fusiona con lo que ya haya, sin sobrescribir). En v2 los servidores van bajo `mcp.servers`. Para cada MCP elegido:
   - GitHub: `{ "mcp": { "servers": { "github": { "type": "remote", "url": "https://api.githubcopilot.com/mcp" } } } }`
   - Context7: `{ "mcp": { "servers": { "context7": { "type": "remote", "url": "https://mcp.context7.com/mcp" } } } }`
   - Playwright: `{ "mcp": { "servers": { "playwright": { "type": "local", "command": ["npx", "-y", "@playwright/mcp"] } } } }`
   - PostgreSQL: `{ "mcp": { "servers": { "postgres": { "type": "local", "command": ["npx", "-y", "@modelcontextprotocol/server-postgres"], "environment": { "DATABASE_URL": "{env:DATABASE_URL}" } } } } }`
   - Los servidores se conectan solos; usa `"disabled": true` para desactivar uno sin borrarlo.
   - **Nunca escribas secretos reales en `opencode.json`.** Usa siempre `{env:VAR}`.
4. **Variables de entorno** — para cada MCP que requiera credenciales (p. ej. `DATABASE_URL`):
   - Añade la variable sin valor a `.env.example` (crea el archivo si no existe).
   - Asegúrate de que `.env` está en el `.gitignore` de la raíz (crea o extiende `.gitignore` si hace falta).
   - Explica que `{env:VAR}` se resuelve desde el entorno del proceso: el usuario debe exportar la variable en su shell (o usar un plugin dotenv si prefiere cargarla desde un `.env`).
5. **Cierre** — recuerda que tras editar `opencode.json` hay que reiniciar opencode. Para gestionar o autenticar MCPs: `/mcps` o `opencode mcp list|auth`.

## 3. Reescribir README.md

Mantén la sección "Flujo de trabajo (SDD)" y "Convenciones SDD", pero:

- Reemplaza el título (`# ...`) por el nombre del proyecto.
- Reemplaza la primera sección por una descripción real del proyecto: qué es, qué hace y para quién. Elimina cualquier mención a "boilerplate" o "template".
- Si los comandos de verificación del proyecto difieren de los del boilerplate, actualízalos con los reales del gestor elegido (donde aparezcan en AGENTS.md y README.md).
- Si se configuraron MCPs, añade un apartado breve "MCPs" que liste los servidores configurados y qué necesita cada uno (auth OAuth o variables de entorno).

## 4. Reescribir AGENTS.md

Mantén `Estructura`, `Flujo de trabajo SDD`, las reglas de commits, la sección `Seguridad` y la sección `Memoria`. Cambia:

- `## Qué es este proyecto` → descripción real del proyecto nuevo.
- `## Convenciones` → stack real: ajusta "TypeScript estricto" si aplica, dónde viven los tests, y elimina lo que no aplique.
- `## Antes de terminar` → los comandos de test/typecheck/lint/build del gestor elegido.
- Adapta `docs/constitution.md` (trae un starter genérico) al stack real del proyecto; el usuario podrá rehacerla después con `/sdd-constitution`.
- Si hay MCPs configurados, menciona en `Estructura` que la config de MCPs vive en `opencode.json` y que los secretos van en variables de entorno.

## 5. Confirmar y resumir

Al terminar, muestra un resumen de los cambios realizados (AGENTS.md, README.md, docs/constitution.md, opencode.json, .env.example, .gitignore) y pide confirmación. No commitees ni hagas push (los commits los hace siempre el mantenedor).

Cierra con una nota breve de cómo seguir, siempre que el usuario quiera empezar a especificar:

- Reinicia opencode y selecciona el agente **coordinator** (en v2: **Shift+Tab** o lista de agentes con la tecla de agente).
- Pídele la primera spec con el flujo SDD, por ejemplo: "Quiero añadir <primera funcionalidad>. Sigue el flujo SDD completo."
- El coordinator repartirá el trabajo entre @planner, @implementer y @reviewer, y te pedirá aprobación en cada fase.
