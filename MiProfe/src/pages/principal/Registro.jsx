// Registro de alumno o profesor
import { Backpack, ChalkboardTeacher, RocketLaunch } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ContenidoAuth from '../../components/auth/ContenidoAuth'
import CampoPassword from '../../components/auth/CampoPassword'
import SelectNivel from '../../components/common/SelectNivel'
import PantallaCarga from '../../components/common/PantallaCarga'
import { cuentasDePrueba } from '../../data/cuentas'

const roles = [
  { valor: 'alumno', texto: 'Alumno', icono: <Backpack weight="duotone" />, detalle: 'Quiero tomar clases' },
  { valor: 'profesor', texto: 'Profesor', icono: <ChalkboardTeacher weight="duotone" />, detalle: 'Quiero dar clases' },
]

// Los completan alumnos y profesores
const camposComunes = [
  { id: 'nombre', label: 'Nombre completo', tipo: 'text' },
  { id: 'dni', label: 'DNI', tipo: 'text', placeholder: 'Ej: 40123456', inputMode: 'numeric' },
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
    const cuentas = [...cuentasDePrueba, ...registradas]
    // Se guarda solo con numeros, asi "40.123.456" y "40123456" cuentan como el mismo DNI
    const dni = datos.get('dni').replace(/\D/g, '')

    if (dni.length < 7 || dni.length > 8) {
      setError('El DNI tiene que tener 7 u 8 números.')
      return
    }
    if (datos.get('password') !== datos.get('password2')) {
      setError('Las contraseñas no coinciden.')
      return
    }
    // Una sola cuenta por persona: si el DNI ya esta registrado no deja crear otra
    if (cuentas.some((cuenta) => cuenta.dni === dni)) {
      setError('Ya hay una cuenta con ese DNI. Si es tuya, iniciá sesión.')
      return
    }
    if (cuentas.some((cuenta) => cuenta.email === datos.get('email'))) {
      setError('Ya hay una cuenta con ese email.')
      return
    }

    const nueva = { nombre: datos.get('nombre'), dni, email: datos.get('email'), password: datos.get('password'), rol }
    localStorage.setItem('miprofe-cuentas', JSON.stringify([...registradas, nueva]))
    setError('')
    setDestino(`/${rol}`)
  }

  return (
    <>
      <title>Crear cuenta - MiProfe</title>
      <meta name="robots" content="noindex" />

      {destino && <PantallaCarga texto="Creando tu cuenta..." />}

      <ContenidoAuth tamano="grande">
        <header className="text-center mb-4">
          <p className="icono-auth mx-auto mb-3" aria-hidden="true"><RocketLaunch weight="duotone" /></p>
          <h1 className="h2 mb-1">Sumate a MiProfe</h1>
          <p className="text-body-secondary mb-0">Creá tu cuenta en un minuto</p>
        </header>

        <Form onSubmit={crearCuenta} onChange={() => setError('')} className="d-flex flex-column gap-4">
          <fieldset>
            <legend className="fs-6 fw-bold mb-2">Quiero registrarme como</legend>
            <section className="elegir-rol">
              {roles.map((opcion) => (
                <p className="mb-0 position-relative" key={opcion.valor}>
                  <input
                    type="radio"
                    id={`rol-${opcion.valor}`}
                    name="rol"
                    checked={rol === opcion.valor}
                    onChange={() => setRol(opcion.valor)}
                  />
                  <label htmlFor={`rol-${opcion.valor}`}>
                    <span aria-hidden="true">{opcion.icono}</span>
                    {opcion.texto}
                    <small>{opcion.detalle}</small>
                  </label>
                </p>
              ))}
            </section>
          </fieldset>

          <fieldset>
            <legend className="fs-6 fw-bold">Tus datos</legend>
            <section className="campos-grilla">
              {camposComunes.map((campo) => (
                <Form.Group controlId={campo.id} key={campo.id}>
                  <Form.Label>{campo.label}</Form.Label>
                  <Form.Control
                    type={campo.tipo}
                    name={campo.id}
                    placeholder={campo.placeholder}
                    inputMode={campo.inputMode}
                    required
                  />
                </Form.Group>
              ))}
              <CampoPassword id="password" label="Contraseña" placeholder="Mínimo 8 caracteres" autoComplete="new-password" />
              <CampoPassword id="password2" label="Confirmar contraseña" placeholder="Repetí la contraseña" autoComplete="new-password" />
            </section>
          </fieldset>

          {rol === 'alumno' ? (
            <fieldset>
              <legend className="fs-6 fw-bold">Como alumno</legend>
              <section className="campos-grilla">
                <SelectNivel id="nivel" label="Nivel educativo" />
                <Form.Group controlId="modalidad">
                  <Form.Label>Modalidad preferida</Form.Label>
                  <Form.Select name="modalidad">
                    {modalidades.map((modalidad) => (
                      <option key={modalidad}>{modalidad}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="materias" className="ocupa-todo">
                  <Form.Label>Materias de interés</Form.Label>
                  <Form.Control name="materias" placeholder="Ej: Matemática, Inglés" />
                </Form.Group>
              </section>
            </fieldset>
          ) : (
            <fieldset>
              <legend className="fs-6 fw-bold">Como profesor</legend>
              <section className="campos-grilla">
                {camposProfesor.map((campo) => (
                  <Form.Group controlId={campo.id} key={campo.id}>
                    <Form.Label>{campo.label}</Form.Label>
                    <Form.Control type={campo.tipo} name={campo.id} placeholder={campo.placeholder} min="0" />
                  </Form.Group>
                ))}
                <SelectNivel id="nivel" label="Nivel educativo que enseñás" />
                <fieldset className="ocupa-todo">
                  <legend className="form-label">Modalidad que ofrecés</legend>
                  {modalidades.slice(0, 2).map((modalidad) => (
                    <Form.Check inline key={modalidad} id={`modalidad-${modalidad}`} name="modalidad" label={modalidad} />
                  ))}
                </fieldset>
                <Form.Group controlId="descripcion" className="ocupa-todo">
                  <Form.Label>Sobre mí</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="descripcion"
                    placeholder="Contales a los alumnos sobre tu experiencia y metodología"
                  />
                </Form.Group>
              </section>
            </fieldset>
          )}

          <Form.Check
            id="terminos"
            name="terminos"
            required
            label="Acepto los Términos y condiciones y la Política de privacidad de MiProfe"
          />

          {error && <Alert variant="danger" className="mb-0">{error}</Alert>}

          <Button type="submit" className="w-100 py-2">Crear cuenta</Button>
        </Form>

        <p className="text-center mt-4 mb-0">
          ¿Ya tenés cuenta? <Link to="/login">Iniciá sesión acá</Link>
        </p>
      </ContenidoAuth>
    </>
  )
}

export default Registro
