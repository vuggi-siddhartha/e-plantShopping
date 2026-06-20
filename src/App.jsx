import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
    setShowCart(false);
    setShowAbout(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowProductList(false);
    setShowAbout(false);
  };

  const handlePlantsClick = () => {
    setShowProductList(true);
    setShowCart(false);
    setShowAbout(false);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
    setShowAbout(false);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowProductList(false);
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setShowCart(false);
    setShowProductList(true);
    setShowAbout(false);
  };

  return (
    <div className="app-container">
      {!showProductList && !showCart && !showAbout ? (
        // Landing Page
        <div className="landing-page">
          <div className="landing-content">
            <h1 className="landing-title">Paradise Nursery</h1>
            <p className="landing-subtitle">Where Green Meets Serenity</p>
            <div className="landing-description">
              <p>
                Welcome to Paradise Nursery, your one-stop destination for beautiful houseplants.
                We offer a wide variety of plants that bring life, color, and fresh air into your home.
                Whether you're a seasoned plant parent or just starting your green journey,
                we have the perfect plant waiting for you.
              </p>
            </div>
            <button className="get-started-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      ) : showAbout ? (
        <AboutUs
          onHomeClick={handleHomeClick}
          onPlantsClick={handlePlantsClick}
          onCartClick={handleCartClick}
        />
      ) : showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} onHomeClick={handleHomeClick} />
      ) : (
        <ProductList
          onHomeClick={handleHomeClick}
          onCartClick={handleCartClick}
          onAboutClick={handleAboutClick}
        />
      )}
    </div>
  );
}

export default App;
