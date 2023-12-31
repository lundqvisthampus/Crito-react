import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer'
import UpperSection from '../components/uppersection/UpperSection';
import Contactus from '../components/contact/contactus/contactus';
import Messages from '../components/contact/messages/Messages';
import Mapslocation from '../components/contact/mapslocation/Mapslocation';

const Contact = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <UpperSection page="Contact" header="Let's Connect" />
        <Contactus />
        <Messages />
        <Mapslocation />
      </main>
      <Footer />
    </div>
  )
}

export default Contact