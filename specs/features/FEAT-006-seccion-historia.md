---
id: FEAT-006
title: Sección "Mucha historia"
status: implemented
created: 2026-04-30
updated: 2025-05-30
owner: Miguel Zamora
---

## Resumen

Sección narrativa que explica el origen del ajedrez y su evolución a través de las décadas, presentada como una línea de tiempo visual para facilitar la comprensión cronológica.

## Contexto

El ajedrez tiene más de 1500 años de historia. Esta sección debe transmitir esa profundidad histórica de forma visualmente atractiva y fácil de recorrer. Una línea de tiempo (timeline) es la estructura idónea para organizar hitos históricos y mantener al lector enganchado.

## Criterios de aceptación

- [ ] AC-1: Dado que la sección se renderiza, cuando el usuario la visualiza, entonces tiene el `id="historia"` para que la navbar pueda enlazar a ella correctamente.
- [ ] AC-2: Dado que la sección se renderiza, cuando el usuario lee el contenido, entonces encuentra al menos los siguientes hitos históricos: origen en la India (Chaturanga, s. VI), llegada a Persia (Shatranj), expansión islámica y árabe, introducción en Europa medieval (s. X-XI), estandarización de reglas (s. XV-XVI), primer campeón mundial (Steinitz, 1886), era Fischer y la Guerra Fría, era Kasparov y los ordenadores, ajedrez online y era moderna.
- [ ] AC-3: Dado que la sección se renderiza, cuando se visualiza la estructura, entonces los hitos se presentan en un componente de timeline (línea de tiempo) vertical u horizontal con fecha/época y descripción para cada hito.
- [ ] AC-4: Dado que la sección se visualiza en móvil (≤ 768 px), cuando se renderiza el timeline, entonces se presenta en layout vertical con los hitos apilados y la línea temporal a un lado.
- [ ] AC-5: Dado que la sección se visualiza en desktop (≥ 1200 px), cuando se renderiza el timeline, entonces los hitos se alternan a izquierda y derecha de la línea central (timeline zigzag).
- [ ] AC-6: Dado que los hitos del timeline entran en el viewport, cuando el usuario hace scroll, entonces cada hito aparece con una animación de entrada escalonada usando Intersection Observer.
- [ ] AC-7: Dado que la sección se renderiza, cuando se revisa la semántica HTML, entonces el título de la sección es un `<h2>` y cada época/hito tiene un `<h3>` o `<time>` con el atributo `datetime` donde corresponda.

## Casos de error

- CE-1: Si el contenido del timeline supera la altura de la ventana en móvil, el scroll debe funcionar con normalidad sin elementos truncados.

## Fuera de alcance

- Animación de línea de tiempo que se "dibuja" en scroll (demasiado compleja para este alcance).
- Galería de imágenes históricas.
- Referencias bibliográficas o notas al pie.

## Dependencias

- FEAT-001 (proyecto base).
- FEAT-002 (sistema de diseño).

## Notas adicionales

- El componente se llamará `SectionHistory.astro` y vivirá en `src/components/sections/`.
- Cada hito del timeline puede modelarse como un array de objetos en el frontmatter del componente Astro:
  ```ts
  interface TimelineItem {
    era: string; // e.g. "Siglo VI d.C."
    title: string; // e.g. "El Chaturanga"
    description: string;
  }
  ```
- El fondo de esta sección puede ser oscuro (usando `--color-bg-dark`) para crear contraste visual con las secciones adyacentes.
- Sugerencia de contenido por hito:

  | Era        | Título                     | Resumen                                                         |
  | ---------- | -------------------------- | --------------------------------------------------------------- |
  | S. VI d.C. | Los orígenes: Chaturanga   | Nace en India como simulación de batalla...                     |
  | S. VII     | Shatranj persa             | Los persas adoptan el juego y crean nuevas reglas...            |
  | S. IX–X    | La expansión árabe         | Con el Islam, el ajedrez llega a España y el norte de África... |
  | S. XV      | Europa lo transforma       | La reina cobra su poder actual, surge el ajedrez moderno...     |
  | 1886       | Primer campeonato mundial  | Wilhelm Steinitz se corona campeón...                           |
  | 1972       | Fischer vs Spassky         | La batalla de la Guerra Fría en el tablero...                   |
  | 1997       | Deep Blue vence a Kasparov | La inteligencia artificial alcanza al mejor humano...           |
  | 2020s      | La era online              | Plataformas como Chess.com y el fenómeno del Gambito de Dama... |
