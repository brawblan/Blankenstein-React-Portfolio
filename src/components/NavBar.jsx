import React from 'react'
import './NavBar.css'
import LinkBtn from './LinkBtn'

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="header">
        Portfolio: Built in React, SITE UNDER CONSTRUCTION
      </div>
      <div className="btn-container">
        <LinkBtn content={'Home'} />
        <LinkBtn content={'Projects'} />
        <LinkBtn content={'About'} />
        <LinkBtn content={'Contact'} />
      </div>
    </div>
  )
}

export default NavBar
