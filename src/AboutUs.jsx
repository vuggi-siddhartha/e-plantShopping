import React from 'react';
import { useSelector } from 'react-redux';

function AboutUs({ onHomeClick, onPlantsClick, onCartClick }) {
  const cartItems = useSelector(state => state.cart.items);

  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <h3 onClick={onHomeClick}>🌿 Paradise Nursery</h3>
        <div className="navbar-links">
          <button onClick={onHomeClick}>Home</button>
          <button onClick={onPlantsClick}>Plants</button>
          <button className="cart-icon" onClick={onCartClick}>
            🛒 Cart
            {calculateTotalQuantity() > 0 && (
              <span className="cart-count">{calculateTotalQuantity()}</span>
            )}
          </button>
        </div>
      </div>

      {/* About Us Content */}
      <div className="about-us-container">
        <h1>About Paradise Nursery</h1>
        <div className="about-us-content">
          <p>
            Welcome to <strong>Paradise Nursery</strong>, where green meets serenity!
            We are a passionate team of plant enthusiasts dedicated to bringing the beauty
            of nature into your home and workspace.
          </p>

          <h2>Our Story</h2>
          <p>
            Founded in 2020, Paradise Nursery began as a small family-owned garden center
            with a dream to make indoor gardening accessible to everyone. What started as a
            modest collection of houseplants has grown into a thriving online nursery serving
            plant lovers across the country.
          </p>

          <h2>Our Mission</h2>
          <p>
            At Paradise Nursery, our mission is to transform every living space into a green paradise.
            We believe that plants do more than just beautify — they purify the air, reduce stress,
            and create a sense of calm and well-being. We're committed to providing the healthiest,
            most vibrant plants along with expert care guidance so that even first-time plant parents
            can enjoy the rewards of indoor gardening.
          </p>

          <h2>Why Choose Us?</h2>
          <p>
            🌱 <strong>Premium Quality</strong> – Every plant is hand-selected and nurtured with care before reaching your doorstep.
          </p>
          <p>
            🌿 <strong>Wide Selection</strong> – From air-purifying plants to exotic tropical varieties, we offer something for every taste.
          </p>
          <p>
            🚚 <strong>Safe Delivery</strong> – Our plants are carefully packaged to arrive fresh and healthy.
          </p>
          <p>
            💚 <strong>Expert Support</strong> – Our team of horticulturists is always ready to help with plant care tips and advice.
          </p>

          <h2>Our Promise</h2>
          <p>
            Every plant that leaves Paradise Nursery is grown with love and delivered with care.
            We stand behind the quality of our plants and are dedicated to ensuring your complete
            satisfaction. Join our growing community of happy plant parents today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
