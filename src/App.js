import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Peoples from './Components/Peoples';
import About from './Components/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InvalidRoute from './Components/InvalidRout';

function App() {

  return (
    <Router>
      <NavBar></NavBar>
      <br></br>
      <Switch>
        <Route exact path='/' ><Peoples /></Route>
        <Route path='/about' ><About /></Route>
        <Route path='*' ><InvalidRoute /></Route>
      </Switch>
    </Router>
  );
}

export default App;
