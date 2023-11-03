import React from 'react'
import Button from '../../generics/Button'
import Featuresbox from './Featuresbox'

const Features = () => {
  return (
    <section className="features-section">
        <div className="container">
            <div className="features-first">
                <p>Features</p>
                <h2>Our Accounting is <br /> trusted by thousand <br /> of companies</h2>
                <Button type="yellow" title="Learn More" url="/features"/>
            </div>
            <div className="features-second">
                <div className="left-boxes">
                    <Featuresbox title="Business Advice" icon="fa-regular fa-handshake" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                    <Featuresbox title="Financial Advice" icon="fa-regular fa-chart-mixed-up-circle-dollar" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                </div>
                <div className="right-boxes">
                    <Featuresbox title="Startup Business" icon="fa-regular fa-lightbulb-on" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                    <Featuresbox title="Risk Management" icon="fa-regular fa-box-check" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features