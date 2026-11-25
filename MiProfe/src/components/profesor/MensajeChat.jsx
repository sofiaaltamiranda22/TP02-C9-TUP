// Burbuja de un mensaje del chat del profesor (va adentro de una lista <ol>)
function MensajeChat({ autor, texto, propio }) {
  return (
    <li className={`burbuja ${propio ? 'burbuja--propia' : ''}`}>
      <strong className="burbuja-meta">{autor}</strong>
      {texto}
    </li>
  )
}

export default MensajeChat
