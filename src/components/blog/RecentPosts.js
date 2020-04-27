import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

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
          <a key={single.node._meta.id} href={`/blog/` + single.node._meta.uid}>
            <li className="mb-3">{single.node.title[0].text}</li>
          </a>

        ))}
      </ul>
    </Fragment>
  )
}

export default RecentBlogPosts