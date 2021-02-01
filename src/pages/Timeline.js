import React, { Component } from "react";
import "./Timeline.css"

class Timeline extends Component {
    render() {
        return(
            <div id="timeline">
                <div id="intro-text">
                    <h1>What I've Been Up To</h1>
                    <p>Having so many interests, it's really hard to just sit
                    still and dedicate myself to one thing and one thing alone, so I
                    end up doing a lot of different things on campus and off campus at a
                    time! In my time during MIT, I've grown interested and involved in <b>mentorship </b>
                    and <b>education</b>. I've founds outlets at MIT where I can also explore my love for <b>creativity </b>
                    and <b>writing </b>. Along the way, I've developed skills in <b>project management </b> and <b>social media</b>.
                    I also just love being very present on the Internet and being a helping hand where I can.</p>
                </div>
                <div className="vl">
                    <h1>Work</h1>
                    <h1>Classes</h1>
                    <h1>Extracurriculars</h1>
                </div>
            </div>
        )
    }
}

export default Timeline;