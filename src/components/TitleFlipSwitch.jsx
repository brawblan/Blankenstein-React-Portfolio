import { React, useState } from 'react'
import './TitleFlipSwitch.css'

const TitleFlipSwitch = ({ title }) => {
    const [isOn, setIsOn] = useState(false)
  
  const flipSwitch = () => {
    if (!isOn) {
      setIsOn(true)
    } else {
      setIsOn(false)
    }
  }

  return (
    <h2 
        className={!isOn ? 'project-header no-highlight' : 'project-header no-highlight turnOff'}
        onClick={() => flipSwitch()}
      >
        {title}
      </h2>
  )
}


export default TitleFlipSwitch
