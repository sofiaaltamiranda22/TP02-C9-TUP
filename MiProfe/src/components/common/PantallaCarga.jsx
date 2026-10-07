// Pantalla de espera que tapa toda la pagina, por ejemplo mientras entra al panel despues del login
import { Spinner } from 'react-bootstrap'

function PantallaCarga({ texto = 'Cargando...' }) {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 z-3 d-flex flex-column align-items-center justify-content-center gap-3 bg-white bg-opacity-75"
      role="status"
    >
      <Spinner animation="border" variant="primary" />
      <p className="fw-bold mb-0">{texto}</p>
    </div>
  )
}

export default PantallaCarga
