// Cuadro de un profesor destacado de la semana
function TarjetaDestacado({ iniciales, nombre, materias, frase, precio, calificacion }) {
  return (
    <article className="cuadro cuadro--hover h-100">
      <header className="d-flex align-items-center gap-3">
        <span className="avatar avatar--chico">{iniciales}</span>
        <hgroup className="mb-0">
          <h3 className="h6 mb-0">{nombre}</h3>
          <p className="mb-0 small text-body-secondary">{materias}</p>
        </hgroup>
        <span className="ms-auto fw-bold small text-nowrap">★ {calificacion}</span>
      </header>
      <blockquote className="fst-italic text-body-secondary my-3 flex-grow-1">"{frase}"</blockquote>
      <footer className="d-flex justify-content-between align-items-center">
        <p className="mb-0 fs-5 fw-bold">
          {precio} <small className="fs-6 text-body-secondary fw-normal">/hora</small>
        </p>
      </footer>
    </article>
  )
}

export default TarjetaDestacado
