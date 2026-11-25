// Profesores contratados
import { GraduationCap } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import EncabezadoPagina from '../../components/common/EncabezadoPagina'
import TarjetaProfesor from '../../components/alumno/TarjetaProfesor'
import { profesores } from '../../data/alumno'

function MisProfesores() {
  const contratados = profesores.filter((profesor) => profesor.contratado)

  return (
    <>
      <title>Mis profesores - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <EncabezadoPagina
          icono={<GraduationCap weight="duotone" />}
          titulo="Mis profesores"
          bajada={`Tenés ${contratados.length} ${contratados.length === 1 ? 'profesor' : 'profesores'} con clases activas.`}
        />

        <ul className="grilla-profesores" aria-label="Profesores contratados">
          {contratados.map((profesor) => (
            <li key={profesor.id}>
              <TarjetaProfesor nombre={profesor.nombre} iniciales={profesor.iniciales} materia={profesor.materia}>
                <p className="mb-3">
                  <span className="cuadro-etiqueta d-block pe-0">Próxima clase</span>
                  <time className="fw-bold">{profesor.proximaClase}</time>
                </p>
                <nav className="d-flex gap-2 mt-auto w-100" aria-label={`Acciones con ${profesor.nombre}`}>
                  <Link to={`/alumno/profesores/${profesor.id}`} className="btn btn-outline-dark btn-sm flex-grow-1">
                    Ver perfil
                  </Link>
                  <Link to="/alumno/chat" className="btn btn-primary btn-sm flex-grow-1">
                    Chatear
                  </Link>
                </nav>
              </TarjetaProfesor>
            </li>
          ))}
        </ul>
      </ContenidoPagina>
    </>
  )
}

export default MisProfesores
