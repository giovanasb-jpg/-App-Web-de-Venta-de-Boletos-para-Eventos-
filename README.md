# Entradita — App Web de Venta de Boletos para Eventos

Frontend académico para explorar eventos, elegir boletos y recorrer una compra de demostración. No procesa pagos reales ni utiliza backend.

## Objetivo

Construir una experiencia web accesible y adaptable para consultar eventos y simular la compra de boletos, evolucionando el producto en cinco sprints.

## Tecnologías

- React, JSX, CSS y Vite.
- No se requiere un backend ni se procesan pagos reales.

## Estructura

```text
.
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.mjs
├── estructura/
│   ├── App.jsx
│   ├── diseno.css
│   ├── componentes/
│   │   ├── BarraBusqueda.jsx
│   │   ├── Carrusel.jsx
│   │   ├── CompraSimulada.jsx
│   │   ├── DetallesEvento.jsx
│   │   ├── Encabezado.jsx
│   │   ├── GenerosCategorias.jsx
│   │   ├── ListaBoletos.jsx
│   │   ├── PiePagina.jsx
│   │   ├── ResumenCompra.jsx
│   │   ├── TarjetaBoleto.jsx
│   │   └── TarjetaCarrusel.jsx
│   └── paginas/
│       └── Inicio.jsx
└── src/
    ├── main.jsx
    ├── data/
    │   └── events.js
    ├── services/
    │   └── storage.js
```

## Funcionalidades implementadas

- Encabezado y pie de página existentes.
- Selector de tema claro/oscuro, con preferencia guardada en `localStorage`.
- Categorías y carteles cargados desde los datos existentes.
- Carrusel de carteles con desplazamiento automático (respetando movimiento reducido) y controles anterior/siguiente.
- Lista de boletos que presenta los datos ya existentes en `ticketEvents`.
- Carrito de compra simulada en una ventana emergente: permite agregar boletos desde las especificaciones del evento, acumular cantidades, quitar boletos y consultar el total.
- La barra de búsqueda sirve de manera correcta al buscar una categoria o cartel.
- El antiguo `src/main.js` se conserva, pero ya no se carga con React.

## Organización para el equipo

- Integrante 1: `estructura/componentes/BarraBusqueda.jsx` y `GenerosCategorias.jsx`.
- Integrante 2: `estructura/componentes/Carrusel.jsx`, `TarjetaCarrusel.jsx`, `ListaBoletos.jsx` y `TarjetaBoleto.jsx`.
- Integrante 3: `estructura/componentes/DetallesEvento.jsx`.
- Integrante 4: `estructura/componentes/CompraSimulada.jsx` y `ResumenCompra.jsx`.
- Integrante 5: `estructura/paginas/Inicio.jsx`, `estructura/App.jsx` y `estructura/diseno.css`.

Los detalles de los eventos se muestran en una ventana emergente. El carrito se abre desde el ícono del encabezado.

## Ejecutar localmente

Desde la carpeta del proyecto, instala las dependencias y arranca el servidor de desarrollo:

```powershell
npm install
npm run dev
```

Abre la dirección local que muestra Vite en la terminal (normalmente <http://127.0.0.1:5173>). No abras `index.html` directamente como archivo; utiliza el servidor de desarrollo.

## Compilación y pruebas

Ejecuta `npm run build` para comprobar y generar la aplicación en `dist/`. No hay una suite automatizada; las funcionalidades de búsqueda y compra descritas como pendientes no se pueden probar todavía.

## Almacenamiento local y límites

La preferencia del tema y un marcador de estado de demostración se guardan en `localStorage` en el navegador actual. El carrito se conserva en memoria mientras la página está abierta. No se sincroniza entre dispositivos ni usuarios y no hay formulario de compra ni pagos reales.

Las imágenes de ejemplo se cargan desde Unsplash y las tipografías desde Google Fonts; ambos recursos requieren conexión a internet y cuentan con alternativas locales del sistema para el texto. Los datos de eventos y disponibilidad son ficticios.

## Plan de trabajo Scrum

Este plan describe trabajo futuro y no implica ceremonias, entregables ni resultados ya realizados.

1. **Sprint 1 — Estructura y catálogo:** base React, diseño existente, categorías y carrusel de carteles.
2. **Sprint 2 — Catálogo y detalles:** conectar la búsqueda y las tarjetas de boletos, y desarrollar los detalles de eventos.
3. **Sprint 3 — Compra simulada y publicación:** implementar la compra ficticia y verificar la publicación.
4. **Sprint 4 _ Pruebas y correcciones:** Comprobar la funcionalidad de todos lo botones y secciones del sistema.
5. **Sprint 5 _ Lanzamiento de la aplicacion:** Se debe poder abrir en cualquier navegador con solo el link.
## GitHub Pages

La configuración de Vite usa rutas relativas para los recursos generados. Para publicar en GitHub Pages, compila con `npm run build` y configura un flujo de despliegue que publique el contenido de `dist/`. La publicación debe comprobarse después de que GitHub complete el despliegue.
