import { useEffect, useState } from 'react';
import './Formulario.css'
import Campo from '../Campo/Campo';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import Botones from '../Boton/Boton';

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")

    // const [data, setData] = useState("");

    const {registrarColaborador, crearEquipo} = props;

    const manejarEnviar = (e) => {
        e.preventDefault();
        let datos = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datos);
        // saveData(datos);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color});
    }

    // const saveData = (valor) => {
    //     localStorage.setItem('data', valor);
    //     setData(valor);
    // }

    // const loadData = () => {
    //     const savedData = localStorage.getItem('data');
    //     if (savedData) {
    //         setData(savedData);
    //     }
    // }


    // useEffect(() =>{
    //     loadData();
    // }, [])

    return <section className='formulario'>
        <form onSubmit={manejarEnviar}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo= "Nombre" 
                placeholder="Ingresar nombre" 
                required
                valor = {nombre}
                cambiarValor = {setNombre}
            />
            <Campo
                titulo= "Puesto"
                placeholder="Ingresar puesto"
                required
                valor = {puesto}
                cambiarValor = {setPuesto}
            />
            <Campo 
                titulo= "Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor = {foto}
                cambiarValor = {setFoto}
            />
            <ListaOpciones
                valor = {equipo}
                cambiarEquipo = {setEquipo}
                equipos = {props.equipos}
            />
            <Botones 
                texto = "Crear colaborador"
            />
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo= "Titulo" 
                placeholder="Ingresar titulo" 
                required
                valor = {titulo}
                cambiarValor = {setTitulo}
            />
            <Campo
                titulo= "color"
                placeholder="Ingresar color en Hex"
                required
                valor = {color}
                cambiarValor = {setColor}
                type = "color"
            />
            <Botones 
                texto = "Registrar equipo"
            />
        </form>
    </section>
}

export default Formulario;