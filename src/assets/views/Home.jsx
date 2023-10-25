import React from 'react';
import Header from '../components/header/Header.jsx';
import Showcase from '../components/showcase/Showcase.jsx';

const Home = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Showcase />
      </main>
    </div>
  )
}

export default Home