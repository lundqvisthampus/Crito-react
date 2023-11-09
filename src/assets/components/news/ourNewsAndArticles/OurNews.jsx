import React from 'react'
import { useState, useEffect } from 'react'
import NumberedButtons from '../../generics/NumberedButtons';
import { Link } from 'react-router-dom';

const OurNews = () => {

  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles');

    if (result.status === 200) {
      setArticles(await result.json())
    }
  }

  useEffect(() => {
    getArticles()
  },[]);

  const allMonths = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 
  ]

  return (
    <div className="container">
      <h2 className="newsHeader">Our News & Articles</h2>
      <div className="ourArticles">
        {articles.map(article => {
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
        })}
      </div>

      <div className="center-content">
          <NumberedButtons content="&lt;" />
          <NumberedButtons content="1" />
          <NumberedButtons content="2" />
          <NumberedButtons content="3" />
          <NumberedButtons content="..." />
          <NumberedButtons content="9" />
          <NumberedButtons content="&gt;" />
      </div>
    </div> 
  );
};

export default OurNews