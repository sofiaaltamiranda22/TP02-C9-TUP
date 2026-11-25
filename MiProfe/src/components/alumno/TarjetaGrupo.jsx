import { UsersThree } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

// Cuadro de un grupo de estudio del alumno. color: verde, amarillo o violeta
function TarjetaGrupo({ materia, profesor, integrantes, color = 'violeta' }) {
  return (
    <article className={`cuadro cuadro--${color} cuadro--hover`}>
      <span className="cuadro-icono" aria-hidden="true"><UsersThree weight="duotone" /></span>
      <p className="cuadro-etiqueta">Grupo de estudio</p>
      <h2 className="h3 mb-1">{materia}</h2>
      <p className="text-body-secondary mb-3">Prof. {profesor}</p>
      <p className="mb-4">
        <span className="badge text-bg-light rounded-pill px-3 py-2">{integrantes} integrantes</span>
      </p>
      <Link to="/alumno/chat" className="btn btn-primary mt-auto align-self-start">
        Ir al chat del grupo →
      </Link>
    </article>
  )
}

export default TarjetaGrupo
