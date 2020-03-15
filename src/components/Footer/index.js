// @flow
import React from 'react'
import { css } from '@emotion/core'
import { rhythm } from '../../utils/typography'

export default () => {
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
      &copy;{` 2020 ~ ${currYear} `}
      <a href="#" target="__blank">
        jiarong
      </a>
      {` | powered `}{' '}
      <a href="https://www.gatsbyjs.org/" target="__blank">
        Gatsby
      </a>
    </div>
  )
}
