import React from 'react'
import { Link } from 'react-router-dom';

const Linksbox = ({ mainLink, subLinks }) => {

  return (
    <div className="info-box">
        <Link className="h3-link" to={`/${mainLink}`}>
            {mainLink}
        </Link>

        {subLinks.map((subLink, index) => (
        <Link key={index} to={`/${subLink}`}>
          {subLink}
        </Link>
      ))}
    </div>
  )
}

export default Linksbox