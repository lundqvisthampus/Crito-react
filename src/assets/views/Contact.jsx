import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer'
import Letsconnect from '../components/letsconnect/Letsconnect';
import Contactus from '../components/contactus/contactus';
import Messageus from '../components/messageus/Messageus';
import Mapslocation from '../components/mapslocation/Mapslocation';

const Contact = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Letsconnect />
        <Contactus />
        <Messageus />
        <Mapslocation />
      </main>
      <Footer />
    </div>
  )
}

export default Contact