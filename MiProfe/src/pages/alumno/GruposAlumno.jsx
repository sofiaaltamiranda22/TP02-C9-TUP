// Grupos del alumno
import { Row, Col } from 'react-bootstrap'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import TarjetaGrupo from '../../components/alumno/TarjetaGrupo'
import { grupos } from '../../data/alumno'

function GruposAlumno() {
  return (
    <>
      <title>Grupos - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <section>
          <h1 className="mb-2">Mis grupos</h1>
          <p className="text-body-secondary mb-4">Acá están los grupos de estudio de los que formás parte.</p>
          <Row className="g-4">
            {grupos.map((grupo) => (
              <Col md={6} key={grupo.id}>
                <TarjetaGrupo materia={grupo.materia} profesor={grupo.profesor} integrantes={grupo.integrantes} />
              </Col>
            ))}
          </Row>
        </section>
      </ContenidoPagina>
    </>
  )
}

export default GruposAlumno
