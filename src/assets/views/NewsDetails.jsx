import React from 'react'
import Header from '../components/header/Header'
import UpperSection from '../components/uppersection/UpperSection'
import Articleandnews2 from '../components/articleandnews/Articleandnews2'
import Footer from '../components/footer/Footer'

const NewsDetails = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main>
      <UpperSection page="News" header="News & Articles" />
      <Articleandnews2 />
      </main>
      <Footer />
    </div>
  )
}

export default NewsDetails