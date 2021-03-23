import React from 'react'
import './LinkBtn.css'
import { Link } from 'react-router-dom'

const LinkBtn = ({ content }) => {
  return (
    <>
      <Link to={`/${content}`} className="page-btn">{content}</Link>
    </>
  )
}

export default LinkBtn
