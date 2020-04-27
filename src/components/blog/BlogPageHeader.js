import React from "react"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const BlogPageHeader = ({ title, excerpt, imgSrc }) => {
    return (
        <Jumbotron className="bg-primary text-light mb-0" fluid>
            <Container>
                <Row>
                    <Col className="d-flex flex-column align-items-center justify-content-center" xs={12} sm={12} md={8}>
                        <h1 className="text-light p-1 rounded" style={{ lineHeight: 1.5 }}>{title}</h1>
                        <p className="lead my-3">{excerpt}</p>
                    </Col>
                    <Col className="d-flex flex-column align-items-center justify-content-center my-auto">
                        <img className="d-none d-md-block my-auto mx-auto"
                            src={imgSrc}
                            alt={title}
                            style={{ width: "100%", height: "auto", objectFit: "cover" }}
                        />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default BlogPageHeader