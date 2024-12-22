import React from 'react';
import Header from '../common/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../home/Home';
import Footer from '../common/footer/Footer';
import About from '../about/About';
import Shop from '../shop/Shop';
import Price from '../pricing/Price';
import Contact from '../contact/Contact';
import Register from '../register/Register';

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/about' Component={About} />
        <Route exact path='/shop' Component={Shop} />
        <Route exact path='/pricing' Component={Price} />
        <Route exact path='/contact' Component={Contact} />
        <Route exact path='/register' Component={Register} />

          {/* Define your routes here */}
          {/* Example: */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
