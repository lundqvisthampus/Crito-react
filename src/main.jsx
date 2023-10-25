import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/views/Home';
import Contact from './assets/views/Contact';
import News from './assets/views/News';
import NewsDetails from './assets/views/NewsDetails';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news' element={<News />} />
        <Route path='/newsdetails' element={<NewsDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)