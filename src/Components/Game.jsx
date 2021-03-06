import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { getQuestions } from '../db';

const Game = () => {

    const [round, setRound] = useState(0);
    const [score, setScore] = useState(0);

    const navigate = useNavigate();
    const params = useParams();

    console.log(params)

    let questions = getQuestions();
    let categoryQuestion = questions.filter(question => question.category === round + 1);
    let currentlyQuestion = (categoryQuestion[(Math.floor(Math.random() * 5))]);



    function finish() {
        return (
            navigate(`/highscore/${params.id}/${score}`)
        )
    }

    function handleAnswer(correct) {
        if (correct === true) {
            setRound(round + 1);
            setScore(round * (150 * round));
        } else {
            finish();
        }

        if (round >= 4) {
            finish();
        }
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
                        <button key={question} className={round} onClick={(e) => handleAnswer(currentlyQuestion.answers[currentlyQuestion.solution] === question ? true : false)}>
                            {question}
                        </button>
                    ))
                    }
                </div>
            </div>
        )
    }

    function updateStatements() {
        return (
            <div>
                <div className='game-score'>
                <div className='game-score-player'>
                    <h1>Participante</h1>
                    <p className='game-score-player-name'>{params.id}</p>
                </div>
                <div className='game-score-detail'>
                    <div className='game-score-detail-name'>
                        <h1>Puntos</h1>
                    </div>
                    <div className='game-score-detail-score'>
                        <p>{(round * (150 * round))}</p>
                    </div>
                </div>
            </div>
                {ShowAnswers()}
            </div>
        )
    }


    return (
        <div className='game'>
            {updateStatements()}
            <div className='game-foot'>
                <Link className='game-foot-button' to={`/highscore/${params.id}/${score}`}><span>Retirarse</span></Link>
            </div>
        </div>
    )
}


export default Game;