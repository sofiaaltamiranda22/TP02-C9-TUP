import '../../styles/alumno.css'

function MensajeGrupo({ texto, hora, propio }) {
  return (
    <div className={propio ? 'message sent' : 'message received'}>
      <p>{texto}</p>
      <span className="time">{hora}</span>
    </div>
  )
}

export default MensajeGrupo
