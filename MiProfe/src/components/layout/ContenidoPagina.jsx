// Fondo con puntos de cada pagina. El contenido va directo sobre el fondo (sin la caja blanca)
import { Container } from 'react-bootstrap'

function ContenidoPagina({ children }) {
  return (
    <div className="mi-fondo-puntos flex-grow-1 py-4 py-md-5">
      <Container className="d-flex flex-column gap-5">{children}</Container>
    </div>
  )
}

export default ContenidoPagina
