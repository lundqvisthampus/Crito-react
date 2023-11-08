import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecentPosts from './RecentPosts';
import Category from './Category';

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
    }, [id])

    const date = new Date(article.published)
    
    const allMonths = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 
    ]

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const convertedDate = `${allMonths[month]} ${day}, ${year}`;

  return (
    <section className="articleDetails">
        <div className="container">
            <div className="leftContent">
                <div className="articleInfo">
                    <h2>{article.title}</h2>
                    <p className="dateClass">{convertedDate}</p>
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
                        <i className="fa-sharp fa-solid fa-quote-left"></i>
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
                <i className="fa-solid fa-magnifying-glass"></i>
                <div className="recentPostsBox">
                    <h4>Recent Posts</h4>
                    <RecentPosts title="How To Blow Through Capital At An Incredible Rate" date="Jan 14, 2020" />
                    <RecentPosts title="Design Studios That Everyone Should Know About?" date="Jan 14, 2020" />
                    <RecentPosts title="How did we get 1M+ visitors in 30 days without anything!" date="Jan 14, 2020" />
                    <RecentPosts title="Figma On Figma: How We Built Our Website Design System" date="Jan 14, 2020" />
                </div>
                <div className="categoriesBox">
                    <h4>Categories</h4>
                    <Category title="Technology" postAmount="20"/>
                    <Category title="Freelancing" postAmount="07"/>
                    <Category title="Writing" postAmount="16"/>
                    <Category title="Marketing" postAmount="11"/>
                    <Category title="Business" postAmount="35"/>
                    <Category title="Education" postAmount="14"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ArticleDetails