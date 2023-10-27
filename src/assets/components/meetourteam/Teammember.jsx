import React from 'react'

const Teammember = ({ name, text, image, url,}) => {
  return (
    <a className="member" href={url}>
        <img src={image} alt={`Image of ${name}`} />
        <h3>{name}</h3>
        <p>{text}</p>
    </a>
  )
}

export default Teammember