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
                <div id="header">
                  <h1>Experience</h1>
                </div>

                <div id="experience-cards">
                    <Card>
                        <Card.Body>
                            <Card.Title>Explore (SWE + PM) Intern</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Microsoft
                            <br/>
                            June 2021-August 2021</Card.Subtitle>
                            <Card.Text>
                                Microsoft Explore is a 12-week summer internship for 1st and 2nd years designed for participants
                                to explore program management and software development roles. 

                                This summer, I worked on the OneDrive Sync team redesigning the OneDrive desktop settings page.
                                <ul>
                                    <li>Worked with engineering, design, business, and PM teams to create OneDrive settings page redesign spec.</li>
                                    <li>Created wireframes for new settings page in Figma and Balsamiq.</li>
                                    <li>Coded OneDrive settings page in React Native and Typescript.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Lab Assistant for 6.08: Intro to EECS via Interconnected Embedded Systems</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">MIT
                            <br/>
                            February 2021-May 2021</Card.Subtitle>
                            <Card.Text>
                                Lab assistants for this class are responsible for assisting current
                                students with labs twice a week related to EECS and Internet of Things.
                                Lab assistants answer questions and provide check-offs to ensure all students
                                understand the class content.
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
                                an MIT student through their own experience. <a href="https://mitadmissions.org/blogs/author/camim">Read my blogs.</a>
                                <ul>
                                    <li>Was 1 of 4 bloggers selected from 96 applicants.</li>
                                    <li>Write weekly blogposts about MIT culture</li>
                                    <li>Organized and moderated CP* 2020, MIT's digital Admitted Students Weekend, for over 1400 admits.</li>
                                    <li>Grew @mitadmissions Instagram account from 26k followers to 33k+ followers in 4 months. Host weekly
                                        live-streams for 60+ people on Instagram Live.
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>New Technologist Intern</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Microsoft 
                            <br/>
                            June 2020-August 2020</Card.Subtitle>
                            <Card.Text>
                                The TNT program is a 7 week academy where interns learn the software development cycle. Interns
                                work in groups of 5 to develop the front-end of an app of their esign using Typescript and React to
                                present at the end of the 7 weeks.
                                <ul>
                                    <li>Was 1 of 100 TNTs selected from 1700 applicants.</li>
                                    <li>Conducted user research surveys of 100+ people.</li>
                                    <li>Designed and wrote specifications for iOS app "Dive"</li>
                                    <li>Organized, wrote, and edited final presentation for "Dive", which was shown to various Microsoft executives.</li>
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