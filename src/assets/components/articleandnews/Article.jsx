import React from 'react'
import { useEffect, useState } from 'react'

const Article = () => {

  const [articles, setArticles] = useState ([])

  const getArticles = async () => {

  const result1 = await fetch ('https://win23-assignment.azurewebsites.net/api/articles/c7bbc3d6-d88e-4d25-a3bf-faeb9fcefd15');
  const data1 = await result1.json();
  const result2 = await fetch ('https://win23-assignment.azurewebsites.net/api/articles/bfb418f3-be63-4ded-a9c3-880409a465b7'); 
  const data2 = await result2.json();
  const result3 = await fetch('https://win23-assignment.azurewebsites.net/api/articles/a0344661-267f-4f3d-ae16-c13a5045f00c');
  const data3 = await result3.json();

  setArticles([data1, data2, data3]);
  }


  useEffect(() => {
    getArticles()
  },[])



  return (
    <>
      {
        articles.map(article => (
          <div className="article" key={article.id}>
              <img src={article.imageUrl}/>
              <p>{article.category}</p>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
          </div>
        ))  
      }
    </>
  )
}

export default Article