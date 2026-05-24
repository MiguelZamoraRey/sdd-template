---
id: FEAT-004
title: Barra de navegación sticky
status: implemented
created: 2026-04-30
updated: 2025-05-30
owner: Miguel Zamora
---

## Resumen

Barra de navegación que permanece fija en la parte superior de la ventana durante el scroll, con enlaces de anclaje a cada sección de la página para facilitar la navegación rápida.

## Contexto

Al ser una web one-page con varias secciones de contenido extenso, el usuario necesita poder saltar entre secciones sin tener que hacer scroll manual largo. La navbar debe ser discreta al principio (transparente sobre el header) y volverse visible en cuanto el usuario comienza a hacer scroll.

## Criterios de aceptación

- [ ] AC-1: Dado que la página carga y el usuario está en la parte superior, cuando el header hero está visible, entonces la navbar tiene fondo transparente y los textos son blancos o de alto contraste sobre el fondo oscuro.
- [ ] AC-2: Dado que el usuario hace scroll más allá del header, cuando la navbar pasa a ser sticky, entonces aparece con fondo sólido (color oscuro del sistema de diseño) y una sombra sutil, con una transición suave de opacidad/background.
- [ ] AC-3: Dado que la navbar es visible, cuando se renderizan los enlaces, entonces aparecen los siguientes ítems en orden: "El juego", "Historia", "Ajedrecistas".
- [ ] AC-4: Dado que el usuario hace clic en un enlace de la navbar, cuando la acción se ejecuta, entonces la página realiza un smooth scroll hasta la sección correspondiente.
- [ ] AC-5: Dado que el usuario hace scroll por la página, cuando una sección entra en el viewport, entonces el enlace correspondiente en la navbar se marca como activo (estado visual diferenciado).
- [ ] AC-6: Dado que la página se visualiza en móvil (≤ 768 px), cuando la navbar se renderiza, entonces los ítems de navegación se colapsan en un menú hamburguesa que se despliega al pulsarlo.
- [ ] AC-7: Dado el menú hamburguesa en móvil, cuando se abre el menú, entonces bloquea el scroll del body y al seleccionar un ítem, el menú se cierra automáticamente.
- [ ] AC-8: Dado el componente de navbar, cuando se revisa la accesibilidad, entonces el elemento `<nav>` tiene `aria-label="Navegación principal"` y el botón hamburguesa tiene `aria-expanded` y `aria-controls` correctamente configurados.

## Casos de error

- CE-1: Si JavaScript está desactivado, los enlaces de anclaje deben seguir funcionando (navegación sin scroll suave es aceptable).
- CE-2: Si una sección tiene un `id` incorrecto o inexistente, el clic en el enlace no debe producir errores en consola; simplemente no navegará.

## Fuera de alcance

- Submenús o dropdowns.
- Buscador integrado en la navbar.
- Navbar diferente por sección.

## Dependencias

- FEAT-001 (proyecto base).
- FEAT-002 (sistema de diseño).
- FEAT-003 (header, del que depende el comportamiento transparente inicial).

## Notas adicionales

- El componente se llamará `NavBar.astro` y vivirá en `src/components/`.
- El comportamiento de detección de scroll y sección activa debe implementarse con un script `<script>` inline en el componente Astro (Vanilla JS, sin frameworks).
- Los IDs de sección que debe enlazar:
  - `#el-juego` → Sección "Un juego sencillo"
  - `#historia` → Sección "Mucha historia"
  - `#ajedrecistas` → Sección "Ajedrecistas famosos"
- El logo o nombre de la web en la parte izquierda de la navbar debe enlazar a `#top` (volver arriba).
