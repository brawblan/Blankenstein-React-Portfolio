import React from 'react'
import './GitHubBtn.css'

const GitHubBtn = ({ repo }) => {
  return (
    <>
    <a href={`https://www.github.com/brawblan/${repo}`} className="github-btn" target="_blank" rel='noreferrer'>
      <button>source code</button>
    </a>
    </>
  )
}

export default GitHubBtn
