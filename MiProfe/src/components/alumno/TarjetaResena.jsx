// Una reseña de un alumno (va adentro de una lista <ul>)
function TarjetaResena({ estrellas, comentario, autor }) {
  return (
    <li>
      <figure className="cuadro cuadro--hover h-100 m-0">
        <p className="text-warning fs-5 mb-2" aria-label={`${estrellas} de 5 estrellas`}>
          {'★'.repeat(estrellas)}
          <span className="text-body-tertiary">{'★'.repeat(5 - estrellas)}</span>
        </p>
        <blockquote className="mb-3 flex-grow-1">"{comentario}"</blockquote>
        <figcaption className="small fw-bold text-body-secondary">— {autor}</figcaption>
      </figure>
    </li>
  )
}
export default TarjetaResena
