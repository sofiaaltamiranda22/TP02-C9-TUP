import { Card } from 'react-bootstrap'

function TarjetaDestacado({ iniciales, nombre, materias, frase, precio, calificacion }) {
  return (
    <Card as="article" className="h-100">
      <Card.Body>
        <div className="d-flex align-items-center gap-2">
          <span className="avatar">{iniciales}</span>
          <div>
            <h3 className="h6 mb-0">{nombre}</h3>
            <p className="mb-0 small text-body-secondary">{materias}</p>
          </div>
        </div>
        <p className="fst-italic text-body-secondary mt-3">"{frase}"</p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0 fw-bold">
            {precio} <small className="text-body-secondary fw-normal">/hora</small>
          </p>
          <span>★ {calificacion}</span>
        </div>
      </Card.Body>
    </Card>
  )
}

export default TarjetaDestacado
