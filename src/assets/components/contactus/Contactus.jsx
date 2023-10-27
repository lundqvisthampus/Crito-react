import React from 'react'
import Contactbox from './Contactbox';

const Contactus = () => {
  return (
    <div className="container contact-container">
        <Contactbox title="Visit us" upperText="Sveavägen 31" lowerText="111 34 STOCKHOLM" icon="fa-solid fa-circle-location-arrow" 
        url="https://maps.app.goo.gl/36Zhk3SdR5JGMMus9" />

        <Contactbox title="Call us" upperText="+46 (8) 121 470 50" lowerText="+46 (8) 121 470 51" icon="fa-solid fa-circle-phone" 
        url="tel:+46812147050" />

        <Contactbox title="Email us" upperText="info@crito.com" lowerText="support@crito.com" icon="fa-solid fa-circle-envelope" 
        url="mailto:info@crito.com" />
    </div>
  )
}

export default Contactus