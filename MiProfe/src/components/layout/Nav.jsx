// Navbar de todo el sitio (los links cambian segun la seccion: publica, alumno o profesor)
import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Navbar, Nav as NavBs, Container, NavDropdown } from 'react-bootstrap'
import Avatar from '../common/Avatar'
import logo from '../../assets/img/Logo_Principal.png'
import { alumno } from '../../data/alumno'
import { profesor } from '../../data/profesor'

// usuario: quien esta logueado en esa seccion (por ahora sale de los datos de ejemplo)
const secciones = {
  publica: {
    inicio: '/',
    rol: null,
    usuario: null,
    links: [{ texto: 'Inicio', ruta: '/' }],
  },
  alumno: {
    inicio: '/alumno',
    rol: 'Alumno',
    usuario: alumno,
    editarPerfil: '/alumno/editar-perfil',
    links: [
      { texto: 'Inicio', ruta: '/alumno' },
      { texto: 'Mis profesores', ruta: '/alumno/profesores' },
      { texto: 'Grupos', ruta: '/alumno/grupos' },
      { texto: 'Chat', ruta: '/alumno/chat' },
    ],
  },
  profesor: {
    inicio: '/profesor',
    rol: 'Profesor',
    usuario: profesor,
    editarPerfil: '/profesor/editar-perfil',
    links: [
      { texto: 'Inicio', ruta: '/profesor' },
      { texto: 'Solicitudes', ruta: '/profesor/solicitudes' },
      { texto: 'Grupos', ruta: '/profesor/grupos' },
      { texto: 'Chat', ruta: '/profesor/chat' },
      { texto: 'Publicar oferta', ruta: '/profesor/publicar-oferta' },
    ],
  },
}

function Nav() {
  const { pathname } = useLocation()
  const [abierto, setAbierto] = useState(false)

  let seccion = secciones.publica
  if (pathname.startsWith('/alumno')) seccion = secciones.alumno
  if (pathname.startsWith('/profesor')) seccion = secciones.profesor

  // En celular el menu queda desplegado al cambiar de pagina, asi que lo cerramos a mano
  const cerrarMenu = () => setAbierto(false)

  return (
    <header className="sticky-top">
      <Navbar expand="lg" className="mi-navbar px-lg-5 py-2" expanded={abierto} onToggle={setAbierto}>
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to={seccion.inicio}
            className="mi-titulo d-flex align-items-center gap-2 fs-4 fw-bolder text-primary"
            onClick={cerrarMenu}
          >
            <img src={logo} alt="" width="40" height="40" className="rounded-circle" />
            MiProfe
            {seccion.rol && <span className="mi-rol">{seccion.rol}</span>}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="nav-principal" label="Abrir menú" className="border-0 shadow-none" />

          <Navbar.Collapse id="nav-principal">
            <NavBs as="ul" className="ms-lg-auto me-lg-3 align-items-lg-center gap-1 mt-3 mt-lg-0">
              {seccion.links.map((link) => (
                <NavBs.Item as="li" key={link.ruta}>
                  {/* end: "Inicio" solo se marca en su ruta exacta, no en todas las de la seccion */}
                  <NavBs.Link
                    as={NavLink}
                    to={link.ruta}
                    end={link.ruta === seccion.inicio}
                    className="fw-semibold"
                    onClick={cerrarMenu}
                  >
                    {link.texto}
                  </NavBs.Link>
                </NavBs.Item>
              ))}
            </NavBs>

            {/* Sin sesion: Iniciar sesion y Registrarse. Con sesion: menu con el avatar del usuario */}
            {seccion.usuario ? (
              <NavDropdown
                align="end"
                className="mi-usuario mt-2 mt-lg-0"
                title={
                  <>
                    <Avatar iniciales={seccion.usuario.iniciales} tamano="mini" />
                    <span>{seccion.usuario.nombre.split(' ')[0]}</span>
                  </>
                }
              >
                <NavDropdown.Item as={Link} to={seccion.editarPerfil} onClick={cerrarMenu}>
                  Editar perfil
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/" onClick={cerrarMenu} className="text-danger">
                  Cerrar sesión
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div className="d-flex gap-2 mt-2 mt-lg-0">
                <Link className="btn btn-outline-dark" to="/login" onClick={cerrarMenu}>
                  Iniciar sesión
                </Link>
                <Link className="btn btn-primary" to="/registro" onClick={cerrarMenu}>
                  Registrarse
                </Link>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Nav
