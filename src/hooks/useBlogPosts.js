import { graphql, useStaticQuery } from "gatsby"

const useBlogPosts = () => {

    const data = useStaticQuery(graphql`
    {
        wpgraphql {
          posts(where: {categoryId: 2}) {
            nodes {
              id
              slug
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
              excerpt(format: RENDERED)
            }
          }
        }
      }
    `)

    return data.wpgraphql.posts.nodes.map(blogPost => ({
        id: blogPost.id,
        slug: blogPost.slug,
        author: blogPost.author.name,
        date: blogPost.date,
        categories: blogPost.categories.nodes[0].slug,
        title: blogPost.title,
        excerpt: blogPost.excerpt
    }))
}

export default useBlogPosts