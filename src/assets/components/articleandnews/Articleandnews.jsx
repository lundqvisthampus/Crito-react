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
                <Article image={ArticleImg1} alt="Image from the article" category="Business" title="How To Use Digitalization In The classNameroom" url="#" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." />
                <Article image={ArticleImg2} alt="Image from the article" category="Business" title="How To Implement Chat GPT In Your Projects" url="#" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." />
                <Article image={ArticleImg3} alt="Image from the article" category="Business" title="The Guide To Support Modern CSS Design" url="#" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." />
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