// @flow
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { rhythm } from '../../utils/typography'

export default () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          extraLinks {
            github
          }
        }
      }
    }
  `)
  const { github } = data.site.siteMetadata.extraLinks
  const currYear = new Date().getFullYear()
  return (
    <div
      css={css`
        font-size: ${rhythm(1 / 2)};
        letter-spacing: ${rhythm(1 / 14)};
        color: #999;

        && a {
          text-decoration: underline;
        }
      `}
    >
      &copy;{`${currYear} `}
      <a href={github} target="__blank">
        jiarong
      </a>
    </div>
  )
}
