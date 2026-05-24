---
id: FEAT-008
title: Footer
status: implemented
created: 2026-04-30
updated: 2025-05-30
owner: Miguel Zamora
---

## Resumen

Pie de página que cierra la web con el crédito del desarrollador, la metodología usada y un enlace de vuelta arriba, manteniendo la coherencia visual de la página.

## Contexto

El footer es el cierre natural de la experiencia. Debe ser sencillo pero con personalidad, reconociendo el trabajo del desarrollador y la metodología Spec-Driven Development usada en la construcción del proyecto.

## Criterios de aceptación

- [ ] AC-1: Dado que el footer se renderiza, cuando el usuario lo visualiza, entonces muestra el texto "Desarrollado por Miguel Zamora" con Spec Driven Development referenciado.
- [ ] AC-2: Dado que el footer se renderiza, cuando el usuario lo visualiza, entonces incluye un enlace o botón "Volver arriba" que realiza smooth scroll hasta el `#top` de la página.
- [ ] AC-3: Dado que el footer se renderiza, cuando el usuario lo visualiza, entonces muestra el año actual generado dinámicamente (no hardcodeado).
- [ ] AC-4: Dado que el footer se renderiza, cuando se revisa el diseño, entonces usa el fondo oscuro del sistema de diseño (`--color-bg-dark`) creando un cierre visual diferenciado.
- [ ] AC-5: Dado que el footer se renderiza en móvil (≤ 768 px), cuando se visualiza, entonces el contenido está centrado y apilado verticalmente sin overflow.
- [ ] AC-6: Dado que el footer se renderiza, cuando se revisa el HTML, entonces usa la etiqueta semántica `<footer>` con `role="contentinfo"`.

## Casos de error

- CE-1: Si el año dinámico no puede calcularse, el footer debe mostrar un año de fallback hardcodeado (el año de creación del proyecto).

## Fuera de alcance

- Mapa del sitio complejo.
- Newsletter o formulario de contacto.
- Redes sociales o iconos de terceros.
- Política de privacidad o cookies.

## Dependencias

- FEAT-001 (proyecto base).
- FEAT-002 (sistema de diseño).

## Notas adicionales

- El componente se llamará `Footer.astro` y vivirá en `src/components/`.
- El año dinámico se puede generar con `new Date().getFullYear()` en el frontmatter del componente Astro (se ejecuta en build time, lo cual es suficiente).
- Texto sugerido:
  ```
  © 2026 · Fundamentos del Ajedrez
  Desarrollado por Miguel Zamora · Construido con Spec Driven Development
  [↑ Volver arriba]
  ```
- Añadir un pequeño elemento decorativo: un icono SVG de pieza de ajedrez (peón o rey) a modo de firma visual.
