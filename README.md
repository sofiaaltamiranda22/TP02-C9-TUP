# Nombre del Proyecto: Mi Profe

🔗 Sitio en producción: https://miprofe-rosy.vercel.app/

## Integrantes:

- Hernan Alvarez
- Sofia Altamiranda
- Guillermo Cortes

## 📚 Descripción del proyecto

**MiProfe** es una plataforma web que conecta alumnos con profesores particulares según su **ubicación, materia y modalidad de enseñanza**.

Los alumnos pueden buscar profesores, consultar sus perfiles, precios, horarios y reseñas, y mandarles una solicitud de clase. Los profesores pueden publicar su oferta, recibir solicitudes y organizar sus grupos y chats.

En este repositorio pasamos a **React** el sitio que hicimos en HTML, CSS y JavaScript en el primer repositorio.

## ✨ Funcionalidades

- **Parte pública:** landing con buscador, beneficios, cómo funciona, materias y profesores destacados. Login y registro como alumno o como profesor.
- **Panel del alumno:** inicio con filtros por materia, modalidad y precio, profesores cercanos y recomendados, perfil de cada profesor con horarios y reseñas, mis profesores, grupos, chat y editar perfil.
- **Panel del profesor:** resumen, solicitudes de alumnos, grupos, chat, publicar oferta y editar perfil.
- Navbar que cambia los links según la sección (pública, alumno o profesor) y página 404 para las rutas que no existen.

## 🚦 Estado del proyecto

Por ahora es solo el front-end. Los profesores, grupos y mensajes que se ven son datos de ejemplo que están en `src/data`, y el login y el registro todavía no autentican de verdad.

## 🛠️ Tecnologías utilizadas

- React 19 + Vite
- React Router (`react-router-dom`) para la navegación entre páginas
- React Bootstrap y Bootstrap 5.3 para casi todos los estilos
- CSS propio mínimo (menos del 15% del código), solo para lo que Bootstrap no trae
- Google Fonts (Manrope y Plus Jakarta Sans)
- Vercel para el deploy

## ▶️ Instalación y ejecución

Necesitás tener instalado Node.js 20 o más nuevo.

```bash
git clone https://github.com/sofiaaltamiranda22/TP02-C9-TUP.git
cd TP02-C9-TUP/MiProfe
npm install
npm run dev
```

Después abrí http://localhost:5173 en el navegador.

Otros comandos:

- `npm run build`: genera la versión de producción en `dist/`
- `npm run preview`: muestra esa versión de producción
- `npm run lint`: revisa el código con ESLint

## 📂 Estructura del proyecto

```
MiProfe/
├── index.html              # Metadatos de SEO y fuentes
├── vercel.json             # Hace que las rutas de React Router funcionen en Vercel
├── public/                 # logo, robots.txt y sitemap.xml
└── src/
    ├── main.jsx            # Envuelve la app con BrowserRouter
    ├── App.jsx             # Nav + rutas + Footer
    ├── index.css           # Colores de la marca y el poco CSS propio
    ├── components/
    │   ├── Routes/         # AppRoutes.jsx: todas las rutas del sitio
    │   ├── layout/         # Nav, Footer y ContenidoPagina
    │   ├── common/         # Avatar y SelectNivel, que se usan en varias secciones
    │   ├── inicio/         # Tarjetas de la landing
    │   ├── auth/           # Login y registro
    │   ├── alumno/         # Tarjetas y secciones del panel del alumno
    │   └── profesor/       # Tarjetas del panel del profesor
    ├── pages/              # Una página por vista, separadas por sección
    │   ├── principal/      # Inicio, Login y Registro
    │   ├── alumno/
    │   ├── profesor/
    │   └── Error404.jsx
    ├── data/               # Datos de ejemplo que las páginas recorren con map()
    ├── styles/             # CSS propio de algunas secciones
    └── assets/img/         # Logo, íconos e imágenes
```

## 🧭 Rutas

| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/login` | Login |
| `/registro` | Registro |
| `/alumno` | Inicio del alumno |
| `/alumno/profesores` | Mis profesores |
| `/alumno/profesores/:id` | Perfil de un profesor |
| `/alumno/grupos` | Grupos del alumno |
| `/alumno/chat` | Chat del alumno |
| `/alumno/editar-perfil` | Editar perfil del alumno |
| `/profesor` | Inicio del profesor |
| `/profesor/solicitudes` | Solicitudes |
| `/profesor/grupos` | Grupos del profesor |
| `/profesor/chat` | Chat del profesor |
| `/profesor/publicar-oferta` | Publicar oferta |
| `/profesor/editar-perfil` | Editar perfil del profesor |
| `*` | Página no encontrada (404) |

Las rutas están en `src/components/Routes/AppRoutes.jsx`. Para navegar usamos `Link` y `NavLink`, y el perfil del profesor es una ruta dinámica: lee el `id` de la URL con `useParams` y busca a ese profesor en los datos.

## 🧩 Componentes, props y map()

Dividimos la interfaz en componentes reutilizables que reciben la información por **props**, y las listas se arman recorriendo arrays de `src/data` con **map()**, sin repetir código. Por ejemplo, en la landing:

```jsx
{beneficios.map((beneficio) => (
  <Col md={4} key={beneficio.id}>
    <TarjetaBeneficio icono={beneficio.icono} titulo={beneficio.titulo} texto={beneficio.texto} />
  </Col>
))}
```

`TarjetaBeneficio` es siempre el mismo componente: lo que cambia son las props que le llegan. Lo mismo pasa con las tarjetas de profesores, grupos, reseñas, mensajes del chat, los links del navbar y las opciones de los select.

## 🔍 SEO

- `index.html` con `lang="es"`, título descriptivo, `meta description`, `canonical`, Open Graph y Twitter Card para que el link se vea bien al compartirlo.
- Cada página tiene su propio `<title>` (React 19 lo sube solo al `<head>`).
- Las páginas privadas (login, registro, alumno y profesor) llevan `<meta name="robots" content="noindex">`.
- `robots.txt` bloquea las páginas privadas y `sitemap.xml` tiene la home, que es la única página pública.
- Etiquetas semánticas (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`), un solo `h1` por página y `alt` en las imágenes.
