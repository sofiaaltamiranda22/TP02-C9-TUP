// Pagina 404 para las rutas que no existen
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContenidoPagina from '../components/layout/ContenidoPagina'

function Error404() {
  return (
    <>
      <title>Página no encontrada - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <section className="text-center py-4">
          <p className="display-1 fw-bold text-primary mb-0">404</p>
          <h1 className="mb-3">Página no encontrada</h1>
          <p className="text-body-secondary mb-4">La dirección que buscás no existe o se movió.</p>
          <Button as={Link} to="/">
            Volver al inicio
          </Button>
        </section>
      </ContenidoPagina>
    </>
  )
}

export default Error404
