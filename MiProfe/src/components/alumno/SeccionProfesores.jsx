// Seccion con un titulo y una grilla de cuadros de profesor (Profesores cercanos y Recomendados)
import { Star } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import TarjetaProfesor from './TarjetaProfesor'

function SeccionProfesores({ titulo, icono, profesores }) {
  return (
    <section>
      <h2 className="h4 mb-3 titulo-con-icono">
        {icono}
        {titulo}
      </h2>

      {profesores.length === 0 ? (
        <p className="cuadro text-body-secondary mb-0">
          No hay profesores con esos filtros. Probá con otra materia o un precio más alto.
        </p>
      ) : (
        <ul className="grilla-profesores">
          {profesores.map((profesor) => (
            <li key={profesor.id}>
              <TarjetaProfesor nombre={profesor.nombre} iniciales={profesor.iniciales} materia={profesor.materia}>
                <ul className="chips">
                  <li>{profesor.modalidad}</li>
                  <li><Star weight="fill" className="text-warning" /> {profesor.calificacion}</li>
                </ul>
                <p className="fs-4 fw-bold mb-3">
                  ${profesor.precio.toLocaleString('es-AR')}
                  <small className="fs-6 fw-normal text-body-secondary"> /hora</small>
                </p>
                <Link to={`/alumno/profesores/${profesor.id}`} className="btn btn-primary mt-auto w-100">
                  Ver perfil
                </Link>
              </TarjetaProfesor>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default SeccionProfesores
