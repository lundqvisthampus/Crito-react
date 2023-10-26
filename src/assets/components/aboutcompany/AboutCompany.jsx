import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../generics/Button'
import WomanImg from '../../images/about-company-1.png'
import QuoteImg from '../../images/about-company-2.png'
import WhitelinesImg from '../../images/about-company-lines.svg'

const AboutCompany = () => {
  return (
    <section className="about-company-section">
        <div className="container">
            <div className="company-images">
                <img className="company-img1" src={WomanImg} alt="Image of a woman in an office" />
                <img className="company-img2" src={QuoteImg} alt="Quote from Samantha Brown" />
                <img className="company-img3" src={WhitelinesImg} alt="Background lines" />
            </div>
            <div className="section-title">
                <p>About Company</p>
                <h2>We Are Business Consulting & Credit Repair Experts</h2>
                <p className="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p className="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                <div className="bottom-buttons">
                    <Button type="black" title="Learn More" url="/about"/>
                    <Link className="video-button" to="/intro-video"><i className="fa-regular fa-circle-play"></i>Intro Video</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutCompany