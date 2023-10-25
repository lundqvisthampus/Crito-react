import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Button = ({type, url, title}) => {

    const getButtonClassName = () => {

        if (type === 'yellow') {
            return 'btn-yellow';
        } else if (type === 'black') {
            return 'btn-black';
        } else {
            return 'btn-transparent';
        };
    };

  return (
    <Link className={getButtonClassName()} to={url}>{title} <i className="fa-regular fa-arrow-up-right"></i></Link>
  )
}

export default Button