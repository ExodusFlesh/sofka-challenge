import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Main = () => {
    


    const params = useParams();

    // const id = document.getElementById("player").value;
    // console.log(id);

    return (
        <div className='containerTitle'>
            <div className='nameGame'>
                <h1>Challenge <span>Sofka</span></h1>
            </div>
            <div className='player' id='player'>
                <input placeholder='Nombre' className='playerName'></input>
                <Link className='playerStart' to={`/game/${params}`}> Jugar Ahora</Link>
            </div>
        </div>
    )
}

export default Main;