---
id: FEAT-002
title: Sistema de diseño visual
status: implemented
created: 2026-04-30
updated: 2025-05-30
owner: Miguel Zamora
---

## Resumen

Definición del sistema de diseño global de la web: paleta de colores, tipografía, espaciados, animaciones y tokens CSS que garantizan coherencia visual elegante y juguetica en toda la página.

## Contexto

La web "Fundamentos del Ajedrez" necesita una identidad visual que transmita elegancia clásica con un toque dinámico. La paleta debe girar en torno al blanco, negro, marrones y verdes propios del ajedrez, siendo coherente y no saturada de efectos. El diseño es mobile-first y responsive.

## Criterios de aceptación

- [ ] AC-1: Dado el archivo de estilos globales, cuando se revisan las variables CSS, entonces existe un conjunto de tokens para colores (`--color-*`), tipografía (`--font-*`), espaciado (`--space-*`) y radios (`--radius-*`).
- [ ] AC-2: Dado cualquier componente, cuando se renderiza en móvil (≤ 768 px), entonces el layout se muestra correctamente en una sola columna sin overflow horizontal.
- [ ] AC-3: Dado cualquier componente, cuando se renderiza en tablet (769 px – 1199 px) y desktop (≥ 1200 px), entonces el layout aprovecha el espacio disponible con grids o flex de múltiples columnas.
- [ ] AC-4: Dado el sistema de diseño, cuando se revisa la paleta, entonces los colores primarios son variantes de negro (`#0d0d0d`, `#1a1a1a`), blanco roto (`#f5f0e8`, `#faf8f5`), marrones cálidos (`#6b4c2a`, `#8b6340`, `#c4956a`) y verde tablero (`#4a7c59`, `#2d5a3d`).
- [ ] AC-5: Dado el sistema tipográfico, cuando se carga la página, entonces se usan como máximo dos familias: una serif elegante para títulos y una sans-serif legible para cuerpo de texto.
- [ ] AC-6: Dado un elemento con clase de animación, cuando entra en el viewport, entonces se reproduce una animación de aparición suave (fade-in, slide-up o similar) que no supera 600 ms.
- [ ] AC-7: Dado el sistema de diseño, cuando se revisan las animaciones globales, entonces existe `prefers-reduced-motion: reduce` que desactiva todas las animaciones para usuarios que lo soliciten.
- [ ] AC-8: Dado cualquier texto de cuerpo, cuando se mide el contraste con su fondo, entonces supera un ratio de 4.5:1 (WCAG AA).
- [ ] AC-9: Dado el conjunto de tokens CSS `--space-*`, cuando un componente referencia uno de ellos, entonces ese token debe estar definido en `global.css`; no se permiten referencias a tokens no declarados en la escala de espaciado.

## Casos de error

- CE-1: Si una animación CSS produce jank (saltos), debe eliminarse o sustituirse por una que use solo `transform` u `opacity` para garantizar 60 fps.
- CE-2: Si se añade una fuente externa que no carga, el sistema debe mostrar una fuente del sistema coherente como fallback.

## Fuera de alcance

- Toggle de modo oscuro / claro.
- Temas alternativos de color.
- Animaciones JavaScript complejas (Three.js, GSAP, etc.).

## Dependencias

- FEAT-001 (proyecto base debe estar configurado).

## Notas adicionales

### Paleta de referencia

| Token                 | Valor hex | Uso principal                                              |
| --------------------- | --------- | ---------------------------------------------------------- |
| `--color-bg`          | `#faf8f5` | Fondo general                                              |
| `--color-bg-dark`     | `#1a1a1a` | Fondos de secciones oscuras                                |
| `--color-surface`     | `#f0ebe0` | Tarjetas, superficies                                      |
| `--color-brown-main`  | `#6b4c2a` | Acento marrón principal                                    |
| `--color-brown-light` | `#c4956a` | Marrón claro, hovers                                       |
| `--color-green-main`  | `#2d5a3d` | Verde tablero principal                                    |
| `--color-green-light` | `#4a7c59` | Verde más luminoso                                         |
| `--color-text`        | `#1a1a1a` | Texto principal                                            |
| `--color-text-muted`  | `#5a5a5a` | Texto secundario                                           |
| `--color-white`       | `#ffffff` | Blanco puro (texto en fondos oscuros, bordes de contraste) |

### Tipografía sugerida

- **Títulos**: `Playfair Display` (serif, elegante, clásica) — Google Fonts
- **Cuerpo**: `Inter` o `Source Sans 3` (sans-serif, legible) — Google Fonts

### Tokens de espaciado

La escala de espaciado es continua. **No se debe omitir ningún paso**; si un componente referencia un token (`--space-5`), ese token debe existir en la escala antes de usarlo.

```css
--space-1: 0.25rem; /* 4px  */
--space-2: 0.5rem; /* 8px  */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-5: 1.25rem; /* 20px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
--space-20: 5rem; /* 80px */
--space-24: 6rem; /* 96px */
```

> **Regla**: si añades un token nuevo, documéntalo aquí primero.

### Tokens de animación

```css
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 600ms;
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
```

### Breakpoints

```css
--bp-mobile: 0px;
--bp-tablet: 768px;
--bp-desktop: 1200px;
```
