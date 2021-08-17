import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./SignUp.js";
import Login from "./LoginForm.js";
import Home from "./components/Home/Home";
import JobOpenings from "./components/JobOpenings";
import Clients from "./components/Clients";
import Vendors from "./components/Vendors";
import Footer from "./components/Footer";

import { MDBRow } from "mdb-react-ui-kit";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <MDBRow>
            <Login />
          </MDBRow>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/openings">
          <JobOpenings />
        </Route>
        <Route exact path="/clients">
          <Clients />
        </Route>
        <Route exact path="/vendors">
          <Vendors />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
