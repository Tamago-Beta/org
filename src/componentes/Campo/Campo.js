import './Campo.css'

const Campo= (props) =>{
    
    // destructuracion
    const {type = "text"} = props;

    const modificarValue = (e) =>{
        props.cambiarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={props.placeholder}
            required={props.required}
            value = {props.valor}
            onChange = {modificarValue}
            type = {type}
        />
    </div>
}

export default Campo;