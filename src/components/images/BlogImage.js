import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BlogImage = () => {

  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "blog.png"}){
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

export default BlogImage