import React from 'react'
import BkglinesImg from '../../images/showcase-whitelines.svg'
import { NavLink } from 'react-router-dom'

const Letsconnect = () => {
  return (
    <div className="connect-section">
        <img className="bkg-lines" src={BkglinesImg} alt="Background lines" />
        <div className="container">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <h1>Let's Connect</h1>
        </div>
    </div>
  )
}

export default Letsconnect