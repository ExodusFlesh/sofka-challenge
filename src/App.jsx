import './Sass/App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from "./Components/Main";
import Game from "./Components/Game";
import Highscore from './Components/Highscore';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/game/:id" element={<Game/>}/>
                <Route path="/highscore" element={<Highscore/>}/>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </Router>
    );
}

export default App;
