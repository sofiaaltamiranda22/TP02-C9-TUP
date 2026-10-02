// Select de nivel educativo: lo usan Registro, Publicar oferta y Editar perfil
import { Form } from 'react-bootstrap'

const niveles = ['Primario', 'Secundario', 'Universitario', 'Adultos']

function SelectNivel({ id, label, valorInicial = '' }) {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Select name={id} defaultValue={valorInicial}>
        <option value="">Seleccioná un nivel</option>
        {niveles.map((nivel) => (
          <option key={nivel} value={nivel.toLowerCase()}>
            {nivel}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  )
}

export default SelectNivel
