import { Card, Badge, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function TarjetaGrupo({ materia, profesor, integrantes }) {
  return (
    <Card as="article" className="h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h2" className="h4">{materia}</Card.Title>
        <Card.Text className="text-body-secondary">Prof. {profesor}</Card.Text>
        <Badge bg="light" text="dark" pill className="border border-dark align-self-start mb-3">
          {integrantes} integrantes
        </Badge>
        <Button as={Link} to="/alumno/chat" variant="primary" className="mt-auto">
          Ir al chat del grupo
        </Button>
      </Card.Body>
    </Card>
  )
}

export default TarjetaGrupo

