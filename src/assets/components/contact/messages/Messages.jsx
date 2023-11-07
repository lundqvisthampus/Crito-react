import React from 'react'
import { useState } from 'react';

const Messages = () => {

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');
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
    if (nameValue.length >= 2)
      return true
    return false
  }

  const validateMessage = (messageValue) => {
    if (messageValue.length >= 10)
      return true
    return false
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = e.target.inputEmail.value;
    const nameValue = e.target.inputName.value;
    const messageValue = e.target.textareaMessage.value;

    if (!validateEmail(emailValue)) {
      setEmailError('Please enter a valid email address.')
    } else {
      setEmailError('')
      setEmail(emailValue)
    }

    if (!validateName(nameValue)) {
      setNameError('Please enter a valid name.')
    } else {
      setNameError('')
      setName(nameValue)
    }

    if (!validateMessage(messageValue)) {
      setMessageError('Your message needs to contain at least 10 characters.')
    } else {
      setMessageError('')
      setMessage(messageValue)
    }

    if (validateEmail(emailValue) && validateName(nameValue) && validateMessage(messageValue)) {
      
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
        alert('Message sent!')
      } else {
        alert('Something went wrong, message was not sent!')
      }
    }
  };

  return (
    <div className="container message-container">
        <h2>Leave us a message <br /> for any information.</h2>
        <div className="message-box">
            <form id="contactForm" onSubmit={handleSubmit} method="post" noValidate>
                <input type="text" id="inputName" name="inputName" placeholder="Name&#42;" />
                <p className="errorMessage">{nameError}</p>

                <input type="email" id="inputEmail" name="inputEmail" placeholder="Email&#42;" />
                <p className="errorMessage">{emailError}</p>

                <textarea id="textareaMessage" name="textareaMessage" placeholder="Your Message&#42;"></textarea>
                <p className="errorMessage">{messageError}</p>

                <button type="submit" className="btn-yellow">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
            </form>
        </div>
    </div>
  )
}

export default Messages