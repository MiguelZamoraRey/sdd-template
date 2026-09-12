---
description: Genera una spec SDD completa a partir de una descripción en lenguaje natural.
agent: build
---

Voy a crear una especificación SDD completa para la siguiente funcionalidad:

**Descripción:** $ARGUMENTS

Instrucciones:
- Si no se indica el tipo, asume `features`.
- Si no se indica un ID, propón uno siguiendo la convención (FEAT-XXX, API-XXX, DATA-XXX).

---

Genera la spec siguiendo estas reglas:

1. Usa el frontmatter con `status: draft` y la fecha de hoy.
2. Redacta al menos 5 criterios de aceptación testeables en formato "Dado X, cuando Y, entonces Z".
3. Incluye al menos 3 casos de error relevantes.
4. Define claramente qué queda fuera de alcance.
5. Identifica dependencias con otras partes del sistema si las hay.
6. No incluyas detalles de implementación (lenguajes, librerías, patrones concretos).
7. Incluye una sección "Documentación" que explique:
   - Cómo se usa la funcionalidad desde el punto de vista del usuario o integrador.
   - Ejemplos de uso (inputs/outputs si aplica).
   - Supuestos importantes que debe conocer quien use esta funcionalidad.
8. Incluye una sección "Testing" que defina:
   - Qué tipos de test aplican (unitarios, integración, e2e).
   - Casos clave que deben cubrirse (basados en los criterios de aceptación).
   - Casos de error que deben validarse.
   - Cualquier consideración especial (datos mock, fixtures, etc.).

Guarda el archivo en `specs/<tipo>/` con nombre en `kebab-case.md`.
