import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Backgroun from './deskmain/Home';
import Nann from './deskmain/Nann';
import ProductPage from './deskmain/ProductPage';
import AboutPage from './deskmain/AboutPage';
import Service from './deskmain/Service';
import ContactPage from './deskmain/ContactPage';
import Footer from './deskmain/Footer';
import MoreAboutUs from './deskmain/MoreAboutUs';
import ProductDetail from './deskmain/ProductDetail';
import Customer from './deskmain/Customer';

// import CartDetails from './deskmain/CartDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <ConditionalComponents />
        <Routes>
          <Route path="/" element={<>
            <AboutPage />
          
            <Service />
            <Customer/>
            <ProductPage />
            <ContactPage />
            <Footer/>
          </>} />
          <Route path="/more-about-us" element={<MoreAboutUs />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

const ConditionalComponents = () => {
  const location = useLocation();
  const isProductDetailPage = location.pathname.startsWith('/product/');

  if (isProductDetailPage) {
    return null;
  }

  return (
    <>
      <Nann />
     <Backgroun />
    </>
  );
};

export default App;
