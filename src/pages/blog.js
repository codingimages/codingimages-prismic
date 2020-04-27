import React from "react"
import { Link } from "gatsby"

// layout
import MainLayout from "../components/layout/MainLayout"

// bootstrap components
import Button from "react-bootstrap/Button"

// components
import HeaderStatic from "../components/layout/HeaderStatic"

//import blog excerpts
import AllBlogPosts from "../components/blog/AllPosts"

const AllBlogsPage = () => {

  return (
    <MainLayout>
      <HeaderStatic
        pageType="Blog"
        pageSummary="Thanks for visiting my blog. I decided to make it more informational, if you are looking to learn web development, please visit the tutorials page."
        button={<Link to="/tutorials"><Button variant="warning">Tutorials</Button></Link>}
      />
      <AllBlogPosts />
    </MainLayout>
  )
}

export default AllBlogsPage