// @flow
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import Icon from '../MaterialIcon'

import { rhythm } from '../../utils/typography'

const Container: any = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${rhythm(2)} 0;
  color: gray;
`

const Title: any = styled('h3')`
  & a {
    text-decoration: none;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          menus {
            url
            icon
            title
          }
          title
        }
      }
    }
  `)
  const { title, menus } = data.site.siteMetadata
  return (
    <Container>
      <Title>
        <Link to="">{title}</Link>
      </Title>
      <div
        css={css`
          && a {
            margin: 0 ${rhythm(1 / 4)};
          }
        `}
      >
        {menus.map(({ url, icon, title }, index) => (
          <Link key={index} to={url} title={title}>
            <Icon name={icon} />
          </Link>
        ))}
      </div>
    </Container>
  )
}
