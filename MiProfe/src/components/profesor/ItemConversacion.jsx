// Una conversacion de la lista del chat. Al tocarla se abre en el chat
import { ListGroup } from 'react-bootstrap'
import Avatar from '../common/Avatar'

function ItemConversacion({ nombre, iniciales, activa, onElegir }) {
  return (
    <ListGroup.Item action active={activa} onClick={onElegir} className="d-flex align-items-center gap-2">
      <Avatar iniciales={iniciales} tamano="mini" />
      <span className="fw-semibold">{nombre}</span>
    </ListGroup.Item>
  )
}

export default ItemConversacion
