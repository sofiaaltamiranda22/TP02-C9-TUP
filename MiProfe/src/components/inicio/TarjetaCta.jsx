import { Card, Button } from 'react-bootstrap'

function TarjetaCta({ titulo, texto, textoBoton, fondo, varianteBoton }) {
  return (
    <Card as="article" bg={fondo} text="white" className="h-100">
      <Card.Body>
        <Card.Title as="h3">{titulo}</Card.Title>
        <Card.Text>{texto}</Card.Text>
        <Button variant={varianteBoton} href="#">{textoBoton}</Button>
      </Card.Body>
    </Card>
  )
}

export default TarjetaCta
