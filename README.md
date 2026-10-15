# Entradita — App Web de Venta de Boletos para Eventos

Frontend académico para explorar eventos, elegir boletos y recorrer una compra de demostración. No procesa pagos reales ni utiliza backend.

## Objetivo

Construir una experiencia web accesible y adaptable para consultar eventos y simular la compra de boletos, evolucionando el producto en tres sprints.

## Tecnologías

- HTML semántico, CSS y JavaScript.
- Vite como servidor de desarrollo; no se requiere un framework ni un backend.

## Estructura

```text
.
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── src/
    ├── data/
    │   └── events.js
    ├── main.js
    ├── services/
    │   └── storage.js
    └── styles.css
```

## Funcionalidades implementadas

- Catálogo adaptable con búsqueda por nombre, filtro por categoría y filtro por fecha.
- Detalles de evento, tipos de boletos y disponibilidad de ejemplo.
- Validación de cantidades contra la disponibilidad simulada.
- Carrito con modificación y eliminación de cantidades, totales y persistencia local.
- Formulario de compra ficticia, confirmación con identificador y consulta del historial local.
- Acción para borrar el historial de demostración.

## Ejecutar localmente

Desde la carpeta del proyecto, instala las dependencias y arranca el servidor de desarrollo:

```powershell
npm install
npm run dev
```

Abre la dirección local que muestra Vite en la terminal (normalmente <http://127.0.0.1:5173>). No abras `index.html` directamente como archivo; utiliza el servidor de desarrollo.

## Compilación y pruebas

El proyecto no requiere compilación: los archivos estáticos se sirven directamente. Revisa manualmente búsqueda, filtros, detalles, selección, carrito, persistencia tras recarga, formulario, confirmación e historial. No se incluye todavía una suite automatizada de pruebas.

**Pruebas realizadas en navegador local:** el servidor respondió con HTTP 200; se mostraron los seis eventos; la búsqueda de “jazz” devolvió un resultado y el filtro “Teatro” mostró el evento esperado; se abrió el detalle y se agregaron dos boletos de acceso general, con total de $900 MXN; se completó la compra de prueba y el historial conservó una compra de $900 MXN tras recargar; el carrito quedó vacío tras confirmar; una cantidad de 121 frente a una disponibilidad de 120 fue rechazada; y a 390 px no se observó desbordamiento horizontal. Los datos temporales de esta comprobación se borraron del navegador al terminar.

No se ejecutó una suite automatizada ni se verificó una publicación en GitHub Pages. La compra con campos vacíos o correo inválido no se incluyó en la prueba manual.

## Almacenamiento local y límites

El carrito y las compras de prueba se guardan en `localStorage` en el navegador actual. No se sincronizan entre dispositivos ni usuarios. Borrar los datos del sitio en el navegador también los elimina. El formulario solicita únicamente nombre y correo para la demostración; no solicita datos bancarios. No se realiza ningún cobro, reserva real ni envío de datos a un servidor.

Las imágenes de ejemplo se cargan desde Unsplash y las tipografías desde Google Fonts; ambos recursos requieren conexión a internet y cuentan con alternativas locales del sistema para el texto. Los datos de eventos y disponibilidad son ficticios.

## Plan de trabajo Scrum

Este plan describe trabajo futuro y no implica ceremonias, entregables ni resultados ya realizados.

1. **Sprint 1 — Estructura y catálogo:** base navegable, diseño adaptable, catálogo y detalles. La presente implementación establece esta base y agrega también flujos de compra de demostración.
2. **Sprint 2 — Boletos y carrito:** robustecer selección, validaciones, persistencia y pruebas de interacciones.
3. **Sprint 3 — Compra simulada y publicación:** ampliar pruebas y documentación, verificar producción y configurar/publicar GitHub Pages.

## GitHub Pages

La aplicación usa rutas relativas y no necesita configuración de `base` ni un proceso de compilación. Para publicarla, abre **Settings → Pages** en GitHub, selecciona **Deploy from a branch**, la rama `main` y la carpeta `/(root)`, y guarda. GitHub Pages servirá `index.html` desde la raíz. La publicación debe comprobarse después de que GitHub complete el despliegue; todavía no se ha publicado ni existe un enlace público verificado.
