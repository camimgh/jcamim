import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.png'
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
               <Navbar.Brand href="#home">cami m.</Navbar.Brand> 
            </Navbar>
        )
    }
}
export default NavBar