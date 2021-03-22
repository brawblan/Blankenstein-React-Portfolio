import React from 'react'
import './LinkBtn.css'
import { Link } from 'react-router-dom'

const BtnPrimary = ({ content }) => {
  return (
    <>
      <Link to={`/pages/${content}`} className="page-btn">{content}</Link>
    </>
  )
}

export default BtnPrimary
