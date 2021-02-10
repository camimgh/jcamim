import React, { Component } from "react";
import Markdown from 'react-markdown';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import './Dive.css'
import gfm from 'remark-gfm';

export default function Dive() {
    const markdown = `
    Hello this is a test!\n
    # Hi
    `;

    return (
        <div id="dive">
            <Markdown source={markdown} />
        </div>
    );
}
/*
class Dive extends Component {
    constructor(props) {
        super(props);
        this.ContentMarkdown = `
        # test
        [ a ] [ b ]
        `;
    }

    render() {
        return (
            <div id="dive">
                <Markdown 
                    escapeHtml={true}
                    source={this.ContentMarkdown}
                    plugins={gfm}
                />
            </div>
        )
    }
}
export default Dive;
*/
