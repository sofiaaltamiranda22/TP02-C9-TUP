// Tarjeta de Login y Registro: imagen con la frase a la izquierda y el formulario a la derecha
import { Container, Row, Col } from 'react-bootstrap'
import PanelVisualAuth from './PanelVisualAuth'

function ContenidoAuth({ children }) {
  return (
    <div className="mi-fondo-puntos flex-grow-1 d-flex align-items-center py-4 px-2">
      <Container className="bg-white rounded-4 shadow overflow-hidden p-0">
        <Row className="g-0">
          <Col lg={5}>
            <PanelVisualAuth
              frase="Encontrá el profesor particular ideal para vos"
              detalle="Clases virtuales, presenciales o ambas. Buscá, chateá y coordiná todo en un solo lugar."
            />
          </Col>
          <Col lg={7} as="section" className="p-4 p-md-5">
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContenidoAuth
