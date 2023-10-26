import React from 'react'

const Article = ({ image, category, text, alt, title, url }) => {
  return (
    <a className="article" href={url}>
        <img src={image} alt={alt} />
        <p>{category}</p>
        <h3>{title}</h3>
        <p>{text}</p>
    </a>
  )
}

export default Article