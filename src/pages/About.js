import React, { Component } from "react";
import './About.css'
import logo from '../logo.png';

class About extends Component {
    render() {
        return(
            <div>
            <p>hi hello</p>
            <img width="586px" height="450px" src={logo} alt="logo"/>
            </div>
        )
    }
}

export default About;