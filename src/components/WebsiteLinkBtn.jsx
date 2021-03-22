import React from 'react'
import './WebsiteLinkBtn.css'

const WebsiteLinkBtn = ({ title }) => {
  return (
    <>
    <a href={`https://book-landing.vercel.app`} className="website-link-btn" target="_blank" rel='noreferrer'>
      <button>{title}</button>
    </a>
    </>
  )
}

export default WebsiteLinkBtn