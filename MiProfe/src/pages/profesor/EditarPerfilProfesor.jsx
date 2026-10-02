import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import Avatar from '../../components/common/Avatar'
import SelectNivel from '../../components/common/SelectNivel'
import { profesor, modalidades } from '../../data/profesor'

function EditarPerfilProfesor() {
  const navigate = useNavigate()

  // Todavia no hay backend: al guardar vuelve al inicio del profesor
  const guardar = (evento) => {
    evento.preventDefault()
    navigate('/profesor')
  }

  return (
    <>
      <title>Editar perfil - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <section>
          <h1 className="mb-4">Editar mi perfil</h1>

          <Form onSubmit={guardar}>
            <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
              <Avatar iniciales={profesor.iniciales} tamano="grande" />
              <Form.Group controlId="foto" className="flex-grow-1">
                <Form.Label>Foto de perfil</Form.Label>
                <Form.Control type="file" name="foto" accept="image/*" />
              </Form.Group>
            </div>

            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="nombre">
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control name="nombre" defaultValue={profesor.nombre} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="materia">
                  <Form.Label>Materia</Form.Label>
                  <Form.Control name="materia" defaultValue={profesor.materia} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <SelectNivel id="nivel" label="Nivel educativo" valorInicial={profesor.nivel} />
              </Col>
              <Col md={6}>
                <Form.Group controlId="precio">
                  <Form.Label>Precio por hora</Form.Label>
                  <Form.Control type="number" name="precio" min="0" defaultValue={profesor.precio} required />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group controlId="descripcion">
                  <Form.Label>Sobre mí</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="descripcion"
                    defaultValue={profesor.descripcion}
                    placeholder="Contales a los alumnos sobre tu experiencia y metodología"
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Label className="d-block">Modalidad</Form.Label>
                {modalidades.map((modalidad) => (
                  <Form.Check
                    inline
                    key={modalidad}
                    id={`modalidad-${modalidad}`}
                    name="modalidad"
                    value={modalidad}
                    label={modalidad}
                    defaultChecked={profesor.modalidades.includes(modalidad)}
                  />
                ))}
              </Col>
              <Col md={6}>
                <Form.Group controlId="ubicacion">
                  <Form.Label>Ubicación</Form.Label>
                  <Form.Control name="ubicacion" defaultValue={profesor.ubicacion} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="horarios">
                  <Form.Label>Horarios disponibles</Form.Label>
                  <Form.Control name="horarios" defaultValue={profesor.horarios} />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex gap-2 mt-4">
              <Button type="submit">Guardar cambios</Button>
              <Button as={Link} to="/profesor" variant="outline-dark">
                Cancelar
              </Button>
            </div>
          </Form>
        </section>
      </ContenidoPagina>
    </>
  )
}

export default EditarPerfilProfesor
