---
description: Inicializa un nuevo proyecto SDD: pregunta de qué va y reescribe AGENTS.md y README.md adaptados al stack del usuario.
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

## 2. Reescribir README.md

Mantén la sección "Flujo de trabajo (SDD)" y "Convenciones SDD", pero:

- Reemplaza el título (`# ...`) por el nombre del proyecto.
- Reemplaza la primera sección por una descripción real del proyecto: qué es, qué hace y para quién. Elimina cualquier mención a "boilerplate" o "template".
- Si los comandos de verificación cambian, actualiza el paso 4 del flujo (`pnpm test` → comandos reales del proyecto).

## 3. Reescribir AGENTS.md

Mantén `Estructura`, `Flujo de trabajo SDD`, las reglas de commits, la sección `Seguridad` y la sección `Memoria`. Cambia:

- `## Qué es este proyecto` → descripción real del proyecto nuevo.
- `## Convenciones` → stack real: ajusta "TypeScript estricto" si aplica, dónde viven los tests, y elimina lo que no aplique.
- `## Antes de terminar` → los comandos de test/typecheck/lint/build del gestor elegido.

## 4. Confirmar y resumir

Al terminar, muestra un resumen de los cambios realizados en ambos archivos y pide confirmación. No commitees ni hagas push (los commits los hace siempre el mantenedor).