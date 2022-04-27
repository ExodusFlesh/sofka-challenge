import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Game extends Component {
    render() {
        return (
            <div className='game'>
                <div className='game-score'>
                    <div className='game-score-nameinGame'>
                        <h1>Name</h1>
                    </div>
                    <div className='game-score-detail'>
                        <div className='game-score-detail-name'>
                            <h1>Score</h1>
                        </div>
                        <div className='game-score-detail-score'>
                            <h1>0</h1>
                        </div>
                    </div>
                    <div className='game-score-time'>
                        <h1>time</h1>
                    </div>
                </div>
                <div className='questions'>
                    
                </div>
            </div>
        )
    }
}
