import React from 'react'

const Expertise = ({icon, title, text}) => {
  return (
    <div className="skills-box">
        <i className={icon}></i>
        <div className="skills-box-text">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Expertise