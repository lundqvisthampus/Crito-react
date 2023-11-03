import React from 'react'

const Contactbox = ({ icon, title, upperText, lowerText, url }) => {
  return (
    <a className="contact-box" href={url} target="_blank">
        <i className={icon}></i>
        <div className="contact-info">
            <h3>{title}</h3>
            <p>{upperText}</p>
            <p>{lowerText}</p>
        </div>
    </a> 
  )
}

export default Contactbox