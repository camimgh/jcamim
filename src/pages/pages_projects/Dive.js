import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import Divemd from "./Dive.md";
import './Dive.css'
import gfm from 'remark-gfm';

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
                <h1>Dive</h1>
                <ReactMarkdown plugins={[gfm]} source={markdown} />
            </div>
        )
    }
}
export default Dive;
