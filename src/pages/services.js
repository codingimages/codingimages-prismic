import React from "react"
import { Link } from "gatsby"

// react components
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

//images
import CoreTechImage from "../components/images/ServicesPage/CoreFoundation"
import MobileTechImage from "../components/images/ServicesPage/MobileTech"
import CmsTechImage from "../components/images/ServicesPage/Cms"

// layout
import MainLayout from "../components/layout/MainLayout"
import HeaderStatic from "../components/layout/HeaderStatic"
import LeftContentRightImage from "../components/layout/LeftContentRightImage"
import LeftImageRightContent from "../components/layout/LeftImageRightContent"

import MetaTags from "../components/meta/MetaTags"


const ServicesPage = () => (
    <MainLayout>
        <MetaTags
            title="Coding Images | Web Development Services"
            description="Web development services like websites using HTML, CSS and Javascript as well as Wordpress CMS or Javascript Frameworks."
            keywords="Web Development, HTML, CSS, JavaScript, Learn, Web, Development, Free, Learn Web Development Free, HTML CSS Javascript, JS, ReactJS, Wordpress, CMS, Headless CMS, React Native, Mobile Applications"
        />
        <HeaderStatic
            pageType="Services"
            pageSummary="Take a look at the technologies that I know and have experience working with. You can also see my portfolio from the link below"
            button={<Link to="/portfolio"><Button
                variant="warning">Portfolio
                </Button></Link>}
        />
        <LeftContentRightImage
            image={<CoreTechImage style={{ width: "80%", margin: "auto" }} />}
            sectionTitle="Core technologies"
            sectionParagraph={"HTML CSS and JavaScript are the core foundation of the web. If you are looking for help with a static website, or complex front end layouts and functionalities I can help."}
        />
        <LeftImageRightContent
            image={<MobileTechImage style={{ width: "80%", margin: "auto" }} />}
            sectionTitle="Mobile technologies"
            sectionParagraph={"If you are looking for a mobile application I can help.  With a single code base I can create both iOS and Android apps if that is what you are looking for, see my portfolio for more into this."}
        />
        <LeftContentRightImage
            image={<CmsTechImage style={{ width: "80%", margin: "auto" }} />}
            sectionTitle="CMS Websites"
            sectionParagraph={"If you are looking for a CMS website using Wix, Wordpress, GoDaddy or Weebly I can help you.  If you are looking for a Headless CMS I can set that up for you as well."}
        />
        <Container className="py-5" fluid>
            <Link to="/portfolio"><Button variant="warning" className="d-block mx-auto w-50 text-uppercase" >See my portfolio</Button></Link>
        </Container>
    </MainLayout>
)

export default ServicesPage