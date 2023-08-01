import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import CMS335md from "./CMS335.md";
import './projectspages.css'
import gfm from 'remark-gfm';
import Card from 'react-bootstrap/Card'

class CMS335 extends Component {
    constructor(props) {
        super(props);
        this.state = { markdown: '' };
    }
    componentWillMount() {
        fetch(CMS335md).then(res => res.text()).then(text => this.setState({ markdown: text})); 
    }

    render() {
        const { markdown } = this.state;
        return (
            <div id="dive">
                <Card body>
                <p><a href="/projects">Back to Projects</a></p>
                <h1>CMS.335 Video Projects
                </h1>
                <p>
                    During my junior spring, I took a documentary making class and created three short video projects to demonstrate my work.
                </p>
                <p>
                    The first video was a focus on a person or place, revealing something interesting or compelling about them. I did the video project on 
                    my friend Jovita, who is a world-class Tetris and Minesweeper player. You can view the video <a href="https://www.youtube.com/watch?v=LZjT7LltUbU">here</a>.
                </p>
                <p>The second project was to highlight a specific problem or conflict. I made my project on the dilemma of MIT being a closed campus and how many student groups thrived and relied on 
                    MIT's open campus nature. You can view the video <a href="https://www.youtube.com/watch?v=yObunHjQ9us">here</a>.
                </p>
                <p>The third project was meant to be a combination of these two things. I decided to make the video a personal reflection on my life as a fangirl and the parasocial relationship I formed with boy band 
                    One Direction. You can view the video <a href="https://www.youtube.com/watch?v=D2toAIp8mls">here</a> and read my blogpost on making this video <a href="https://mitadmissions.org/blogs/entry/i-dont-need-you-anymore/">here</a>.
                </p>
                </Card>
            </div>
        )
    }
}
export default CMS335;
