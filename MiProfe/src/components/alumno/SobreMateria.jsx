// Seccion del perfil del profesor con la descripcion de su materia, que se pide a la API de Wikipedia
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Card, Button, Spinner } from 'react-bootstrap'
import { articulosWikipedia } from '../../data/alumno'

// La URL de la API sale del archivo .env, no se escribe en el componente
const API_URL = import.meta.env.VITE_API_URL

function SobreMateria({ materia }) {
  const [info, setInfo] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  // Cada vez que se toca Reintentar sube en 1 y eso vuelve a ejecutar el useEffect
  const [intento, setIntento] = useState(0)

  // Algunas materias tienen varios significados en Wikipedia ("Inglés"), por eso se busca el articulo exacto
  const articulo = articulosWikipedia[materia] ?? materia

  // Al cargar el perfil (y al reintentar) pide a Wikipedia el resumen de la materia
  useEffect(() => {
    // Si te vas del perfil antes de que llegue la respuesta, la respuesta se ignora
    let vigente = true

    const pedirResumen = async () => {
      try {
        const response = await axios.get(`${API_URL}/page/summary/${encodeURIComponent(articulo)}`)
        if (vigente) setInfo(response.data)
      } catch (err) {
        console.error(err)
        if (!vigente) return
        setError(true)
        Swal.fire({
          icon: 'error',
          title: 'No pudimos cargar la información de la materia',
          text: 'Revisá tu conexión a internet y probá de nuevo en unos segundos.',
          confirmButtonText: 'Entendido',
          confirmButtonColor: '#2d8cf0',
        })
      } finally {
        if (vigente) setCargando(false)
      }
    }

    pedirResumen()
    return () => {
      vigente = false
    }
  }, [articulo, intento])

  const reintentar = () => {
    setError(false)
    setCargando(true)
    setIntento(intento + 1)
  }

  return (
    <section id="sobre-materia">
      <h2 className="h4 mb-3">Sobre {materia}</h2>

      {cargando && (
        <div className="d-flex align-items-center gap-2" role="status">
          <Spinner animation="border" size="sm" variant="primary" />
          <span>Buscando información de la materia...</span>
        </div>
      )}

      {!cargando && error && (
        <div className="d-flex flex-wrap align-items-center gap-3">
          <p className="mb-0">No pudimos traer la información de {materia}.</p>
          <Button variant="outline-dark" size="sm" onClick={reintentar}>Reintentar</Button>
        </div>
      )}

      {!cargando && info && (
        <Card>
          <Card.Body className="d-flex flex-column flex-md-row gap-3">
            {info.thumbnail && (
              <img src={info.thumbnail.source} alt={info.title} width="120" className="rounded align-self-start" />
            )}
            <div>
              <Card.Text>{info.extract}</Card.Text>
              <a href={info.content_urls.desktop.page} target="_blank" rel="noreferrer" className="small">
                Leer más en Wikipedia
              </a>
            </div>
          </Card.Body>
        </Card>
      )}
    </section>
  )
}

export default SobreMateria
