import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BotonMateria({ icono, nombre }) {
  return (
    <Button 
      as={Link} 
      to="/registro" 
      variant="outline-primary" 
      className="d-flex align-items-center gap-2 p-3 w-100 h-100 shadow-sm"
    >
      <span className="fs-4">{icono}</span>
      <span className="fw-semibold">{nombre}</span>
    </Button>
  )
}

export default BotonMateria
