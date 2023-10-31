import React from 'react'
import { useState, useEffect } from 'react'

const OurNews = () => {

  const [articles, setArticles] = useState ([])

  const getArticles = async () => {

    const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
    const data = await result.json();

    setArticles(data)
  }

  useEffect(() => {
    getArticles()
  },[])

  return (
    <div className="container">
      <h2>Our News & Articles</h2>
      <div className="ourArticles">
        {articles.map(article => (
          <div className="article" key={article.id}>
            <img src={article.imageUrl}/>
            <p>{article.category}</p>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
          ))
        }
      </div>
    </div> 
  );
};

export default OurNews