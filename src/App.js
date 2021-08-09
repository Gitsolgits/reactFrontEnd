import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.jfif";
import Signup from "./SignUp.js";
import Login from "./LoginForm.js";
import Home from "./components/Home/Home";

import { MDBRow } from "mdb-react-ui-kit";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signin">
            <MDBRow>
              <Login />
            </MDBRow>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
