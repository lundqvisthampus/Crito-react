import React from 'react';
import Header from '../components/header/Header.jsx';
import Showcase from '../components/showcase/Showcase.jsx'
import Brands from '../components/brands/Brands.jsx'
import Features from '../components/features/Features.jsx';
import AboutCompany from '../components/aboutcompany/AboutCompany.jsx';
import Ourservices from '../components/ourservices/Ourservices.jsx';
import Whychooseus from '../components/whychooseus/Whychooseus.jsx';
import ProjectAndCaseStudies from '../components/projectcasestudies/ProjectAndCaseStudies.jsx';
import Meetourteam from '../components/meetourteam/Meetourteam.jsx';
import Testimonial from '../components/testimonial/Testimonial.jsx';
import Articleandnews from '../components/articleandnews/Articleandnews.jsx';
import Newsletter from '../components/newsletter/Newsletter.jsx';
import Footer from '../components/footer/Footer.jsx';

const Home = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Showcase />
        <Brands />
        <Features />
        <AboutCompany />
        <Ourservices />
        <Whychooseus />
        <ProjectAndCaseStudies />
        <Meetourteam />
        <Testimonial />
        <Articleandnews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default Home