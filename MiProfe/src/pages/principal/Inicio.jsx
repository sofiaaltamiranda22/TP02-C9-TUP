// Landing publica
import { Row, Col, Form, Button, Badge } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import TarjetaBeneficio from '../../components/inicio/TarjetaBeneficio'
import TarjetaPaso from '../../components/inicio/TarjetaPaso'
import BotonMateria from '../../components/inicio/BotonMateria'
import TarjetaDestacado from '../../components/inicio/TarjetaDestacado'
import TarjetaCta from '../../components/inicio/TarjetaCta'
import { beneficios, pasos, materias, destacados, ctas } from '../../data/inicio'
import logo from '../../assets/img/Logo_Principal.png'

function Inicio() {
  const navigate = useNavigate()

  // Todavia no hay backend: el buscador lleva a crear la cuenta, como en el TP1
  const buscar = (evento) => {
    evento.preventDefault()
    navigate('/registro')
  }

  return (
    <>
      <title>MiProfe - Encontrá tu profesor particular en Tucumán</title>

      <ContenidoPagina>
        <section id="hero">
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <Badge bg="light" text="dark" pill className="border border-dark mb-3">
                ★ Clases particulares, sin vueltas
              </Badge>
              <h1 className="display-5 fw-bold">
                Encontrá al profesor <span className="text-primary">particular</span> perfecto para vos.
              </h1>
              <p className="lead">
                Buscá por materia, nivel y zona, chateá con quien más te convenza y coordiná tus clases, todo desde un
                solo lugar.
              </p>

              <Form onSubmit={buscar}>
                <Row className="g-2">
                  <Col md={6}>
                    <Form.Control name="materia" placeholder="¿Qué querés aprender?" aria-label="Materia" />
                  </Col>
                  <Col md={3}>
                    <Form.Control name="zona" placeholder="Zona" aria-label="Zona" />
                  </Col>
                  <Col md={3}>
                    <Button type="submit" className="w-100">Buscar</Button>
                  </Col>
                </Row>
              </Form>

              <p className="small mt-3 mb-0">
                <strong>Populares: </strong>
                {materias.slice(0, 5).map((materia) => (
                  <Link key={materia.id} to="/registro" className="me-2">
                    {materia.materia}
                  </Link>
                ))}
              </p>
            </Col>

            <Col lg={5} className="text-center">
              <img src={logo} alt="Logo de MiProfe" width="320" height="320" className="img-fluid rounded-circle mi-sombra" />
            </Col>
          </Row>
        </section>

        <section id="beneficios">
          <h2 className="visually-hidden">Por qué elegir MiProfe</h2>
          <Row className="g-3">
            {beneficios.map((beneficio) => (
              <Col md={4} key={beneficio.id}>
                <TarjetaBeneficio icono={beneficio.icono} titulo={beneficio.titulo} texto={beneficio.texto} />
              </Col>
            ))}
          </Row>
        </section>

        <section id="como-funciona" className="text-center">
          <Badge bg="light" text="dark" pill className="border border-dark mb-2">
            Cómo funciona
          </Badge>
          <h2 className="mb-4">De la búsqueda a tu primera clase, en tres pasos</h2>
          <Row className="g-3 text-start">
            {pasos.map((paso) => (
              <Col md={4} key={paso.id}>
                <TarjetaPaso numero={paso.numero} titulo={paso.titulo} texto={paso.texto} />
              </Col>
            ))}
          </Row>
        </section>

        <section id="materias">
          <h2 className="mb-3">Elegí por materia</h2>
          <Row className="g-2">
            {materias.map((materia) => (
              <Col xs={6} md={3} key={materia.id}>
                <BotonMateria icono={materia.icono} materia={materia.materia} />
              </Col>
            ))}
            <Col xs={6} md={3}>
              <Button as={Link} to="/registro" variant="link" className="w-100">
                + Ver todas
              </Button>
            </Col>
          </Row>
        </section>

        <section id="destacados">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
            <h2 className="mb-0">Profesores destacados esta semana</h2>
            <Link to="/registro">Ver todos →</Link>
          </div>
          <Row className="g-3">
            {destacados.map((profesor) => (
              <Col md={4} key={profesor.id}>
                <TarjetaDestacado
                  iniciales={profesor.iniciales}
                  nombre={profesor.nombre}
                  materias={profesor.materias}
                  frase={profesor.frase}
                  precio={profesor.precio}
                  calificacion={profesor.calificacion}
                />
              </Col>
            ))}
          </Row>
        </section>

        <section id="cta">
          <h2 className="visually-hidden">Sumate a MiProfe</h2>
          <Row className="g-3">
            {ctas.map((cta) => (
              <Col md={6} key={cta.id}>
                <TarjetaCta
                  titulo={cta.titulo}
                  texto={cta.texto}
                  textoBoton={cta.textoBoton}
                  fondo={cta.fondo}
                  varianteBoton={cta.varianteBoton}
                />
              </Col>
            ))}
          </Row>
        </section>
      </ContenidoPagina>
    </>
  )
}

export default Inicio
