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
              featuredImage{
                mediaItemUrl
                altText
              }
            }
          }
        }
      }
    `)

  return data.wpgraphql.posts.nodes.map(blogPost => ({
    id: blogPost.id,
    slug: blogPost.slug,
    image: blogPost.featuredImage.mediaItemUrl,
    alt: blogPost.featuredImage.altText,
    author: blogPost.author.name,
    date: blogPost.date,
    categories: blogPost.categories.nodes[0].slug,
    title: blogPost.title,
    excerpt: blogPost.excerpt
  }))
}

export default useBlogPosts