// @flow
import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import Icon from '../MaterialIcon'

import { rhythm } from '../../utils/typography'

const ListSeperator = ({ children }) => (
  <li
    css={css`
      display: flex;
      align-items: center;
      font-weight: bold;
    `}
  >
    <span
      css={css`
        color: #999;
        display: flex;
        margin-right: ${rhythm(1 / 4)};
      `}
    >
      <Icon name="tag" size="sm" />
    </span>
    {children}
  </li>
)

const ListItem = ({ title, date, to }) => (
  <li>
    <span
      css={css`
        color: #999;
        margin-right: ${rhythm(1)};
      `}
    >
      {date}
    </span>
    <Link to={to}>
      <span>{title}</span>
    </Link>
  </li>
)

type Props = {
  data: $ReadOnlyArray<{
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
}
const ListContainer = ({ data }: Props) => {
  const yearIndex = []
  const yearMap = {}
  for (let { node } of data) {
    const { year } = node.frontmatter
    if (!!year) {
      if (yearIndex.includes(year)) continue
      else {
        yearMap[node.id] = year
        yearIndex.push(year)
      }
    }
  }
  return (
    <ul
      css={css`
        font-size: 0.95rem;
        && li {
          margin: ${rhythm(1 / 4)} 0;
        }
      `}
    >
      {data.map(({ node }) => (
        <React.Fragment key={node.id}>
          {node.id in yearMap && (
            <ListSeperator>{yearMap[node.id]}</ListSeperator>
          )}
          <ListItem
            to={node.fields.slug}
            date={node.frontmatter.date}
            title={node.frontmatter.title}
          />
        </React.Fragment>
      ))}
    </ul>
  )
}

export default ListContainer
