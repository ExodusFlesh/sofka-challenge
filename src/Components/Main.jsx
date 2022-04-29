import React, { useState } from 'react';
import { Link} from 'react-router-dom';

const Main = () => {

    const [text, setText] = useState('');

    const handleInputChange = ({ target }) => {
        setText(target.value);
    }

    return (
        <div className='containerTitle'>
            <div className='nameGame'>
                <h1>Challenge <span>Sofka</span></h1>
            </div>
            <div className='player' >
                <input placeholder='Nombre' className='playerName' id='playerName' value={text} onChange={handleInputChange} />
                <Link className='playerStart' to={`/game/${text}`}> Jugar Ahora</Link>
            </div>
        </div>
    )
}

export default Main;