import { Button } from 'react-bootstrap'

function BotonMateria({ icono, materia }) {
  return (
    <Button variant="outline-secondary" href="#" className="w-100 d-flex align-items-center justify-content-center gap-2">
      <img src={icono} alt="" width="20" height="20" /> {materia}
    </Button>
  )
}

export default BotonMateria
