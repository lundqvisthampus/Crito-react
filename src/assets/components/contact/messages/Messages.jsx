import React from 'react'
import { useState } from 'react';

const Messages = () => {

  const [emailError, setEmailError] = useState('');
  const [emailErrorClass, setEmailErrorClass] = useState('');
  const [nameError, setNameError] = useState('');
  const [nameErrorClass, setNameErrorClass] = useState('');
  const [messageError, setMessageError] = useState('');
  const [messageErrorClass, setMessageErrorClass] = useState('');
  const [statusClass, setStatusClass] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (emailValue) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(emailValue))
      return true
    return false
  }

  const validateName = (nameValue) => {
    const namePattern = /^([a-öA-Ö ]){2,30}$/;
    if (namePattern.test(nameValue))
      return true
    return false
  }

  const validateMessage = (messageValue) => {
    if (messageValue.length >= 1)
      return true
    return false
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.')
      setEmailErrorClass('error')
    } else {
      setEmailError('')
      setEmailErrorClass('')
    }

    if (!validateName(name)) {
      setNameError('Please enter a valid name.')
      setNameErrorClass('error')
    } else {
      setNameError('')
      setNameErrorClass('')
    }

    if (!validateMessage(message)) {
      setMessageError('Your message needs to contain at least 10 characters.')
      setMessageErrorClass('error')
    } else {
      setMessageError('')
      setMessageErrorClass('')
    }

    if (validateEmail(email) && validateName(name) && validateMessage(message)) {
      
      const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'post',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify({
          name, email, message
        })
      })

      if (result.status === 200) {
        setStatusMessage('Your message was sent successfully!')
        setStatusClass('statusSuccess')
      } else {
        setStatusMessage('Something went wrong, message was not sent!')
        setStatusClass('statusError')
      }
    }

  };

  return (
    <div className="container message-container">
        <p className={statusClass}>{statusMessage}</p>
        <h2>Leave us a message <br /> for any information.</h2>
        <div className="message-box">
            <form id="contactForm" onSubmit={handleSubmit} method="post" noValidate>
                <input className={nameErrorClass} type="text" id="inputName" name="inputName" value={name} placeholder="Name&#42;" onChange={(e) => setName(e.target.value)} />
                <p className="errorMessage">{nameError}</p>

                <input className={emailErrorClass} type="email" id="inputEmail" name="inputEmail" value={email} placeholder="Email&#42;" onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMessage">{emailError}</p>

                <textarea className={messageErrorClass} id="textareaMessage" name="textareaMessage" value={message} placeholder="Your Message&#42;" onChange={(e) => setMessage(e.target.value)}></textarea>
                <p className="errorMessage">{messageError}</p>

                <button type="submit" className="btn-yellow">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
            </form>
        </div>
    </div>
  )
}

export default Messages