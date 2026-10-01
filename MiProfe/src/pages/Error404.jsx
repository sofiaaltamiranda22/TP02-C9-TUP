// Pagina 404 para las rutas que no existen
import ContenidoPagina from '../components/layout/ContenidoPagina'

function Error404() {
  return (
    <ContenidoPagina>
      <section>
        <h1>Página no encontrada</h1>
      </section>
    </ContenidoPagina>
  )
}

export default Error404
