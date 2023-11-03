import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Article = () => {

  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const fetchArticles = await fetch ('https://win23-assignment.azurewebsites.net/api/articles?take=3');

    if (fetchArticles.status === 200) {
      setArticles(await fetchArticles.json())
    }
  }

  useEffect(() => {
    getArticles()
  },[])

  return (
    <>
      {
        articles.map(article => (
          <Link className="article" to={`/newsdetails/${article.id}`} key={article.id}>
              <img src={article.imageUrl}/>
              <p>{article.category}</p>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
          </Link>
        ))  
      }
    </>
  )
}

export default Article