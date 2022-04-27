import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Main extends Component {
  render() {
    return (
    <div className='containerTitle'>
      <div className='nameGame'>
        <h1>Challenge <span>Sofka</span></h1>
      </div>
      <div className='player'>
        <textarea placeholder='Nombre' className='playerName'></textarea>
        <Link className='playerStart' to="/game"> Jugar Ahora</Link>
      </div>
    </div>
    )
  }
}
