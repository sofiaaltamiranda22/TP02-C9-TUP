// Seccion con un titulo y una grilla de tarjetas de profesor (Profesores cercanos y Recomendados)
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TarjetaProfesor from './TarjetaProfesor'

function SeccionProfesores({ titulo, profesores }) {
  return (
    <section>
      <h2 className="mb-4">{titulo}</h2>

      {profesores.length === 0 && <p className="text-body-secondary">No hay profesores con esos filtros.</p>}

      <Row className="g-4">
        {profesores.map((profesor) => (
          <Col md={6} lg={4} key={profesor.id}>
            <TarjetaProfesor nombre={profesor.nombre} iniciales={profesor.iniciales} materia={profesor.materia}>
              <p className="mb-1">Modalidad: {profesor.modalidad}</p>
              <p className="mb-3">
                ${profesor.precio.toLocaleString('es-AR')}/hora · ★ {profesor.calificacion}
              </p>
              <Button
                as={Link}
                to={`/alumno/profesores/${profesor.id}`}
                variant="outline-dark"
                size="sm"
                className="mt-auto rounded-pill"
              >
                Ver perfil
              </Button>
            </TarjetaProfesor>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default SeccionProfesores
