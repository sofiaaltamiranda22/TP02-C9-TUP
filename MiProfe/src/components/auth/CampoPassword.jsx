import { Button, Form, InputGroup } from 'react-bootstrap'

function CampoPassword({ id, label, placeholder, ocultarLabel }) {
  return (
    <Form.Group controlId={id}>
      <Form.Label visuallyHidden={ocultarLabel}>{label}</Form.Label>
      <InputGroup>
        <Form.Control type="password" name={id} placeholder={placeholder} required />
        <Button variant="outline-secondary" type="button">Mostrar</Button>
      </InputGroup>
    </Form.Group>
  )
}
export default CampoPassword
