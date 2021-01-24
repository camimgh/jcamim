import React, { Component } from "react";
import "./About.css";
import logo from '../logo-cropped.png';
import small from '../apple-touch-icon.png';

class About extends Component {
    render() {
        return(
            <div className="intro-box">
                <img className="logo" src={logo} alt="logo" />
                <div className="vl">
                    <h1 className="header-text">Hi! My name is Cami Mejia and I'm a sophomore at MIT studying computer science and media studies. Some of my interests include gaming, project management, social media, and writing. Feel free to look around.</h1>
                </div>
            </div>
        )
    }
}

export default About;