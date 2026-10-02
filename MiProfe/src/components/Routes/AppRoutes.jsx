// Rutas de todas las paginas del sitio
import { Routes, Route } from 'react-router-dom'

import Inicio from '../../pages/principal/Inicio'
import Login from '../../pages/principal/Login'
import Registro from '../../pages/principal/Registro'

import InicioAlumno from '../../pages/alumno/InicioAlumno'
import MisProfesores from '../../pages/alumno/MisProfesores'
import PerfilProfesor from '../../pages/alumno/PerfilProfesor'
import GruposAlumno from '../../pages/alumno/GruposAlumno'
import ChatGrupo from '../../pages/alumno/ChatGrupo'
import EditarPerfilAlumno from '../../pages/alumno/EditarPerfilAlumno'

import InicioProfesor from '../../pages/profesor/InicioProfesor'
import Solicitudes from '../../pages/profesor/Solicitudes'
import GruposProfesor from '../../pages/profesor/GruposProfesor'
import ChatProfesor from '../../pages/profesor/ChatProfesor'
import PublicarOferta from '../../pages/profesor/PublicarOferta'
import EditarPerfilProfesor from '../../pages/profesor/EditarPerfilProfesor'

import Error404 from '../../pages/Error404'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />

      <Route path="/alumno" element={<InicioAlumno />} />
      <Route path="/alumno/profesores" element={<MisProfesores />} />
      <Route path="/alumno/profesores/:id" element={<PerfilProfesor />} />
      <Route path="/alumno/grupos" element={<GruposAlumno />} />
      <Route path="/alumno/chat" element={<ChatGrupo />} />
      <Route path="/alumno/editar-perfil" element={<EditarPerfilAlumno />} />

      <Route path="/profesor" element={<InicioProfesor />} />
      <Route path="/profesor/solicitudes" element={<Solicitudes />} />
      <Route path="/profesor/grupos" element={<GruposProfesor />} />
      <Route path="/profesor/chat" element={<ChatProfesor />} />
      <Route path="/profesor/publicar-oferta" element={<PublicarOferta />} />
      <Route path="/profesor/editar-perfil" element={<EditarPerfilProfesor />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default AppRoutes
