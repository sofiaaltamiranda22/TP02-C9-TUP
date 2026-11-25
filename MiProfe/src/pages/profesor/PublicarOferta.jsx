// Publicar oferta de clases
import { Lightbulb, Megaphone } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Form, Button, Alert, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import EncabezadoPagina from '../../components/common/EncabezadoPagina'
import SelectNivel from '../../components/common/SelectNivel'
import { modalidades } from '../../data/profesor'

// La URL de la API sale del archivo .env, no se escribe en el componente
const API_URL = import.meta.env.VITE_API_URL

function PublicarOferta() {
  const [publicada, setPublicada] = useState(false)
  const [materia, setMateria] = useState('')
  // Lo que devolvio Wikipedia para la ultima materia buscada
  const [vistaPrevia, setVistaPrevia] = useState(null)
  const [buscando, setBuscando] = useState(false)

  // Mientras el profesor escribe la materia, espera a que deje de escribir y la busca en Wikipedia,
  // para mostrarle como van a ver los alumnos la materia en su perfil
  useEffect(() => {
    const busqueda = materia.trim()
    if (busqueda.length < 3) return

    // Si sigue escribiendo, se cancela la espera y la respuesta de la busqueda anterior se ignora
    let vigente = true
    const espera = setTimeout(async () => {
      setBuscando(true)
      try {
        const response = await axios.get(`${API_URL}/page/summary/${encodeURIComponent(busqueda)}`)
        if (!vigente) return
        setVistaPrevia({
          busqueda,
          // "standard" es una pagina normal; las que tienen varios significados no sirven como descripcion
          encontrada: response.data.type === 'standard',
          titulo: response.data.title,
          resumen: response.data.extract,
          imagen: response.data.thumbnail?.source,
        })
      } catch (error) {
        if (!vigente) return
        if (error.response?.status === 404) {
          // No es un error de conexion: esa materia no existe en Wikipedia
          setVistaPrevia({ busqueda, encontrada: false })
        } else {
          console.error(error)
          if (!Swal.isVisible()) {
            Swal.fire({
              icon: 'error',
              title: 'No pudimos buscar la materia',
              text: 'Revisá tu conexión a internet. Podés publicar la oferta igual.',
              confirmButtonText: 'Entendido',
              confirmButtonColor: '#2d8cf0',
            })
          }
        }
      } finally {
        if (vigente) setBuscando(false)
      }
    }, 600)

    return () => {
      vigente = false
      clearTimeout(espera)
    }
  }, [materia])

  const busquedaActual = materia.trim()
  const mostrarBuscando = buscando && busquedaActual.length >= 3
  const mostrarVistaPrevia = !buscando && vistaPrevia?.busqueda === busquedaActual

  // Cuando se publica una oferta, el aviso de "¡Listo!" se va solo a los 4 segundos.
  // Si el aviso se cierra antes o salis de la pagina, se cancela la espera
  useEffect(() => {
    if (!publicada) return

    const espera = setTimeout(() => setPublicada(false), 4000)
    return () => clearTimeout(espera)
  }, [publicada])

  // Todavia no hay backend: muestra el aviso y deja el formulario vacio para otra oferta
  const publicar = (evento) => {
    evento.preventDefault()
    setPublicada(true)
    evento.target.reset()
    setMateria('')
  }

  return (
    <>
      <title>Publicar oferta - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <EncabezadoPagina
          icono={<Megaphone weight="duotone" />}
          titulo="Publicar oferta de clases"
          bajada="Contales a los alumnos qué enseñás, cuánto cobrás y cuándo podés dar clases."
        />

        <section className="bento">
          <article className="cuadro ancho-8 p-4 p-md-5">

          {publicada && (
            <Alert variant="success" dismissible onClose={() => setPublicada(false)}>
              ¡Listo! Tu oferta ya está publicada.
            </Alert>
          )}

          <Form onSubmit={publicar}>
            <section className="campos-grilla">
              <section>
                <Form.Group controlId="materia">
                  <Form.Label>Materia</Form.Label>
                  <Form.Control
                    name="materia"
                    placeholder="Ej: Matemática"
                    value={materia}
                    onChange={(evento) => setMateria(evento.target.value)}
                    required
                  />
                </Form.Group>
              </section>
              <section>
                <SelectNivel id="nivel" label="Nivel educativo" />
              </section>

              {mostrarBuscando && (
                <p className="ocupa-todo d-flex align-items-center gap-2 mb-0" role="status">
                  <Spinner as="span" animation="border" size="sm" variant="primary" />
                  <span>Buscando la materia en Wikipedia...</span>
                </p>
              )}

              {mostrarVistaPrevia && vistaPrevia.encontrada && (
                <section className="ocupa-todo">
                  <figure className="p-3 bg-body-tertiary rounded-4 d-flex flex-column flex-md-row gap-3 m-0">
                    {vistaPrevia.imagen && (
                      <img src={vistaPrevia.imagen} alt={vistaPrevia.titulo} width="96" className="rounded align-self-start" />
                    )}
                    <figcaption>
                      <p className="small text-body-secondary mb-1">Así van a ver los alumnos la materia en tu perfil:</p>
                      <h2 className="h6 mb-1">{vistaPrevia.titulo}</h2>
                      <p className="small mb-0">{vistaPrevia.resumen}</p>
                    </figcaption>
                  </figure>
                </section>
              )}

              {mostrarVistaPrevia && !vistaPrevia.encontrada && (
                <section className="ocupa-todo">
                  <p className="small text-body-secondary mb-0">
                    No encontramos una descripción para «{vistaPrevia.busqueda}». Revisá cómo está escrita o probá con
                    otro nombre (por ejemplo, «Idioma inglés»).
                  </p>
                </section>
              )}
              <section className="ocupa-todo">
                <Form.Group controlId="descripcion">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="descripcion"
                    placeholder="Contales a los alumnos sobre tu experiencia y metodología"
                  />
                </Form.Group>
              </section>
              <section>
                <Form.Group controlId="precio">
                  <Form.Label>Precio por hora</Form.Label>
                  <Form.Control type="number" name="precio" min="0" placeholder="4500" required />
                </Form.Group>
              </section>
              <section>
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
              </section>
              <section>
                <Form.Group controlId="zona">
                  <Form.Label>Zona / Ubicación</Form.Label>
                  <Form.Control name="zona" placeholder="Ej: Barrio Sur, San Miguel de Tucumán" />
                </Form.Group>
              </section>
              <section>
                <Form.Group controlId="horarios">
                  <Form.Label>Horarios disponibles</Form.Label>
                  <Form.Control name="horarios" placeholder="Ej: Lunes a viernes de 16 a 20hs" />
                </Form.Group>
              </section>
            </section>

            <footer className="d-flex flex-wrap gap-2 mt-4">
              <Button type="submit">Publicar oferta</Button>
              <Button as={Link} to="/profesor" variant="outline-dark">
                Cancelar
              </Button>
            </footer>
          </Form>
          </article>

          <aside className="cuadro cuadro--amarillo ancho-4 p-4">
            <h2 className="titulo-con-icono"><Lightbulb weight="duotone" /> Consejos para tu oferta</h2>
            <ul className="lista-cuadro">
              <li className="bg-white">Escribí la materia completa (ej: «Álgebra de secundario»).</li>
              <li className="bg-white">Contá cómo son tus clases y qué experiencia tenés.</li>
              <li className="bg-white">Poné horarios concretos: los alumnos eligen por eso.</li>
              <li className="bg-white">Un precio claro genera más confianza.</li>
            </ul>
          </aside>
        </section>
      </ContenidoPagina>
    </>
  )
}

export default PublicarOferta
