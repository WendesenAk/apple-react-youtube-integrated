import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderLink({link, url}) {
  return (
      <li className='nav-item'>
        <Link className="nav-link js-scroll-trigger" to={url}>{link}</Link>
      </li>
    
  )
}






