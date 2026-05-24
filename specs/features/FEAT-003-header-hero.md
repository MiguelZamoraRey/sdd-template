---
id: FEAT-003
title: Header con animación de entrada
status: implemented
created: 2026-04-30
updated: 2025-05-30
owner: Miguel Zamora
---

## Resumen

Sección de cabecera de la página que muestra el título "Fundamentos del Ajedrez" con una animación de entrada elegante, actuando como primer impacto visual para el visitante.

## Contexto

El header es lo primero que ve el usuario al cargar la página. Debe transmitir inmediatamente el tema (ajedrez) y la personalidad de la web (elegante, juguetera) mediante tipografía, color, un elemento gráfico relacionado con el ajedrez y una animación de aparición que no resulte excesiva.

## Criterios de aceptación

- [ ] AC-1: Dado que la página carga, cuando el header es visible, entonces muestra el título "Fundamentos del Ajedrez" en la tipografía serif definida en el sistema de diseño.
- [ ] AC-2: Dado que la página carga, cuando el header se renderiza, entonces el título y el subtítulo aparecen con una animación de fade-in + slide-up escalonada (staggered) que comienza automáticamente.
- [ ] AC-3: Dado el header, cuando se visualiza en móvil (≤ 768 px), entonces ocupa al menos el 90 % del alto de la ventana (`90dvh`) y el texto está centrado verticalmente.
- [ ] AC-4: Dado el header, cuando se visualiza en desktop (≥ 1200 px), entonces ocupa el 100 % del alto de la ventana (`100dvh`) y presenta un elemento decorativo (SVG de pieza de ajedrez o tablero abstracto) junto al texto.
- [ ] AC-5: Dado el header, cuando se examina el fondo, entonces utiliza un color o gradiente basado en la paleta oscura del sistema de diseño (negro / verde oscuro), creando contraste con el resto de la página.
- [ ] AC-6: Dado el header, cuando se revisa la accesibilidad, entonces el `<h1>` es el único `<h1>` de la página y tiene el texto "Fundamentos del Ajedrez".
- [ ] AC-7: Dado que `prefers-reduced-motion: reduce` está activo, cuando carga el header, entonces el título aparece directamente sin animación.

## Casos de error

- CE-1: Si la imagen o SVG decorativo no carga, el layout no debe romperse; el texto debe seguir centrado y legible.
- CE-2: Si el alto de la ventana es muy pequeño (< 400 px, e.g. landscape móvil), el header debe reducirse y no ocultar el título.

## Fuera de alcance

- Vídeo de fondo.
- Carrusel de imágenes.
- Botón CTA en el header.

## Dependencias

- FEAT-001 (proyecto base).
- FEAT-002 (sistema de diseño con tokens y tipografía).

## Notas adicionales

- El subtítulo sugerido es: _"De los orígenes milenarios a la era moderna"_ (puede ajustarse).
- La animación debe ser implementable únicamente con CSS (`@keyframes`) para mantener el bundle ligero.
- El componente se llamará `HeaderHero.astro` y vivirá en `src/components/sections/`.
- Incluir un atributo `aria-label` descriptivo si se usan SVGs decorativos, o `aria-hidden="true"` si son puramente decorativos.
- Assets necesarios: un SVG de una pieza de ajedrez (caballo o rey recomendado). Ver sección de assets del proyecto.
