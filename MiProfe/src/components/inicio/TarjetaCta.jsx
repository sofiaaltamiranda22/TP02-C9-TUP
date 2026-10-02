import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function TarjetaCta({ titulo, texto, textoBoton, variante = 'primary' }) {
  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Body className="p-4 d-flex flex-column justify-content-between">
        <div>
          <Card.Title as="h3" className="fw-bold mb-3">{titulo}</Card.Title>
          <Card.Text className="text-secondary">{texto}</Card.Text>
        </div>
        <Button as={Link} to="/registro" variant={variante} className="mt-3 w-100 fw-bold">
          {textoBoton}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default TarjetaCta