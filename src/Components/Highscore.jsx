import React from 'react';
import { Link } from 'react-router-dom';

import { getScore } from '../db';

const Highscore = () => {

  let list = getScore();


  function ShowPlayers() {
    return (
      <div className='highscore-rank'>
        <div className='highscore-rank-title'>
          <h1>HIGHSCORE</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>PUNTOS</th>
            </tr>
          </thead>
          <tbody>
            {list.map((player) => (
              <tr key={player.name} >
                <td>
                  {player.name}
                </td>
                <td key={player.score}>
                  {player.score}
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div >
    )
  }


  return (
    <div className='highscore'>
      {ShowPlayers()}
      <div className='highscore-footer'>
        <Link to="/" className='highscore-footer-button' > <span>Jugar Nuevamente</span> </Link>
      </div>
    </div>
  )
}

export default Highscore;