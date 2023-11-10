import React from 'react'
import Header from '../components/header/Header'
import UpperSection from '../components/uppersection/UpperSection'
import ArticleDetails from '../components/newsdetails/articleDetails/ArticleDetails'
import Articleandnews from '../components/home/articleandnews/Articleandnews'
import Footer from '../components/footer/Footer'

const NewsDetails = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <UpperSection page="News" header="News & Articles" />
        <ArticleDetails />
        <Articleandnews type="-grey" />
      </main>
      <Footer />
    </div>
  )
}

export default NewsDetails