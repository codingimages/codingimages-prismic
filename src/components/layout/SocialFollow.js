import React, { Fragment } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const SocialMediaFollow = () => {

    return (
        <Fragment>
            <Container fluid>
                <Container className="p-2">
                    <Row className="d-flex align-items-center justify-content-end">
                        <Col xs={12} className="sharethis-inline-share-buttons">
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Fragment>
    )
}

export default SocialMediaFollow