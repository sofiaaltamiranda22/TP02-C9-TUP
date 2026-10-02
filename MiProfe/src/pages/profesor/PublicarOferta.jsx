// Publicar oferta de clases
import { useState } from 'react'
import { Form, Button, Row, Col, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import SelectNivel from '../../components/common/SelectNivel'
import { modalidades } from '../../data/profesor'

function PublicarOferta() {
  const [publicada, setPublicada] = useState(false)

  // Todavia no hay backend: muestra el aviso y deja el formulario vacio para otra oferta
  const publicar = (evento) => {
    evento.preventDefault()
    setPublicada(true)
    evento.target.reset()
  }

  return (
    <>
      <title>Publicar oferta - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <section>
          <h1 className="mb-2">Publicar oferta de clases</h1>
          <p className="text-body-secondary mb-4">
            Contales a los alumnos qué enseñás, cuánto cobrás y cuándo podés dar clases.
          </p>

          {publicada && (
            <Alert variant="success" dismissible onClose={() => setPublicada(false)}>
              ¡Listo! Tu oferta ya está publicada.
            </Alert>
          )}

          <Form onSubmit={publicar}>
            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="materia">
                  <Form.Label>Materia</Form.Label>
                  <Form.Control name="materia" placeholder="Ej: Matemática" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <SelectNivel id="nivel" label="Nivel educativo" />
              </Col>
              <Col xs={12}>
                <Form.Group controlId="descripcion">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="descripcion"
                    placeholder="Contales a los alumnos sobre tu experiencia y metodología"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="precio">
                  <Form.Label>Precio por hora</Form.Label>
                  <Form.Control type="number" name="precio" min="0" placeholder="4500" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Label className="d-block">Modalidad</Form.Label>
                {modalidades.map((modalidad) => (
                  <Form.Check
                    inline
                    key={modalidad}
                    id={`modalidad-${modalidad}`}
                    name="modalidad"
                    value={modalidad}
                    label={modalidad}
                  />
                ))}
              </Col>
              <Col md={6}>
                <Form.Group controlId="zona">
                  <Form.Label>Zona / Ubicación</Form.Label>
                  <Form.Control name="zona" placeholder="Ej: Barrio Sur, San Miguel de Tucumán" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="horarios">
                  <Form.Label>Horarios disponibles</Form.Label>
                  <Form.Control name="horarios" placeholder="Ej: Lunes a viernes de 16 a 20hs" />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex gap-2 mt-4">
              <Button type="submit">Publicar oferta</Button>
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

export default PublicarOferta
