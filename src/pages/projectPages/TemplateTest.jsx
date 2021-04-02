import { React, useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import GitHubBtn from '../../components/GitHubBtn'
import WebsiteLinkBtn from '../../components/WebsiteLinkBtn'
import './ProjectPages.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const TemplateTest = ({ page }) => {
  const [isHover, setIsHover] = useState(false)
  const addHoverClass = () => {
    setIsHover(true)
  }
  const removeHoverClass = () => {
    setIsHover(false)
  }

  if (!page) {
    return "Loading...";
  }
      
  return (
    <>
      <NavBar />
      <div className="project-page">

        {page.map((project, index) => {
          if (index === 0) {
            return (
              <>
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
                  <img src="../../assets/landingPage.png" alt="" width="600" height="300" />
                  <GitHubBtn repo={project.repo} />
                  <div className="project-description">
                    <h3>Project Brief</h3>
                    <p>
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="project-link-and-tech">
                  <div className="project-link">
                    <h4>Visit Website</h4>
                    <WebsiteLinkBtn title={project.title} />
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
              </>
            )
          }
        })}
      </div>
      <Footer />
    </>
  )
}

export default TemplateTest