// @flow
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

type Props = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string,
        date: string,
      },
      html: string,
    },
  },
}
export default ({ data }: Props) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div>{post.frontmatter.date}</div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
