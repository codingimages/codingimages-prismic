import React, { Fragment } from "react"
import { graphql } from "gatsby"

import { RichText } from 'prismic-reactjs'

// components
import MainLayout from "../components/layout/MainLayout"
import BlogPageHeader from "../components/blog/BlogPageHeader"
import BlogSideBar from "../components/blog/SideBar"
import ShareIcons from "../components/share/ShareIcons"


// bootstrap components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// helmet
import MetaTags from "../components/meta/MetaTags"

export const query = graphql`
query ($uid: String!) {
    prismic {
      allBlogs(uid: $uid) {
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
            content
            images
          }
        }
      }
    }
  }
`

const Blog = (data) => {
  // console.log(data.data.prismic.allBlogs.edges)
  const post = data.data.prismic.allBlogs.edges[0]
  return (
    <MainLayout>
      <Fragment>
        <MetaTags title={`Coding Images | ` + post.node.title[0].text} />

        <BlogPageHeader
          key={post.node._meta.id}
          title={post.node.title[0].text}
          excerpt={post.node.summary[0].text}
          imgSrc={post.node.images.url}
        ></BlogPageHeader>
        <Container className="bg-dark text-light" fluid>
          <Container className="d-flex align-items-center justify-content-start flex-wrap py-3">
            <p className="m-0 mr-4">Author: {post.node.author[0].text}</p>
            <p className="m-0">Published: {post.node.date}</p>
          </Container>
        </Container>
        <Container>
          <Row>
            <Col sm={12} md={8} xl={9}>
              <Container className="py-5 px-0">
                <RichText render={post.node.content} />
              </Container>
              <ShareIcons />
            </Col>
            <Col sm={12} md={4} xl={3}>
              <BlogSideBar className="py-5 px-0" />
            </Col>
          </Row>
        </Container>
      </Fragment>
      )
    </MainLayout>
  )



  // <>
  //   <h1>{post.title[0].text}</h1>
  //   <p>{post.summary[0].text}</p>
  // </>
}

export default Blog