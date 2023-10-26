import React from 'react'
import { Link } from 'react-router-dom'
import Blacklines from '../../images/consulting-box-line.svg'

const Ourservicebox = ({title, text, url}) => {
  return (
    <Link className="consulting-box" to={url}>
        <img src={Blacklines} alt="Black line above the text" />
        <h3>{title}</h3>
        <p>{text}</p>
        <i className="fa-duotone fa-circle-arrow-right"></i>
    </Link>
  )
}

export default Ourservicebox