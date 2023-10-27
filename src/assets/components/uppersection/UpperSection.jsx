import React from 'react'
import BkglinesImg from '../../images/showcase-whitelines.svg'
import { NavLink } from 'react-router-dom'

const UpperSection = ({ page, header }) => {
  return (
    <div className="connect-section">
        <img className="bkg-lines" src={BkglinesImg} alt="Background lines" />
        <div className="container">
            <NavLink to="/">Home</NavLink>
            <NavLink to={`/${page}`}>{page}</NavLink>
            <h1>{header}</h1>
        </div>
    </div>
  )
}

export default UpperSection