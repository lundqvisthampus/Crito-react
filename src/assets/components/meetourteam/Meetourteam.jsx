import React from 'react'
import Button from '../generics/Button';
import ButtonDots from '../generics/ButtonDots';
import SectionTitle from '../generics/SectionTitle';
import Teammember from './Teammember';
import KristineImg from '../../images/member-kristine.png'
import MarkImg from '../../images/member-mark.png'
import KimberlyImg from '../../images/member-kimberly.png'
import JustinImg from '../../images/member-justin.png'

const Meetourteam = () => {
  return (
    <section className="our-team-section">
        <div className="container">
            <div className="top-row">
                <SectionTitle paragraph="Meet Our Team" header="Experience Team Members" />
                <div className="browse-team">
                    <Button type="transparent" title="Browse Team" url="/ourteam" />
                </div>
            </div>
            <div className="team-members">
                <div className="members-first">
                    <Teammember name="Kristine Palmer" text="Chef Operation Officer" image={KristineImg} url="/member/kristine" alt="Image of Kristine Palmer" />
                    <Teammember name="Mark Aubri" text="Senior Consultant" image={MarkImg} url="/member/mark" alt="Image of Mark Aubri" />
                </div>
                <div className="members-second">
                    <Teammember name="Kimberly Hansen" text="Senior Consultant" image={KimberlyImg} url="/member/kimberly" alt="Image of Kimberly Hansen" />
                    <Teammember name="Justin Willoman" text="Senior Tech Consultant" image={JustinImg} url="/member/justin" alt="Image of Justin Willoman" />
                </div>
            </div>
            <div className="btn-multiple-dots">
                <ButtonDots />
                <ButtonDots type="dark" />
                <ButtonDots />
                <ButtonDots />
                <ButtonDots />
            </div>
        </div>
    </section>
  )
}

export default Meetourteam