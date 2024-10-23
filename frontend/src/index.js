import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import HomePage from "./components/homepage/HomePage";
import NavBar from "./components/navbar/NavBar";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Scene from "./components/Scene";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <div className="">
      <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/scene" component={Scene} />
        </Switch>
      </div>
    </Router>
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReactDOM.render(<App />, document.getElementById("root"));
