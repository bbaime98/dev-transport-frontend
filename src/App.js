import React from "react";
import { Route, Switch,Router } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Signup from "./components/signupPage";
import history from './components/history';

const App = () => {
  return (
    <div className="container-fluid">
      <Router history={history}>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Signup} />
      </Switch>
      </Router>
    </div>
  );
};

export default App;
