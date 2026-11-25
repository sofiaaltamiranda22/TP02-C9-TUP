// Pagina 404 para las rutas que no existen
import { Link } from 'react-router-dom'
import ContenidoPagina from '../components/layout/ContenidoPagina'
import logo from '../assets/img/Logo_Principal.png'

function Error404() {
  return (
    <>
      <title>Página no encontrada - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <article className="cuadro text-center align-items-center py-5 px-4 mx-auto" style={{ maxWidth: '560px' }}>
          <img src={logo} alt="" width="120" height="120" className="rounded-circle mb-3" />
          <p className="display-1 fw-bold text-primary mb-0 mi-titulo">404</p>
          <h1 className="h2 mb-2">Uy, esta página no existe</h1>
          <p className="text-body-secondary mb-4">La dirección que buscás no existe o se movió.</p>
          <Link to="/" className="btn btn-primary">
            Volver al inicio
          </Link>
        </article>
      </ContenidoPagina>
    </>
  )
}

export default Error404
