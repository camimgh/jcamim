import React, { Component } from "react";
import "./Timeline.css"
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'
class Timeline extends Component {
    render() {
        return(
            <div id="timeline">
                <div id="intro-text">
                    <h1 id="header">What I've Been Up To</h1>
                    <p>Having so many interests, it's really hard to just sit
                    still and dedicate myself to one thing and one thing alone, so I
                    end up doing a lot of different things on campus and off campus at a
                    time! In my time during MIT, I've grown interested and involved in <b>mentorship </b>
                    and <b>education</b>. I've founds outlets at MIT where I can also explore my love for <b>creativity </b>
                    and <b>writing </b>. Along the way, I've developed skills in <b>project management </b> and <b>social media</b>.
                    I also just love being very present on the Internet and being a helping hand where I can.</p>
                </div>
                <div id="timeline-cards">
                <h1>Spring 2021</h1>
                <Accordion>
                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="0">Work
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>Lab Assistant for 6.08 Intro to EECS via Interconnected Embedded Systems</li>
                                <li>Blogger for MIT Admissions</li>
                                <li>Panelist for MIT Admissions</li>
                                <li>Program Assistant for MIT Career Advising and Professional Development Office's Infinite Careers</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="3">Programs
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>Blackstone's Future Women Innovators</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center" eventKey="1">Classes
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>6.006: Introduction to Algorithms</li>
                                <li>7.014: Introductory Biology</li>
                                <li>9.00: Introduction to Psychological Sciences</li>
                                <li>CMS.621: Fans & Fan Culture</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center" eventKey="2">Extracurriculars</Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>blogging for MIT Admissions</li>
                                <li>answering questions from prospective mit students as a student panelist</li>
                                <li>running @mitadmissions on instagram and hosting weekly hour-long q&a sessions</li>
                                <li>organizing the MIT Career Advising & Professional Development Office's Infinite Careers series
                                as a program assistant</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>


                <h1>IAP 2021</h1>
                <Accordion>
                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="0">Work
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>Undergraduate Researcher for MIT Teaching Systems Lab</li>
                                <li>Blogger for MIT Admissions</li>
                                <li>Panelist for MIT Admissions</li>
                                <li>Program Assistant for MIT Career Advising and Professional Development Office's Infinite Careers</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>


                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center" eventKey="1">Programs
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <Card.Text>
                            Over IAP, instead of taking classes, I participated in a series of fintech programs to learn
                            more about the technological side of several different investment management groups and hedge funds.
                            <ul>
                                <li>Jane Street Insight</li>
                                <li>D.E. Shaw Group Discovery Fellowship</li>
                                <li>Goldman Sachs Engineering Possibilities Summit</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center" eventKey="2">Extracurriculars</Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>blogging for MIT Admissions</li>
                                <li>answering questions from prospective mit students as a student panelist</li>
                                <li>running @mitadmissions on instagram and hosting weekly hour-long q&a sessions</li>
                                <li>organizing the MIT Career Advising & Professional Development Office's Infinite Careers series
                                as a program assistant</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>

                </div>
            </div>
        )
    }
}

export default Timeline;
/*

                <div className="vl" id="timeline-line">
                    <h1>Work</h1>
                    <ul>
                        <li>blogging for mitadmissions</li>
                        <li>answering questions from prospective mit students as a student panelist</li>
                        <li>running @mitadmissions on instagram and hosting weekly hour-long q&a sessions</li>
                        <li>organizing the MIT Career Advising & Professional Development Office's Infinite Careers series
                        as a program assistant</li>
                    </ul>
                    <h1>Classes</h1>
                    <ul>
                        <li>6.006: Introduction to Algorithms</li>
                        <li>CMS.621: Fans & Fan Culture</li>
                    </ul>
                    <h1>Extracurriculars</h1>
                    <ul>
                        <li>mentoring for MIT THINK</li>
                        <li>advising MIT freshmen as an Associate Advisor</li>
                        <li>organizing and running events as Vice President for the MIT Class of 2023</li>
                    </ul>
                </div>
                */