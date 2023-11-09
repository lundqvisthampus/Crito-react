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

  const allMonths = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 
  ]

  return (
    <>
      {
        articles.map(article => {
          const date = new Date(article.published)

          return (
          <Link className="article" to={`/newsdetails/${article.id}`} key={article.id}>
              <img src={article.imageUrl}/>
              <p>{article.category}</p>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
              <div className="articleDate">
                <div className="dayDate">
                  {date.getDate()}
                </div>
                <div className="monthDate">
                  {allMonths[date.getMonth()]}
                </div>
              </div>
          </Link>
          )
        })  
      }
    </>
  )
}

export default Article