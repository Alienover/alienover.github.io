// @flow
import React from 'react'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/core'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import { rhythm } from '../utils/typography'

type Props = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string,
        date: string,
        tags: $ReadOnlyArray<string>,
      },
      html: string,
      timeToRead: number,
    },
  },
}
export default ({ data }: Props) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
      </Helmet>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div
          css={css`
            font-size: ${rhythm(1 / 2)};
            color: gray;
            && > span {
              margin: 0 ${rhythm(1 / 4)};
            }
          `}
        >
          {post.frontmatter.date}
          <span>{`☕️ ${post.timeToRead} min read`}</span>
          {post.frontmatter.tags.map((tag, index) => (
            <span>#{tag}</span>
          ))}
        </div>
      </div>
      <div
        css={css`
          margin-top: ${rhythm(1)};
        `}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        tags
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
