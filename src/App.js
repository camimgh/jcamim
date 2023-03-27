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
import Complicated from './pages/blogs/Complicated';
import CMS300Final from './pages/pages_projects/CMS300final';
import CMS335 from './pages/pages_projects/CMS335'

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
            <Route component={Complicated} path="/complicated" />
            <Route component={CMS300Final} path="/cms300final" />
            <Route component={CMS335} path="/cms335" />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;
