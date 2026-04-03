import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProDetails.css';

const products = [
  {
    id: 1,
    name: "Classic White Tennis Sneakers",
    brand: "SportyFeet",
    price: 25.0,
    images: ["/img/sec3-1.webp", "/img/sec3-2.webp", "/img/sec3-3.webp"],
    desc: "Comfortable everyday sneakers with a clean look."
  },
  {
    id: 2,
    name: "Waterproof Hiking Boots",
    brand: "TrailGear",
    price: 25.0,
    images: ["/img/sec3-2.webp", "/img/sec3-1.webp"],
    desc: "Perfect for outdoor adventures in all weather."
  },
  {
    id: 3,
    name: "Classic Leather Sneakers",
    brand: "UrbanStep",
    price: 21.0,
    images: ["/img/sec3-3.webp", "/img/sec3-1.webp"],
    desc: "Stylish leather sneakers for casual wear."
  },
  {
    id: 4,
    name: "High-Top Canvas Sneakers",
    brand: "TrendyFeet",
    price: 25.0,
    images: ["/img/sec3-4.webp", "/img/sec3-2.webp"],
    desc: "Trendy high-tops with durable canvas material."
  },
];

const faqData = [
  {
    question: "Is the shipping free?",
    answer: "Yes, we offer free shipping on all orders over $100."
  },
  {
    question: "When will I receive my item?",
    answer: "Standard shipping takes 3-5 business days depending on your location."
  },
  {
    question: "Can I change or return my item?",
    answer: "We offer a 30-day easy return policy for all unused items."
  }
];

function ProDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [activeTab, setActiveTab] = useState('Description');
  const [activeFaq, setActiveFaq] = useState(null);

  if (!product) return <h2>Product not found</h2>;

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="prodetails-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      {/* 1. MAIN PRODUCT INFO */}
      <div className="prodetails-grid">
        <div className="pro-left">
          <div className="main-image">
            <img src={selectedImage} alt={product.name} />
          </div>
          <div className="thumbnail-row">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className={selectedImage === img ? "active-thumb" : ""}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="pro-right">
          <h1>{product.name}</h1>
          <p className="brand">{product.brand}</p>
          <h2 className="price">${product.price.toFixed(2)}</h2>
          <hr />
          <div className="size-section">
            <p>Size: {selectedSize}</p>
            <div className="sizes">
              {["S", "M", "L"].map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? "active" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="purchase-wrapper">
            <div className="qty-section">
              <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <div className="action-buttons">
              <button className="add-cart">ADD TO CART</button>
              <button className="buy-now">BUY IT NOW</button>
            </div>
          </div>

          <div className="extra-links">
            <span>♡ Go to Wishlist</span>
            <span>⇄ Compare</span>
          </div>
          <hr />
          <div className="product-info">
            <p><strong>Vendor:</strong> {product.brand}</p>
            <p><strong>Type:</strong> Sneakers</p>
            <p><strong>Availability:</strong> In Stock</p>
          </div>
          <hr />
          
          <div className="accordion">
            <details>
              <summary>Shipping Information</summary>
              <p>Free shipping on orders above $50</p>
            </details>
            <details>
              <summary>Care Guide</summary>
              <p>Wipe with clean cloth. Do not machine wash.</p>
            </details>
          </div>

          <div className="trust-badges-section">
            <ul className="trust-list">
              <li><span className="icon">🍃</span> 55% Linen, 45% Rayon</li>
              <li><span className="icon">🔒</span> Secure payment</li>
              <li><span className="icon">🛡️</span> 2 Year Warranty</li>
            </ul>
            <div className="live-stats">
              <p>👀 <span className="highlight">19</span> viewing</p>
              <p>🔥 <span className="highlight">30</span> SOLD IN 18H</p>
            </div>
            <div className="shipping-spend">
              <p>📦 Spend $850.00 for Free Shipping</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="social-share">
              <img src="/img/f.png" alt="" />
            </div>
            <div className="safe-checkout-box">
              <span className="checkout-title">Guarantee safe checkout</span>
              <div className="payment-icons">
                <img src="/img/cards.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TABS & RELATED PRODUCTS */}
      <div className="info-tabs-wrapper">
        <div className="info-tabs-grid">
          <div className="tabs-container">
            <div className="tab-header">
              {['Description', 'Material', 'Reviews'].map((tab) => (
                <button 
                  key={tab} 
                  className={activeTab === tab ? 'active-tab' : ''}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="tab-content">
              {activeTab === 'Description' && (
                <> 
                  <p>Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing.</p>
                  <p>Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.</p>
                </>
              )}
              {activeTab === 'Material' && <p>Linen blend, durable rubber sole, and high-quality canvas.</p>}
              {activeTab === 'Reviews' && <p>Customer reviews will appear here.</p>}
            </div>
          </div>

          <div className="related-products-container">
            <h3>Related products</h3>
            <div className="related-grid">
              {products.slice(0, 2).map((item) => (
                <div key={item.id} className="related-card">
                  <div className="related-img-box">
                    <img src={item.images[0]} alt={item.name} />
                  </div>
                  <h4>{item.name}</h4>
                  <p className="rel-price">${item.price.toFixed(2)}</p>
                  <button className="rel-add">+ Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <div className="hero">
        <img src="https://qx-shooz.myshopify.com/cdn/shop/files/filler2.png?v=1731652695" alt="hero" className="hero-img" />
        <div className="hero-content">
          <p className="hero-top">EFFORTLESS FASHION, EVERY DAY</p>
          <h1 className="hero-heading">Chic Styles For The Modern Woman</h1>
          <p className="hero-description">
            Embrace effortless elegance with our curated collection of chic styles designed for the modern woman.
          </p>
        </div>
      </div>

      {/* 4. SPLIT HERO SECTION */}
      <div className="split-hero">
        <div className="split-container">
          <div className="image-section">
            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/filler3.png?v=1731652694&width=900" alt="" className="main-img" />
            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/filler4.png?v=1731652693&width=360" alt="" className="overlay-img" />
          </div>
          <div className="text-section">
            <p className="tag">CLASSIC MEETS CONTEMPORARY</p>
            <h1>Timeless Styles With A Modern Edge</h1>
            <p className="desc">Experience the best of both worlds with our collection that seamlessly blends timeless classics with modern twists.</p>
            <button className="cta-btn">DISCOVER NOW</button>
          </div>
        </div>
      </div>

      {/* 5. ICON BAR */}
      <div className='pd-icons'>
        <div className='pd-icon'>
          <img src="/img/i.png" alt="" />
          <h3>Free Shipping</h3>
          <p>From all orders over $100</p>
        </div>
        <div className='pd-icon'>
          <img src="/img/i2.png" alt="" />
          <h3>Quality Support</h3>
          <p>24/7 online feedback</p>
        </div>
        <div className='pd-icon'>
          <img src="/img/i3.png" alt="" />
          <h3>Return & Refund</h3>
          <p>Return money within 30 days</p>
        </div>
        <div className='pd-icon'>
          <img src="/img/i4.png" alt="" />
          <h3>Gift Voucher</h3>
          <p>20% off when you shop online</p>
        </div>
      </div>

      {/* 6. VIDEO HERO */}
      <div className="video-hero">
        <video autoPlay muted loop playsInline className="video-bg">
          <source src="https://cdn.shopify.com/videos/c/o/v/4625c676b883437ebb9472d75b2f720c.mp4" type="video/mp4" />
        </video>
        <div className="video-content">
          <p className="rating">★★★★★ 3000+ Reviews</p>
          <h1>For the Explorers.</h1>
          <p className="sub-text">Weekends are better with friends</p>
        </div>
      </div>

      {/* 7. FAQ SECTION */}
      <div className="faq-section">
        <div className="faq-header">
          <h2>FAQs</h2>
          <p>Have a question? We are here to help.</p>
        </div>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{item.question}</span>
                <span className="faq-icon">{activeFaq === index ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer ${activeFaq === index ? 'active' : ''}`}>
                <div className="faq-answer-inner">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 8. SALE EVENT BANNER (AT THE END) */}
      <div className="sale-event-banner">
        <div className="sale-content">
          <div className="sale-text">
            <h2>Sale Event</h2>
            <p>We've refreshed our sale with discounts of up to 50% on select styles.</p>
          </div>
          <div className="sale-timer">
           
            <button className="end-deal-btn">End Deal</button>
          </div>
          <div className="sale-action">
            <button className="shop-collection-btn">SHOP COLLECTION</button>
          </div>
        </div>
      </div>

      

    </div>
  );
}

export default ProDetails;