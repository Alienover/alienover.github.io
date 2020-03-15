// @flow
import React from 'react'
import { css } from '@emotion/core'

const sizes = {
  sm: 'font-size: .95rem!important;',
  md: '',
  lg: 'font-size: 1.5rem!important',
}
// Get the icon name from
// https://material.io/resources/icons/?style=baseline
type Props = {
  size?: 'sm' | 'md' | 'lg',
  name: string,
}
export default ({ name, size = 'md' }: Props) => (
  <span
    className="material-icons"
    css={css`
      ${sizes[size]}
    `}
  >
    {name}
  </span>
)
