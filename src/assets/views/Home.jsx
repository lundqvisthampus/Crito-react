import React from 'react';
import Header from '../components/header/Header.jsx';
import Showcase from '../components/showcase/Showcase.jsx';
import Brands from '../components/brands/Brands.jsx'
import Features from '../components/features/Features.jsx';
import AboutCompany from '../components/aboutcompany/AboutCompany.jsx';
import Ourservices from '../components/ourservices/Ourservices.jsx';
import Whychooseus from '../components/whychooseus/Whychooseus.jsx';
import ProjectAndCaseStudies from '../components/projectcasestudies/ProjectAndCaseStudies.jsx';

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
      </main>
    </div>
  )
}

export default Home