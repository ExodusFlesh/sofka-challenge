import React from 'react';

const Game = () => {


    return (
        <div className='game'>
            <div className='game-score'>
                <div className='game-score-player'>
                    <h1>Participante</h1>
                    <p className='game-score-player-name'>a</p>
                </div>
                <div className='game-score-detail'>
                    <div className='game-score-detail-name'>
                        <h1>Score</h1>
                    </div>
                    <div className='game-score-detail-score'>
                        <p>0</p>
                    </div>
                </div>
                <div className='game-score-time'>
                    <h1>Time</h1>
                </div>
            </div>
            <div className='game-questions'>

            </div>
        </div>
    )
}

export default Game;