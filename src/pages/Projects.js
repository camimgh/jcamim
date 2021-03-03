import React, { Component } from "react";
import './Projects.css';
import divvy from '../images/divvy.gif';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class Projects extends Component {
    render() {
        return(
            <div id="projects">
                <div id="header">
                    <h1>Projects</h1>
                </div>
                    <p>Hello! This page is still a work in progress.</p>
            <div id="project-cards">
                <CardDeck>
                    <a href="/dive">
                    <Card>
                        <Card.Header as="h5">Dive</Card.Header>
                        <Card.Img variant="top" src={divvy}/>
                        <Card.Body>
                            <Card.Text>Dive is a web app built using <b>React</b> and <b>Typescript</b>, built for my Microsoft internship.</Card.Text>
                        </Card.Body>
                    </Card>
                    </a>

                    <Card>
                        <Card.Header as="h5">camimejia.com</Card.Header>
                        <Card.Body>
                    <Card.Text>camimejia.com (the website that you're on!) is my personal website built using <b>React</b> and <b>Bootstrap</b>.</Card.Text>
                        </Card.Body>
                    </Card>


                    <Card>
                        <Card.Header as="h5">aligned.space</Card.Header>
                        <Card.Body>
                            <Card.Text>aligned.space is a web app built using <b>React</b> and <b>Bootstrap</b>, built for PearlHacks 2021.</Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
            </div>
        )
    }
}
export default Projects;
