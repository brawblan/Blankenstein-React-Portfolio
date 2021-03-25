import { React, useState } from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import GitHubBtn from '../../components/GitHubBtn'
import WebsiteLinkBtn from '../../components/WebsiteLinkBtn'
import './ProjectPages.css'
import apiImage from '../../assets/apiProject.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const MovieAPI_Page = () => {
  const [isHover, setIsHover] = useState(false)
  const addHoverClass = () => {
    setIsHover(true)
  }
  const removeHoverClass = () => {
    setIsHover(false)
  }

  return (
    <>
      <NavBar />
      <div className="project-page">

        <div className="project-picture-and-description">
        <Link
            to={'/projects'}
            className="go-back-btn"
            onMouseOver={() => addHoverClass()}
            onMouseLeave={() => removeHoverClass()}
          >
            <FontAwesomeIcon 
              icon={faArrowAltCircleLeft} 
              className="left-arrow" 
              pulse={isHover}
            />
            Go Back to Projects
          </Link>
          <img src={apiImage} alt="" width="600" height="300" />
          <GitHubBtn repo='W8_API-Project' />
          <div className="project-description">
            <h3>Project Brief</h3>
            <p>
              This website was built using the NextJS framework as a landing page for a very successful book launch.
            </p>
            <p>
              This was my first freelance project so there were new challenges to face. Some those included working with a team, having a strict deadline, and working with an email capture API.
            </p>
            <p>
              I really enjoyed working with a designer who provided all assets and mockups. It gave me a chance to focuse solely on building the website and implementing the requirements.
            </p>
          </div>
        </div>

        <div className="project-link-and-tech">
          <div className="project-link">
            <h4>Visit Website</h4>
            <WebsiteLinkBtn title='Landing Page' />
          </div>
          <div className="project-tech">
            <h4>Tech Used</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default MovieAPI_Page