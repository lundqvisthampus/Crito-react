import React from 'react';
import Header from '../components/header/Header.jsx';
import Showcase from '../components/home/showcase/Showcase.jsx'
import Brands from '../components/home/brands/Brands.jsx'
import Features from '../components/home/features/Features.jsx';
import AboutCompany from '../components/home/aboutcompany/AboutCompany.jsx';
import Ourservices from '../components/home/ourservices/Ourservices.jsx';
import Whychooseus from '../components/home/whychooseus/Whychooseus.jsx';
import ProjectAndCaseStudies from '../components/home/projectcasestudies/ProjectAndCaseStudies.jsx';
import Meetourteam from '../components/home/meetourteam/Meetourteam.jsx';
import Testimonial from '../components/home/testimonial/Testimonial.jsx';
import Articleandnews from '../components/home/articleandnews/Articleandnews.jsx';
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
        <Articleandnews type="-white" />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default Home