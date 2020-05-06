import React from "react"
import { graphql } from 'gatsby'

// components
import MainLayout from "../components/layout/MainLayout"
import RecentBlogPosts from "../components/blog/RecentPosts"

// bootstrap components
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// helmet
// import MetaTags from "../components/meta/MetaTags"

export const query = graphql`
    query ($title: String!) {
        wpgraphql {
            posts(where: {title: $title}) {
                nodes {
                    author {
                        name
                    }
                    date
                    categories {
                        nodes {
                            slug
                        }
                    }
                    title
                    excerpt
                    content(format: RENDERED)
                    featuredImage{
                      mediaItemUrl
                      altText
                    }
                }
            }
        }
    }
`


const BlogPostPage = ({ data }) => {
  const entrada = data.wpgraphql.posts.nodes[0]
  console.log(entrada)
  return (
    <>
      <MainLayout>
        <Jumbotron className="m-0 bg-primary" fluid>
          <Container className="text-light d-flex align-items-center">
            <div className="p-3 my-auto">
              <h1>{entrada.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: entrada.excerpt }} className="lead"></p>
            </div>
            <img style={{ width: "100%", height: 200, objectFit: "cover" }} className="d-none d-lg-block mx-auto my-auto w-50" src={entrada.featuredImage.mediaItemUrl} alt={entrada.featuredImage.altText} />
          </Container>
        </Jumbotron>

        <Container className="py-5">
          {/* Content */}
          <Row>
            <Col sm={12} lg={8}>
              <div
                style={{
                  lineHeight: 1.75
                }}
                dangerouslySetInnerHTML={{ __html: entrada.content }}>
              </div>

            </Col>

            <Col sm={12} lg={4}>
              <RecentBlogPosts />
            </Col>
          </Row>
        </Container>

      </MainLayout>
    </>
  )
}

export default BlogPostPage