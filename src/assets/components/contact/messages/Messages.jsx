import React from 'react'
import { useState } from 'react';



const Messages = () => {

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateEmail = (emailValue) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(emailValue);
  }

  const validateName = (nameValue) => {
    if (nameValue.length >= 2)
    return true;
  }

  const validateMessage = (messageValue) => {
    if (messageValue.length >= 10)
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = e.target.inputEmail.value;
    const nameValue = e.target.inputName.value;
    const messageValue = e.target.textareaMessage.value;

    if (!validateEmail(emailValue)) {
      setEmailError('Du måste ange en giltig e-postadress')
      e.target.inputEmail.classList.add('error');
    } else {
      setEmailError('')
      e.target.inputEmail.classList.remove('error');
    }

    if (!validateName(nameValue)) {
      setNameError('Du måste ange ett giltigt namn')
      e.target.inputName.classList.add('error');
    } else {
      setNameError('')
      e.target.inputName.classList.remove('error');
    }

    if (!validateMessage(messageValue)) {
      setMessageError('Ditt meddelande måste innehålla minst 10 tecken')
      e.target.textareaMessage.classList.add('error');
    } else {
      setMessageError('')
      e.target.textareaMessage.classList.remove('error');
    }
  };

  return (
    <div className="container message-container">
        <h2>Leave us a message <br /> for any information.</h2>
        <div className="message-box">
            <form id="contactForm" onSubmit={handleSubmit} method="post" noValidate>
                <input className="" type="text" id="inputName" name="inputName" placeholder="Name&#42;" />
                <p className="textError">{nameError}</p>

                <input type="email" id="inputEmail" name="inputEmail" placeholder="Email&#42;" />
                <p className="textError">{emailError}</p>

                <textarea id="textareaMessage" name="textareaMessage" placeholder="Your Message&#42;"></textarea>
                <p className="textError">{messageError}</p>

                <button type="submit" className="btn-yellow">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
            </form>
        </div>
    </div>
  )
}

export default Messages