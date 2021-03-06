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

import ShareIcons from "../components/share/ShareIcons"
import MetaTags from "../components/meta/MetaTags"

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

  return (
    <>
      <MainLayout>
        <MetaTags
          title={entrada.title}
          description={entrada.title}
          keywords={entrada.title}
        />
        <Jumbotron className="m-0 bg-primary" fluid>
          <Container className="text-light d-flex align-items-center">
            <div className="p-3 my-auto">
              <h1>{entrada.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: entrada.excerpt }} className="lead"></p>
            </div>
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
              <ShareIcons />
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