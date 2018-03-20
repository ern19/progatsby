import React, { Component } from 'react';

export default class PostPage extends Component {
    render() {
        const { data } = this.props
        if(!data){return null}
        return (
            <div>
                <span>{data.contentfulBlogPost.title}</span>
                <h1>{data.contentfulBlogPost.date}</h1>
                <div dangerouslySetInnerHTML={{__html: data.contentfulBlogPost.body.childMarkdownRemark.html}}/>
            </div>
        );
    }
}

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            body {
                childMarkdownRemark {
                    html
                }
            }
        slug
        id
        }
    }
`