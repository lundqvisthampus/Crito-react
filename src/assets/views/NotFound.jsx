import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="align-text">
        <h1>Page not found</h1>
        <Link to="/">Return to homepage</Link>
    </div>
  )
}

export default NotFound