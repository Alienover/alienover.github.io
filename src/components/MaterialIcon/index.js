// @flow
import React from 'react'

// Get the icon name from
// https://material.io/resources/icons/?style=baseline
type Props = {
  name: string,
}
export default ({ name }: Props) => (
  <span className="material-icons">{name}</span>
)
