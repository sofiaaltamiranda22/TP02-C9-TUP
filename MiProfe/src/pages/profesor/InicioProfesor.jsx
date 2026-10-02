// Inicio del profesor
import { Row, Col, Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import TarjetaPerfilProfesor from '../../components/profesor/TarjetaPerfilProfesor'
import TarjetaResumen from '../../components/profesor/TarjetaResumen'
import { profesor, resumen, proximasClases } from '../../data/profesor'

function InicioProfesor() {
  return (
    <>
      <title>Inicio profesor - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <section>
          <h1 className="mb-4">Mi panel</h1>
          <TarjetaPerfilProfesor
            nombre={profesor.nombre}
            iniciales={profesor.iniciales}
            materia={profesor.materia}
            calificacion={profesor.calificacion}
            cantidadResenas={profesor.cantidadResenas}
            nivel={profesor.nivelTexto}
            ubicacion={profesor.ubicacion}
            precio={profesor.precio}
            modalidad={profesor.modalidades.join(' y ')}
          />
        </section>

        <section>
          <h2 className="mb-4">Resumen</h2>
          <Row className="g-4">
            {resumen.map((item) => (
              <Col md={4} key={item.id}>
                <TarjetaResumen titulo={item.titulo} numero={item.numero} detalle={item.detalle} color={item.color}>
                  {item.ruta && (
                    <Button as={Link} to={item.ruta} variant="outline-dark" size="sm" className="mt-auto align-self-start">
                      {item.textoLink}
                    </Button>
                  )}
                </TarjetaResumen>
              </Col>
            ))}
          </Row>
        </section>

        <section>
          <h2 className="mb-3">Próximas clases</h2>
          <ListGroup>
            {proximasClases.map((clase) => (
              <ListGroup.Item key={clase.id} className="d-flex justify-content-between">
                <span className="fw-bold">{clase.dia}</span>
                <span>{clase.alumno}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </section>
      </ContenidoPagina>
    </>
  )
}

export default InicioProfesor
