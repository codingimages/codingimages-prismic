import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MobileTechImage = () => {

  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "mobile-tech.jpg"}){
          childImageSharp{
            fluid{
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)

  const Image = data.file.childImageSharp.fluid


  return <Img
    className="rounded"
    style={{
      width: "70%",
      margin: "auto",
      height: "auto",
      objectFit: "contain"
    }}
    fluid={Image}
    alt={"Services Related Image"}
  >
  </Img>
}

export default MobileTechImage