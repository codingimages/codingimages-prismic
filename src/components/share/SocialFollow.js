import React from "react"

// bootstrap components
import Container from "react-bootstrap/Container"

// fontawesome icons
import { FaFacebookF, FaCodepen, FaGithub, FaLinkedinIn } from "react-icons/fa"

const SocialFollow = () => {
    return (
        <Container style={{ fontSize: 24 }} className="p-1 bg-light border-bottom" fluid>
            <Container className="d-flex align-items-center justify-content-around  ">

                <a href="https://www.github.com/codingimages" target="_blank" rel="noopener noreferrer">
                    <FaGithub
                        style={{ color: "#000000" }}
                    />
                </a>

                <a href="https://codepen.com/codingimages" target="_blank" rel="noopener noreferrer">
                    <FaCodepen
                        style={{ color: "#000000" }}
                    />
                </a>

                <a href="https://www.linkedin.com/in/reynaldo-navedo/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn
                        style={{ color: "#2867B2" }}
                    />
                </a>

                <a href="https://facebook.com/frutodelespiritu" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF
                        style={{ color: "#4267B2" }}
                    />
                </a>
            </Container>
        </Container>
    )
}

export default SocialFollow