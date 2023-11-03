import React from 'react'
import SectionTitle from '../../generics/SectionTitle'
import Ourservicebox from './Ourservicebox'
import Button from '../../generics/Button'
import BkglinesImg from '../../../images/our-services-whitelines.svg'

const Ourservices = () => {
  return (
    <section className="our-services-section">
        <img className="bkg-whitelines-right" src={BkglinesImg} alt="Background lines" />
        <div className="container">
            <SectionTitle paragraph="Our Services" header="We Provide The Best Service For Consulting" />
            <div className="services">
                <div className="first-boxes">
                    <Ourservicebox title="Business Advice" url="/businessadvice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                    <Ourservicebox title="Startup Business" url="/startupbusiness" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                </div>
                <div className="second-boxes">
                    <Ourservicebox title="Financial Advice" url="/financialadvice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                    <Ourservicebox title="Risk Management" url="/riskmanagement" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                </div>
            </div>
            <div className="browse-services">
                <Button type="transparent" title="Browse Services" url="/ourservices" />
            </div>
        </div>
    </section>
  )
}

export default Ourservices