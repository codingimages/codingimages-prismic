import React, { Fragment } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const RecentBlogPosts = () => {

  const data = useStaticQuery(graphql`
      {
        prismic {
          allBlogs(tags: "blog") {
            edges {
              node {
                _meta {
                  id
                  uid
                }
                title
              }
            }
          }
        }
      }
    `)

  const post = data.prismic.allBlogs.edges
  console.log(data.prismic.allBlogs.edges)
  console.log("it is")


  return (
    <Fragment>
      <ul className="pl-0" style={{ listStyle: "none" }}>
        {post.map(single => (
          <Link key={single.node._meta.id} to={single.node._meta.uid}>
            <li className="mb-3">{single.node.title[0].text}</li>
          </Link>

        ))}
      </ul>
    </Fragment>
  )
}

export default RecentBlogPosts