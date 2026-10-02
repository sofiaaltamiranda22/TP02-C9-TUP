import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BotonMateria({ icono, materia }) {
  return (
    <Button
      as={Link}
      to="/registro"
      variant="outline-secondary"
      className="w-100 d-flex align-items-center justify-content-center gap-2"
    >
      <img src={icono} alt="" width="20" height="20" /> {materia}
    </Button>
  )
}

export default BotonMateria
