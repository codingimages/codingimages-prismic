import React from "react"
import Container from "react-bootstrap/Container"

const Footer = () => {

    const todayDate = new Date().getFullYear()


    return (
        <footer className="bg-dark pt-3 pb-1 text-center text-light">
            <Container>
                <p>Coding Images @{todayDate}</p>
                <p> &copy; All Rights Reserved</p>
            </Container>
        </footer>
    )
}

export default Footer