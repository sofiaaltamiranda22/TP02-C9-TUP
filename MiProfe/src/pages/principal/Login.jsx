// Inicio de sesion
import { useState, useEffect } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ContenidoAuth from '../../components/auth/ContenidoAuth'
import CampoPassword from '../../components/auth/CampoPassword'
import PantallaCarga from '../../components/common/PantallaCarga'
import { cuentasDePrueba } from '../../data/cuentas'

function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  // Panel al que va a entrar ('/alumno' o '/profesor'). Mientras sea null no se muestra el loader
  const [destino, setDestino] = useState(null)

  // Cuando ya hay un destino, muestra el loader un momento y despues entra al panel
  useEffect(() => {
    if (!destino) return

    const espera = setTimeout(() => navigate(destino), 1500)
    return () => clearTimeout(espera)
  }, [destino, navigate])

  // Busca la cuenta entre las de prueba y las que se crearon en Registro
  const iniciarSesion = (evento) => {
    evento.preventDefault()
    const datos = new FormData(evento.target)
    const registradas = JSON.parse(localStorage.getItem('miprofe-cuentas')) ?? []
    const cuenta = [...cuentasDePrueba, ...registradas].find(
      (c) => c.email === datos.get('email') && c.password === datos.get('password'),
    )

    if (!cuenta) {
      setError('El email o la contraseña no son correctos.')
      return
    }

    setError('')
    setDestino(`/${cuenta.rol}`)
  }

  return (
    <>
      <title>Iniciar sesión - MiProfe</title>
      <meta name="robots" content="noindex" />

      {destino && <PantallaCarga texto="Entrando a tu panel..." />}

      <ContenidoAuth>
        <h1 className="h2 mb-1">Bienvenido de nuevo</h1>
        <p className="text-body-secondary mb-4">Iniciá sesión para continuar</p>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={iniciarSesion} onChange={() => setError('')} className="d-flex flex-column gap-3">
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
        <p className="text-center small text-body-secondary mt-2 mb-0">
          Para probar: alumno@miprofe.com o profesor@miprofe.com, contraseña 12345678
        </p>
      </ContenidoAuth>
    </>
  )
}

export default Login
