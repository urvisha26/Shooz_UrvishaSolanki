import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to trigger the cart opening event
  const openCart = () => {
    const event = new Event('openCartSideBar');
    window.dispatchEvent(event);
  };

  return (
    <>
      <div className='nav-topbar'>
        <div className='nav-left'>One Day Delivery Available</div>

        <div className='nav-right'>
          <span>Login / Register</span>
          <span><img src="/img/facebook.png" alt="" /></span>
          <span><img src="/img/twitter.png" alt="" /></span> 
          <span><img src="/img/instagram.png" alt="" /></span>
        </div>
      </div>

      <header className='main-navbar'>
        <div className='nav-logo'>
          <img src="/img/logo.webp" alt="" />
        </div>

        {/* Burger Icon */}
        <div 
          className={`burger ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Menu */}
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li className='nav-active'>Home</li>

            <li className='shop-nav-dropdown'>
              <span>Shop ▾</span>

              <div className='shop-dropdown-menu'>
                <div className='shop-dropdown-container'>

                  <div className='shop-dropdown-column'>
                    <h4>Layout</h4>
                    <Link to="/Shop"><p>1.Filter Sidebar</p></Link>
                    <p>2. Filter Top</p>
                    <p>3. Filter Drawer</p>
                    <p>4. Without Filter</p>
                    <p>5. Collection - 2 columns</p>
                    <p>6. Collection - 3 columns</p>
                    <p>7. Collection - 4 columns</p>
                  </div>

                  <div className='shop-dropdown-column'>
                    <h4>Features</h4>
                    <p>Banner Image</p>
                    <p>Banner No Image</p>
                    <p>Collection List</p>
                    <p>Sub Collection</p>
                    <p>Pagination</p>
                    <p>Infinity</p>
                    <p>Load More</p>
                  </div>

                  <div className='shop-dropdown-column'>
                    <h4>Hover Style</h4>
                    <p>Hover Style 1</p>
                    <p>Hover Style 2</p>
                    <p>Hover Style 3</p>
                    <p>Hover Style 4</p>
                    <p>Hover Style 5</p>
                    <p>Hover Style 6</p>
                    <p>Hover Style 7</p>
                    <p>Hover Style 8</p>
                  </div>

                  <div className='shop-dropdown-images'>
                    <div className='shop-img-box'>
                      <img src="/img/shop1.webp" alt="" />
                      <p>Athletic Footwear</p>
                      <span>8 products</span>
                    </div>

                    <div className='shop-img-box'>
                      <img src="/img/shop2.webp" alt="" />
                      <p>Boots for Every Occasion</p>
                      <span>8 products</span>
                    </div>
                  </div>

                </div>
              </div>
            </li>

            <li className='product-nav-dropdown'>
              <span>Product ▾</span>

              <div className='product-dropdown-menu'>
                <div className='product-dropdown-container'>

                  <div className='product-dropdown-column'>
                    <h4>Product Layout</h4>
                    <p>1. Thumbnails - bottom</p>
                    <p>2. Thumbnails - left</p>
                    <p>3. Thumbnails - right</p>
                    <p>4. Without Thumbnails</p>
                    <p>5. List - stacked</p>
                    <p>6. List - grid</p>
                    <p>7. Collage - style 1</p>
                    <p>8. Collage - style 2</p>
                  </div>

                  <div className='product-dropdown-column'>
                    <h4>Product Type</h4>
                    <p>Simple Product</p>
                    <p>Variable Produc</p>
                    <p>With Video</p>
                    <p>Sold Out - Coming</p>
                  </div>

                  <div className='product-dropdown-column'>
                    <h4>List Featured 1</h4>
                    <p>Sticky ATC</p>
                    <p>Frequently Bought Together</p>
                    <p>Count Down</p>
                    <p>Cross Selling</p>
                    <p>Upsell Popup</p>
                    <p>Low Stock Alert</p>
                    <p>Pickup Store</p>
                  </div>

                  <div className='product-dropdown-column'>
                    <h4>List Featured 2</h4>
                    <p>Dropdown Variant</p>
                    <p>Swatch Variant Color</p>
                    <p>Swatch Variant Image</p>
                    <p>Variant Image Square</p>
                    <p>Size Guide</p>
                    <p>Description Accordion</p>
                    <p>Description Tab Center</p>
                  </div>

                  <div className='product-dropdown-images'>
                    <div className='product-img-box'>
                      <img src="/img/product1.webp" alt="" />
                      <p>Athletic Footwear</p>
                    </div>
                  </div>

                </div>
              </div>
            </li>

            <li className='blog-nav-dropdown'>
              <span>Blog ▾</span>

              <div className='blog-dropdown-menu'>
                <div className='blog-dropdown-container'>

                  <div className='blog-dropdown-column'>
                    <h4>List Layout</h4>
                    <p>List Left Sidebar</p>
                    <p>List Right Sidebar</p>
                    <p>List Item Basic</p>
                    <p>List Item Overlay</p>
                    <p>List Item Box</p>
                    <p>List Item Classic</p>
                    <p>List Item Classic Box</p>
                  </div>

                  <div className='blog-dropdown-column'>
                    <h4>Grid Layout</h4>
                    <p>Grid Left Sidebar</p>
                    <p>Grid Right Sidebar</p>
                    <p>Grid Item Basic</p>
                    <p>Grid Item Overlay</p>
                    <p>Grid Item Box</p>
                    <p>Grid Item Classic</p>
                  </div>

                  <div className='blog-dropdown-column'>
                    <h4>Article</h4>
                    <p>Title in image</p>
                    <p>Title after image</p>
                    <p>Title before image</p>
                    <p>Left Sidebar</p>
                    <p>Right Sidebar</p>
                    <p>Title Center</p>
                    <p>Article Video</p>
                  </div>

                  <div className='blog-dropdown-images'>
                    <div className='blog-img-box'>
                      <img src="/img/blog1.webp" alt="" />
                      <p>Athletic Footwear</p>
                      <span>8 products</span>
                    </div>
                  </div>

                </div>
              </div>
            </li>

            <li className='pages-nav-dropdown'>
              <span>Pages ▾</span>

              <div className='pages-dropdown-menu'> 
                <div className='pages-dropdown-container'>
                  <div className='pages-dropdown-column'>
                    <p>About Us 1</p>
                    <p>About Us 2</p>
                    <p>About Us 3</p>
                    <p>Without Filter</p>
                    <p>Contact</p>
                    <p>Faqs</p>
                    <p>Lookbook</p>
                    <p>sizeguide</p>
                    <p>Wishlist</p>
                  </div>
                </div>
              </div>
            </li>

            <li className='nav-buy'>
              Buy Now <span className='nav-badge'>Sale</span>
            </li>
          </ul>
        </nav>

        <div className='nav-icon'>
          <img src="/img/search.png" alt="" />
          <img src="/img/user.png" alt="" />
          <Link to="/Wishlist">
            <img src="/img/heart.png" alt="Wishlist" style={{ cursor: 'pointer' }} />
          </Link>
          <img 
            src="/img/market.png" 
            alt="" 
            onClick={openCart} 
            style={{ cursor: 'pointer' }} 
          />
        </div>
      </header>
    </>
  )
}

export default Navbar