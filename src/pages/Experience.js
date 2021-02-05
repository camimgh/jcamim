import React, { Component } from "react";
import './Experience.css'
import Card from 'react-bootstrap/Card'

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.title = "cami m. - experience"
    }

    render() {
        return(
            <div id="experience">
                <div id="header-text">
                  <h1>Experience</h1>
                </div>

                <div id="experience-cards">
                    <Card>
                        <Card.Body>
                            <Card.Title>Incoming Explore (SWE + PM) Intern</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Microsoft
                            <br/>
                            June 2021-August 2021</Card.Subtitle>
                            <Card.Text>
                                Test.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Experience;