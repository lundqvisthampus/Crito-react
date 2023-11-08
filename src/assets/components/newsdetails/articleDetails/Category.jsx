import React from 'react'

const Category = ({title, postAmount}) => {
  return (
    <>
    <p>{`${title} - `}<span>{`${postAmount} Posts`}</span></p>
    </>
  )
}

export default Category