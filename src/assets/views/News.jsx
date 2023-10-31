import React from 'react'
import Header from '../components/header/Header'
import UpperSection from '../components/uppersection/UpperSection'
import Newsletter from '../components/newsletter/Newsletter'
import Footer from '../components/footer/Footer'
import OurNews from '../components/ourNewsAndArticles/OurNews'

const News = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <UpperSection page="News" header="News & Articles" />
        <OurNews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default News