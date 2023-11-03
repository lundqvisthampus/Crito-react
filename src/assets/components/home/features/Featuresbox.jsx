import React from 'react'

const Featuresbox = ({icon, title, text}) => {
  return (
    <div className="advice-box">
        <i className={icon}></i>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default Featuresbox