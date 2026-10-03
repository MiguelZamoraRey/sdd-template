---
description: SDD · Revisa la spec como un QA (solo detecta, no resuelve)
agent: plan
---
Revisa specs/$1/spec.md como si fueras un QA muy profesional. Usa la skill `sdd`.
Lista:
1. Ambigüedades restantes (requisitos que no se pueden verificar).
2. Contradicciones entre requisitos.
3. Casos límite no cubiertos.
4. Conflictos con docs/constitution.md.

Además, revisa brevemente la seguridad de la spec (principios OWASP):
5. ¿Se define validación de entrada de datos?
6. ¿Se identifican datos sensibles y cómo se protegen?
7. ¿Se define quién puede acceder a qué (autorización)?

No propongas soluciones todavía: solo detecta. Formato: lista numerada.