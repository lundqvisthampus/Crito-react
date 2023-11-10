import { useContext, createContext, useState, useEffect } from "react";

const ArticleContext = createContext()
export const useArticles = () => useContext(ArticleContext)


export const ArticleProvider = ({children}) => {
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState({})
    const [threeArticles, setThreeArticles] =  useState([])

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        const data = await result.json()
        setArticles(data) 
    }

    const getArticle = async (id) => {
        const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
        const data = await result.json()
        setArticle(data) 
    }

    const getThreeArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles?take=3')
        const data = await result.json()
        setThreeArticles(data) 
    }

    return (
        <ArticleContext.Provider value={{articles, article, threeArticles, getArticles, getArticle, getThreeArticles}}>
            {children}
        </ArticleContext.Provider>
    )
}
