import React from 'react';
import './Shop.css';

function Shop() {
  return (
    <div className='S-container'>
      {/* Header Section */}
      <div className='s-top'>
        <img src="https://qx-shooz.myshopify.com/cdn/shop/files/col-2.png?v=1731657939&width=1944" alt="" className='s-img1'/>
        <h2 className='S-top-h2'>Products</h2>
      </div>

      {/* Categories Horizontal Row */}
      <div className='S-text'>
        <p>Athletic Footwear (8)</p>
        <p>Boots for Every Occasion (8)</p>  
        <p>Luxury Leather Shoes (8)</p>
        <p>Sandals & Slides (8) </p> 
        <p>Sneakerhead's Haven (10)</p>
      </div>

      <div className='s-img-grid'>
        <div className='s-card'><img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=360" alt="" /><p className='s-p'>Athletic Footwear</p></div>
        <div className='s-card'><img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=360" alt="" /><p className='s-p'>Boots</p></div>
        <div className='s-card'><img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=360" alt="" /><p className='s-p'>Luxury Leather</p></div>
        <div className='s-card'><img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=360" alt="" /><p className='s-p'>Sandals</p></div>
        <div className='s-card'><img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-3.png?v=1731657979&width=360" alt="" /><p className='s-p'>Sneakers</p></div>
      </div>

      {/* Main Layout: Sidebar + Product Grid */}
      <div className="shop-main-content">
        <aside className="filter-sidebar">
          <div className="filter-section">
             <h2>Filter</h2>
            <h3>collection</h3>
            <p>Athletic Footwear (8)</p>
            <p>Boots for Every Occasion (8)</p>
            <p>Luxury Leather Shoes (8)</p>
            <p>Sandals & Slides (8)</p>
            <p>Sneakerhead's Haven (10)</p>
          </div>
          <div className="filter-section">
            <h3>Availability</h3>
            <label><input type="checkbox" /> In stock (15)</label>
            <label><input type="checkbox" /> Out of stock (10)</label>
          </div>
          
          <div className="filter-section">
            <h3>Price</h3>
            <div className="price-input-group">
               <span>$</span><input type="number" placeholder="0" />
               <span>to $</span><input type="number" placeholder="25.00" />
            </div>
          </div>
          <div className="filter-section">
            <h3>Brand</h3>
            <label><input type="checkbox" /> AirWalk (1)</label>
            <label><input type="checkbox" /> BoldWalks (1)</label>
            <label><input type="checkbox" /> ComfortCreek (1)</label>
            <label><input type="checkbox" /> Cozysteps (1)</label>
            <label><input type="checkbox" /> Ecostride (1)</label>
            <label><input type="checkbox" /> GlamStep (1)</label>
            <label><input type="checkbox" /> LuxeFeet (1)</label>
            <label><input type="checkbox" /> ProSteps (1)</label>
            <label><input type="checkbox" /> RetroSole (1)</label>
            <label><input type="checkbox" /> SimplyShoes (1)</label>
            <label><input type="checkbox" /> SportyFeet (1)</label>
            <label><input type="checkbox" /> SprintMax (1)</label>
          </div>
           <div className="filter-section">
            <h3>Category</h3>
            <label><input type="checkbox" /> Fragrance Oil (2)</label>
            <label><input type="checkbox" /> Hair Care (1)</label>
            <label><input type="checkbox" /> Makeup (6)</label>
            <label><input type="checkbox" /> Nail Care (1)</label>
            <label><input type="checkbox" /> skin Care (6)</label>
          </div>
          <div className="filter-section">
            <h3>Color</h3>
            <div className="color-swatch-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
              {['black', '#4A7BFF', '#5D1D1D', '#C39A75', '#A53E2E', '#3D5058', '#FF00FF', '#9B9B9B', '#D0021B', '#E5E0D4', '#FFB927', '#4A2337'].map((color, index) => (
                <div 
                  key={index} 
                  style={{ 
                    width: '30px', 
                    height: '30px', 
                    backgroundColor: color, 
                    borderRadius: '50%', 
                    cursor: 'pointer',
                    border: '1px solid #ddd' 
                  }} 
                />
              ))}
            </div>
            <p style={{ textDecoration: 'underline', cursor: 'pointer', fontSize: '14px', marginTop: '15px', color: '#666' }}>
              + Show more
            </p>
          </div>
          <div className="filter-section">
            <h3>More filters</h3>
            <label><input type="checkbox" />Block Heel (1)</label>
            <label><input type="checkbox" /> Breathable (1)</label>
            <label><input type="checkbox" /> Canvas (1)</label>
            <label><input type="checkbox" /> Casual (3)</label>
            <label><input type="checkbox" /> Chelsea (1)</label>
            <label><input type="checkbox" /> Chunky (1)</label>
            <label><input type="checkbox" /> Classic (2)</label>
            <label><input type="checkbox" />Comfort (3)</label>
            <label><input type="checkbox" /> Cushioned (1)</label>
            <label><input type="checkbox" />Durable (1)</label>
            <label><input type="checkbox" /> Eco-Friendly (1)</label>        

          </div>
          <div className="filter-section">
            <h3>Size</h3>
            <div className="size-options" style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              {['S', 'M', 'L'].map((size) => (
                <div 
                  key={size} 
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    border: '1px solid #ddd', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
            <div className="filter-section">
            <h3>More filters</h3>
            <label><input type="checkbox" />Boots (1)</label>
            <label><input type="checkbox" /> Heels (1)</label>
            <label><input type="checkbox" /> Hiking Boots (1)</label>
            <label><input type="checkbox" /> Loafers(3)</label>
            <label><input type="checkbox" /> Moccasins (1)</label>
            <label><input type="checkbox" /> Pumps (1)</label>
            <label><input type="checkbox" /> Running Shoes (2)</label>
            <label><input type="checkbox" />Sandals (3)</label>
            <label><input type="checkbox" /> Slip-Ons (1)</label>
            <label><input type="checkbox" />Slippers (1)</label>
            <label><input type="checkbox" /> Sneakers (1)</label>        

          </div>
        </aside>

        <div className="product-listing">
          {/* Product Item 1 */}
          <div className="product-item">
            <div className="product-img-wrapper">
               <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946&width=540" alt="" />
               <div className="product-actions-overlay">
                  <div className="side-icons">
                    <button className="icon-btn">❤</button>
                    <button className="icon-btn">👁</button>
                  </div>
                  <button className="add-to-cart">ADD TO CART</button>
               </div>
            </div>
            <p className="brand-name">AirWalk</p>
            <h4>Classic White Sneakers</h4>
            <p className="price">$25.00</p>
          </div>

          {/* Product Item 2 */}
          <div className="product-item">
            <div className="product-img-wrapper">
               <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540" alt="" />
               <div className="product-actions-overlay">
                  <div className="side-icons">
                    <button className="icon-btn">❤</button>
                    <button className="icon-btn">👁</button>
                  </div>
                  <button className="add-to-cart">ADD TO CART</button>
               </div>
            </div>
            <p className="brand-name">BoldWalks</p>
            <h4>Chunky Platform Sandals</h4>
            <p className="price">$15.00</p>
          </div>

          {/* Product Item 3 */}
          <div className="product-item">
            <div className="product-img-wrapper">
               <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540" alt="" />
               <div className="product-actions-overlay">
                  <div className="side-icons">
                    <button className="icon-btn">❤</button>
                    <button className="icon-btn">👁</button>
                  </div>
                  <button className="add-to-cart">ADD TO CART</button>
               </div>
            </div>
            <p className="brand-name">BoldWalks</p>
            <h4>Chunky Platform Sandals</h4>
            <p className="price">$15.00</p>
          </div>
          
           {/* Product Item 4 */}
           <div className="product-item">
            <div className="product-img-wrapper">
               <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540" alt="" />
               <div className="product-actions-overlay">
                  <div className="side-icons">
                    <button className="icon-btn">❤</button>
                    <button className="icon-btn">👁</button>
                  </div>
                  <button className="add-to-cart">ADD TO CART</button>
               </div>
            </div>
            <p className="brand-name">BoldWalks</p>
            <h4>Chunky Platform Sandals</h4>
            <p className="price">$15.00</p>
          </div>

          {/* Product Item 5 */}
          <div className="product-item">
            <div className="product-img-wrapper">
               <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540" alt="" />
               <div className="product-actions-overlay">
                  <div className="side-icons">
                    <button className="icon-btn">❤</button>
                    <button className="icon-btn">👁</button>
                  </div>
                  <button className="add-to-cart">ADD TO CART</button>
               </div>
            </div>
            <p className="brand-name">BoldWalks</p>
            <h4>Chunky Platform Sandals</h4>
            <p className="price">$15.00</p>
          </div>

          {/* Product Item 6 */}
          <div className="product-item">
            <div className="product-img-wrapper">
               <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540" alt="" />
               <div className="product-actions-overlay">
                  <div className="side-icons">
                    <button className="icon-btn">❤</button>
                    <button className="icon-btn">👁</button>
                  </div>
                  <button className="add-to-cart">ADD TO CART</button>
               </div>
            </div>
            <p className="brand-name">BoldWalks</p>
            <h4>Chunky Platform Sandals</h4>
            <p className="price">$15.00</p>
          </div>

          {/* Product Item 7 */}
          <div className="product-item">
            <div className="product-img-wrapper">
               <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540" alt="" />
               <div className="product-actions-overlay">
                  <div className="side-icons">
                    <button className="icon-btn">❤</button>
                    <button className="icon-btn">👁</button>
                  </div>
                  <button className="add-to-cart">ADD TO CART</button>
               </div>
            </div>
            <p className="brand-name">BoldWalks</p>
            <h4>Chunky Platform Sandals</h4>
            <p className="price">$15.00</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Shop;