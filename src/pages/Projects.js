import React, { Component } from "react";
import './Projects.css';
import divvy from '../images/divvy.gif';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import logo from '../logo-cropped.png';
import aligned from '../images/aligned.jpg';

class Projects extends Component {
    render() {
        return(
            <div id="projects">
                <div id="header">
                    <h1>Projects</h1>
                </div>
                    <p>I love planning events, making silly little websites, and overall, just love doing projects. Here you will find an amalgamation
                        of my work across internships, classes, personal projects, and my extracurriculars.
                    </p>
            <div id="project-cards">
                <CardDeck>
                    <Card>
                    <a href="/dive">
                        <Card.Header>Divy</Card.Header>
                    </a>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">Internship</Card.Subtitle>
                            <Card.Text>Dive is a web app built using <b>React</b>, <b>Figma</b>, and <b>Typescript</b>, created for my Microsoft internship.</Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src={divvy}/>
                    </Card>

                    <Card>
                        <Card.Header as="h5">camimejia.com</Card.Header>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">Personal</Card.Subtitle>
                            <Card.Text>camimejia.com (the website that you're on!) is my personal website built using <b>React</b> and <b>Bootstrap</b>.</Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src={logo}/>
                    </Card>


                    <Card>
                    <a href="https://devpost.com/software/align-ezsfd2">
                        <Card.Header as="h5">aligned.space</Card.Header>
                    </a>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">Personal</Card.Subtitle>
                            <Card.Text>aligned.space is a web app built using <b>React</b> and <b>Bootstrap</b>, built for PearlHacks 2021.</Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src={aligned}/>
                    </Card>

                    <Card>
                    <a href="/dive">
                        <Card.Header>Divy</Card.Header>
                    </a>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">Internship</Card.Subtitle>
                            <Card.Text>Dive is a web app built using <b>React</b>, <b>Figma</b>, and <b>Typescript</b>, created for my Microsoft internship.</Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src={divvy}/>
                    </Card>
                </CardDeck>
            </div>
            </div>
        )
    }
}
export default Projects;
