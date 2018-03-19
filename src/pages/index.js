import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing'


const IndexPage = ({data}) => (
  <div>
  <h2>Posts</h2>
    {data.allContentfulBlogPost.edges.map(({node}) =>{
      return <PostListing post={node} key={node.id}/>
    })}
    
  </div>
);

export default IndexPage

export const query = graphql`
query SiteMeta {
  site {
    siteMetadata {
      title
      desc
    }
  }
  allContentfulBlogPost {
    edges {
      node {
        title
        body {
          body
        }
        slug
				id
      }
    }
  }
}
`
