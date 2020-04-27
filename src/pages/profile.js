import React from "react"

// layout
import MainLayout from "../components/layout/MainLayout"
import HeaderStatic from "../components/layout/HeaderStatic"

// bootstrap components
import Button from "react-bootstrap/Button"


const PortfolioPage = () => (
    <MainLayout>
        <HeaderStatic
            pageType="Developer Profile Page"
            pageSummary="My name is Reynaldo, and I love all things relate to the web.  Please continue reading and check some of my git repsitories, or visit my github page."
            button={<Button
                target="_blank"
                variant="warning"
                href="https://github.com/codingimages">Github Repository</Button>} />
    </MainLayout>
)

export default PortfolioPage