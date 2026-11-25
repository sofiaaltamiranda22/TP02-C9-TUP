// Landing publica
import { MapPin } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import TarjetaBeneficio from '../../components/inicio/TarjetaBeneficio'
import TarjetaPaso from '../../components/inicio/TarjetaPaso'
import BotonMateria from '../../components/inicio/BotonMateria'
import TarjetaDestacado from '../../components/inicio/TarjetaDestacado'
import TarjetaCta from '../../components/inicio/TarjetaCta'
import InfoMateria from '../../components/inicio/InfoMateria'
import { beneficios, pasos, materias, destacados, ctas } from '../../data/inicio'
import logo from '../../assets/img/Logo_Principal.png'
import '../../styles/bento.css'
import '../../styles/inicio.css'

function Inicio() {
  const navigate = useNavigate()
  // Posicion de la materia que se muestra como ejemplo en el buscador
  const [indiceMateria, setIndiceMateria] = useState(0)
  // Materia que se toco en "Elegí por materia". Mientras sea null no se muestra la ventana
  const [materiaElegida, setMateriaElegida] = useState(null)

  // Al cargar la pagina arranca un intervalo que cada 2 segundos pasa a la materia siguiente.
  // Al salir de la pagina se corta, para que no siga corriendo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceMateria((indice) => (indice + 1) % materias.length)
    }, 2000)

    return () => clearInterval(intervalo)
  }, [])

  // Todavia no hay backend: el buscador lleva a crear la cuenta, como en el TP1
  const buscar = (evento) => {
    evento.preventDefault()
    navigate('/registro')
  }

  return (
    <>
      <title>MiProfe - Encontrá tu profesor particular en Tucumán</title>

      <ContenidoPagina>
        {/* Arriba: el buscador grande y el buho al lado */}
        <section id="hero" className="bento">
          <header className="cuadro ancho-8 p-4 p-md-5 justify-content-center">
            <p className="mb-3">
              <span className="badge bg-primary rounded-pill px-3 py-2"><MapPin weight="duotone" className="me-1" />Clases particulares en Tucumán</span>
            </p>
            <h1 className="display-5 fw-bold">
              Encontrá al profesor <span className="text-primary">particular</span> perfecto para vos.
            </h1>
            <p className="lead text-body-secondary">
              Buscá por materia, nivel y zona, chateá con quien más te convenza y coordiná tus clases, todo desde un
              solo lugar.
            </p>

            <form onSubmit={buscar} className="buscador-hero" role="search">
              <label htmlFor="buscar-materia" className="visually-hidden">Materia</label>
              <input
                id="buscar-materia"
                name="materia"
                className="form-control"
                placeholder={`¿Qué querés aprender? Ej: ${materias[indiceMateria].materia}`}
              />
              <label htmlFor="buscar-zona" className="visually-hidden">Zona</label>
              <input id="buscar-zona" name="zona" className="form-control" placeholder="Zona" />
              <button type="submit" className="btn btn-primary">Buscar</button>
            </form>

            <nav className="small mt-3" aria-label="Materias populares">
              <strong>Populares: </strong>
              {materias.slice(0, 5).map((materia) => (
                <Link key={materia.id} to="/registro" className="me-2">
                  {materia.materia}
                </Link>
              ))}
            </nav>
          </header>

          <figure className="cuadro cuadro--azul ancho-4 m-0 align-items-center justify-content-center p-4">
            <img src={logo} alt="Logo de MiProfe: un búho leyendo" width="280" height="280" className="img-fluid rounded-circle hero-buho" />
            <figcaption className="mt-3 fw-bold text-center">Aprender con alguien que te explique, cambia todo.</figcaption>
          </figure>
        </section>

        <section id="cta" className="bento">
          <h2 className="visually-hidden">¿Venís a aprender o a enseñar?</h2>
          {ctas.map((cta) => (
            <TarjetaCta
              key={cta.id}
              titulo={cta.titulo}
              texto={cta.texto}
              textoBoton={cta.textoBoton}
              fondo={cta.fondo}
              varianteBoton={cta.varianteBoton}
              icono={cta.icono}
            />
          ))}
        </section>

        <section id="beneficios" className="bento">
          <h2 className="visually-hidden">Por qué elegir MiProfe</h2>
          {beneficios.map((beneficio) => (
            <TarjetaBeneficio
              key={beneficio.id}
              icono={beneficio.icono}
              titulo={beneficio.titulo}
              texto={beneficio.texto}
              color={beneficio.color}
            />
          ))}
        </section>

        <section id="como-funciona" className="cuadro p-4 p-md-5">
          <header className="text-center mb-4">
            <p className="cuadro-etiqueta pe-0">Cómo funciona</p>
            <h2>De la búsqueda a tu primera clase, en tres pasos</h2>
          </header>
          <ol className="pasos">
            {pasos.map((paso) => (
              <TarjetaPaso key={paso.id} numero={paso.numero} titulo={paso.titulo} texto={paso.texto} />
            ))}
          </ol>
        </section>

        <section id="materias">
          <header className="mb-3">
            <h2 className="h3 mb-1">Elegí por materia</h2>
            <p className="text-body-secondary mb-0">Tocá una materia para conocer de qué se trata.</p>
          </header>
          <ul className="grilla-materias">
            {materias.map((materia) => (
              <li key={materia.id}>
                <BotonMateria icono={materia.icono} materia={materia.materia} onElegir={() => setMateriaElegida(materia)} />
              </li>
            ))}
            <li>
              <Link to="/registro" className="boton-materia boton-materia--ver">
                Ver todas →
              </Link>
            </li>
          </ul>
        </section>

        <section id="destacados">
          <header className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
            <h2 className="h3 mb-0">Profesores destacados esta semana</h2>
            <Link to="/registro" className="fw-bold">Ver todos →</Link>
          </header>
          <ul className="grilla-profesores">
            {destacados.map((profesor) => (
              <li key={profesor.id}>
                <TarjetaDestacado
                  iniciales={profesor.iniciales}
                  nombre={profesor.nombre}
                  materias={profesor.materias}
                  frase={profesor.frase}
                  precio={profesor.precio}
                  calificacion={profesor.calificacion}
                />
              </li>
            ))}
          </ul>
        </section>
      </ContenidoPagina>

      {materiaElegida && (
        <InfoMateria key={materiaElegida.id} materia={materiaElegida} onCerrar={() => setMateriaElegida(null)} />
      )}
    </>
  )
}

export default Inicio
