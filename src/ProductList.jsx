import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick, onCartClick, onAboutClick }) {
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, perfect for bedrooms.",
          cost: "$15",
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12",
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes mold spores and purifies indoor air.",
          cost: "$18",
        },
        {
          name: "Boston Fern",
          image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/fern-5114339_1280.jpg",
          description: "Humidifies air naturally and removes pollutants.",
          cost: "$20",
        },
        {
          name: "Rubber Plant",
          image: "https://cdn.pixabay.com/photo/2020/02/04/08/18/rubber-tree-4817498_1280.jpg",
          description: "Large leaves absorb airborne chemicals effectively.",
          cost: "$17",
        },
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Purifies air and provides medicinal gel.",
          cost: "$14",
        },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=400&q=80",
          description: "Calming fragrance, promotes relaxation and sleep.",
          cost: "$20",
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?w=400&q=80",
          description: "Sweet-scented blooms perfect for evening gardens.",
          cost: "$18",
        },
        {
          name: "Rosemary",
          image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
          description: "Aromatic herb, great for cooking and decor.",
          cost: "$15",
        },
        {
          name: "Mint",
          image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
          description: "Fresh minty fragrance, ideal for kitchens.",
          cost: "$12",
        },
        {
          name: "Lemon Balm",
          image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/lemon-balm-4480134_1280.jpg",
          description: "Citrusy scent that repels mosquitoes naturally.",
          cost: "$14",
        },
        {
          name: "Eucalyptus",
          image: "https://cdn.pixabay.com/photo/2015/06/24/02/12/the-702964_1280.jpg",
          description: "Refreshing scent, great for shower bouquets.",
          cost: "$22",
        },
      ],
    },
    {
      category: "Tropical & Exotic Plants",
      plants: [
        {
          name: "Monstera Deliciosa",
          image: "https://cdn.pixabay.com/photo/2020/11/04/07/52/cheese-plant-5711335_1280.jpg",
          description: "Iconic split leaves, a statement piece for any room.",
          cost: "$30",
        },
        {
          name: "Fiddle Leaf Fig",
          image: "https://cdn.pixabay.com/photo/2014/06/28/14/36/ficus-378345_1280.jpg",
          description: "Large violin-shaped leaves, a designer favorite.",
          cost: "$35",
        },
        {
          name: "Bird of Paradise",
          image: "https://cdn.pixabay.com/photo/2016/11/18/15/31/bird-of-paradise-1835461_1280.jpg",
          description: "Dramatic tropical flower resembling a bird.",
          cost: "$40",
        },
        {
          name: "Pothos",
          image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
          description: "Trailing vine, virtually indestructible and beautiful.",
          cost: "$10",
        },
        {
          name: "Calathea",
          image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/leaf-482844_1280.jpg",
          description: "Stunning patterned leaves with vibrant colors.",
          cost: "$28",
        },
        {
          name: "ZZ Plant",
          image: "https://cdn.pixabay.com/photo/2019/11/11/20/21/zamioculcas-4620413_1280.jpg",
          description: "Glossy dark leaves, thrives in low light conditions.",
          cost: "$25",
        },
      ],
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

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
          <button onClick={() => {}}>Plants</button>
          <button className="cart-icon" onClick={onCartClick}>
            🛒 Cart
            {calculateTotalQuantity() > 0 && (
              <span className="cart-count">{calculateTotalQuantity()}</span>
            )}
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={index}>
            <h1>
              <div>{category.category}</div>
            </h1>
            <div className="product-list">
              {category.plants.map((plant, plantIndex) => (
                <div className="product-card" key={plantIndex}>
                  <img
                    className="product-image"
                    src={plant.image}
                    alt={plant.name}
                  />
                  <div className="product-title">{plant.name}</div>
                  <div className="product-description">{plant.description}</div>
                  <div className="product-cost">{plant.cost}</div>
                  <button
                    className="product-button"
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
