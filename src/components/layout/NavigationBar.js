import React from 'react'
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import logo from "../../images/logo.png"

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

                        <Nav.Link
                            href="/"
                        > Home
                        </Nav.Link>

                        <Nav.Link
                            href="/services"
                        > Services
                        </Nav.Link>

                        <Nav.Link
                            href="/portfolio"
                        > Portfolio
                        </Nav.Link>

                        <Nav.Link
                            href="/blog"
                        > Blog
                        </Nav.Link>

                        <Nav.Link
                            href="/tutorials"
                        > Tutorials
                        </Nav.Link>

                        <Nav.Link
                            href="/contact"
                        > Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
