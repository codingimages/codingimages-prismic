import React from "react"

// layout
import MainLayout from "../components/layout/MainLayout"
import HeaderStatic from "../components/layout/HeaderStatic"

// components
import OnlyText from "../components/layout/OnlyText"
import LeftContentRightImage from "../components/layout/LeftContentRightImage"
import LeftImageRightContent from "../components/layout/LeftImageRightContent"

// bootstrap components
import Button from "react-bootstrap/Button"

// images
import CaregilityImage from "../components/images/PortfolioPage/CaregilityImage"
import SantiempleoImage from "../components/images/PortfolioPage/SantiEmpleoImage"
import CreatedForGreaterImage from "../components/images/PortfolioPage/CreatedForGreaterImage"
import FrutoDelEspirituImage from "../components/images/PortfolioPage/FrutoDelEspiritu"

import MetaTags from "../components/meta/MetaTags"


const PortfolioPage = () => (
    <MainLayout>
        <MetaTags
            title="Coding Images | Reynaldo Naved - Web Development Portfolio"
            description="Take a look at my portfolio websites using HTML, CSS, Javascript as well as Wordpress CMS and Javascript Frameworks."
            keywords="Portfolio, Web Development Portfolio, HTML, CSS, JavaScript, Learn, Web, Development, Free, Learn Web Development Free, HTML CSS Javascript, JS, ReactJS, Wordpress, CMS, Headless CMS, React Native, Mobile Applications"
        />
        <HeaderStatic
            pageType="Portfolio"
            pageSummary="Take a look at my portfolio, here you can see my work and the technologies that I have experience with. Enjoy." />

        <OnlyText
            heading="Every website has a story"
            headingParagraph="I want to share with you the stories behind some of my work. Continue reading in this page for that. You can also  visit the developer profile page where you can see some of the git repositories."
            link="/profile" />

        <LeftContentRightImage
            image={<CaregilityImage />}
            sectionTitle="Yorktel and Caregility"
            sectionParagraph={"Yorktel is my main job, I have assisted them with building complex layouts for their video medical services branch named Caregility.  Take a look at their page."}
            button={<Button
                href="https://caregility.com/"
                target="_blank"
                className="text-uppercase"
                variant="warning"
            >Check it out</Button>}
        />

        <LeftImageRightContent
            image={<SantiempleoImage />}
            sectionTitle="Santi Empleo"
            sectionParagraph={"Santi Empleo is one of my older clients, is a talent agency for hispanics.  From a headless CMS the jobs are posted and therefore fetched in the frontend, users can browse and apply for jobs. I also design and code a mobile application for them."}
            button={<Button
                href="https://santiempleo.com/"
                target="_blank"
                className="text-uppercase"
                variant="warning"
            >Check it out</Button>}
        />

        <LeftContentRightImage
            image={<CreatedForGreaterImage />}
            sectionTitle="Created for greater"
            sectionParagraph={"Created for greater is a psychiatric rehabilitation program.  They reach out to me to design and develop their application.  Customers can send emails, apply for jobs and schedule appointments."}
            button={<Button
                href="https://youarecreatedforgreater.com/index.html"
                target="_blank"
                className="text-uppercase"
                variant="warning"
            >Check it out</Button>}
        />

        <LeftImageRightContent
            image={<FrutoDelEspirituImage />}
            sectionTitle="Fruto del Espíritu"
            sectionParagraph={"Fruto del Espíritu is a religious site built with Gatsby using Wordpress as a Headless CMS.  The advantage of doing this is perormance due the nature of gatsby doing things."}
            button={<Button
                href="https://frutodelespiritu.com/"
                target="_blank"
                className="text-uppercase"
                variant="warning"
            >Check it out</Button>}
        />

    </MainLayout>
)

export default PortfolioPage