// @flow
import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'

import Layout from '../components/Layout'
import PostList from '../components/List'

type Props = {
  data: {
    allMarkdownRemark: {
      totalCount: number,
      edges: $ReadOnlyArray<{
        node: {
          id: string,
          frontmatter: {
            title: string,
            date: string,
            year: string,
          },
          fields: {
            slug: string,
          },
        },
      }>,
    },
  },
}
export default ({ data }: Props) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <h4
        css={css`
          margin: ${rhythm(1)} 0;
        `}
      >
        Archive
      </h4>
      <PostList data={edges} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            year: date(formatString: "YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
