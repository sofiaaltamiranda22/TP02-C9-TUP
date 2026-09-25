import { Card } from 'react-bootstrap'

function TarjetaBeneficio({ icono, titulo, texto }) {
  return (
    <Card as="article" className="h-100 text-center">
      <Card.Body>
        <img src={icono} alt="" width="40" height="40" className="mb-2" />
        <Card.Title as="h3" className="h5">{titulo}</Card.Title>
        <Card.Text>{texto}</Card.Text>
      </Card.Body>
    </Card>
  )
}
export default TarjetaBeneficio
