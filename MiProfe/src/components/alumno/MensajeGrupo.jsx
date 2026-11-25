// Burbuja de un mensaje del chat del alumno (va adentro de una lista <ol>)
function MensajeGrupo({ texto, hora, propio }) {
  return (
    <li className={`burbuja ${propio ? 'burbuja--propia' : ''}`}>
      <p className="mb-1">{texto}</p>
      <time className="burbuja-meta">{hora}</time>
    </li>
  )
}

export default MensajeGrupo
