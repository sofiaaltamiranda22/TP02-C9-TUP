// Navbar de todo el sitio (los links cambian segun la seccion: publica, alumno o profesor)
import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Navbar, Nav as NavBs, Container } from 'react-bootstrap'
import logo from '../../assets/img/Logo_Principal.png'

const secciones = {
  publica: {
    inicio: '/',
    links: [{ texto: 'Inicio', ruta: '/' }],
    botones: [
      { texto: 'Iniciar sesión', ruta: '/login' },
      { texto: 'Registrarse', ruta: '/registro' },
    ],
  },
  alumno: {
    inicio: '/alumno',
    links: [
      { texto: 'Inicio', ruta: '/alumno' },
      { texto: 'Mis profesores', ruta: '/alumno/profesores' },
      { texto: 'Grupos', ruta: '/alumno/grupos' },
      { texto: 'Chat', ruta: '/alumno/chat' },
    ],
    botones: [{ texto: 'Cerrar sesión', ruta: '/' }],
  },
  profesor: {
    inicio: '/profesor',
    links: [
      { texto: 'Inicio', ruta: '/profesor' },
      { texto: 'Solicitudes', ruta: '/profesor/solicitudes' },
      { texto: 'Grupos', ruta: '/profesor/grupos' },
      { texto: 'Chat', ruta: '/profesor/chat' },
      { texto: 'Publicar oferta', ruta: '/profesor/publicar-oferta' },
    ],
    botones: [{ texto: 'Cerrar sesión', ruta: '/' }],
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
    <header>
      <Navbar
        expand="lg"
        className="mi-navbar mi-bg-celeste border-bottom border-2 border-dark px-lg-5 py-3"
        expanded={abierto}
        onToggle={setAbierto}
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to={seccion.inicio}
            className="mi-titulo d-flex align-items-center gap-2 fs-3 fw-bolder text-primary"
            onClick={cerrarMenu}
          >
            <img src={logo} alt="" width="44" height="44" className="rounded-circle" />
            MiProfe
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="nav-principal" label="Abrir menú" className="border-2 border-dark mi-sombra" />

          <Navbar.Collapse id="nav-principal">
            <NavBs as="ul" className="ms-lg-auto align-items-lg-center gap-lg-2 mt-3 mt-lg-0">
              {seccion.links.map((link) => (
                <NavBs.Item as="li" key={link.ruta}>
                  {/* end: "Inicio" solo se marca en su ruta exacta, no en todas las de la seccion */}
                  <NavBs.Link
                    as={NavLink}
                    to={link.ruta}
                    end={link.ruta === seccion.inicio}
                    className="fw-bold"
                    onClick={cerrarMenu}
                  >
                    {link.texto}
                  </NavBs.Link>
                </NavBs.Item>
              ))}

              {seccion.botones.map((boton) => (
                <NavBs.Item as="li" key={boton.texto}>
                  <Link className="btn mi-btn mt-2 mt-lg-0" to={boton.ruta} onClick={cerrarMenu}>
                    {boton.texto}
                  </Link>
                </NavBs.Item>
              ))}
            </NavBs>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Nav
