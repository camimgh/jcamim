import './App.css';
import NavBar from "./modules/NavBar.js"
import React, { Component } from "react";
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from "./pages/About"
import Projects from "./pages/Projects"
import Experience from './pages/Experience';
import Timeline from "./pages/Timeline";
import Writing from "./pages/Writing";
import Dive from './pages/pages_projects/Dive';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return(
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route component={About} exact path="/" />
            <Route component={Experience} path="/experience" /> 
            <Route component={Projects} path="/projects" />
            <Route component={Timeline} path="/timeline" />
            <Route component={Writing} path="/writing" />
            <Route component={Dive} path="/dive" />
          </Switch>
        </Router>
        <p id="footer">icon made by Emma Suh
          <br/>
          last updated 03/03/21
        </p>
      </div>
    )
  }
}
export default App;
