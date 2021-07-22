import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Peoples from './Components/Peoples';
import About from './Components/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <NavBar></NavBar>
      <br></br>
      <Switch>
        <Route path='/' Component={Peoples} />
        <Route path='about' Component={About} />
      </Switch>
    </Router>
  );
}

export default App;
