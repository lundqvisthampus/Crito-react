import React from 'react'
import Header from '../components/header/Header'
import UpperSection from '../components/uppersection/UpperSection'
import Footer from '../components/footer/Footer'

const News = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <UpperSection page="News" header="News & Articles" />
      </main>
      <Footer />
    </div>
  )
}

export default News