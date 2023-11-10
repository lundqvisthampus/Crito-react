import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useArticles } from '../../../contexts/ArticleContext';

const Article = () => {

  const { threeArticles, getThreeArticles } = useArticles()

    useEffect(() => {
      getThreeArticles()
    }, [])

  const allMonths = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 
  ]

  return (
    <>
      {
        threeArticles.map(article => {
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