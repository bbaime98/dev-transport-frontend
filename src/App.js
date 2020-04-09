import React from "react";
import { Route, Switch,Router } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Signup from "./components/signupPage";
import Dashboard from './components/tripDetailsPage';
import TripComponent from './components/createTrip';
import history from './components/history';
import Pop from "./components/Modal"
import Login from './components/loginPage';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="container-fluid">
      <Router history={history}>
      <Navbar />
      <ToastContainer />
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/trip" component={TripComponent} />
          <Route path="/dashboard" component={Dashboard} />
     <Route exact path="/dashboard/pop"><Pop /></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;