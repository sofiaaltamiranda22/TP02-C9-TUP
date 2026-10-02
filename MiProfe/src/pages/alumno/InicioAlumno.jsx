// Inicio del alumno
import { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import Avatar from '../../components/common/Avatar'
import SeccionProfesores from '../../components/alumno/SeccionProfesores'
import { alumno, profesores, materias, modalidades } from '../../data/alumno'

function InicioAlumno() {
  const [materia, setMateria] = useState('')
  const [modalidad, setModalidad] = useState('')
  const [precioMaximo, setPrecioMaximo] = useState('')

  // Deja solo los profesores que coinciden con los filtros elegidos
  const filtrados = profesores.filter(
    (profesor) =>
      (materia === '' || profesor.materia === materia) &&
      (modalidad === '' || profesor.modalidad === modalidad) &&
      (precioMaximo === '' || profesor.precio <= Number(precioMaximo)),
  )

  return (
    <>
      <title>Inicio - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <section className="d-flex flex-wrap align-items-center gap-3">
          <Avatar iniciales={alumno.iniciales} tamano="grande" />
          <div className="flex-grow-1">
            <h1 className="mb-1">Hola, {alumno.nombre}</h1>
            <p className="mb-0 text-body-secondary">
              {alumno.nivelTexto} · {alumno.ubicacion}
            </p>
          </div>
          <Button as={Link} to="/alumno/editar-perfil" variant="outline-dark">
            Editar perfil
          </Button>
        </section>

        <section>
          <h2 className="mb-3">Buscar profesores</h2>
          <Form onSubmit={(evento) => evento.preventDefault()} className="p-3 bg-light border border-2 border-dark rounded">
            <Row className="g-3">
              <Col md={4}>
                <Form.Group controlId="filtro-materia">
                  <Form.Label>Materia</Form.Label>
                  <Form.Select value={materia} onChange={(evento) => setMateria(evento.target.value)}>
                    <option value="">Todas</option>
                    {materias.map((opcion) => (
                      <option key={opcion}>{opcion}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="filtro-modalidad">
                  <Form.Label>Modalidad</Form.Label>
                  <Form.Select value={modalidad} onChange={(evento) => setModalidad(evento.target.value)}>
                    <option value="">Todas</option>
                    {modalidades.map((opcion) => (
                      <option key={opcion}>{opcion}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="filtro-precio">
                  <Form.Label>Precio máximo por hora</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    placeholder="$5000"
                    value={precioMaximo}
                    onChange={(evento) => setPrecioMaximo(evento.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </section>

        <SeccionProfesores
          titulo="Profesores cercanos"
          profesores={filtrados.filter((profesor) => profesor.cercano)}
        />
        <SeccionProfesores
          titulo="Recomendados para vos"
          profesores={filtrados.filter((profesor) => profesor.recomendado)}
        />
      </ContenidoPagina>
    </>
  )
}

export default InicioAlumno
