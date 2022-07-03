import React, { Component } from "react";
import "./About.css";
import logo from '../logo-cropped.png';
import aboutphoto from '../about-photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSpotify} from "@fortawesome/free-brands-svg-icons";

class About extends Component {
    render() {
        return(
            <div className="home">

                <div className="intro-box">
                    <img className="logo" src={logo} alt="logo" />
                    <div className="vl">
                        <h1 className="header-text">Hi! My name is Cami Mejia and I'm a junior at MIT studying computer science and media studies. Some of my interests include gaming, product management, social media, and writing. Feel free to look around.</h1>
                        <div className="links">
                            <a href="https://github.com/camimgh"><FontAwesomeIcon size="3x" icon={faGithubAlt}/></a>
                            <a href="https://linkedin.com/in/camille-mejia"><FontAwesomeIcon size="3x" icon={faLinkedinIn}/></a>
                            <a href="https://mitadmissions.org/blogs/author/camim"><FontAwesomeIcon size="3x" icon={faWordpressSimple}/></a>
                            <a href="https://twitter.com/camimtw"><FontAwesomeIcon icon={faTwitter} size="3x"/></a>
                            <a href="https://open.spotify.com/user/camickers232?si=Z5McUE7PSVmQcgbYP4xf5g&nd=1"><FontAwesomeIcon size="3x" icon={faSpotify}/></a>
                        </div>
                    </div>
                </div>
                <div className="arrow">
                    <a href="#about"><FontAwesomeIcon size="lg" color="grey"  icon={faChevronDown} /></a>
                </div>
                <div className="about-me">
                    <div className="about-content">
                        <h1 id="about">About Me</h1>
                        <p className="about-text">
                        My name is Cami and I’m a junior at MIT studying computer science and media studies with a minor in Spanish. 
                        My interests really lie all over the place, from music to management to social media and creative writing. 
                        I’m a big believer in the importance of the intersection of humanities and STEM and I hope that my future job allows me to explore this junction. 
                        Talk to me about media trends, product management, or video games.
                        <br /><br />
                        I can normally be found watching kdramas, doom-scrolling through Twitter, watching Twitch streams, or attempting to beat Hades on my Switch.
                        <br/><br/>
                        Here’s <a href="/timeline">what I've been up to</a> and <a href="https://drive.google.com/file/d/1HucxHEOnVtrFGkogPyp9UKCHelJV90_p/view?usp=sharing">my resume</a>.</p><a className="about-text" href="mailto:camim@mit.edu">You can contact me here.</a>
                        <br></br>
                    </div>
                    <img id="about-photo" src={aboutphoto}/>
                </div>
            </div>
        )
    }
}

export default About;