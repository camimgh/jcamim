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
                    <Card>
                        <Card.Img variant="top" src={divvy}/>
                        <Card.Body>
                            <Card.Title><Card.Link><a href="/dive">Dive</a></Card.Link></Card.Title>
                            <Card.Text>test</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>hewwo</Card.Title>
                            <Card.Text>test</Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
            </div>
        )
    }
}
export default Projects;
