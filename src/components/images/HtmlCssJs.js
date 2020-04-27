import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HtmlCssJs = () => {

  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "htmlcssjs.png"}){
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
    alt={"Services Related Image"}
  >
  </Img>
}

export default HtmlCssJs