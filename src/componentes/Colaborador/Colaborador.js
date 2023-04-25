import './Colaborador.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaborador = (props) =>{

    const {foto, nombre, puesto, id, fav} = props.datos
    const {colorSecundario, eliminarColaborador, like} = props;

    return <div className='colaborador'>
        <AiFillCloseCircle className='eliminar' onClick={()=>eliminarColaborador(id)}>D</AiFillCloseCircle>
        <div className='encabezado' style={{backgroundColor: colorSecundario}}>
            <img src={foto} title={nombre}/>
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart color="red" onClick={() => like(id)}/> :<AiOutlineHeart onClick={() => like(id)}/>}
        </div>
    </div>
}


export default Colaborador;