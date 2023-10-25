import React from 'react';
import bkgWhitelines from '../../images/showcase-whitelines.svg';
import showcaseImg from '../../images/showcase-image.svg';
import Button from '../generics/Button';

const Showcase = () => {
  return (
    <section className="showcase-section">
      <img className="bkg-lines" src={bkgWhitelines} alt="Background lines" />
      <div className="container">
        <div className="content">
          <h1>We Provide The Best Business Solutions</h1>
          <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
          <Button type="yellow" title="Get Consulting" url="/consulting" />
          <Button type="transparent" title="Learn More" url="/learn-more" />
        </div>
        <img src={showcaseImg} alt="Image of a man in a suit with a tablet" />
      </div>
    </section>
  )
};

export default Showcase