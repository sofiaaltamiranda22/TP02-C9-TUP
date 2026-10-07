// Inicio del alumno
import { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import Avatar from '../../components/common/Avatar'
import SeccionProfesores from '../../components/alumno/SeccionProfesores'
import { alumno, profesores, materias, modalidades } from '../../data/alumno'

const filtrosVacios = { materia: '', modalidad: '', precioMaximo: '' }

function InicioAlumno() {
  // Arranca con los filtros que usaste la ultima vez (guardados en el navegador)
  const [filtros, setFiltros] = useState(() => JSON.parse(localStorage.getItem('miprofe-filtros')) ?? filtrosVacios)

  // Cada vez que cambia un filtro lo guarda, asi al volver al inicio siguen puestos
  useEffect(() => {
    localStorage.setItem('miprofe-filtros', JSON.stringify(filtros))
  }, [filtros])

  // Cambia solo el filtro que se toco (por el name del campo) y deja los demas como estaban
  const cambiarFiltro = (evento) => {
    setFiltros({ ...filtros, [evento.target.name]: evento.target.value })
  }

  // Deja solo los profesores que coinciden con los filtros elegidos
  const filtrados = profesores.filter(
    (profesor) =>
      (filtros.materia === '' || profesor.materia === filtros.materia) &&
      (filtros.modalidad === '' || profesor.modalidad === filtros.modalidad) &&
      (filtros.precioMaximo === '' || profesor.precio <= Number(filtros.precioMaximo)),
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
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
            <h2 className="mb-0">Buscar profesores</h2>
            <Button variant="link" onClick={() => setFiltros(filtrosVacios)}>
              Limpiar filtros
            </Button>
          </div>
          <Form onSubmit={(evento) => evento.preventDefault()} className="p-3 bg-light border border-2 border-dark rounded">
            <Row className="g-3">
              <Col md={4}>
                <Form.Group controlId="filtro-materia">
                  <Form.Label>Materia</Form.Label>
                  <Form.Select name="materia" value={filtros.materia} onChange={cambiarFiltro}>
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
                  <Form.Select name="modalidad" value={filtros.modalidad} onChange={cambiarFiltro}>
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
                    name="precioMaximo"
                    min="0"
                    placeholder="$5000"
                    value={filtros.precioMaximo}
                    onChange={cambiarFiltro}
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

