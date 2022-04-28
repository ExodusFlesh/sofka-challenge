import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { getQuestions } from '../db';

const Game = () => {

    const [round, setRound] = useState(0);
    const [active, setActive] = useState(true);

    let questions = getQuestions();

    let currentlyQuestion =  (questions[(Math.floor(Math.random() * 25))]);

    function handleAnswer(correct, e) {
        correct === true ? setRound(round + 1) : setActive(false);
        console.log(currentlyQuestion.category[5]);
    }

    function ShowQuestion() {
        return (
            <h1>
                {(currentlyQuestion.question)}
            </h1>
        )
    }


    function ShowAnswers() {
        return (
            <div className='game-questions' >
                {ShowQuestion()}
                <div className='game-questions-options'>
                    {currentlyQuestion.answers.map((question) => (
                        <button key={question} onClick={(e) => handleAnswer(currentlyQuestion.answers[currentlyQuestion.solution] === question ? true:false, e)}>
                            {question}
                        </button>
                    ))
                    }
                </div>
            </div>
        )
    }


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
            {ShowAnswers()}
            <div className='game-foot'>
                <Link className='game-foot-button' to="/highscore"><span>Retirarse</span></Link>
            </div>
        </div>
    )
}


export default Game;