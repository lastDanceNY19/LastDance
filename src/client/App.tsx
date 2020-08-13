import React, { useState, useEffect } from "react";
import Container from "./Container";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { login } from "../server/controllers/userController";
import Login from "./loginComponents/Login";
import Signup from "./loginComponents/Signup";
import Main from "./Main";

const App: React.FC = () => {
  let [userId, setUserId] = useState(null);

  function updateUserId(userIdFromServer: number) {
    setUserId(userIdFromServer);
  }

  return (
    <Router>
      <Switch>
        <Route path="/pipeline">
          <Container userId={userId} />
        </Route>
        <Route path="/login">
          <Login updateUserId={updateUserId} />
        </Route>
        <Route path="/signup">
          <Signup updateUserId={updateUserId} />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
