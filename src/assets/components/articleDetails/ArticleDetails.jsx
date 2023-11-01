import React from 'react'
import Image1 from '../../images/article-news-img1.png';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetails = () => {

    const [article, setArticle] = useState({})
    const { id } = useParams()

    const getArticle = async () => {
        const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

        if (result.status === 200) {
            setArticle(await result.json());
        }
    }

    useEffect(() => {
        getArticle()
    }, [])


  return (
    <section className="articleDetails">
        <div className="container">
            <div className="leftContent">
                <h2>{article.title}</h2>
                <p className="dateClass">{article.published}</p>
                <span className="yellowDot"></span>
                <p className="categoryClass">{article.category}</p>
                <span className="yellowDot"></span>
                <p className="nameClass">{article.author}</p>
                <img src={article.imageUrl} alt="Image from the article" />
            </div>
            <div className="rightContent">
                <form id="searchInput" method="get">
                    <input type="text" id="searchBox" name="searchBox" placeholder="Type to search..." />
                </form>
                <i class="fa-solid fa-magnifying-glass"></i>
                <div className="recentPostsBox">
                    <h4>Recent Posts</h4>
                    <div className="recentPost">
                        <p className="postTitle">How To Blow Through Capital At An Incredible Rate</p>
                        <p className="postDate">Jan 14, 2020</p>
                    </div>
                    <div className="recentPost">
                        <p className="postTitle">Design Studios That Everyone Should Know About?</p>
                        <p className="postDate">Jan 14, 2020</p>
                    </div>
                    <div className="recentPost">
                        <p className="postTitle">How did we get 1M+ visitors in 30 days without anything!</p>
                        <p className="postDate">Jan 14, 2020</p>
                    </div>
                    <div className="recentPost">
                        <p className="postTitle">Figma On Figma: How We Built Our Website Design System</p>
                        <p className="postDate">Jan 14, 2020</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ArticleDetails