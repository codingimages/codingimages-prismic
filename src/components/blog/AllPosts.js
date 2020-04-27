import React from "react"
import { graphql, useStaticQuery } from "gatsby"


// bootstrap components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const AllBlogPosts = () => {

  const result = useStaticQuery(graphql`
  query{
    prismic {
      allBlogs{
        edges {
          node {
            _meta {
              uid
              id
            }
            author
            date
            title
            summary
            images
          }
        }
      }
    }
  }
    `)

  const resultado = result.prismic.allBlogs.edges
  console.log(result.prismic.allBlogs.edges)

  return (

    <Container>

      {resultado.map(post => (

        <Row className="border py-3 my-3 mx-1" key={post.node._meta.id}>

          <Col className="my-auto" xs={12} md={3}>
            <img style={{ width: "100%", height: 200, objectFit: "cover" }} variant="top" src={post.node.images.url} alt={post.node.images.alt} />
          </Col>

          <Col className="my-auto" xs={12} md={9}>
            <div className="py-2">
              <div className="d-flex flex-wrap text-secondary">
                <p className="m-0 mr-3">Author: {post.node.author[0].text}</p>
                <p className="mb-2">Published: {post.node.date}</p>
              </div>
              <h5 title={post.node.title[0].text}>{post.node.title[0].text}</h5>
              <div>
                {post.node.summary[0].text}
                <Button className="btn-block mt-3" href={post.node._meta.uid} variant="warning">Read</Button>
              </div>
            </div>
          </Col>
        </Row>
      ))
      }

    </Container >
  )
}

export default AllBlogPosts