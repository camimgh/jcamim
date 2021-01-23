import React, { Component } from "react";
import logo from '../logo.png'
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <nav className="NavBar-items">
                <h1 className="NavBar-title">cami m.</h1>
                <p className="NavBar-timeline">timeline</p>
            </nav>
        )
    }
}
export default NavBar