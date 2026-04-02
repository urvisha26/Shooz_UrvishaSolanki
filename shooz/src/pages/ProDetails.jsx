import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProDetails.css';

const products = [
  {
    id: 1,
    name: "Classic White Tennis Sneakers",
    brand: "SportyFeet",
    price: 25.00,
    images: ["/img/sec3-1.webp", "/img/sec3-2.webp", "/img/sec3-3.webp"],
    desc: "Comfortable everyday sneakers with a clean look."
  },
  {
    id: 2,
    name: "Waterproof Hiking Boots",
    brand: "TrailGear",
    price: 25.00,
    images: ["/img/sec3-2.webp", "/img/sec3-1.webp"],
    desc: "Perfect for outdoor adventures in all weather."
  },
  {
    id: 3,
    name: "Classic Leather Sneakers",
    brand: "UrbanStep",
    price: 21.00,
    images: ["/img/sec3-3.webp", "/img/sec3-1.webp"],
    desc: "Stylish leather sneakers for casual wear."
  },
  {
    id: 4,
    name: "High-Top Canvas Sneakers",
    brand: "TrendyFeet",
    price: 25.00,
    images: ["/img/sec3-4.webp", "/img/sec3-2.webp"],
    desc: "Trendy high-tops with durable canvas material."
  },
];

function ProDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [activeTab, setActiveTab] = useState('Description');

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="prodetails-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      {/* TOP SECTION: MAIN PRODUCT INFO */}
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

      {/* BOTTOM SECTION: TABS & RELATED PRODUCTS */}
      <div className="info-tabs-wrapper">
        <div className="info-tabs-grid">
          
          {/* Left: Tabbed Content */}
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
                    <> <p> Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada.</p>
                             <p> Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. </p></>
               
              )}
              {activeTab === 'Material' && <p>Linen blend, durable rubber sole, and high-quality canvas.</p>}
              {activeTab === 'Reviews' && <p>Customer reviews will appear here.</p>}
            </div>
          </div>

          {/* Right: Related Products */}
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
    </div>
  );
}

export default ProDetails;