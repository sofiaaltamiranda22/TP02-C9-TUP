// Landing publica
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import { Row, Col } from 'react-bootstrap'

// Componentes
import TarjetaPaso from '../../components/inicio/TarjetaPaso'
import TarjetaBeneficio from '../../components/inicio/TarjetaBeneficio'
import BotonMateria from '../../components/inicio/BotonMateria'
import TarjetaDestacado from '../../components/inicio/TarjetaDestacado'
import TarjetaCta from '../../components/inicio/TarjetaCta'

// Datos
import { pasos, beneficios, materias, destacados, ctas } from '../../data/inicio'
function Inicio() {
  return (
    <>
    <title>MiProfe - Encontrá tu profesor particular en Tucumán</title>

    <ContenidoPagina>
      <section id="hero">
        <h1>Encontrá al profesor particular perfecto para vos.</h1>
      </section>

      <section id="beneficios">
        <h2>Beneficios</h2>
        <Row className="g-3">
          {beneficios.map((beneficio) => (
            <Col md={4} key={beneficio.id}>
              <TarjetaBeneficio
                icono={beneficio.icono}
                titulo={beneficio.titulo}
                texto={beneficio.texto}
              />
            </Col>
          ))}
        </Row>
      </section>

      <section id="como-funciona">
        <h2>Cómo funciona</h2>
        <Row className="g-3">
          {pasos.map((paso) => (
            <Col md={4} key={paso.id}>
              <TarjetaPaso
                titulo={paso.titulo}
                texto={paso.texto}
              />
            </Col>
          ))}
        </Row>
      </section>

      <section id="materias">
        <h2>Materias</h2>
        <Row className="g-3">
          {materias.map((materia) => (
            <Col key={materia.id}>
              <BotonMateria
                nombre={materia.nombre}
                icono={materia.icono}
              />
            </Col>
          ))}
        </Row>
      </section>

      <section id="destacados">
        <h2>Profesores destacados</h2>
        <Row className="g-3">
          {destacados.map((profe) => (
            <Col md={4} key={profe.id}>
              <TarjetaDestacado
                nombre={profe.nombre}
                materia={profe.materia}
                precio={profe.precio}
              />
            </Col>
          ))}
        </Row>
      </section>

      <section id="cta">
        <h2>Sumate a MiProfe</h2>
        <Row className="g-3">
          {ctas.map((cta) => (
            <Col md={6} key={cta.id}>
              <TarjetaCta
                titulo={cta.titulo}
                texto={cta.texto}
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
