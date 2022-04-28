import './Sass/App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from "./Components/Main";
import Game from "./Components/Game";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/game/:id" element={<Game/>}/>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </Router>
    );
}

export default App;
