import React from "react"
import { Link } from "gatsby"
import Moment from 'react-moment';
import 'moment/locale/es';

// layout
import MainLayout from "../components/layout/MainLayout"

// bootstrap components
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// components
import HeaderStatic from "../components/layout/HeaderStatic"
import RecentBlogPosts from "../components/blog/RecentPosts"

//import blog excerpts
import useBlogPosts from "../hooks/useBlogPosts"

const AllBlogsPage = () => {

  const allBlogExcerpts = useBlogPosts()

  console.log(allBlogExcerpts)

  return (
    <MainLayout>
      <HeaderStatic
        pageType="Blog"
        pageSummary="Thanks for visiting my blog. I decided to make it more informational, if you are looking to learn web development, please visit the tutorials page."
        button={<Link to="/tutorials"><Button variant="warning">Tutorials</Button></Link>}
      />
      <Container>
        <Row>
          <Col sm={12} lg={8}>
            {allBlogExcerpts.map(excerpt => {

              return (
                <Row
                  key={excerpt.id}
                  className="d-flex my-3"
                >
                  <Col className="my-auto p-0" xs={12} md={3}>
                    <img
                      style={{ width: "100%", height: 200, objectFit: "cover" }}
                      variant="center"
                      src={excerpt.image} alt={excerpt.alt}
                    />
                  </Col>

                  <Col className="my-auto" xs={12} md={9}>

                    <Link to={`/post/${excerpt.title}`}><h4>{excerpt.title}</h4></Link>
                    <div className="d-flex text-dark">
                      <div className="d-flex align-items-center mr-3">
                        <p className="m-0 text-secondary">{`Por ${excerpt.author}`}</p>
                      </div>
                      <div className="d-flex align-items-center text-secondary">
                        <p className="m-0 mr-1 text-secondary">Publicado</p>
                        <Moment fromNow>{excerpt.date}</Moment>
                      </div>
                    </div>
                    <div className="text-dark my-2" dangerouslySetInnerHTML={{ __html: excerpt.excerpt }}></div>
                  </Col>
                </Row>)
            })}
          </Col>
          <Col sm={12} lg={4}>
            <RecentBlogPosts />
          </Col>
        </Row>
      </Container>
    </MainLayout >
  )
}

export default AllBlogsPage