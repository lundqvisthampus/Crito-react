import React from 'react'
import Header from '../components/header/Header'
import UpperSection from '../components/uppersection/UpperSection'
import Footer from '../components/footer/Footer'

const NewsDetails = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <UpperSection />
      </main>
      <Footer />
    </div>
  )
}

export default NewsDetails