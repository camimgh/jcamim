import React, { Component } from "react";
import "./About.css";
import logo from '../logo-cropped.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

class About extends Component {
    render() {
        return(
            <div>
                <div className="intro-box">
                    <img className="logo" src={logo} alt="logo" />
                    <div className="vl">
                        <h1 className="header-text">Hi! My name is Cami Mejia and I'm a sophomore at MIT studying computer science and media studies. Some of my interests include gaming, project management, social media, and writing. Feel free to look around.</h1>
                    </div>
                </div>
                <a href="#about"><FontAwesomeIcon size="lg" color="grey" className="arrow" icon={faChevronDown} /></a>
                <div className="about-me">
                    <h1 id="about">About Me</h1>
                </div>
            </div>
        )
    }
}

export default About;