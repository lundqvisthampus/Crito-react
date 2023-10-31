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
      <h2 className="newsHeader">Our News & Articles</h2>
      <div className="ourArticles">
        {articles.map(article => (
          <div className="article" key={article.id}>
            <img src={article.imageUrl}/>
            <p>{article.category}</p>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
          ))}
      </div>
      <div className="center-content">
          <button type="button">&#60;</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">...</button>
          <button type="button">9</button>
          <button type="button">&#62;</button>
        </div>
    </div> 
  );
};

export default OurNews