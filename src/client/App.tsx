import React from 'react';
import Container from './Container';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import { login } from '../server/controllers/userController';
import Login from './loginComponents/Login';
import Signup from './loginComponents/Signup';
import Main from './Main';

const App: React.FC = () => {
  return (
    <Router>
     
      <Switch>
        <Route path="/pipeline">
          <Container />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    
    </Router>
  );
};

export default App;
