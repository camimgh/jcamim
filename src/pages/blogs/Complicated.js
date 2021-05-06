import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import Complicatedmd from "./Complicated.md";
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

class Complicated extends Component {
    constructor(props) {
        super(props);
        this.state = { markdown: '' };
    }
    componentWillMount() {
        fetch(Complicatedmd).then(res => res.text()).then(text => this.setState({ markdown: text})); 
    }

    render() {
        const { markdown } = this.state;
        return (
            <div id="dive">
                <p><a href="/writing">back</a></p>
                <Card body>
                    <ReactMarkdown plugins={[gfm]} source={markdown} />
                </Card>
            </div>
        )
    }
}
export default Complicated;