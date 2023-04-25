import './Equipo.css'
import Colaborador from './../Colaborador/Colaborador';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    // Destructurar
    const {colorPrimario, colorSecundario, titulo, id} = props.equipo;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;

    return <>
        { colaboradores.length > 0 &&
            <section className='equipo' style={{backgroundColor: hexToRgba(colorPrimario, 0.6)}}>
                <input 
                    type="color"
                    className='input-color'
                    value={colorPrimario}
                    onChange={(e) => {
                        actualizarColor(e.target.value, id);
                    }}
                />
                <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
                <div className="colaboradores">
                    {colaboradores.map((colaborador, index) => <Colaborador 
                    datos = {colaborador} 
                    key={index}
                    colorSecundario={colorPrimario}
                    eliminarColaborador ={eliminarColaborador}
                    like ={like}
                    />)}
                </div>
            </section>
        }
    </>
}

export default Equipo;