// Perfil de un profesor, ruta /alumno/profesores/:id
import { ChatCircleText, CheckCircle, Clock, Laptop, MagnifyingGlass, Star } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import Avatar from '../../components/common/Avatar'
import TarjetaResena from '../../components/alumno/TarjetaResena'
import SobreMateria from '../../components/alumno/SobreMateria'
import { profesores } from '../../data/alumno'

function PerfilProfesor() {
  const { id } = useParams()
  // ids de los profesores a los que ya les mandaste solicitud (guardados en el navegador)
  const [enviadas, setEnviadas] = useState(
    () => JSON.parse(localStorage.getItem('miprofe-solicitudes-enviadas')) ?? [],
  )

  // Cada vez que mandas una solicitud la guarda, asi no la podes mandar dos veces aunque refresques
  useEffect(() => {
    localStorage.setItem('miprofe-solicitudes-enviadas', JSON.stringify(enviadas))
  }, [enviadas])

  // El id de la URL llega como texto, por eso se pasa a numero
  const profesor = profesores.find((p) => p.id === Number(id))

  if (!profesor) {
    return (
      <ContenidoPagina>
        <title>Profesor no encontrado - MiProfe</title>
        <article className="cuadro text-center align-items-center py-5">
          <p className="fs-1 mb-2 text-primary" aria-hidden="true"><MagnifyingGlass weight="duotone" /></p>
          <h1 className="h3">No encontramos a ese profesor</h1>
          <Link to="/alumno" className="btn btn-primary mt-2">Volver al inicio</Link>
        </article>
      </ContenidoPagina>
    )
  }

  const solicitudEnviada = enviadas.includes(profesor.id)

  return (
    <>
      <title>{`${profesor.nombre} - MiProfe`}</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <Link to="/alumno" className="fw-bold text-decoration-none">← Volver</Link>

        <section className="bento">
          <header id="datos-profesor" className="cuadro ancho-8 p-4 p-md-5">
            <section className="d-flex flex-wrap align-items-center gap-3 mb-3">
              <Avatar iniciales={profesor.iniciales} tamano="grande" />
              <hgroup className="mb-0">
                <h1 className="mb-1">{profesor.nombre}</h1>
                <p className="badge bg-primary rounded-pill mb-0">{profesor.materia}</p>
              </hgroup>
            </section>
            <p className="fs-5 text-body-secondary">{profesor.bio}</p>
            <ul className="chips justify-content-start mb-0">
              <li><Laptop weight="duotone" /> {profesor.modalidad}</li>
              <li><Star weight="fill" className="text-warning" /> {profesor.calificacion}</li>
              <li><ChatCircleText weight="duotone" /> {profesor.resenas.length} reseñas</li>
            </ul>
          </header>

          <aside id="acciones" className="cuadro cuadro--azul ancho-4 p-4">
            <h2 className="cuadro-etiqueta">Precio por hora</h2>
            <p className="cuadro-numero">${profesor.precio.toLocaleString('es-AR')}</p>
            <p className="mb-4">Coordinan el día y la forma de pago por chat.</p>
            <nav className="d-flex flex-column gap-2 mt-auto" aria-label="Contactar">
              {solicitudEnviada ? (
                <p className="bg-white text-success fw-bold rounded-3 p-2 mb-0 text-center">
                  <CheckCircle weight="duotone" className="me-1" />Ya le enviaste una solicitud
                </p>
              ) : (
                <button type="button" className="btn btn-light" onClick={() => setEnviadas([...enviadas, profesor.id])}>
                  Solicitar clase
                </button>
              )}
              <Link to="/alumno/chat" className="btn btn-outline-light">
                Enviar mensaje
              </Link>
            </nav>
          </aside>

          <section id="horarios" className="cuadro cuadro--amarillo ancho-5">
            <h2 className="titulo-con-icono"><Clock weight="duotone" /> Horarios disponibles</h2>
            <ul className="lista-cuadro">
              {profesor.horarios.map((horario) => (
                <li key={horario} className="bg-white">{horario}</li>
              ))}
            </ul>
          </section>

          <SobreMateria key={profesor.materia} materia={profesor.materia} />
        </section>

        <section id="resenas">
          <h2 className="h4 mb-3">Lo que dicen sus alumnos</h2>
          {profesor.resenas.length === 0 ? (
            <p className="cuadro text-body-secondary mb-0">Todavía no tiene reseñas.</p>
          ) : (
            <ul className="grilla-profesores">
              {profesor.resenas.map((resena) => (
                <TarjetaResena
                  key={resena.id}
                  estrellas={resena.estrellas}
                  comentario={resena.comentario}
                  autor={resena.autor}
                />
              ))}
            </ul>
          )}
        </section>
      </ContenidoPagina>
    </>
  )
}

export default PerfilProfesor

