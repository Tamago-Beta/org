import './App.css';
import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/equipo/Equipo';
import Footer from './componentes/Footer/Footer';

function App() {

  const [mostrarFormulario, setmostrarFormulario] = useState(true);
  const [colaboradores, setColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }]);

  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  // Modificar el color del like
  const like = (id) =>{
    console.log("like", id);
    const likeActualizado = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador
    })
    setColaboradores(likeActualizado)
  }

  const cambiarMostrar = () => {
    setmostrarFormulario(!mostrarFormulario);
  }

  const registrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(nuevosColaboradores);
  }

  // Actualizar Color
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo;
    })

    setEquipos(equiposActualizados)
  }

  // Crear equipo
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo);
    setEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  return (
    <div className="App">
      <Header />
      {mostrarFormulario && <Formulario 
        equipos={equipos.map(equipos => equipos.titulo)}
        registrarColaborador = {registrarColaborador}
        crearEquipo = {crearEquipo}
      />}
      <MiOrg cambiarMostrar = {cambiarMostrar}/>
      {equipos.map((equipos) => <Equipo 
        equipo = {equipos}
        key={equipos.titulo}
        colaboradores = {colaboradores.filter((colaborador => colaborador.equipo === equipos.titulo))}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor = {actualizarColor}
        like = {like}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
