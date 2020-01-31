import React from 'react'
import { Link } from '@reach/router'
import { menuLinks } from './data'

const Navbar = () => {
  return (
    <nav>
      Add Profile Picture
      <ul className="menu__list">
        {menuLinks.map((menuLink, id) => (
          <li key={id}>
            <Link to={menuLink.url}>{menuLink.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
