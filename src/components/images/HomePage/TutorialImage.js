import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TutorialsImage = () => {

  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "tutorials.png"}){
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
    style={{
      width: "70%",
      margin: "auto",
      height: "auto"
    }}
    fluid={Image}
    alt={"Tutorials related image"}
  >
  </Img>
}

export default TutorialsImage