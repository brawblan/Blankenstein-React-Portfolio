import { React, useState, useEffect } from 'react'
import './Projects.css'
import TitleFlipSwitch from '../components/TitleFlipSwitch'
import { Link } from 'react-router-dom'
import projectsArr from '../utils/projectsArray'

const Projects = () => {
  const [page, setPage] = useState(null)

  const query = `
  {
    projectContentCollection {
      items {
        id
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

  useEffect(() => {
    window
    .fetch(`https://graphql.contentful.com/content/v1/spaces/noefj5y57vr9/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer MTmSGOTdxvfPA7rRthSdqkZRyhmees_WMpcl_BBe9g4`,
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setPage(data.projectContentCollection.items);
      });
  }, [])

  return (
    <div className="project-page-container">
      <TitleFlipSwitch title='Portfolio Projects' />
      <div className="project-container">
        {page.map((item, index ) => {
          if (index === 0) {
            return (
            <Link to={`/${item.route}`} className="project-page-btn">
              <div className="project-wrapper">
                <h3>{item.title}</h3>
                <img src={item.src} alt={item.title} width="300" height="150" />
              </div>
            </Link>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Projects
