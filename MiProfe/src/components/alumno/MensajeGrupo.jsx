import '../../styles/alumno.css'

function MensajeGrupo({ texto, hora, propio }) {
  const lado = propio ? 'align-self-end bg-primary text-white' : 'align-self-start bg-white'

  return (
    <div className={`message px-3 py-2 border border-2 border-dark rounded small ${lado}`}>
      <p className="mb-1">{texto}</p>
      <span className="small opacity-75">{hora}</span>
    </div>
  )
}

export default MensajeGrupo
