// Fondo con puntos y caja blanca de cada pagina
import { Container } from 'react-bootstrap'

function ContenidoPagina({ children }) {
  return (
    <div className="mi-fondo-puntos flex-grow-1 d-flex align-items-center py-4 py-md-5 px-2">
      <Container className="bg-white border border-2 border-dark rounded p-4 p-md-5 d-flex flex-column gap-5">
        {children}
      </Container>
    </div>
  )
}

export default ContenidoPagina
