import { Form } from 'react-bootstrap'

const niveles = ['Primario', 'Secundario', 'Universitario', 'Adultos']

function SelectNivel({ id, label }) {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Select name={id}>
        <option value="">Seleccioná un nivel</option>
        {niveles.map((nivel) => (
          <option key={nivel} value={nivel.toLowerCase()}>{nivel}</option>
        ))}
      </Form.Select>
    </Form.Group>
  )
}

export default SelectNivel
