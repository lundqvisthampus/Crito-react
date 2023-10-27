import React from 'react'
import Button from '../generics/Button'

const Messageus = () => {
  return (
    <div className="container message-container">
        <h2>Leave us a message <br /> for any information.</h2>
        <div className="message-box">
            <form id="contactForm" method="post">
                <input type="text" id="inputName" name="inputName" placeholder="Name&#42;" />
                <input type="email" id="inputEmail" name="inputEmail" placeholder="Email&#42;" />
                <textarea id="textareaMessage" name="textareaMessage" placeholder="Your Message&#42;"></textarea>
                <button type="submit" className="btn-yellow">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
            </form>
        </div>
    </div>
  )
}

export default Messageus