import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import CMS300Finalmd from "./CMS300final.md";
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
                <p align="center"><iframe width="300" height="200" 
                    src="https://www.youtube.com/watch?v=-uv2OqttCpU&feature=youtu.be" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
                    {/* <ReactMarkdown plugins={[gfm]} source={markdown} /> */}
                <p><a href="/projects">Back to Projects</a></p>
                </Card>
            </div>
        )
    }
}
export default CMS300Final;
