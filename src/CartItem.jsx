import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping, onHomeClick }) {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      const cost = parseFloat(item.cost.substring(1));
      total += item.quantity * cost;
    });
    return total.toFixed(2);
  };

  const calculateTotalQuantity = () => {
    return cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  const calculateTotalCost = (item) => {
    const cost = parseFloat(item.cost.substring(1));
    return (item.quantity * cost).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <h3 onClick={onHomeClick}>🌿 Paradise Nursery</h3>
        <div className="navbar-links">
          <button onClick={onHomeClick}>Home</button>
          <button onClick={handleContinueShopping}>Plants</button>
          <button className="cart-icon">
            🛒 Cart
            {calculateTotalQuantity() > 0 && (
              <span className="cart-count">{calculateTotalQuantity()}</span>
            )}
          </button>
        </div>
      </div>

      {/* Cart Content */}
      <div className="cart-container">
        <h2>🛒 Shopping Cart</h2>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Looks like you haven't added any plants yet!</p>
            <button
              className="get-started-btn"
              onClick={handleContinueShopping}
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Total */}
            <div className="cart-total">
              <h3>Total Items: {calculateTotalQuantity()}</h3>
              <div className="cart-total-amount">${calculateTotalAmount()}</div>
            </div>

            {/* Cart Items */}
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Unit Price: {item.cost}</p>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span className="cart-item-quantity">{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
                <div className="cart-item-subtotal">
                  ${calculateTotalCost(item)}
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleRemove(item)}
                >
                  🗑️
                </button>
              </div>
            ))}

            {/* Cart Buttons */}
            <div className="cart-buttons">
              <button
                className="continue-shopping-btn"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
              <button
                className="checkout-btn"
                onClick={handleCheckoutShopping}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
