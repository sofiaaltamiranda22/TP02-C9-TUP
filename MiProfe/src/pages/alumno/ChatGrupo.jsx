// Chat del alumno
import { ChatsCircle } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import Avatar from '../../components/common/Avatar'
import EncabezadoPagina from '../../components/common/EncabezadoPagina'
import MensajeGrupo from '../../components/alumno/MensajeGrupo'
import { conversaciones, mensajes } from '../../data/alumno'
import '../../styles/chat.css'

function ChatGrupo() {
  // Arranca con los mensajes guardados en el navegador y, si no hay, con los de ejemplo
  const [lista, setLista] = useState(() => JSON.parse(localStorage.getItem('miprofe-chat-alumno')) ?? mensajes)
  const [texto, setTexto] = useState('')

  // Cada vez que cambia la conversacion la guarda, asi no se pierde al refrescar o al cambiar de pagina
  useEffect(() => {
    localStorage.setItem('miprofe-chat-alumno', JSON.stringify(lista))
  }, [lista])

  // Agrega el mensaje escrito al final de la conversacion
  const enviar = (evento) => {
    evento.preventDefault()
    if (texto.trim() === '') return

    const hora = new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })
    setLista([...lista, { id: lista.length + 1, texto, hora, propio: true }])
    setTexto('')
  }

  return (
    <>
      <title>Chat - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <EncabezadoPagina icono={<ChatsCircle weight="duotone" />} titulo="Chat" bajada="Hablá con tus profes y tus grupos de estudio." />

        <section className="chat">
          <aside className="cuadro p-3" aria-label="Conversaciones">
            <h2 className="h6 text-body-secondary px-2 mb-2">Conversaciones</h2>
            <ul className="chat-lista">
              {conversaciones.map((conversacion, indice) => (
                <li key={conversacion.id}>
                  <p className="chat-item mb-0" aria-current={indice === 0}>
                    <Avatar iniciales={conversacion.iniciales} tamano="mini" />
                    <span>
                      <strong className="d-block">{conversacion.nombre}</strong>
                      <small className="text-body-secondary">{conversacion.detalle}</small>
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </aside>

          <article className="cuadro chat-conversacion">
            <header>
              <Avatar iniciales={conversaciones[0].iniciales} tamano="mini" />
              <hgroup className="mb-0">
                <h2 className="h6 mb-0">{conversaciones[0].nombre}</h2>
                <p className="small text-body-secondary mb-0">
                  <span className="punto-en-linea" aria-hidden="true"></span>En línea
                </p>
              </hgroup>
            </header>
            <ol className="chat-mensajes" aria-label="Mensajes">
              {lista.map((mensaje) => (
                <MensajeGrupo key={mensaje.id} texto={mensaje.texto} hora={mensaje.hora} propio={mensaje.propio} />
              ))}
            </ol>
            <form onSubmit={enviar}>
              <label htmlFor="mensaje" className="visually-hidden">Mensaje</label>
              <input
                id="mensaje"
                className="form-control"
                placeholder="Escribí un mensaje..."
                autoComplete="off"
                value={texto}
                onChange={(evento) => setTexto(evento.target.value)}
              />
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </article>
        </section>
      </ContenidoPagina>
    </>
  )
}

export default ChatGrupo


