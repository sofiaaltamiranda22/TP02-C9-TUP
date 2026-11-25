// Solicitud de clase de un alumno. Que pasa al aceptar o rechazar lo decide la pagina (llega por props)
import { Check } from '@phosphor-icons/react'
import Avatar from '../common/Avatar'

function TarjetaSolicitud({ nombre, iniciales, materia, horario, onAceptar, onRechazar }) {
  return (
    <article className="cuadro cuadro--hover">
      <header className="d-flex align-items-center gap-3 mb-3">
        <Avatar iniciales={iniciales} tamano="chico" />
        <hgroup className="mb-0">
          <h2 className="h5 mb-0">{nombre}</h2>
          <p className="small text-body-secondary mb-0">quiere tomar clases con vos</p>
        </hgroup>
      </header>
      <dl className="datos-cuadro mt-0">
        <div>
          <dt>Materia</dt>
          <dd>{materia}</dd>
        </div>
        <div>
          <dt>Horario propuesto</dt>
          <dd>{horario}</dd>
        </div>
      </dl>
      <footer className="d-flex gap-2 mt-auto">
        <button type="button" className="btn btn-primary flex-grow-1" onClick={onAceptar}>
          <Check weight="duotone" className="me-1" />Aceptar
        </button>
        <button type="button" className="btn btn-outline-dark flex-grow-1" onClick={onRechazar}>
          Rechazar
        </button>
      </footer>
    </article>
  )
}

export default TarjetaSolicitud
