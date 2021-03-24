import { React, useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import GitHubBtn from '../../components/GitHubBtn'
import WebsiteLinkBtn from '../../components/WebsiteLinkBtn'
import './ProjectPages.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const query = `
{
  projectContentCollection {
    items {
      title
      route
      repo
      siteLink
      projectImage
      description
    }
  }
}
`

const TemplateTest = () => {
  const [isHover, setIsHover] = useState(false)
  const addHoverClass = () => {
    setIsHover(true)
  }
  const removeHoverClass = () => {
    setIsHover(false)
  }

  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/noefj5y57vr9/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: `Bearer MTmSGOTdxvfPA7rRthSdqkZRyhmees_WMpcl_BBe9g4`,
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        
        // rerender the entire component with new data
        setPage(data.projectContent);
      });
  }, [])

  console.log(page);
  
  // show a loading screen case the data hasn't arrived yet
  if (!page) {
    return "Loading...";
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
          <img src="../../assets/landingPage.png" alt="" width="600" height="300" />
          <GitHubBtn repo={page.repo} />
          <div className="project-description">
            <h3>Project Brief</h3>
            <p>
            {page.description}
            </p>
          </div>
        </div>

        <div className="project-link-and-tech">
          <div className="project-link">
            <h4>Visit Website</h4>
            <WebsiteLinkBtn title={page.title} />
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

export default TemplateTest