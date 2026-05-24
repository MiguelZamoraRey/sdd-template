---
id: FEAT-005
title: Sección "Un juego sencillo"
status: implemented
created: 2026-04-30
updated: 2025-05-30
owner: Miguel Zamora
---

## Resumen

Sección informativa que explica los componentes del ajedrez (piezas, tablero) y las reglas fundamentales del juego, dirigida a lectores que quieren entender el ajedrez desde cero.

## Contexto

Muchos visitantes pueden conocer el ajedrez superficialmente pero no sus reglas precisas. Esta sección debe ser clara, didáctica y visualmente atractiva. El uso de iconos SVG de las piezas de ajedrez facilita la comprensión sin necesidad de texto excesivo.

## Criterios de aceptación

- [ ] AC-1: Dado que la sección se renderiza, cuando el usuario la visualiza, entonces tiene el `id="el-juego"` para que la navbar pueda enlazar a ella correctamente.
- [ ] AC-2: Dado que la sección se renderiza, cuando el usuario lee el contenido, entonces encuentra información sobre: el tablero (8x8, colores), las 6 piezas (rey, reina, torre, alfil, caballo, peón) con sus movimientos, y las reglas básicas (jaque, jaque mate, tablas, enroque, captura al paso).
- [ ] AC-3: Dado que la sección muestra cada pieza, cuando se renderiza el icono SVG de cada una, entonces aparece el SVG correspondiente junto a su nombre y una descripción breve de su movimiento.
- [ ] AC-4: Dado que la sección se visualiza en móvil (≤ 768 px), cuando se muestran las piezas, entonces aparecen en una grid de 2 columnas.
- [ ] AC-5: Dado que la sección se visualiza en desktop (≥ 1200 px), cuando se muestran las piezas, entonces aparecen en una grid de 3 o 6 columnas.
- [ ] AC-6: Dado que los elementos de la sección entran en el viewport, cuando el usuario hace scroll hacia ellos, entonces aparecen con una animación de entrada (fade-in o slide-up) usando Intersection Observer.
- [ ] AC-7: Dado que la sección se renderiza, cuando se revisa la semántica HTML, entonces el título de la sección es un `<h2>` y los subtítulos de subsecciones son `<h3>`.

## Casos de error

- CE-1: Si un SVG de pieza no carga o no existe en la ruta esperada, el layout no debe romperse; debe mostrarse un fallback de texto con el nombre de la pieza.

## Fuera de alcance

- Tablero de ajedrez interactivo o animado.
- Sistema de práctica de movimientos.
- Variantes del ajedrez (960, etc.).

## Dependencias

- FEAT-001 (proyecto base).
- FEAT-002 (sistema de diseño).
- Assets: SVGs de las 6 piezas de ajedrez (ver sección de assets del proyecto).

## Notas adicionales

- El componente se llamará `SectionRules.astro` y vivirá en `src/components/sections/`.
- Los SVGs de piezas deben almacenarse en `src/assets/icons/pieces/` con nombres normalizados: `king.svg`, `queen.svg`, `rook.svg`, `bishop.svg`, `knight.svg`, `pawn.svg`.
- Contenido sugerido de texto:

  **Subsección 1: El tablero**

  > El tablero de ajedrez es una cuadrícula de 8×8 casillas, alternando colores claros y oscuros, con un total de 64 escaques. Se orienta con una casilla clara en la esquina derecha de cada jugador.

  **Subsección 2: Las piezas**
  Grid de 6 tarjetas (una por pieza) con icono SVG + nombre + movimiento resumido.

  **Subsección 3: Reglas fundamentales**
  Lista o cards con: objetivo del juego, jaque y jaque mate, enroque, captura al paso, coronación del peón, tablas.
