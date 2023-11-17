import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/views/Home';
import Contact from './assets/views/Contact';
import News from './assets/views/News';
import NewsDetails from './assets/views/NewsDetails';
import NotFound from './assets/views/NotFound';
import './index.css';
import ScrollToTop from './assets/components/ScrollToTop';
import { ArticleProvider } from './assets/contexts/ArticleContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ArticleProvider>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news' element={<News />} />
        <Route path='/newsdetails/:id' element={<NewsDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </ArticleProvider>
    </BrowserRouter>
  </React.StrictMode>
)