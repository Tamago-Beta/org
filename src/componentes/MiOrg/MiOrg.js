import './MiOrg.css'
import { useState } from 'react';

const MiOrg = (props) => {

    return <section className="orgSeccion">
        <h3 className='titulo'>Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;