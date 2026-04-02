import React, { useState, useEffect } from 'react';
import './Wishlist.css';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // This matches the 'userWishlist' key we set in Section3
    const saved = localStorage.getItem('userWishlist');
    if (saved) {
      setWishlistItems(JSON.parse(saved));
    }
  }, []);

  const handleRemove = (id) => {
    const updated = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(updated);
    localStorage.setItem('userWishlist', JSON.stringify(updated));
  };

  return (
    <div className="wishlist-page-container">
      <h1 className="wishlist-main-title">Wishlist</h1>
      
      <div className="wishlist-items-grid">
        {wishlistItems.length === 0 ? (
          <p className="empty-message">Your wishlist is currently empty.</p>
        ) : (
          wishlistItems.map((item) => (
            <div className="wishlist-horizontal-card" key={item.id}>
              <div className="wishlist-img-box">
                <img src={item.img} alt={item.name} />
              </div>
              
              <div className="wishlist-text-content">
                <h3 className="wishlist-item-name">{item.name}</h3>
                <p className="wishlist-item-price">${item.price.toFixed(2)}</p>
                <button 
                  className="wishlist-remove-link" 
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Wishlist; // Export name must match your Route import