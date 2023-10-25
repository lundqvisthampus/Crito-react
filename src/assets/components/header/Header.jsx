import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logotype from '../../images/logo.svg';
import Button from '../generics/Button';

const Header = () => {
  return (
    <header>
        <div className="container">
            <button className="btn-menubars"><i className="fa-solid fa-bars-staggered"></i></button>
            <div className="logotype">
                <Link to="/">
                    <img src={Logotype} alt="Crito logotype" />
                </Link>
            </div>
            <div className="contact-info-bar">
                <div className="content-box">
                    <i className="fa-regular fa-phone-volume"></i>
                    +46 (8) 121 470 50
                </div>
                <div className="content-box">
                    <i className="fa-regular fa-envelope"></i>
                    info@crito.com
                </div>
                <div className="content-box last">
                    <i className="fa-regular fa-location-dot"></i>
                    Sveavägen 31, 111 34 STOCKHOLM
                </div>
            </div>
            <div className="socialmedia-bar">
                <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <div className="menu">
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/services'>Service</NavLink>
                    <NavLink to='/news'>News</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </nav>
                <Button type="yellow" url="/login" title="Login"/>
            </div>
        </div>
    </header>
  )
};

export default Header