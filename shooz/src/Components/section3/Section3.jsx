import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Section3.css';

const products = [
  { id: 1, name: "Classic White Tennis Sneakers", brand: "SportyFeet", price: 25.00, img: "/img/sec3-1.webp" },
  { id: 2, name: "Waterproof Hiking Boots", brand: "TrailGear", price: 25.00, img: "/img/sec3-2.webp" },
  { id: 3, name: "Classic Leather Sneakers", brand: "UrbanStep", price: 21.00, img: "/img/sec3-3.webp" },
  { id: 4, name: "High-Top Canvas Sneakers", brand: "TrendyFeet", price: 25.00, img: "/img/sec3-4.webp" },
];

function Section3() {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('userWishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();

  // ✅ NAVIGATE TO PRODUCT DETAILS
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  // ✅ LOAD CART
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // SAVE wishlist
  useEffect(() => {
    localStorage.setItem('userWishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    const handleOpenCart = () => setIsOpen(true);
    window.addEventListener('openCartSideBar', handleOpenCart);
    return () => {
      window.removeEventListener('openCartSideBar', handleOpenCart);
    };
  }, []);

  const handleWishlistClick = (e, product) => {
    e.stopPropagation(); // ✅ prevent navigation

    const isAlreadyInWishlist = wishlist.find((item) => item.id === product.id);

    if (isAlreadyInWishlist) {
      navigate('/Wishlist');
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // ✅ ADD TO CART
  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // ✅ prevent navigation

    let updatedCart;

    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setIsOpen(true);
  };

  const handleDecreaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingThreshold = 975;
  const progressPercentage = Math.min((subtotal / shippingThreshold) * 100, 100);

  return (
    <section className="sec3-container">
      <div className={`cart-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>

      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <span className="cart-title">Cart ({cart.length})</span>
          <button className="cart-close-btn" onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <div className="cart-shipping-notice">
          <p>
            {subtotal >= shippingThreshold 
              ? "🎉 You've earned Free Shipping!" 
              : `📦 Spend $${(shippingThreshold - subtotal).toFixed(2)} more for Free Shipping`}
          </p>
          <div className="cart-progress-bar">
            <div className="cart-progress-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>

        <div className="cart-items-container">
          {cart.map((item) => (
            <div className="cart-item-row" key={item.id}>
              <div className="cart-item-img">
                <img src={item.img} alt={item.name} />
              </div>

              <div className="cart-item-info">
                <h4>{item.name} - S</h4>
                <p className="cart-item-price-qty">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>

                <div className="cart-qty-selector">
                  <button onClick={() => handleDecreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={(e) => handleAddToCart(e, item)}>+</button>
                </div>
              </div>

              <button
                className="cart-item-remove-text"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="cart-footer-options">
            <span>📝 Order Note</span>
            <span>🏷️ Coupon</span>
            <span>🚚 Shipping</span>
          </div>

          <div className="cart-total-row">
            <span className="total-label">Total:</span>
            <span className="total-value">${subtotal.toFixed(2)}</span>
          </div>

          <p className="cart-tax-note">Taxes and shipping calculated at checkout</p>

          <button
            className="cart-checkout-btn"
            onClick={() => {
              setIsOpen(false);
              navigate('/Checkout');
            }}
          >
            CHECK OUT
          </button>
        </div>
      </div>

      <header className="sec3-header">
        <p className="sec3-subtitle">THE LATEST TRENDS IN ATHLETIC FOOTWEAR</p>
        <h1 className="sec3-title">Sneakers & Kicks</h1>
      </header>

      <div className="sec3-grid">
        {products.map((item) => (
          <div
            key={item.id}
            className="sec3-card"
            onClick={() => handleProductClick(item.id)}
            style={{ cursor: "pointer" }}
          >
            <div className="sec3-image-wrapper">
              <img src={item.img} alt={item.name} className="sec3-img" />
            </div>

            <div className="sec3-details">
              <span className="sec3-price">${item.price.toFixed(2)}</span>
              <h3 className="sec3-product-name">{item.name}</h3>
              <p className="sec3-brand">{item.brand}</p>
            </div>

            <div className="sec3-hover-overlay">
              <div className="sec3-divider"></div>

              <div className="sec3-actions">
                <button
                  className="sec3-add-cart"
                  onClick={(e) => handleAddToCart(e, item)}
                >
                  🛒 ADD TO CART
                </button>

                <div className="sec3-icons">
                  <span>👁️</span>

                  <span
                    onClick={(e) => handleWishlistClick(e, item)}
                    style={{
                      cursor: 'pointer',
                      color: wishlist.some(i => i.id === item.id) ? 'red' : 'inherit',
                      fontSize: '20px'
                    }}
                  >
                    {wishlist.some(i => i.id === item.id) ? '❤︎' : '♡'}
                  </span>

                  <span>⇅</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section3;