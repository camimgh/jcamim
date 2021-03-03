import React, { Component } from "react";
import logo from '../logo-cropped.png'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from "react-bootstrap";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    Link,
    NavLink
} from "react-router-dom"
class NavBar extends Component {
    render() {
        return (
            <div className="sticky">
            <Navbar collapseOnSelect expand="lg" variant="light">
                <a href="/"><img alt="" href="/" src={logo} width="80" height="80" className="d-inline-block align-top"/>
                {' '}</a>
                <Navbar.Brand id="Navbar-brand" bsPrefix="navbar" href="/">cami m.</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link><NavLink exact to="/" activeStyle={{
                            fontWeight: 500,
                        }}>about</NavLink></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><NavLink to="/projects" activeStyle={{
                            fontWeight: 500,
                        }}>projects</NavLink></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><NavLink to="/experience" activeStyle={{
                            fontWeight: 500,
                        }}>experience</NavLink></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><NavLink to="/timeline" activeStyle={{
                            fontWeight: 500,
                        }}>timeline</NavLink></Nav.Link>
                    </Nav.Item>
                    <Nav.Item> 
                        <Nav.Link><NavLink to="/writing" activeStyle={{
                            fontWeight: 500,
                        }}>writing</NavLink></Nav.Link>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}
export default NavBar