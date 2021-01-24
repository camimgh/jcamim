import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.png'
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
                <Navbar className="NavBar-box" sticky="top" variant="light">
                   <Navbar.Brand href="#home">cami m.</Navbar.Brand> 
                   <Nav>
                       <Nav.Link className="NavBar-item" href="#about">about</Nav.Link>
                       <Nav.Link href="#projects">projects</Nav.Link>
                       <Nav.Link href="#experience">experience</Nav.Link>
                       <Nav.Link href="#timeline">timeline</Nav.Link>
                       <Nav.Link href="#writing">writing</Nav.Link>
                   </Nav>
                </Navbar>
        )
    }
}
export default NavBar