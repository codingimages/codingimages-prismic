import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const CarouselImg3 = ({ slideTitle, slideParagraph, button }) => {

  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "learning-together.jpg"}){
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
    alt={"Learning together people"}
    backgroundColor={`red`}
  >
    <div className="carousel-custom-style text-light text-center">
      <h1 className="text-uppercase">{slideTitle}</h1>
      <p className="lead">{slideParagraph}</p>
      {button}
    </div>
  </BackgroundImage>
}

export default CarouselImg3