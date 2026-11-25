import { Star, UserCircleGear } from '@phosphor-icons/react'
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import EncabezadoPagina from '../../components/common/EncabezadoPagina'
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
        <EncabezadoPagina icono={<UserCircleGear weight="duotone" />} titulo="Editar mi perfil" bajada="Estos datos son los que ven los alumnos cuando te buscan." />

        <section className="bento">
          <article className="cuadro ancho-8 p-4 p-md-5">

          <Form onSubmit={guardar}>
            <header className="d-flex flex-wrap align-items-center gap-3 mb-3">
              <Avatar iniciales={profesor.iniciales} tamano="grande" />
              <Form.Group controlId="foto" className="flex-grow-1">
                <Form.Label>Foto de perfil</Form.Label>
                <Form.Control type="file" name="foto" accept="image/*" />
              </Form.Group>
            </header>

            <section className="campos-grilla">
              <section>
                <Form.Group controlId="nombre">
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control name="nombre" defaultValue={profesor.nombre} required />
                </Form.Group>
              </section>
              <section>
                <Form.Group controlId="materia">
                  <Form.Label>Materia</Form.Label>
                  <Form.Control name="materia" defaultValue={profesor.materia} required />
                </Form.Group>
              </section>
              <section>
                <SelectNivel id="nivel" label="Nivel educativo" valorInicial={profesor.nivel} />
              </section>
              <section>
                <Form.Group controlId="precio">
                  <Form.Label>Precio por hora</Form.Label>
                  <Form.Control type="number" name="precio" min="0" defaultValue={profesor.precio} required />
                </Form.Group>
              </section>
              <section className="ocupa-todo">
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
              </section>
              <section className="ocupa-todo">
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
              </section>
              <section>
                <Form.Group controlId="ubicacion">
                  <Form.Label>Ubicación</Form.Label>
                  <Form.Control name="ubicacion" defaultValue={profesor.ubicacion} />
                </Form.Group>
              </section>
              <section>
                <Form.Group controlId="horarios">
                  <Form.Label>Horarios disponibles</Form.Label>
                  <Form.Control name="horarios" defaultValue={profesor.horarios} />
                </Form.Group>
              </section>
            </section>

            <footer className="d-flex flex-wrap gap-2 mt-4">
              <Button type="submit">Guardar cambios</Button>
              <Button as={Link} to="/profesor" variant="outline-dark">
                Cancelar
              </Button>
            </footer>
          </Form>
          </article>

          <aside className="cuadro cuadro--azul ancho-4 align-items-center text-center p-4">
            <p className="cuadro-etiqueta pe-0">Así te ven los alumnos</p>
            <Avatar iniciales={profesor.iniciales} tamano="grande" className="my-3" />
            <h2 className="h4 mb-1">{profesor.nombre}</h2>
            <p className="mb-2">{profesor.materia}</p>
            <p className="cuadro-numero h2">${profesor.precio.toLocaleString('es-AR')}<small className="fs-6"> /hora</small></p>
            <p className="small mb-0"><Star weight="fill" className="text-warning" /> {profesor.calificacion} · {profesor.cantidadResenas} reseñas</p>
          </aside>
        </section>
      </ContenidoPagina>
    </>
  )
}

export default EditarPerfilProfesor
