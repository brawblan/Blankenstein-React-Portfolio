import React from 'react'
import TitleFlipSwitch from './TitleFlipSwitch'
import './About.css'

const About = () => {
  return (
    <div className="about-me-page">
      <TitleFlipSwitch title='About Me' />
      <div className="bio-wrapper">
        <div className="picture"></div>
        <div className="about-me">
          <p>
            I'm Brandon Blankenstein and I specialize in front-end developement, primarily working with React. I mostly focus on simplicity, responsive design, cross-browser compatibility, and SEO-friendly code.
          </p>
          <p>
            I have serious passion for UI effects, animations, and creating intuitive, dynamic user experiences.
          </p>
        </div>
      </div>
      
      <div className="specialty-boxes">
        <div className="box">
          <i class="nes-logo"></i> 
          howdy
        </div>
        <div className="box">
          <i class="nes-jp-logo"></i> 
          howdy
        </div>
        <div className="box">
          <i class="snes-logo"></i>
          howdy
        </div>
        <div className="box">
          <i class="snes-jp-logo"></i>
          howdy
        </div>
      </div>

      <div className="tech-skills-container">
        <TitleFlipSwitch title='Tech Skills' />
        <div className="tech-skill-wrapper">
          <h4>HTML</h4>
          <progress class="nes-progress is-primary" value="60" max="100" width="100"></progress>
        </div>
        <div className="tech-skill-wrapper">
          <h4>CSS</h4>
          <progress class="nes-progress is-primary" value="90" max="100"></progress>
        </div>
        <div className="tech-skill-wrapper">
          <h4>JAVASCRIPT</h4>
          <progress class="nes-progress is-primary" value="90" max="100"></progress>
        </div>
        <div className="tech-skill-wrapper">
          <h4>REACTJS</h4>
          <progress class="nes-progress is-primary" value="90" max="100"></progress>
        </div>
      </div>
    </div>
  )
}

export default About