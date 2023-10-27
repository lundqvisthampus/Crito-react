import React from 'react'
import BkglinesImg from '../../images/newsletter-greyline.svg'

const Newsletter = () => {
  return (
    <section className="newsletter-section">
        <img className="bkg-lines-right" src={BkglinesImg} alt="Background lines" />
        <div className="container">
            <h2>Gets News Updates By Signup</h2>
            <form id="news-signup" method="post">
                <input type="email" id="newsEmail" name="newsEmail" placeholder="username@domain.com" />
                <button type="submit" className="btn-yellow">Subscribe <i className="fa-solid fa-arrow-up-right"></i></button>
            </form>
        </div>
    </section>
  )
}

export default Newsletter