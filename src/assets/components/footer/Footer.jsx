import React from 'react'
import { Link } from 'react-router-dom'
import Linksbox from './Linksbox'
import FooterLogo from '../../images/logo-footer.svg'
import BkglinesImg from '../../images/footer-bkg-lines.svg'

const Footer = () => {
  return (
    <footer>
        <div className="top-footer">
            <img className="bkg-lines-right" src={BkglinesImg} alt="Background lines" />
            <div className="container">
                <div className="crito-box">
                    <Link to="/">
                        <img src={FooterLogo} alt="Crito logotype" />
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Placeat obcaecati <br /> voluptas voluptates! Voluptates laborum <br /> nam ratione minus necessitatibus, iure <br /> praesentium.</p>
                </div>
                <div className="all-info-boxes">
                    <Linksbox mainLink="Company" subLinks={["About", "Features", "Works", "Career"]} />
                    <Linksbox mainLink="Help" subLinks={["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"]} />
                    <Linksbox mainLink="Resources" subLinks={["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"]} />
                    <Linksbox mainLink="Link" subLinks={["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"]} />
                </div>
            </div>
        </div>
        <div className="bottom-footer">
            <div className="container">
                <p>&#169; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                <div className="socialmedia-bar">
                    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer