import React from 'react'

const Featuresbox = (props) => {
  return (
    <div className="advice-box">
        <i className={props.icon}></i>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
  )
}

export default Featuresbox