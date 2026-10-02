// Grupos del profesor
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import TarjetaResumen from '../../components/profesor/TarjetaResumen'
import { grupos } from '../../data/profesor'

function GruposProfesor() {
  return (
    <>
      <title>Grupos - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <section>
          <h1 className="mb-2">Mis grupos</h1>
          <p className="text-body-secondary mb-4">Los grupos de estudio que armaste con tus alumnos.</p>
          <Row className="g-4">
            {grupos.map((grupo) => (
              <Col md={6} key={grupo.id}>
                <TarjetaResumen titulo={grupo.nombre} numero={grupo.alumnos} detalle="alumnos en el grupo" color={grupo.color}>
                  <Button as={Link} to="/profesor/chat" className="mt-auto">
                    Ir al chat del grupo
                  </Button>
                </TarjetaResumen>
              </Col>
            ))}
          </Row>
        </section>
      </ContenidoPagina>
    </>
  )
}

export default GruposProfesor
