# Constitución — <Nombre del proyecto>

Principios innegociables. Toda spec, plan y tarea debe cumplirlos.

> Plantilla inicial. Revisa y adapta con el comando `/sdd-constitution` antes de
> empezar a especificar. Sustituye el stack y los comandos por los reales.

1. **Simplicidad primero**: <stack mínimo, sin dependencias ni build innecesarios>. Funciona sin pasos de configuración complejos.
2. **La spec manda**: nada se implementa si no está en la spec activa. Si falta una decisión, se para y se pregunta.
3. **Lógica separada de interfaz**: los cálculos son funciones puras, sin DOM ni estado global, que reciben los parámetros explícitamente.
4. **Tests como puerta**: la lógica se prueba con `<comando de test del proyecto>`. Prohibido avanzar con tests en rojo.
5. **Los datos del usuario son sagrados**: persistencia con compatibilidad hacia atrás y fechas siempre en hora local. Nunca se pierde información.
6. **Idioma**: código en inglés; interfaz y documentación en español.