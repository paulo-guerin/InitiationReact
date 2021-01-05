import React from "react";
import './App.css';
import LogIn from './LogIn/LogIn.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from "./Homepage/Homepage.js";
import LogOut from "./LogOut/LogOut.js";
export default function App() {
  return (
    <Router>
      <Route path="/homepage" exact render={props => (<Homepage {...props} />)} />
      <Route path="/" exact render={props => (<LogIn {...props} />)} />
      <Route path="/logout" exact render={props => (<LogOut {...props} />)} />
    </Router>
  );
}