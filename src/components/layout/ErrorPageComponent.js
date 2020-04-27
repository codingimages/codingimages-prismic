import React from "react"
import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

const ErrorPageComponent = () => {
    return (
        <div className="error-page-component bg-danger text-light" fluid>
            <Container>
                <h1>That was an <span className="bg-light text-danger p-2">error</span></h1>
                <p className="lead my-3">
                    The url you hit search does not exist, please try again or go to the home page
                </p>
                <Link to="/"><Button
                    variant="warning">Home Page</Button></Link>
            </Container>
        </div>
    )
}

export default ErrorPageComponent