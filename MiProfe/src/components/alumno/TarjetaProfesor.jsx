import { Badge, Card } from 'react-bootstrap'
import '../../styles/alumno.css'

// Tarjeta de profesor con banner y avatar (.profesor-card de principalAlumno.html y MisProfesores.html)
function TarjetaProfesor({ nombre, iniciales, materia, children }) {
  return (
    <Card as="article" className="profesor-card h-100">
      <Card.Header className="profesor-card-banner"></Card.Header>
      <Card.Body className="d-flex flex-column align-items-center">
        <div className="avatar avatar--grande profesor-card-avatar" aria-hidden="true">{iniciales}</div>
        <Card.Title as="h3" className="mb-1">{nombre}</Card.Title>
        <Badge bg="primary" pill className="mb-2">{materia}</Badge>
        {children}
      </Card.Body>
    </Card>
  )
}
export default TarjetaProfesor
