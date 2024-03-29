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

                <p>Greyed out bullets means that these are not new positions.</p>
                </div>
                <div id="timeline-cards">
                <h1>Summer 2022</h1>
                <Accordion>
                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="0">Work
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text>
                            In Summer 2022, I worked at Salesforce as 1 of 12 APMs. I worked on the Tableau Exchange team redesigning the 
                            submission listing process.
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
                <h1>Spring 2022</h1>
                <Accordion>
                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="0">Classes
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>21W.762: Poetry Workshop</li>
                                <li>6.S063: Design for the Web</li>
                                <li>21W.755: Reading and Writing Short Stories</li>
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
                                <li>Delta Phi Epsilon Vice President of Academic Affairs: planning mixers, Spring Formal,
                                    pset nights, and intro to finance series
                                </li>
                                <li>Student Events Board: planning SpringFest and Comedy Night</li>
                                <li>Associate Advising</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>

                <h1>Winter 2022</h1>
                <Accordion>
                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="0">Work
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>Undergraduate Researcher for MIT Game Lab</li>
                                <li className="grayout">Program Assistant for MIT Career Advising and Professional Development Office's Infinite Careers</li>
                                <li className="grayout">Blogger for MIT Admissions</li>
                                <li className="grayout">Panelist for MIT Admissions</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>

                <h1>Fall 2021</h1>
                <Accordion>
                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="0">Work
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>Lab Assistant for 6.0001 Intro to Python</li>
                                <li className="grayout">Blogger for MIT Admissions</li>
                                <li className="grayout">Program Assistant for MIT Career Advising and Professional Development Office's Infinite Careers</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="1">Classes
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>CMS.300: Introduction to Videogame Theory</li>
                                <li>CMS.616: Games and Culture</li>
                                <li>6.034: Artificial Intelligence</li>
                                <li>21G.704: Spanish IV</li>
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
                                <li>Member of Delta Phi Epsilon sorority</li>
                                <li>Student Events Board</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
                <h1>Summer 2021</h1>
                <Accordion>
                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="0">Internship
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text>
                            In Summer 2021, I interned for Microsoft as an Explore intern (PM and SWE) on the OneDrive Sync team, where I redesigned
                            the OneDrive desktop app settings page in React Native and Typescript.
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>

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
                                <li className="grayout">Blogger for MIT Admissions</li>
                                <li className="grayout">Panelist for MIT Admissions</li>
                                <li className="grayout">Program Assistant for MIT Career Advising and Professional Development Office's Infinite Careers</li>
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
                                <li>Discover Citadel</li>
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
                                <li>2023 Student Council Vice President</li>
                                <li>MIT THINK</li>
                                <li>MIT Associate Advising</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>


                <h1>Winter 2021</h1>
                <Accordion>
                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="0">Work
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>Undergraduate Researcher for MIT Teaching Systems Lab</li>
                                <li>Program Assistant for MIT Career Advising and Professional Development Office's Infinite Careers</li>
                                <li className="grayout">Blogger for MIT Admissions</li>
                                <li className="grayout">Panelist for MIT Admissions</li>
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
                                <li>2023 Class Council Vice President</li>
                                <li>MIT THINK</li>
                                <li>MIT Associate Advising</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>

                <h1>Fall 2020</h1>
                <Accordion>
                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center" eventKey="0">Work
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text>
                            <li className="grayout">Blogger for MIT Admissions</li>
                            <li className="grayout">Panelist for MIT Admissions</li>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center" eventKey="1">Classes</Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>6.009: Fundamentals of Programming</li>
                                <li>21G.703: Spanish III</li>
                                <li>8.02: Physics II: Electricity and Magnetism</li>
                                <li>18.02: Multivariable Calculus</li>
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
                                <li>2023 Student Council Vice President</li>
                                <li>MIT THINK</li>
                                <li>MIT Associate Advising</li>
                                <li>MIT CodeIt</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>

                <h1>Summer 2020</h1>
                <Accordion>
                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="0">Internship
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text>
                            In Summer 2020, I interned for Microsoft within their New Technologists program. During this
                            program, I studied the software develoment cycle, building the front-end of my app, Dive, using
                            Typescript and React. 

                            You can find more about this project here.
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>

                <h1>Spring 2020</h1>
                <Accordion>
                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="0">Work
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li className="grayout">Web-Based Research Intern for Massachusetts Science & Engineering Fair</li>
                                <li className="grayout">Blogger for MIT Admissions</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="1">Classes
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>6.042: Math for Computer Scientists</li>
                                <li>CMS.100: Introduction to Media Studies</li>
                                <li>6.08: Intro to EECS via Interconnected Embedded Systems</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="2">Extracurriculars
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>DanceTroupe</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>

                <h1>Fall 2019</h1>
                <Accordion>
                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="0">Work
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>Web-Based Research Intern for Massachusetts Science & Engineering Fair</li>
                                <li>Blogger for MIT Admissions</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="1">Classes
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>18.01: Single-Variable Calculus</li>
                                <li>3.091: Intro to Solid State Chemistry</li>
                                <li>21M.011: Introduction to Western Music</li>
                                <li>8.01: Physics 1 Mechanics</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card bg="light">
                    <Accordion.Toggle as={Card.Header} className="text-center"  eventKey="2">Extracurriculars
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>DanceTroupe</li>
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