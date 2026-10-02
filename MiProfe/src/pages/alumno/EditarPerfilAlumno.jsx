// Editar perfil del alumno
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
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
        <section>
          <h1 className="mb-4">Editar mi perfil</h1>

          <Form onSubmit={guardar} className="d-flex flex-column gap-3">
            <div className="d-flex flex-wrap align-items-center gap-3">
              <Avatar iniciales={alumno.iniciales} tamano="grande" />
              <Form.Group controlId="foto" className="flex-grow-1">
                <Form.Label>Foto de perfil</Form.Label>
                <Form.Control type="file" name="foto" accept="image/*" />
              </Form.Group>
            </div>

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

            <div className="d-flex gap-2">
              <Button type="submit">Guardar cambios</Button>
              <Button as={Link} to="/alumno" variant="outline-dark">
                Cancelar
              </Button>
            </div>
          </Form>
        </section>
      </ContenidoPagina>
    </>
  )
}

export default EditarPerfilAlumno
