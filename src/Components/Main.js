import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className='containerTitle'>
      <div className='nameGame'>
        <h1>Challenge <span>Sofka</span></h1>
      </div>
      <div className='player'>
        <textarea placeholder='Nombre' className='playerName'></textarea>
        <Link className='playerStart' to="/start"> Jugar Ahora</Link>
      </div>
    </div>
  )
}

export default Main;