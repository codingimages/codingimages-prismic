import React from "react"

// components
import MainLayout from "../components/layout/MainLayout"


// bootstrap components
import Container from "react-bootstrap/Container"
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

        <Container className="py-5">
          {/* Content */}
          <Row>
            <Col sm={12} lg={8}>
              <div
                style={{

                }}
                dangerouslySetInnerHTML={{ __html: entrada.content }}>
              </div>

            </Col>

            <Col sm={12} lg={4}>

            </Col>
          </Row>
        </Container>

      </MainLayout>
    </>
  )
}

export default BlogPostPage