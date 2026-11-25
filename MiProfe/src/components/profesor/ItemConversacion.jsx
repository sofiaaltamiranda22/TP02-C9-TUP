// Una conversacion de la lista del chat. Al tocarla se abre en el chat
import Avatar from '../common/Avatar'

function ItemConversacion({ nombre, iniciales, detalle, activa, onElegir }) {
  return (
    <li>
      <button type="button" className="chat-item" aria-current={activa} onClick={onElegir}>
        <Avatar iniciales={iniciales} tamano="mini" />
        <span>
          <strong className="d-block">{nombre}</strong>
          {detalle && <small className="text-body-secondary">{detalle}</small>}
        </span>
      </button>
    </li>
  )
}

export default ItemConversacion
