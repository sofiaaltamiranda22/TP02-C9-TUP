import { Card, Badge, Button } from 'react-bootstrap'

function TarjetaGrupo({ materia, profesor, integrantes }) {
  return (
    <Card as="article" className="h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3">{materia}</Card.Title>
        <Card.Text className="text-secondary">Prof. {profesor}</Card.Text>
        <Badge bg="secondary" pill className="mb-3">{integrantes} integrantes</Badge>
        <Button variant="primary" href="#" className="mt-auto">Ir al chat del grupo</Button>
      </Card.Body>
    </Card>
  )
}

export default TarjetaGrupo
