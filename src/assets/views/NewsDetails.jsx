import React from 'react'
import Header from '../components/header/Header'
import UpperSection from '../components/uppersection/UpperSection'
import ArticleDetails from '../components/newsdetails/articleDetails/ArticleDetails'
import Articleandnews2 from '../components/home/articleandnews/Articleandnews2'
import Footer from '../components/footer/Footer'

const NewsDetails = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <UpperSection page="News" header="News & Articles" />
        <ArticleDetails />
        <Articleandnews2 />
      </main>
      <Footer />
    </div>
  )
}

export default NewsDetails