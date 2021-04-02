import React from 'react'
import './Projects.css'
import TitleFlipSwitch from '../components/TitleFlipSwitch'
import { Link } from 'react-router-dom'
import query from '../pages/api/query'

const Projects = () => {

  var page 

  query(page)

  console.log(page)

  return (
    <div className="project-page-container">
      <TitleFlipSwitch title='Portfolio Projects' />
      <div className="project-container">
        {/* {page.map((item, index ) => {
          if (index === 0) {
            return ( */}
            <Link to={`/${page.route}`} className="project-page-btn">
              <div className="project-wrapper">
                <h3>{page.title}</h3>
                <img src={page.src} alt={page.title} width="300" height="150" />
              </div>
            </Link>
            )
          {/* }
        })} */}
      </div>
    </div>
  )
}

export default Projects
