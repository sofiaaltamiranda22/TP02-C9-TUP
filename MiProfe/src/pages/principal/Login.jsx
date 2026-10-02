// Inicio de sesion
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ContenidoAuth from '../../components/auth/ContenidoAuth'
import CampoPassword from '../../components/auth/CampoPassword'

function Login() {
  const navigate = useNavigate()

  // Todavia no hay backend: al iniciar sesion entra al panel del alumno
  const iniciarSesion = (evento) => {
    evento.preventDefault()
    navigate('/alumno')
  }

  return (
    <>
      <title>Iniciar sesión - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoAuth>
        <h1 className="h2 mb-1">Bienvenido de nuevo</h1>
        <p className="text-body-secondary mb-4">Iniciá sesión para continuar</p>

        <Form onSubmit={iniciarSesion} className="d-flex flex-column gap-3">
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="tu@email.com" autoComplete="email" required />
          </Form.Group>
          <CampoPassword id="password" label="Contraseña" placeholder="Tu contraseña" autoComplete="current-password" />
          <Button type="submit" className="w-100">Iniciar sesión</Button>
        </Form>

        <p className="text-center mt-4 mb-0">
          ¿No tenés cuenta? <Link to="/registro">Registrate acá</Link>
        </p>
      </ContenidoAuth>
    </>
  )
}

export default Login
