import React from "react"
import { Link } from "gatsby"

// layout
import MainLayout from "../components/layout/MainLayout"

// bootstrap components
import Button from "react-bootstrap/Button"

import MetaTags from "../components/meta/MetaTags"

// components
import HeaderStatic from "../components/layout/HeaderStatic"

const TutorialsPage = () => (

    <MainLayout>
        <MetaTags
            title="Coding Images | Web Development Free Tutorials"
            description="Free web development tutorials and how to's."
            keywords="Free web development tutorials, tutorials, Web Development Blog, Blog, Portfolio, Web Development Portfolio, HTML, CSS, JavaScript, Learn, Web, Development, Free, Learn Web Development Free, HTML CSS Javascript, JS, ReactJS, Wordpress, CMS, Headless CMS, React Native, Mobile Applications"
        />
        <HeaderStatic
            pageType="Tutorials"
            pageSummary="This page is under development along with the YouTube channel, please come back later.  Meanwhile, you can read some of my blog posts."
            button={<Link to="/blog"><Button variant="warning">Blog</Button></Link>}
        />
    </MainLayout>
)

export default TutorialsPage