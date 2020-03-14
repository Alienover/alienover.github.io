// @flow
import React from 'react'

import Icon from '../MaterialIcon'

import './index.css'

export default () => {
  const menus = [
    { url: '#', icon: 'list', title: 'Archive' },
    { url: '#', icon: 'tag', title: 'Tags' },
    { url: '#', icon: 'person', title: 'About' },
    { url: '#', icon: 'photo_library', title: 'Gallery' },
  ]
  return (
    <div className="HeroHeader">
      Hello World
      <div>
        {menus.map(({ url, icon, title }, index) => (
          <a href={url} title={title} alt={title}>
            <Icon name={icon} />
          </a>
        ))}
      </div>
    </div>
  )
}
