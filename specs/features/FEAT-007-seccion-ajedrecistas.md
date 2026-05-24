---
id: FEAT-007
title: Sección "Ajedrecistas famosos"
status: implemented
created: 2026-04-30
updated: 2025-05-30
owner: Miguel Zamora
---

## Resumen

Sección con tarjetas visuales que presenta a los ajedrecistas más importantes de la historia, con su fotografía, nombre, años de reinado o relevancia, y una descripción breve de sus logros.

## Contexto

Los grandes maestros del ajedrez son figuras fascinantes que merecen un espacio propio. Mostrarlos en tarjetas con foto y una descripción humana e inspiradora hace la web más rica e interesante. Esta sección aporta el elemento visual más fuerte de la página.

## Criterios de aceptación

- [ ] AC-1: Dado que la sección se renderiza, cuando el usuario la visualiza, entonces tiene el `id="ajedrecistas"` para que la navbar pueda enlazar a ella correctamente.
- [ ] AC-2: Dado que la sección se renderiza, cuando el usuario ve las tarjetas, entonces aparecen al menos los siguientes ajedrecistas en orden cronológico: Paul Morphy, Wilhelm Steinitz, Emanuel Lasker, José Raúl Capablanca, Alexander Alekhine, Bobby Fischer, Anatoly Karpov, Garry Kasparov, Magnus Carlsen.
- [ ] AC-3: Dado que se muestra una tarjeta de ajedrecista, cuando el usuario la visualiza, entonces contiene: imagen del ajedrecista, nombre completo, período/años relevantes, nacionalidad y una descripción de 2–3 frases sobre su estilo e importancia.
- [ ] AC-4: Dado que la imagen de un ajedrecista carga, cuando se renderiza, entonces tiene un `alt` descriptivo con el nombre del ajedrecista y el atributo `loading="lazy"`.
- [ ] AC-5: Dado que la sección se visualiza en móvil (≤ 768 px), cuando se muestran las tarjetas, entonces se presentan en una sola columna o en grid de 2 columnas compactas.
- [ ] AC-6: Dado que la sección se visualiza en tablet (769 px – 1199 px), cuando se muestran las tarjetas, entonces se presentan en una grid de 2–3 columnas.
- [ ] AC-7: Dado que la sección se visualiza en desktop (≥ 1200 px), cuando se muestran las tarjetas, entonces se presentan en una grid de 3–4 columnas.
- [ ] AC-8: Dado que las tarjetas entran en el viewport, cuando el usuario hace scroll hacia ellas, entonces aparecen con una animación de entrada escalonada (stagger) usando Intersection Observer.
- [ ] AC-9: Dado que el usuario pasa el cursor sobre una tarjeta en desktop, cuando ocurre el hover, entonces la tarjeta muestra una elevación sutil (sombra + ligero scale) con transición suave.

## Casos de error

- CE-1: Si la imagen de un ajedrecista no carga, debe mostrarse un placeholder con las iniciales del nombre sobre el color de acento del sistema de diseño.
- CE-2: Si se añade un nuevo ajedrecista al array de datos y no tiene imagen, el sistema debe mostrar el placeholder automáticamente.

## Fuera de alcance

- Página de detalle individual para cada ajedrecista.
- Sistema de filtrado o búsqueda de ajedrecistas.
- Estadísticas de partidas o ELO.

## Dependencias

- FEAT-001 (proyecto base).
- FEAT-002 (sistema de diseño).
- Assets: fotografías de cada ajedrecista (ver sección de assets).

## Notas adicionales

- El componente principal se llamará `SectionPlayers.astro` y vivirá en `src/components/sections/`.
- El componente de tarjeta individual se llamará `PlayerCard.astro` y vivirá en `src/components/ui/`.
- Los datos de los ajedrecistas se definirán como un array de objetos en un archivo `src/data/players.ts`:
  ```ts
  interface Player {
    name: string;
    years: string; // e.g. "Campeón mundial 1972–1975"
    nationality: string;
    description: string;
    image: string; // Ruta relativa a src/assets/players/
  }
  ```
- Las imágenes deben almacenarse en `src/assets/players/` con nombres en kebab-case: `bobby-fischer.jpg`, `garry-kasparov.jpg`, etc.
- Imágenes disponibles en `src/assets/players/` (orden cronológico, mismo que el array de datos):
  - `paul-morphy.jpg`
  - `wilhelm-steinitz.jpg`
  - `emanuel-lasker.jpg`
  - `jose-raul-capablanca.jpg`
  - `alexander-alekhine.jpg`
  - `bobby-fischer.jpg`
  - `anatoly-karpov.jpg`
  - `garry-kasparov.jpg`
  - `magnus-carlsen.jpg`
