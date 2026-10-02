// Solicitud de clase de un alumno. Que pasa al aceptar o rechazar lo decide la pagina (llega por props)
import { Card, Button } from 'react-bootstrap'
import Avatar from '../common/Avatar'

function TarjetaSolicitud({ nombre, iniciales, materia, horario, onAceptar, onRechazar }) {
  return (
    <Card as="article">
      <Card.Body className="d-flex flex-wrap align-items-center gap-3">
        <Avatar iniciales={iniciales} tamano="chico" />
        <div className="flex-grow-1">
          <Card.Title as="h2" className="h5 mb-1">{nombre}</Card.Title>
          <p className="mb-0"><strong>Materia:</strong> {materia}</p>
          <p className="mb-0"><strong>Horario propuesto:</strong> {horario}</p>
        </div>
        <div className="d-flex gap-2">
          <Button variant="success" onClick={onAceptar}>Aceptar</Button>
          <Button variant="outline-danger" onClick={onRechazar}>Rechazar</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default TarjetaSolicitud
