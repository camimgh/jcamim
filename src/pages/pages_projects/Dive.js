import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import Divemd from "./Dive.md";
import './Dive.css'
import gfm from 'remark-gfm';
import Card from 'react-bootstrap/Card'
/*
export default function Dive() {
    return (
        <div id="dive">
            <ReactMarkdown>
                # Hello, *world*!
            </ReactMarkdown>
        </div>
    );
}
*/

class Dive extends Component {
    constructor(props) {
        super(props);
        this.state = { markdown: '' };
    }
    componentWillMount() {
        fetch(Divemd).then(res => res.text()).then(text => this.setState({ markdown: text})); 
    }

    render() {
        const { markdown } = this.state;
        return (
            <div id="dive">
                <Card body>
                <h1>Dive</h1>
                <p>
                        Dive is a mobile app built with <b>Typescript</b> and <b>React</b> that connects people to others inside or outside of their culture to encourage diversity, personal connection, and friendship.
                        My team of 5 worked on the front-end of Dive for Microsoft's <a href="https://newtechnologists.com">New Technologist program</a>.
                </p>
                <p align="center"><iframe width="300" height="200" 
                    src="https://www.youtube.com/embed/gfzJSjN6rV8" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
                    <ReactMarkdown plugins={[gfm]} source={markdown} />
                </Card>
            </div>
        )
    }
}
export default Dive;
