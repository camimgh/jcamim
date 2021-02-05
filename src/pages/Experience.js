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
                                Microsoft Explore is a 12-week summer internship for 1st and 2nd years designed for participants
                                to explore program management and software development roles.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Infinite Careers Program Assistant</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">MIT Career Advising & Professional Development Office
                            <br/>
                            January 2021-current</Card.Subtitle>
                            <Card.Text>
                                Infinite Careers is a collaboration between MIT CAPD and the Alumni Association, where
                                alumni return to talk about their MIT career paths and answer questions from students.
                                <ul>
                                    <li>Recruited six different alumni in a month to participate in future events.</li>
                                    <li>Publicized events so that every event hit max capacity.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Admissions Panelist & Off-Screen Moderator</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">MIT Admissions
                            <br/>
                            August 2020-current</Card.Subtitle>
                            <Card.Text>
                                Panelists lead 45 minute Q&A sessions, answering questions from anywhere from 30 to 200 prospective
                                students.
                                <br/>
                                Off-screen moderators address questions during online tours and info sessions.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Student Blogger</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">MIT Admissions
                            <br/>
                            August 2019-current</Card.Subtitle>
                            <Card.Text>
                                Bloggers write about student life and communicate to their readers about what it's like to be
                                an MIT student through their own experience.
                                <ul>
                                    <li>Write weekly blogposts about MIT culture</li>
                                    <li>Organized and moderated CP* 2020, MIT's digital Admitted Students Weekend, for over 1400 admits.</li>
                                    <li>Grew @mitadmissions Instagram account from 26k followers to 33k+ followers in 4 months. Host weekly
                                        live-streams for 60+ people on Instagram Live.
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Experience;