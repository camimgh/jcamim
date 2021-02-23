import React, { Component } from "react";
import './Writing.css';

class Writing extends Component {
    render() {
        return(
            <div id="writing">
                <div id="header">
                    <h1>Writing</h1>
                </div>
                <div id="writing-text">
                    <p>Here you can find a collection of all my blogposts for the MIT Admissions blogs. 
                        My job as a blogger is to demystify MIT student life for prospective applicants.
                        I try to be as open and as honest as possible on my blogs, so there are some heavier topics
                        touched upon in the blogs.
                        <br/>
                        I am currently working on rewriting all my blogs in Markdown and transferring them here so they can
                        be my own! And hosted here! But this is still very much a work in progress due to the sheer amount of
                        blogs. I hope you can understand!

                        You can find all my blogs on <a href="https://mitadmissons.org/blogs/author/camim">the MIT Admissions blogs</a>.
                    </p>
                </div>
            </div>
        )
    }
}

export default Writing;