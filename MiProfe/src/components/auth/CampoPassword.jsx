import { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

function CampoPassword({ id, label, placeholder, ocultarLabel, autoComplete }) {
  const [visible, setVisible] = useState(false)

  return (
    <Form.Group controlId={id}>
      <Form.Label visuallyHidden={ocultarLabel}>{label}</Form.Label>
      <InputGroup>
        <Form.Control
          type={visible ? 'text' : 'password'}
          name={id}
          placeholder={placeholder}
          autoComplete={autoComplete}
          minLength={8}
          required
        />
        <Button variant="outline-secondary" type="button" onClick={() => setVisible(!visible)}>
          {visible ? 'Ocultar' : 'Mostrar'}
        </Button>
      </InputGroup>
    </Form.Group>
  )
}
export default CampoPassword
