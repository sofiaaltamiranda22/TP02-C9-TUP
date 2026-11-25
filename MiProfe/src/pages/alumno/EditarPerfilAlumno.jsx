// Editar perfil del alumno
import { Lightbulb, UserCircleGear } from '@phosphor-icons/react'
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import EncabezadoPagina from '../../components/common/EncabezadoPagina'
import Avatar from '../../components/common/Avatar'
import SelectNivel from '../../components/common/SelectNivel'
import { alumno, materias } from '../../data/alumno'

function EditarPerfilAlumno() {
  const navigate = useNavigate()

  // Todavia no hay backend: al guardar vuelve al inicio del alumno
  const guardar = (evento) => {
    evento.preventDefault()
    navigate('/alumno')
  }

  return (
    <>
      <title>Editar perfil - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <EncabezadoPagina icono={<UserCircleGear weight="duotone" />} titulo="Editar mi perfil" bajada="Así te conocen los profesores cuando les escribís." />

        <section className="bento">
          <article className="cuadro ancho-8 p-4 p-md-5">

          <Form onSubmit={guardar} className="d-flex flex-column gap-3">
            <header className="d-flex flex-wrap align-items-center gap-3 mb-3">
              <Avatar iniciales={alumno.iniciales} tamano="grande" />
              <Form.Group controlId="foto" className="flex-grow-1">
                <Form.Label>Foto de perfil</Form.Label>
                <Form.Control type="file" name="foto" accept="image/*" />
              </Form.Group>
            </header>

            <Form.Group controlId="nombre">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control name="nombre" defaultValue={alumno.nombre} required />
            </Form.Group>

            <SelectNivel id="nivel" label="Nivel educativo" valorInicial={alumno.nivel} />

            <Form.Group controlId="descripcion">
              <Form.Label>Sobre mí</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="descripcion"
                defaultValue={alumno.descripcion}
                placeholder="Contale al profesor qué estás buscando aprender"
              />
            </Form.Group>

            <fieldset>
              <legend className="fs-6">Materias de interés</legend>
              {materias.map((materia) => (
                <Form.Check
                  inline
                  key={materia}
                  id={`materia-${materia}`}
                  name="materias"
                  value={materia}
                  label={materia}
                  defaultChecked={alumno.materias.includes(materia)}
                />
              ))}
            </fieldset>

            <Form.Group controlId="ubicacion">
              <Form.Label>Ubicación</Form.Label>
              <Form.Control name="ubicacion" defaultValue={alumno.ubicacion} />
            </Form.Group>

            <footer className="d-flex flex-wrap gap-2 mt-4">
              <Button type="submit">Guardar cambios</Button>
              <Button as={Link} to="/alumno" variant="outline-dark">
                Cancelar
              </Button>
            </footer>
          </Form>
          </article>

          <aside className="cuadro cuadro--azul ancho-4 align-items-center text-center p-4">
            <p className="cuadro-etiqueta pe-0">Así te ven</p>
            <Avatar iniciales={alumno.iniciales} tamano="grande" className="my-3" />
            <h2 className="h4 mb-1">{alumno.nombre}</h2>
            <p className="mb-3">
              {alumno.nivelTexto} · {alumno.ubicacion}
            </p>
            <p className="small mb-0"><Lightbulb weight="duotone" className="me-1" />Un perfil completo ayuda a que los profes acepten tu solicitud más rápido.</p>
          </aside>
        </section>
      </ContenidoPagina>
    </>
  )
}

export default EditarPerfilAlumno
