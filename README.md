# Fundación Yo Elijo Ayudar — Sitio con Next.js

Este repositorio contiene el código del sitio construido con Next.js y Tailwind CSS. Ya está preparado para generar una exportación estática y desplegarse automáticamente en GitHub Pages mediante GitHub Actions.


## Requisitos
- Node.js 18+ (recomendado 20)
- npm o pnpm


## Scripts disponibles
- `npm run dev`: inicia el entorno de desarrollo en http://localhost:3000
- `npm run build`: compila la aplicación
- `npm run export`: compila y exporta como sitio estático en la carpeta `out`


## Despliegue en GitHub Pages (Automático con Actions)
Este proyecto incluye un flujo en `.github/workflows/deploy.yml` que construye y publica el sitio automáticamente en GitHub Pages al hacer push a la rama principal (`main` o `master`).

Sigue estos pasos en GitHub:
1. En el repositorio, ve a Settings → Pages.
2. En “Build and deployment”, selecciona “GitHub Actions”.
3. Si vas a publicar como Project Pages (URL del tipo `https://usuario.github.io/nombre-del-repo`), añade una variable de Actions:
   - Ruta: Settings → Secrets and variables → Actions → Variables
   - Nombre: `NEXT_PUBLIC_BASE_PATH`
   - Valor: `/nombre-del-repo`
   Esto asegura que las rutas y los assets se resuelvan correctamente desde el subpath del repositorio.
4. Haz push a `main`/`master` o ejecuta manualmente el workflow desde la pestaña “Actions”. El job construirá y publicará el contenido de `out/` en GitHub Pages.

Notas importantes:
- El proyecto ya está configurado con `next.config.mjs` para exportación estática (`output: 'export'`), `trailingSlash: true` y `images.unoptimized: true`.
- Para User/Org Pages (URL `https://usuario.github.io` o `https://org.github.io`), NO definas `NEXT_PUBLIC_BASE_PATH`.


## Despliegue manual (opcional)
Si prefieres subir la carpeta `out` manualmente, puedes:
1. Ejecutar `npm run export`.
2. Publicar el contenido de `out/` en la rama y configuración que uses para Pages (por ejemplo, `gh-pages`).

Ten en cuenta que el flujo de GitHub Actions ya automatiza este proceso, por lo que la opción manual es alternativa.


## Probar la exportación localmente
1. Ejecuta: `npm run export`
2. Abre `out/index.html` en tu navegador (puedes hacer doble clic o servir la carpeta con un servidor estático).


## Solución de problemas
- 404 en GitHub Pages al entrar directo a una ruta (por ejemplo, `/acerca/`):
  - Asegúrate de que `trailingSlash: true` esté activo (ya configurado) y que el workflow haya publicado la última versión.
- Assets que no cargan bajo `https://usuario.github.io/nombre-del-repo`:
  - Define `NEXT_PUBLIC_BASE_PATH=/nombre-del-repo` como variable de Actions (no secret) y vuelve a desplegar.
- Imágenes optimizadas de Next que no se muestran:
  - La configuración usa `images.unoptimized: true` para evitar dependencias del servidor de imágenes de Next en exportaciones estáticas.
- Caché del navegador tras actualizaciones:
  - Forzar recarga (Ctrl+F5) o limpiar caché. También puedes versionar recursos si es necesario.


## Estructura relevante
- `next.config.mjs`: configuración de exportación estática y basePath/assetPrefix opcionales.
- `.github/workflows/deploy.yml`: flujo de GitHub Actions que construye, exporta y publica el sitio.
- `out/`: carpeta generada durante la exportación estática.


## Personalizar dominio (CNAME) — Opcional
Si tienes un dominio propio:
1. En Settings → Pages → “Custom domain”, configura tu dominio y los DNS correspondientes.
2. Si usas la exportación manual, añade un archivo `CNAME` con tu dominio dentro de `out/` antes de publicar.


## Desarrollo
1. Instala dependencias: `npm ci` (o `npm install`)
2. Inicia el servidor: `npm run dev`
3. Realiza cambios en `app/` y otros módulos. Tailwind está preconfigurado.


## Licencia
Indica aquí la licencia del proyecto si corresponde.
