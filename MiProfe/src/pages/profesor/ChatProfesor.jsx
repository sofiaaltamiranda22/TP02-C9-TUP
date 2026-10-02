// Chat del profesor
import { useState } from 'react'
import { Row, Col, Card, ListGroup, Form, Button } from 'react-bootstrap'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import Avatar from '../../components/common/Avatar'
import ItemConversacion from '../../components/profesor/ItemConversacion'
import MensajeChat from '../../components/profesor/MensajeChat'
import { conversaciones } from '../../data/profesor'

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
        <section>
          <h1 className="mb-4">Chat</h1>
          <Row className="g-4">
            <Col lg={4} as="aside">
              <Card>
                <Card.Header as="h2" className="h5 bg-white">Conversaciones</Card.Header>
                <ListGroup variant="flush">
                  {chats.map((chat) => (
                    <ItemConversacion
                      key={chat.id}
                      nombre={chat.nombre}
                      iniciales={chat.iniciales}
                      activa={chat.id === idActivo}
                      onElegir={() => setIdActivo(chat.id)}
                    />
                  ))}
                </ListGroup>
              </Card>
            </Col>

            <Col lg={8}>
              <Card as="section" className="h-100">
                <Card.Header className="bg-white d-flex align-items-center gap-2">
                  <Avatar iniciales={activo.iniciales} tamano="mini" />
                  <h2 className="h5 mb-0">{activo.nombre}</h2>
                </Card.Header>
                <Card.Body className="d-flex flex-column gap-2">
                  {activo.mensajes.map((mensaje) => (
                    <MensajeChat key={mensaje.id} autor={mensaje.autor} texto={mensaje.texto} propio={mensaje.propio} />
                  ))}
                </Card.Body>
                <Card.Footer className="bg-white">
                  <Form onSubmit={enviar} className="d-flex gap-2">
                    <Form.Control
                      aria-label="Mensaje"
                      placeholder="Escribí un mensaje..."
                      autoComplete="off"
                      value={texto}
                      onChange={(evento) => setTexto(evento.target.value)}
                    />
                    <Button type="submit">Enviar</Button>
                  </Form>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </section>
      </ContenidoPagina>
    </>
  )
}

export default ChatProfesor
