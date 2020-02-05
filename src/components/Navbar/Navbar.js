import React from 'react'
import { Link } from '@reach/router'
import { menuLinks } from './menuLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div>
      <div className="row">
        <a href="#main-menu" id="main-menu-toggle" className="menu-toggle">
          <span className="sr-only"></span>
          <FontAwesomeIcon icon={faBars} aria-hidden="true" />
        </a>
      </div>
      <nav id="main-menu" className="main-menu">
        <a href="#main-menu-toggle" id="main-menu-close" className="menu-close">
          <span className="sr-only">Close main menu</span>
          <FontAwesomeIcon icon={faTimes} />
        </a>
        <ul>
          {menuLinks.map((menuLink, id) => (
            <li key={id}>
              <Link to={menuLink.url}>{menuLink.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <a href="#main-menu-toggle" className="backdrop" hidden tabIndex="-1"></a>
    </div>
  )
}

export default Navbar
