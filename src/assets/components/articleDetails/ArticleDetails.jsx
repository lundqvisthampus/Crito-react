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
                <div className="articleInfo">
                    <h2>{article.title}</h2>
                    <p className="dateClass">{article.published}</p>
                    <span className="yellowDot"></span>
                    <p className="categoryClass">{article.category}</p>
                    <span className="yellowDot"></span>
                    <p className="nameClass">{article.author}</p>
                    <img src={article.imageUrl} alt="Image from the article" />
                </div>
                <div className="articleText">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                    <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.</p>
                    <p>Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                    <div className="textQuoteBox">
                        <i class="fa-sharp fa-solid fa-quote-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                </div>
                <div className="articleCategories">
                    <div>Digitalization</div>
                    <div>School</div>
                    <div>IT</div>
                    <div>Design</div>
                    <div>Work</div>
                    <div>Tech</div>
                </div>
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
                    <div id="noBorder" className="recentPost">
                        <p className="postTitle">Figma On Figma: How We Built Our Website Design System</p>
                        <p className="postDate">Jan 14, 2020</p>
                    </div>
                </div>
                <div className="categoriesBox">
                    <h4>Categories</h4>
                    <p>Technology - <span>20 Posts</span></p>
                    <p>Freelancing - <span>07 Posts</span></p>
                    <p>Writing - <span>16 Posts</span></p>
                    <p>Marketing - <span>11 Posts</span></p>
                    <p>Business - <span>35 Posts</span></p>
                    <p>Education - <span>14 Posts</span></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ArticleDetails