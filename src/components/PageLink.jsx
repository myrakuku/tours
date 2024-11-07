import React from 'react'

function PageLink({link, itemClass}) {
    const {href, text} = link;
  return (
    <li>
        <a href={link.href} className={itemClass}>
        {link.text}
        </a>
        </li>
  )
}

export default PageLink