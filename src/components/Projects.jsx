import { React, useState } from 'react'
import './Projects.css'
import TitleFlipSwitch from '../components/TitleFlipSwitch'
import { Link } from 'react-router-dom'
import projectsArr from '../utils/projectsArray'

const Projects = () => {

  return (
    <div className="project-page-container">
      <TitleFlipSwitch title='Portfolio Projects' />
      <div className="project-container">
        {projectsArr.map(({ title, src, route }) => (
          <Link to={`/pages/projectPages/${route}`} className="project-page-btn">
            <div className="project-wrapper">
              <h3>{title}</h3>
              <img src={src} alt={title} width="300" height="150" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects
