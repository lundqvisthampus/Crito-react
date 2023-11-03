import React from 'react'
import WomanImg from '../../../images/why-us-1.png'
import GreybkgImg from '../../../images/why-us-2.png'
import Expertise from './Expertise'
import SectionTitle from '../../generics/SectionTitle'

const Whychooseus = () => {
  return (
    <section className="why-us-section container">
        <div className="container">
            <div className="why-us">
                <SectionTitle paragraph="Why Choose Us" header="Why We Are The Best Business Consulting Agency" />
                <div className="first-boxes">
                    <Expertise title="Process Excellence" icon="fa-regular fa-thumbs-up" text="Lorem, ipsum dolor sit amet consectetur." />
                    <Expertise title="Strategic Planning" icon="fa-regular fa-hexagon-check" text="Lorem, ipsum dolor sit amet consectetur." />
                </div>
                <div className="second-boxes">
                    <Expertise title="Experience Design" icon="fa-regular fa-pen-nib" text="Lorem, ipsum dolor sit amet consectetur." />
                    <Expertise title="Artificial Inteligence" icon="fa-light fa-head-side-gear" text="Lorem, ipsum dolor sit amet consectetur." />
                </div>
            </div>
            <img className="why-us-img1" src={WomanImg} alt="Image of two women talking in an office" />
            <img className="why-us-img2" src={GreybkgImg} alt="Grey background picture" />
        </div>
    </section>
  )
}

export default Whychooseus