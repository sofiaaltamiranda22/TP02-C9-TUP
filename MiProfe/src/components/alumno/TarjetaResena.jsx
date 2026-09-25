import { Card } from 'react-bootstrap'

function TarjetaResena({ estrellas, comentario, autor }) {
  return (
    <Card as="article">
      <Card.Body>
        <p className="fw-bold text-warning mb-1">Calificación: {estrellas} estrellas</p>
        <Card.Text className="mb-0">"{comentario}" - {autor}</Card.Text>
      </Card.Body>
    </Card>
  )
}
export default TarjetaResena
