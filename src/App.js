import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Stem from "./components/stem"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Clouds from "./components/Clouds"
import Leaves from "./components/Leaves"


function App() {
  return (
    <Router>
      <Home></Home>
      <Clouds></Clouds>
      {/* <Stem></Stem> */}
      <Leaves></Leaves>
      <Projects></Projects>
      <Contact></Contact>
      {/* <StemTest></StemTest> */}
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
