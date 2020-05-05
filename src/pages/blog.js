import React from "react"
import { Link } from "gatsby"
// layout
import MainLayout from "../components/layout/MainLayout"

// bootstrap components
import Button from "react-bootstrap/Button"

// components
import HeaderStatic from "../components/layout/HeaderStatic"

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
      {allBlogExcerpts.map(excerpt => {
        return <div
          key={excerpt.id}
          className="d-flex flex-column border border-gray rounded p-2 my-3"
        >
          <Link
            className="text-decoration-none"
            to={`/post/${excerpt.title}`}
          >
            <h4>{excerpt.title}</h4>
            <div className="d-flex text-dark">
              <div className="d-flex align-items-center mr-3">
                <p className="m-0">{excerpt.author}</p>
              </div>
              <div className="d-flex align-items-center">
                <p className="m-0">Publicado</p>
                <p>{excerpt.date}</p>
              </div>
            </div>
            <div className="text-dark my-2" dangerouslySetInnerHTML={{ __html: excerpt.excerpt }}></div>
          </Link>
        </div>
      })}
    </MainLayout>
  )
}

export default AllBlogsPage