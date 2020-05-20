import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"


const RecentBlogPosts = () => {

  const data = useStaticQuery(graphql`
{
  wpgraphql {
    posts(where: {categoryId: 2}, last: 8) {
      nodes {
        title
      }
    }
  }
}
`)

  const links = data.wpgraphql.posts.nodes
  console.log(links)

  return (
    <aside className="my-3">
      <h3>Recent Blogs</h3>
      {links.map(link => (
        <>
          <div key={link.title} className="my-3">
            <Link
              to={`/post/${link.title}`}
            >
              {link.title}
            </Link>
          </div>
        </>
      ))
      }
    </aside >

  )
}

export default RecentBlogPosts