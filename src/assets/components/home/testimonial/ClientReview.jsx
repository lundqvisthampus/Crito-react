import React from 'react'

const ClientReview = ({ image, name, title, alt, text }) => {
  return (
    <div className="review-box">
      <i className="fa-sharp fa-solid fa-star"></i>
      <i className="fa-sharp fa-solid fa-star"></i>
      <i className="fa-sharp fa-solid fa-star"></i>
      <i className="fa-sharp fa-solid fa-star"></i>
      <i className="fa-sharp fa-solid fa-star"></i>
      <p>{text}</p>
      <div className="client">
        <img src={image} alt={alt} />
        <div className="client-info">
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default ClientReview