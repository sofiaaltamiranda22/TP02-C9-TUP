// Tarjeta con un numero grande y un puntito de color al lado del titulo. La usan el Resumen del inicio y los Grupos
import { Card } from 'react-bootstrap'

function TarjetaResumen({ titulo, numero, detalle, color = 'primary', children }) {
  return (
    <Card as="article" className="h-100">
      <Card.Body className="d-flex flex-column p-4">
        <Card.Title as="h3" className="h6 d-flex align-items-center gap-2 text-body-secondary fw-semibold">
          <span className={`bg-${color} rounded-circle d-inline-block`} style={{ width: '10px', height: '10px' }}></span>
          {titulo}
        </Card.Title>
        <p className="display-6 fw-bold mb-0 mi-titulo">{numero}</p>
        <p className="text-body-secondary small">{detalle}</p>
        {children}
      </Card.Body>
    </Card>
  )
}

export default TarjetaResumen
