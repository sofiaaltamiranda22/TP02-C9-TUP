// Registro de alumno o profesor
import { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ContenidoAuth from '../../components/auth/ContenidoAuth'
import CampoPassword from '../../components/auth/CampoPassword'
import SelectNivel from '../../components/common/SelectNivel'
import PantallaCarga from '../../components/common/PantallaCarga'
import { cuentasDePrueba } from '../../data/cuentas'

const roles = [
  { valor: 'alumno', texto: 'Alumno' },
  { valor: 'profesor', texto: 'Profesor' },
]

// Los completan alumnos y profesores
const camposComunes = [
  { id: 'nombre', label: 'Nombre completo', tipo: 'text' },
  { id: 'email', label: 'Email', tipo: 'email' },
  { id: 'telefono', label: 'Teléfono / WhatsApp', tipo: 'tel' },
  { id: 'ciudad', label: 'Ciudad / Zona', tipo: 'text', placeholder: 'Ej: San Miguel de Tucumán' },
]

// Solo los completan los profesores
const camposProfesor = [
  { id: 'materia', label: 'Materia principal', tipo: 'text', placeholder: 'Ej: Matemática' },
  { id: 'formacion', label: 'Formación académica', tipo: 'text', placeholder: 'Ej: Profesorado en Matemática - UNT' },
  { id: 'experiencia', label: 'Años de experiencia', tipo: 'number' },
  { id: 'precio', label: 'Precio por hora', tipo: 'number' },
  { id: 'horarios', label: 'Horarios disponibles', tipo: 'text', placeholder: 'Ej: Lunes a viernes de 16 a 20hs' },
]

const modalidades = ['Virtual', 'Presencial', 'Ambas']

function Registro() {
  const navigate = useNavigate()
  const [rol, setRol] = useState('alumno')
  const [error, setError] = useState('')
  // Panel al que va a entrar despues de crear la cuenta. Mientras sea null no se muestra el loader
  const [destino, setDestino] = useState(null)

  // Cuando ya hay un destino, muestra el loader un momento y despues entra al panel
  useEffect(() => {
    if (!destino) return

    const espera = setTimeout(() => navigate(destino), 1500)
    return () => clearTimeout(espera)
  }, [destino, navigate])

  // Valida los datos y guarda la cuenta nueva en el navegador para poder usarla en el Login
  const crearCuenta = (evento) => {
    evento.preventDefault()
    const datos = new FormData(evento.target)
    const registradas = JSON.parse(localStorage.getItem('miprofe-cuentas')) ?? []

    if (datos.get('password') !== datos.get('password2')) {
      setError('Las contraseñas no coinciden.')
      return
    }
    if ([...cuentasDePrueba, ...registradas].some((cuenta) => cuenta.email === datos.get('email'))) {
      setError('Ya hay una cuenta con ese email.')
      return
    }

    const nueva = { nombre: datos.get('nombre'), email: datos.get('email'), password: datos.get('password'), rol }
    localStorage.setItem('miprofe-cuentas', JSON.stringify([...registradas, nueva]))
    setError('')
    setDestino(`/${rol}`)
  }

  return (
    <>
      <title>Crear cuenta - MiProfe</title>
      <meta name="robots" content="noindex" />

      {destino && <PantallaCarga texto="Creando tu cuenta..." />}

      <ContenidoAuth>
        <h1 className="h2 mb-1">Sumate</h1>
        <p className="text-body-secondary mb-4">Creá tu cuenta para empezar</p>

        <Form onSubmit={crearCuenta} onChange={() => setError('')} className="d-flex flex-column gap-4">
          <fieldset>
            <legend className="fs-6 fw-bold">Quiero registrarme como</legend>
            {roles.map((opcion) => (
              <Form.Check
                inline
                type="radio"
                key={opcion.valor}
                id={`rol-${opcion.valor}`}
                name="rol"
                label={opcion.texto}
                checked={rol === opcion.valor}
                onChange={() => setRol(opcion.valor)}
              />
            ))}
          </fieldset>

          <fieldset>
            <legend className="fs-6 fw-bold">Tus datos</legend>
            <Row className="g-3">
              {camposComunes.map((campo) => (
                <Col md={6} key={campo.id}>
                  <Form.Group controlId={campo.id}>
                    <Form.Label>{campo.label}</Form.Label>
                    <Form.Control type={campo.tipo} name={campo.id} placeholder={campo.placeholder} required />
                  </Form.Group>
                </Col>
              ))}
              <Col md={6}>
                <CampoPassword id="password" label="Contraseña" placeholder="Mínimo 8 caracteres" autoComplete="new-password" />
              </Col>
              <Col md={6}>
                <CampoPassword id="password2" label="Confirmar contraseña" placeholder="Repetí la contraseña" autoComplete="new-password" />
              </Col>
            </Row>
          </fieldset>

          {rol === 'alumno' ? (
            <fieldset>
              <legend className="fs-6 fw-bold">Como alumno</legend>
              <Row className="g-3">
                <Col md={6}>
                  <SelectNivel id="nivel" label="Nivel educativo" />
                </Col>
                <Col md={6}>
                  <Form.Group controlId="modalidad">
                    <Form.Label>Modalidad preferida</Form.Label>
                    <Form.Select name="modalidad">
                      {modalidades.map((modalidad) => (
                        <option key={modalidad}>{modalidad}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="materias">
                    <Form.Label>Materias de interés</Form.Label>
                    <Form.Control name="materias" placeholder="Ej: Matemática, Inglés" />
                  </Form.Group>
                </Col>
              </Row>
            </fieldset>
          ) : (
            <fieldset>
              <legend className="fs-6 fw-bold">Como profesor</legend>
              <Row className="g-3">
                {camposProfesor.map((campo) => (
                  <Col md={6} key={campo.id}>
                    <Form.Group controlId={campo.id}>
                      <Form.Label>{campo.label}</Form.Label>
                      <Form.Control type={campo.tipo} name={campo.id} placeholder={campo.placeholder} min="0" />
                    </Form.Group>
                  </Col>
                ))}
                <Col md={6}>
                  <SelectNivel id="nivel" label="Nivel educativo que enseñás" />
                </Col>
                <Col xs={12}>
                  <Form.Label className="d-block">Modalidad que ofrecés</Form.Label>
                  {modalidades.slice(0, 2).map((modalidad) => (
                    <Form.Check inline key={modalidad} id={`modalidad-${modalidad}`} name="modalidad" label={modalidad} />
                  ))}
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="descripcion">
                    <Form.Label>Sobre mí</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="descripcion"
                      placeholder="Contales a los alumnos sobre tu experiencia y metodología"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </fieldset>
          )}

          <Form.Check
            id="terminos"
            name="terminos"
            required
            label="Acepto los Términos y condiciones y la Política de privacidad de MiProfe"
          />

          {error && <Alert variant="danger" className="mb-0">{error}</Alert>}

          <Button type="submit" className="w-100">Crear cuenta</Button>
        </Form>

        <p className="text-center mt-4 mb-0">
          ¿Ya tenés cuenta? <Link to="/login">Iniciá sesión acá</Link>
        </p>
      </ContenidoAuth>
    </>
  )
}

export default Registro
