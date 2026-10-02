// Profesores contratados
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import TarjetaProfesor from '../../components/alumno/TarjetaProfesor'
import { profesores } from '../../data/alumno'

function MisProfesores() {
  const contratados = profesores.filter((profesor) => profesor.contratado)

  return (
    <>
      <title>Mis profesores - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <section>
          <h1 className="mb-4">Mis profesores</h1>
          <Row className="g-4">
            {contratados.map((profesor) => (
              <Col md={6} lg={3} key={profesor.id}>
                <TarjetaProfesor nombre={profesor.nombre} iniciales={profesor.iniciales} materia={profesor.materia}>
                  <p className="mb-3">Próxima clase: {profesor.proximaClase}</p>
                  <div className="d-flex gap-2 mt-auto">
                    <Button
                      as={Link}
                      to={`/alumno/profesores/${profesor.id}`}
                      variant="outline-dark"
                      size="sm"
                      className="rounded-pill"
                    >
                      Ver perfil
                    </Button>
                    <Button as={Link} to="/alumno/chat" size="sm" className="rounded-pill">
                      Chatear
                    </Button>
                  </div>
                </TarjetaProfesor>
              </Col>
            ))}
          </Row>
        </section>
      </ContenidoPagina>
    </>
  )
}

export default MisProfesores
