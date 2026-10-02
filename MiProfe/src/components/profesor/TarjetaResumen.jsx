// Tarjeta con un numero grande y una franja de color arriba. La usan el Resumen del inicio y los Grupos
import { Card } from 'react-bootstrap'

function TarjetaResumen({ titulo, numero, detalle, color = 'primary', children }) {
  return (
    <Card as="article" className="h-100 overflow-hidden">
      <div className={`bg-${color} py-1`}></div>
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3" className="h5">{titulo}</Card.Title>
        <p className="display-6 fw-bold mb-0">{numero}</p>
        <p className="text-body-secondary">{detalle}</p>
        {children}
      </Card.Body>
    </Card>
  )
}

export default TarjetaResumen
