// Burbuja de un mensaje del chat del profesor
import '../../styles/profesor.css'

function MensajeChat({ autor, texto, propio }) {
  const lado = propio ? 'align-self-end bg-primary text-white' : 'align-self-start bg-white'

  return (
    <div className={`mensaje-chat px-3 py-2 border border-2 border-dark rounded ${lado}`}>
      <span className="d-block small fw-bold opacity-75">{autor}</span>
      {texto}
    </div>
  )
}

export default MensajeChat
