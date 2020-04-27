import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SantiempleoImage = () => {

  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "santiempleo.png"}){
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
    alt={"Santempleo logo"}
  >
  </Img>
}

export default SantiempleoImage