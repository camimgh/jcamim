import React, { Component } from "react";
import logo from '../logo.png'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from "react-bootstrap";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    useLocation
} from "react-router-dom"
class NavBar extends Component {
    onSelect(eventKey) {
        console.log(eventKey)
    }

    render() {
        return (
            <div className="Navbar-items">
            <Navbar onSelect={this.onSelect} bsPrefix="navbar" variant="light" sticky="top">
                <img alt="" src={logo} width="80" height="80" className="d-inline-block align-top"/>
                {' '}
                <Navbar.Brand href="/home">cami m.</Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link eventKey="about" bsPrefix="navbar">about</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="projects" bsPrefix="navbar">projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="experience" bsPrefix="navbar">experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="timeline" bsPrefix="navbar" href="#timeline">timeline</Nav.Link>
                    </Nav.Item>
                    <Nav.Item> 
                        <Nav.Link eventKey="writing" bsPrefix="navbar" className="navitem-selected" href="#writing">writing</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            </div>
        )
    }
}
export default NavBar