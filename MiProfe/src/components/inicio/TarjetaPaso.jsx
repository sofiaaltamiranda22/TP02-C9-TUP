// Tarjeta de un paso 01/02/03 (section#como-funciona de index.html)
import { Card } from 'react-bootstrap'

function TarjetaPaso({ numero, titulo, texto }) {
  return (
    <Card as="article" className="h-100">
      <Card.Body>
        <span className="display-6 fw-bold text-primary">{numero}</span>
        <Card.Title as="h3" className="h5 mt-2">{titulo}</Card.Title>
        <Card.Text>{texto}</Card.Text>
      </Card.Body>
    </Card>
  )
}
export default TarjetaPaso
