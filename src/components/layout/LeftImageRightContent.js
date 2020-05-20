import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

const LeftImageRightContent = ({ image, sectionTitle, sectionParagraph, button }) => {
    return (
        <Container fluid className="py-5">
            <Container>
                <Row >
                    <Col
                        data-sal="slide-up"
                        data-sal-delay="0"
                        data-sal-easing="ease"
                        xs={12}
                        sm={12}
                        md={5}
                        lg={6}
                        className="p-3 mb-3">
                        <div className="w-100">
                            {image}
                        </div>
                    </Col>
                    <Col
                        data-sal="slide-up"
                        data-sal-delay="50"
                        data-sal-easing="ease"
                        xs={12}
                        sm={12}
                        md={7}
                        lg={6}
                        className="p-3 my-auto">
                        <h2>{sectionTitle}</h2>
                        <p>{sectionParagraph}</p>
                        {button}
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default LeftImageRightContent