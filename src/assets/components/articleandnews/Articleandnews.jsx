import React from 'react'
import SectionTitle from '../generics/SectionTitle'
import Button from '../generics/Button'
import ButtonDots from '../generics/ButtonDots'
import Article from './Article'


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
            <div className="multiple-dots">
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