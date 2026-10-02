// Chat del alumno
import { useState } from 'react'
import { Row, Col, Card, ListGroup, Form, Button, Badge } from 'react-bootstrap'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import Avatar from '../../components/common/Avatar'
import MensajeGrupo from '../../components/alumno/MensajeGrupo'
import { conversaciones, mensajes } from '../../data/alumno'

function ChatGrupo() {
  const [lista, setLista] = useState(mensajes)
  const [texto, setTexto] = useState('')

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
        <section>
          <h1 className="mb-4">Chat</h1>
          <Row className="g-4">
            <Col lg={4} as="aside">
              <Card>
                <Card.Header as="h2" className="h5 bg-white">Conversaciones</Card.Header>
                <ListGroup variant="flush">
                  {conversaciones.map((conversacion, indice) => (
                    <ListGroup.Item key={conversacion.id} active={indice === 0} className="d-flex align-items-center gap-2">
                      <Avatar iniciales={conversacion.iniciales} tamano="mini" />
                      <div>
                        <h3 className="h6 mb-0">{conversacion.nombre}</h3>
                        <small>{conversacion.detalle}</small>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>

            <Col lg={8}>
              <Card as="section" className="h-100">
                <Card.Header className="bg-white d-flex align-items-center gap-2">
                  <h2 className="h5 mb-0">{conversaciones[0].nombre}</h2>
                  <Badge bg="success" pill>En línea</Badge>
                </Card.Header>
                <Card.Body className="d-flex flex-column gap-2">
                  {lista.map((mensaje) => (
                    <MensajeGrupo key={mensaje.id} texto={mensaje.texto} hora={mensaje.hora} propio={mensaje.propio} />
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

export default ChatGrupo

