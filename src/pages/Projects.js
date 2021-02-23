import React, { Component } from "react";
import './Projects.css';
import divvy from '../images/divvy.gif';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import IsoTopeGrid from 'react-isotope';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dive from './pages_projects/Dive'

class Projects extends Component {
    render() {
        return(
            <div id="projects">
                <div id="header">
                    <h1>Projects</h1>
                </div>
                
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
                        <Card.Body>
                            <Card.Title>camimejia.com</Card.Title>
                            <Card.Text>test</Card.Text>
                        </Card.Body>
                    </Card>


                    <Card>

                    </Card>
                </CardDeck>
            </div>
            </div>
        )
    }
}
export default Projects;
