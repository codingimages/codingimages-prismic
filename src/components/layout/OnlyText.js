import React from "react"
import { Link } from "gatsby"

// bootstrap components
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

const OnlyText = ({ heading, headingParagraph, link }) => {
    return (
        <Container fluid className="bg-dark text-light">
            <Container className="px-3 py-5">
                <h2>{heading}</h2>
                <p className="lead">{headingParagraph}</p>
                <Link to={link}><Button variant="danger">Developer Profile</Button></Link>
            </Container>
        </Container>
    )
}

export default OnlyText