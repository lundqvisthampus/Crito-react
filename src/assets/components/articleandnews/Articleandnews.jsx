import React from 'react'
import SectionTitle from '../generics/SectionTitle'
import Button from '../generics/Button'
import ButtonDots from '../generics/ButtonDots'
import Article from './Article'
import ArticleImg1 from '../../images/article-news-img1.png'
import ArticleImg2 from '../../images/article-news-img2.png'
import ArticleImg3 from '../../images/article-news-img3.png'

const Articleandnews = () => {
  return (
    <section className="article-news-section">
        <div className="container">
            <div className="top-row">
                <SectionTitle paragraph="Article & News" header="Get Every Single Articles & News" />
                <Button title="Browse Articles" url="/articles" />
            </div>
            <div className="articles-and-news">
                <Article />
            </div>
            <div className="center-content">
                <ButtonDots type="dark" />
                <ButtonDots />
                <ButtonDots />
                <ButtonDots />
                <ButtonDots />
            </div>
        </div>
    </section>
  )
}

export default Articleandnews