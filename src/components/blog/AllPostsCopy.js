import React from "react"
import { StaticQuery, graphql } from "gatsby"

// bootstrap components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

export default () => (
  <StaticQuery
    query={graphql`
    query AllBlogs{
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
    `}
    render={data => (
      data.prismic.allBlogs.edges.map(post => (
        <Container key={post.node._meta.id}>
          <Row className="border py-3 my-3 mx-1" >

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
                  <Button className="btn-block mt-3" href={`/blog/${post.node._meta.uid}`} variant="warning">Read</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ))
    )}
  />
)