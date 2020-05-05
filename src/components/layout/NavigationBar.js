import React from 'react'
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import logo from "../../images/logo.png"
import { Link } from "gatsby"

const NavigationBar = () => {

    return (
        <Navbar bg="light" variant="light" expand="md">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                        Coding Images
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">

                        <Link
                            className="nav-link"
                            activeClassName="active"
                            to="/"
                        > Home
                        </Link>

                        <Link
                            className="nav-link"
                            activeClassName="active"
                            to="/services"
                        > Services
                        </Link>

                        <Link
                            className="nav-link"
                            activeClassName="active"
                            to="/portfolio"
                        > Portfolio
                        </Link>

                        <Link
                            className="nav-link"
                            activeClassName="active"
                            to="/blog"
                        > Blog
                        </Link>

                        <Link
                            className="nav-link"
                            activeClassName="active"
                            to="/tutorials"
                        > Tutorials
                        </Link>

                        <Link
                            className="nav-link"
                            activeClassName="active"
                            to="/contact"
                        > Contact
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
