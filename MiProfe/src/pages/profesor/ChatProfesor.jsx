// Chat del profesor
import { ChatsCircle } from '@phosphor-icons/react'
import { useState } from 'react'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import Avatar from '../../components/common/Avatar'
import EncabezadoPagina from '../../components/common/EncabezadoPagina'
import ItemConversacion from '../../components/profesor/ItemConversacion'
import MensajeChat from '../../components/profesor/MensajeChat'
import { conversaciones } from '../../data/profesor'
import '../../styles/chat.css'

function ChatProfesor() {
  const [chats, setChats] = useState(conversaciones)
  const [idActivo, setIdActivo] = useState(conversaciones[0].id)
  const [texto, setTexto] = useState('')

  const activo = chats.find((chat) => chat.id === idActivo)

  // Agrega el mensaje escrito al final de la conversacion abierta
  const enviar = (evento) => {
    evento.preventDefault()
    if (texto.trim() === '') return

    setChats(
      chats.map((chat) =>
        chat.id === idActivo
          ? { ...chat, mensajes: [...chat.mensajes, { id: chat.mensajes.length + 1, autor: 'Vos', texto, propio: true }] }
          : chat,
      ),
    )
    setTexto('')
  }

  return (
    <>
      <title>Chat - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <EncabezadoPagina icono={<ChatsCircle weight="duotone" />} titulo="Chat" bajada="Coordiná las clases con tus alumnos." />

        <section className="chat">
          <aside className="cuadro p-3" aria-label="Conversaciones">
            <h2 className="h6 text-body-secondary px-2 mb-2">Conversaciones</h2>
            <ul className="chat-lista">
              {chats.map((chat) => (
                <ItemConversacion
                  key={chat.id}
                  nombre={chat.nombre}
                  iniciales={chat.iniciales}
                  activa={chat.id === idActivo}
                  onElegir={() => setIdActivo(chat.id)}
                />
              ))}
            </ul>
          </aside>

          <article className="cuadro chat-conversacion">
            <header>
              <Avatar iniciales={activo.iniciales} tamano="mini" />
              <h2 className="h6 mb-0">{activo.nombre}</h2>
            </header>
            <ol className="chat-mensajes" aria-label="Mensajes">
              {activo.mensajes.map((mensaje) => (
                <MensajeChat key={mensaje.id} autor={mensaje.autor} texto={mensaje.texto} propio={mensaje.propio} />
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

export default ChatProfesor
