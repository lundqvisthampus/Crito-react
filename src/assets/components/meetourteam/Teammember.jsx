import React from 'react'

const Teammember = ({ name, text, image, url, alt}) => {
  return (
    <a className="member" href={url}>
        <img src={image} alt={alt} />
        <h3>{name}</h3>
        <p>{text}</p>
    </a>
  )
}

export default Teammember