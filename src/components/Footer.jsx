import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import './Footer.css'

library.add(fab)

const Footer = () => {

  const socials = [
    { site: 'facebook', url: "https://www.facebook.com/blankensteinb" },
    { site: 'instagram', url: "https://www.instagram.com/blankenstein.dev/" },
    { site: 'twitter', url: "https://twitter.com/_bblankenstein" },
    { site: 'github', url: "https://github.com/brawblan" },
  ]

  return (
    <div className="footer-container">
      <div className="socials-container">
        {socials.map(({ site, url }) => (
          <a href={url} className="social-btn" target="_blank" rel='noreferrer'>
            <FontAwesomeIcon icon={['fab', `${site}`]} />
          </a>
        ))}
      </div>
      <div className="footer-message">
        Made with
        <i class="nes-icon is-small heart"></i>
        by Brandon Blankenstein
      </div>
    </div>  
  )
}

export default Footer
