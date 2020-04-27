import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const CarouselImg1 = ({ slideTitle, slideParagraph, button }) => {

  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "coding-screen.jpg"}){
          childImageSharp{
            fluid{
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)

  const Image = data.file.childImageSharp.fluid

  return <BackgroundImage
    style={{ height: "80vh" }}
    fluid={Image}
    alt={"Services Related Image"}
    backgroundColor={`red`}
  >
    <div className="carousel-custom-style text-light text-center">
      <h1
        className="text-uppercase">{slideTitle}</h1>
      <p
        // data-sal="fade"
        // data-sal-delay="0"
        // data-sal-easing="ease"
        className="lead">{slideParagraph}</p>
      {button}
    </div>
  </BackgroundImage>
}

export default CarouselImg1