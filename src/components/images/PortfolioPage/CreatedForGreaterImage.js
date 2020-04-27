import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CreatedForGreaterImage = () => {

  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "createdforgreater.png"}){
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
    alt={"Created for greater logo"}
  >
  </Img>
}

export default CreatedForGreaterImage