import logo from './logo.png';
import './App.css';
import NavBar from "./modules/NavBar.js"
import React, { Component } from "react";
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return(
      <NavBar/>
    )
  }
}
export default App;
