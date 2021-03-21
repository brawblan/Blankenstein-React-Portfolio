import React from 'react'
import './NavBar.css'
import BtnPrimary from './BtnPrimary'

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="header">
        Portfolio: Built in React
      </div>
      <div className="btn-container">
        <BtnPrimary content={'Home'} />
        <BtnPrimary content={'Projects'} />
        <BtnPrimary content={'Contact'} />
      </div>
    </div>
  )
}

export default NavBar
