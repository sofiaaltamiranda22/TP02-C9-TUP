import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function TarjetaCta({ titulo, texto, textoBoton, fondo, varianteBoton }) {
  return (
    <Card as="article" bg={fondo} text="white" className="h-100">
      <Card.Body>
        <Card.Title as="h3">{titulo}</Card.Title>
        <Card.Text>{texto}</Card.Text>
        <Button as={Link} to="/registro" variant={varianteBoton}>
          {textoBoton}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default TarjetaCta
