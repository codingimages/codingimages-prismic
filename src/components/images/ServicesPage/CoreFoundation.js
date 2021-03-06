import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CoreTechImage = () => {

  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "core-tech.jpg"}){
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
      height: "auto"
    }}
    fluid={Image}
    alt={"Core web items related image"}
  >
  </Img>
}

export default CoreTechImage