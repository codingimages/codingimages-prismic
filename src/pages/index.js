import React from "react"
import { Link } from "gatsby"

// layout
import MainLayout from "../components/layout/MainLayout"
// import LeftImageRightContent from "../components/layout/LeftImageRightContent"
import LeftContentRightImage from "../components/layout/LeftContentRightImage"


// bootstrap components
import Button from "react-bootstrap/Button"

// images
import ServicesImage from "../components/images/ServicesImage"
import PortfolioImage from "../components/images/PortfolioImage"
import BlogImage from "../components/images/BlogImage"
import TutorialsImage from "../components/images/TutorialImage"

// carousel component and images
import HeaderCarousel from "../components/layout/HeaderCarousel"
import CarouselImg1 from "../components/images/Carousel/CodingScreen"
import CarouselImg2 from "../components/images/Carousel/ReadBlog"
import CarouselImg3 from "../components/images/Carousel/LearnTogether"

//meta
import Helmet from "../components/meta/MetaTags"

const IndexPage = (props) => (

  <MainLayout>
    <Helmet title="Coding Images | Boost Your Business" >
    </Helmet>
    <HeaderCarousel
      firstImage={<CarouselImg1
        slideTitle="Welcome to Coding Images"
        slideParagraph="Web and Mobile, Development and Design"
        button={<Link
          to="/services"><Button
            className="text-uppercase text-dark"
            variant="warning">What I Can Do
          </Button></Link>} />}
      secondImage={<CarouselImg2
        slideTitle="Read my Blog"
        slideParagraph="Valuable resources and information all about the web"
        button={<Link
          to="/blog"><Button
            className="text-uppercase text-dark"
            variant="warning">Take me There
          </Button></Link>}
      />}
      thirdImage={<CarouselImg3
        slideTitle="Learn About Web Development"
        slideParagraph="Learn web development and get a job in the field"
        button={<Link
          to="/blog"><Button
            className="text-uppercase text-dark"
            variant="warning">Take me There
          </Button></Link>}
      />} />
    <main>
      <LeftContentRightImage
        image={<ServicesImage style={{ width: "80%", margin: "auto" }} />}
        sectionTitle="This is what I can help with "
        sectionParagraph={"I love web and mobile technologies as much as visual design. Do you have an idea that runs around those topics?  Either if it's a full stack or a static page project; a web, mobile or graphic design project, I know the technologies that are mainstream to make your site optimized and efficient with the best deal for you. Guaranteed!"}
        button={<Link
          to="/services"><Button
            className="text-uppercase"
            variant="warning"
          >Serivces</Button></Link>}
      />
      <LeftContentRightImage
        image={<PortfolioImage />}
        sectionTitle="Here is the proof"
        sectionParagraph={"My works speak for itself.  Please visit my portfolio page and check out some of my projects. From web design and development to mobile applications.  Let me know and don't hesitate if you have any questions.  Enjoy!"}
        button={<Link
          to="/portfolio"><Button
            className="text-uppercase"
            variant="warning"
          >Portfolio</Button></Link>}
      />
      <LeftContentRightImage
        image={<BlogImage />}
        sectionTitle="Here is my blog"
        sectionParagraph={"In my blog you can find valuable information about the latest web development trendings and technologies.  I also post about encouragement stories and personal projects. Come and explore resources about where to learn web development, design and more.  Come read me and stay up to date."}
        button={<Link
          to="/blog"><Button
            className="text-uppercase"
            variant="warning"
          >Blog</Button></Link>}
      />
      <LeftContentRightImage
        image={<TutorialsImage />}
        sectionTitle="Learn about web development"
        sectionParagraph={"Have you ever wonder how to make websites?  Do you have an attraction about visual design?  Do you think is hard and expensive to learn?  Think twice!  I asked all of those questions myself and decided to start a carrer that never went back.  I can help you learn web development, see my tutorials."}
        button={<Link
          to="/tutorials"><Button
            className="text-uppercase"
            variant="warning"
          >Tutorials</Button></Link>}
      />

    </main>
  </MainLayout>
)

export default IndexPage
