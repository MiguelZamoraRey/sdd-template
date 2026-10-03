---
description: SDD · Valida la spec RF por RF (tests + verificación manual)
agent: build
---
Recorre specs/$1/spec.md requisito por requisito. Para cada RF indica qué test
lo cubre y el resultado de ejecutarlo con el comando de test del proyecto.

Los RF de interfaz que no se puedan testear automáticamente, verifícalos
manualmente (navegador, consola, vista móvil).

Si algún RF no está cubierto o falla, dilo claramente. NO arregles nada todavía.
Después comprueba los criterios de finalización y dame un veredicto:
¿la spec está cumplida?