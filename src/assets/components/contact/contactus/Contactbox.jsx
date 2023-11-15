import React from 'react'

const Contactbox = (props) => {
  return (
    <a className="contact-box" href={props.url} target="_blank">
        <i className={props.icon}></i>
        <div className="contact-info">
            <h3>{props.title}</h3>
            <p>{props.upperText}</p>
            <p>{props.lowerText}</p>
        </div>
    </a> 
  )
}

export default Contactbox