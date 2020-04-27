import React from "react"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

const HeaderStatic = ({ pageType, pageSummary, button }) => {
    return (
        <Jumbotron className="bg-primary text-light mb-0" fluid>
            <Container>
                <h1 style={{ lineHeight: 1.5 }}>Coding Images <span className="bg-light text-primary p-1 rounded">{pageType}</span></h1>
                <p className="lead my-3">
                    {pageSummary}
                </p>
                {button}
            </Container>
        </Jumbotron>
    )
}

export default HeaderStatic