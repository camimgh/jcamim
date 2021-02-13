import React, { Component } from "react";
import "./Timeline.css"
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'

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
                <h1>Currently</h1>
                <Card bg="light">
                    <Card.Header>Work</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>blogging for MIT Admissions</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
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