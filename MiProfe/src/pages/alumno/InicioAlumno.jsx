// Inicio del alumno (diseño en cuadros tipo "bento")
import { CalendarDots, ChatsCircle, GraduationCap, MapPin, Sparkle, UsersThree, X } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import Avatar from '../../components/common/Avatar'
import SeccionProfesores from '../../components/alumno/SeccionProfesores'
import { alumno, profesores, materias, modalidades, grupos } from '../../data/alumno'
import '../../styles/bento.css'

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

  const hayFiltros = filtros.materia !== '' || filtros.modalidad !== '' || filtros.precioMaximo !== ''

  // Para los cuadros de arriba: mis profesores y la primera clase que tengo agendada
  const contratados = profesores.filter((profesor) => profesor.contratado)
  const proxima = contratados.find((profesor) => profesor.proximaClase)

  return (
    <>
      <title>Inicio - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        {/* Fila de cuadros de arriba */}
        <section className="bento" aria-label="Resumen">
          <header className="cuadro cuadro--azul ancho-8 p-4 p-md-5">
            <Avatar iniciales={alumno.iniciales} tamano="grande" className="mb-3" />
            <h1 className="mb-1">Hola, {alumno.nombre.split(' ')[0]}</h1>
            <p className="mb-4">
              {alumno.nivelTexto} · {alumno.ubicacion}. ¿Qué querés aprender hoy?
            </p>
            <nav className="d-flex flex-wrap gap-2 mt-auto" aria-label="Accesos rápidos">
              <Link to="/alumno/profesores" className="btn btn-light">
                Mis profesores
              </Link>
              <Link to="/alumno/editar-perfil" className="btn btn-outline-light">
                Editar perfil
              </Link>
            </nav>
          </header>

          {proxima && (
            <article className="cuadro cuadro--amarillo ancho-4">
              <span className="cuadro-icono" aria-hidden="true"><CalendarDots weight="duotone" /></span>
              <h2 className="cuadro-etiqueta">Tu próxima clase</h2>
              <p className="cuadro-numero h3">
                <time>{proxima.proximaClase}</time>
              </p>
              <p className="mb-3">
                {proxima.materia} con <strong>{proxima.nombre}</strong>
              </p>
              <Link to="/alumno/chat" className="btn btn-outline-dark btn-sm mt-auto align-self-start">
                Abrir chat
              </Link>
            </article>
          )}

          <Link to="/alumno/profesores" className="cuadro cuadro--violeta ancho-4">
            <span className="cuadro-icono" aria-hidden="true"><GraduationCap weight="duotone" /></span>
            <h2 className="cuadro-etiqueta">Mis profesores</h2>
            <p className="cuadro-numero">{contratados.length}</p>
            <p className="mb-0 text-body-secondary">profesores contratados →</p>
          </Link>

          <Link to="/alumno/grupos" className="cuadro cuadro--verde ancho-4">
            <span className="cuadro-icono" aria-hidden="true"><UsersThree weight="duotone" /></span>
            <h2 className="cuadro-etiqueta">Grupos de estudio</h2>
            <p className="cuadro-numero">{grupos.length}</p>
            <p className="mb-0 text-body-secondary">grupos activos →</p>
          </Link>

          <Link to="/alumno/chat" className="cuadro cuadro--oscuro ancho-4">
            <span className="cuadro-icono" aria-hidden="true"><ChatsCircle weight="duotone" /></span>
            <h2 className="cuadro-etiqueta text-white-50">Chat</h2>
            <p className="h4 fw-bold mb-1 text-white">Hablá con tus profes</p>
            <p className="mb-0">Coordiná horarios y mandá tus dudas →</p>
          </Link>
        </section>

        {/* Buscador */}
        <section className="cuadro">
          <header className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
            <hgroup className="mb-0">
              <h2 className="h4 mb-0">Buscar profesores</h2>
              <p className="text-body-secondary small mb-0">
                {filtrados.length} {filtrados.length === 1 ? 'profesor encontrado' : 'profesores encontrados'}
              </p>
            </hgroup>
            {hayFiltros && (
              <button type="button" className="btn btn-link p-0" onClick={() => setFiltros(filtrosVacios)}>
                Limpiar filtros <X weight="duotone" />
              </button>
            )}
          </header>

          <form className="buscador" onSubmit={(evento) => evento.preventDefault()}>
            <fieldset>
              <legend className="visually-hidden">Filtros</legend>
              <p className="mb-0">
                <label htmlFor="filtro-materia" className="form-label">Materia</label>
                <Form.Select id="filtro-materia" name="materia" value={filtros.materia} onChange={cambiarFiltro}>
                  <option value="">Todas</option>
                  {materias.map((opcion) => (
                    <option key={opcion}>{opcion}</option>
                  ))}
                </Form.Select>
              </p>
              <p className="mb-0">
                <label htmlFor="filtro-modalidad" className="form-label">Modalidad</label>
                <Form.Select id="filtro-modalidad" name="modalidad" value={filtros.modalidad} onChange={cambiarFiltro}>
                  <option value="">Todas</option>
                  {modalidades.map((opcion) => (
                    <option key={opcion}>{opcion}</option>
                  ))}
                </Form.Select>
              </p>
              <p className="mb-0">
                <label htmlFor="filtro-precio" className="form-label">Precio máximo por hora</label>
                <Form.Control
                  id="filtro-precio"
                  type="number"
                  name="precioMaximo"
                  min="0"
                  placeholder="$5000"
                  value={filtros.precioMaximo}
                  onChange={cambiarFiltro}
                />
              </p>
            </fieldset>
            <button type="submit" className="btn btn-primary py-2">Buscar</button>
          </form>
        </section>

        <SeccionProfesores
          titulo="Profesores cercanos"
          icono={<MapPin weight="duotone" />}
          profesores={filtrados.filter((profesor) => profesor.cercano)}
        />
        <SeccionProfesores
          titulo="Recomendados para vos"
          icono={<Sparkle weight="duotone" />}
          profesores={filtrados.filter((profesor) => profesor.recomendado)}
        />
      </ContenidoPagina>
    </>
  )
}

export default InicioAlumno
