import './Sass/App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Main from "./Components/Main.js";
import Game from "./Components/Game.js";

function App() {
  return (
    <div className='container'>
    <Router>
      <Route path="/" component={Main}/>
      <Route path="/game" component={Game}/>
    </Router>
    </div>
  );
}

export default App;
