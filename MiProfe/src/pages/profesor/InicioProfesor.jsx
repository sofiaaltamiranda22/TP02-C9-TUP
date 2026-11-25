// Inicio del profesor (diseño en cuadros tipo "bento")
import { BookOpenText, CalendarDots, Star, Tray, Wallet } from '@phosphor-icons/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import Avatar from '../../components/common/Avatar'
import { profesor, resumen, proximasClases, solicitudes } from '../../data/profesor'
import '../../styles/bento.css'

function InicioProfesor() {
  // Cuantas solicitudes quedan sin responder. Se lee una sola vez al cargar, de lo que guarda la pagina Solicitudes
  const [cantidadPendientes] = useState(
    () => (JSON.parse(localStorage.getItem('miprofe-solicitudes')) ?? solicitudes).length,
  )

  // Los otros dos numeros del resumen (clases dictadas e ingresos)
  const clases = resumen.find((item) => item.id === 2)
  const ingresos = resumen.find((item) => item.id === 3)

  const estrellas = Math.floor(profesor.calificacion)

  // Saca las iniciales del alumno ("Martina Torres" -> "MT")
  const sacarIniciales = (nombre) =>
    nombre
      .split(' ')
      .map((palabra) => palabra[0])
      .join('')

  const datos = [
    { etiqueta: 'Nivel', valor: profesor.nivelTexto },
    { etiqueta: 'Ubicación', valor: profesor.ubicacion },
    { etiqueta: 'Precio', valor: `$${profesor.precio.toLocaleString('es-AR')}/hora` },
    { etiqueta: 'Modalidad', valor: profesor.modalidades.join(' y ') },
  ]

  return (
    <>
      <title>Inicio profesor - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <section className="bento" aria-label="Mi panel">
          {/* Saludo */}
          <header className="cuadro cuadro--azul ancho-8 p-4 p-md-5">
            <h1 className="mb-2">Hola, {profesor.nombre.split(' ')[0]}</h1>
            <p className="mb-4 fs-5">
              {cantidadPendientes > 0
                ? `Tenés ${cantidadPendientes} ${cantidadPendientes === 1 ? 'alumno esperando' : 'alumnos esperando'} tu respuesta.`
                : 'Estás al día con tus solicitudes.'}
            </p>
            <nav className="d-flex flex-wrap gap-2 mt-auto" aria-label="Accesos rápidos">
              <Link to="/profesor/solicitudes" className="btn btn-light">
                Ver solicitudes
              </Link>
              <Link to="/profesor/publicar-oferta" className="btn btn-outline-light">
                Publicar oferta
              </Link>
            </nav>
          </header>

          <Link to="/profesor/solicitudes" className="cuadro cuadro--amarillo ancho-4">
            <span className="cuadro-icono" aria-hidden="true"><Tray weight="duotone" /></span>
            <h2 className="cuadro-etiqueta">Solicitudes nuevas</h2>
            <p className="cuadro-numero">{cantidadPendientes}</p>
            <p className="mb-0 text-body-secondary">pendientes de responder →</p>
          </Link>

          <article className="cuadro cuadro--verde ancho-4">
            <span className="cuadro-icono" aria-hidden="true"><BookOpenText weight="duotone" /></span>
            <h2 className="cuadro-etiqueta">{clases.titulo}</h2>
            <p className="cuadro-numero">{clases.numero}</p>
            <p className="mb-0 text-body-secondary">{clases.detalle}</p>
          </article>

          <article className="cuadro cuadro--violeta ancho-4">
            <span className="cuadro-icono" aria-hidden="true"><Wallet weight="duotone" /></span>
            <h2 className="cuadro-etiqueta">{ingresos.titulo}</h2>
            <p className="cuadro-numero">{ingresos.numero}</p>
            <p className="mb-0 text-body-secondary">{ingresos.detalle}</p>
          </article>

          <article className="cuadro cuadro--oscuro ancho-4">
            <span className="cuadro-icono" aria-hidden="true"><Star weight="duotone" /></span>
            <h2 className="cuadro-etiqueta text-white-50">Tu calificación</h2>
            <p className="cuadro-numero text-white">{profesor.calificacion}</p>
            <p className="mb-0">
              <span className="text-warning" aria-hidden="true">
                {'★'.repeat(estrellas)}
                {'☆'.repeat(5 - estrellas)}
              </span>{' '}
              {profesor.cantidadResenas} reseñas
            </p>
          </article>

          {/* Proximas clases */}
          <section className="cuadro ancho-7">
            <h2 className="titulo-con-icono"><CalendarDots weight="duotone" /> Próximas clases</h2>
            {proximasClases.length === 0 ? (
              <p className="text-body-secondary mb-0">No tenés clases agendadas.</p>
            ) : (
              <ul className="lista-cuadro">
                {proximasClases.map((clase) => (
                  <li key={clase.id}>
                    <Avatar iniciales={sacarIniciales(clase.alumno)} />
                    <p className="mb-0">
                      <strong className="d-block">{clase.alumno}</strong>
                      <small className="text-body-secondary">{profesor.materia}</small>
                    </p>
                    <time>{clase.dia}</time>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Mi perfil */}
          <article className="cuadro ancho-5">
            <header className="d-flex align-items-center gap-3">
              <Avatar iniciales={profesor.iniciales} tamano="grande" />
              <hgroup className="mb-0">
                <h2 className="h5 mb-1">{profesor.nombre}</h2>
                <p className="badge bg-primary rounded-pill mb-0">{profesor.materia}</p>
              </hgroup>
            </header>
            <dl className="datos-cuadro">
              {datos.map((dato) => (
                <div key={dato.etiqueta}>
                  <dt>{dato.etiqueta}</dt>
                  <dd>{dato.valor}</dd>
                </div>
              ))}
            </dl>
            <Link to="/profesor/editar-perfil" className="btn btn-outline-dark btn-sm mt-auto align-self-start">
              Editar perfil
            </Link>
          </article>
        </section>
      </ContenidoPagina>
    </>
  )
}

export default InicioProfesor
