---
id: FEAT-001
title: Proyecto base Astro con pnpm
status: implemented
created: 2026-04-30
updated: 2025-05-30
owner: Miguel Zamora
---

## Resumen

Configuración del proyecto Astro usando pnpm como gestor de paquetes exclusivo, con una estructura de carpetas clara, ampliable y documentada que sirva de base para la web "Fundamentos del Ajedrez".

## Contexto

Se necesita una base sólida y bien organizada para construir una web one-page sobre ajedrez. Astro es ideal por su rendimiento estático y su soporte nativo para componentes reutilizables. El uso de pnpm garantiza instalaciones más seguras y reproducibles.

## Criterios de aceptación

- [ ] AC-1: Dado un entorno con Node.js instalado, cuando se ejecuta `pnpm install`, entonces todas las dependencias se instalan sin errores ni advertencias de seguridad.
- [ ] AC-2: Dado el proyecto inicializado, cuando se ejecuta `pnpm dev`, entonces el servidor de desarrollo arranca en `localhost:4321` sin errores.
- [ ] AC-3: Dado el proyecto, cuando se ejecuta `pnpm build`, entonces se genera una carpeta `dist/` con los archivos estáticos optimizados.
- [ ] AC-4: Dado un desarrollador nuevo, cuando lee el `README.md`, entonces encuentra instrucciones claras para instalar, desarrollar y construir el proyecto.
- [ ] AC-5: Dado el repositorio, cuando se revisa la estructura de carpetas, entonces existe una organización coherente con carpetas `src/components/`, `src/layouts/`, `src/pages/`, `src/styles/`, `src/assets/` y `public/`.
- [ ] AC-6: Dado el proyecto, cuando se revisa `package.json`, entonces el campo `packageManager` está fijado a una versión concreta de pnpm.
- [ ] AC-7: Dado el proyecto, cuando se revisa `.npmrc`, entonces existe `engine-strict=true` y `shamefully-hoist=false` para mayor seguridad con pnpm.

## Casos de error

- CE-1: Si se intenta usar `npm install` o `yarn`, el proyecto debe mostrar un aviso en `package.json` mediante el campo `engines` o un script `preinstall` que corte la ejecución.
- CE-2: Si `pnpm build` falla, el proceso de CI debe retornar un código de error distinto de 0.

## Fuera de alcance

- Configuración de CI/CD (pipelines, GitHub Actions).
- Despliegue a ningún hosting concreto.
- Internacionalización (i18n).
- Modo oscuro / claro como toggle.

## Dependencias

- Ninguna (es la spec base del proyecto).

## Notas adicionales

- Versión mínima de Node.js: 20 LTS.
- El archivo `.nvmrc` o `.node-version` debe fijarse a esa versión.
- Usar TypeScript en modo estricto para los componentes Astro.
- El archivo `astro.config.mjs` debe estar documentado con comentarios para cada opción.
- Estructura de carpetas sugerida:
  ```
  src/
    assets/          # Imágenes, SVGs optimizados por Astro
    components/      # Componentes Astro reutilizables
      sections/      # Un componente por sección de la página
      ui/            # Elementos de UI atómicos (botones, iconos, etc.)
    layouts/         # Layouts base de Astro
    pages/           # Única página: index.astro
    styles/          # CSS global y variables de diseño
  public/            # Assets estáticos sin procesar (favicon, robots.txt)
  specs/             # Especificaciones SDD
  ```
