import React from 'react'
import paperzLogo from '../../../images/paperz-logo.svg'
import dorfusLogo from '../../../images/dorfus-logo.svg'
import martinoLogo from '../../../images/martino-logo.svg'
import squareLogo from '../../../images/square-logo.svg'
import gobonaLogo from '../../../images/gobona-logo.svg'

const Brands = () => {

  const logotypes = [
    { src: paperzLogo, alt: "Paperz company logotype" },
    { src: dorfusLogo, alt: "Dorfus company logotype" },
    { src: martinoLogo, alt: "Martino company logotype" },
    { src: squareLogo, alt: "Square company logotype" },
    { src: gobonaLogo, alt: "Gobona company logotype" }
  ];

  const brandsList = logotypes.map((logotype, index) => (
    <img key={index} src={logotype.src} alt={logotype.alt} />
  ));


  return (
    <section className="brands-section">
      <div className="container">
        <div className="brands">
          {brandsList}
        </div>
      </div>
    </section>
  )
}

export default Brands