import './Sass/App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Page from "./Components/Page.js";

function App() {
  return (
    <Router>
       <Route path="" component={Page}/>
    </Router>
  );
}

export default App;
