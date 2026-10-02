import { Badge, Card } from 'react-bootstrap'
import Avatar from '../common/Avatar'
import '../../styles/alumno.css'

// Tarjeta de profesor con banner y avatar. Lo que va abajo (precio, botones) llega como children
function TarjetaProfesor({ nombre, iniciales, materia, children }) {
  return (
    <Card as="article" className="profesor-card h-100 text-center">
      <Card.Header className="bg-light py-4"></Card.Header>
      <Card.Body className="d-flex flex-column align-items-center">
        <Avatar iniciales={iniciales} tamano="grande" className="profesor-card-avatar" />
        <Card.Title as="h3" className="mb-1">{nombre}</Card.Title>
        <Badge bg="primary" pill className="mb-2">{materia}</Badge>
        {children}
      </Card.Body>
    </Card>
  )
}
export default TarjetaProfesor
