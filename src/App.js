import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Peoples from './Components/Peoples';
import About from './Components/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InvalidRoute from './Components/InvalidRout';
import UserView from './Components/UserView';
import UserRepos from './Components/UserRepos';

function App(props) {

  return (
    <Router>
      <NavBar></NavBar>
      <br></br>
      <Switch>
        <Route exact path='/' ><Peoples /></Route>
        <Route path='/about' ><About /></Route>
        <Route exact path='/details/:id' ><UserView /></Route>
        <Route path='/details/repos/:id' ><UserRepos /></Route>
        <Route path='*' ><InvalidRoute /></Route>
      </Switch>
    </Router>
  );
}

export default App;
