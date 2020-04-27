import React from "react"
import { Link } from "gatsby"

// layout
import MainLayout from "../components/layout/MainLayout"

// bootstrap components
import Button from "react-bootstrap/Button"

// components
import HeaderStatic from "../components/layout/HeaderStatic"

const TutorialsPage = () => (

    <MainLayout>
        <HeaderStatic
            pageType="Tutorials"
            pageSummary="This page is under development along with the YouTube channel, please come back later.  Meanwhile, you can read some of my blog posts."
            button={<Link to="/blog"><Button variant="warning">Blog</Button></Link>}
        />
    </MainLayout>
)

export default TutorialsPage