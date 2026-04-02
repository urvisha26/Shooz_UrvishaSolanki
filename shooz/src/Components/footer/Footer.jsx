import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        
        <div className="footer-col">
          <h3>INFOMATION</h3>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Returns Policy</li>
            <li>Shipping Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

       
        <div className="footer-col">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>My Account</li>
            <li>My Cart</li>
            <li>Size Chart</li>
            <li>Wishlist</li>
            <li>Gift Card</li>
          </ul>
        </div>

        
        <div className="footer-col center-col">
          <div className="footer-logo">
            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png" alt="SHOOZ" />
          </div>
          <p>T: + (08) 9055 0269</p>
          <p>E: example@example.com</p>
          <p>50 Porana Place, West Casuarinas,<br /> Western Australia, Australia.</p>
        </div>

        
        <div className="footer-col">
          <h3>CATEGORIES</h3>
          <ul>
            <li>Athletic Footwear</li>
            <li>Boots for Every Occasion</li>
            <li>Luxury Leather Shoes</li>
            <li>Sandals & Slides</li>
            <li>Sneakerhead's Haven</li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h3>SUPPORT</h3>
          <ul>
            <li>Contact Us</li>
            <li>Newsletter</li>
            <li>Gift Cards</li>
            <li>Sign In</li>
            <li>My Account</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 <span className="highlight">Shooz.</span> All rights reserved</p>
        <div className="payment-icons">
            
            <img src="/img/cards.png" alt="cards" />
        </div>
      </div>
    </footer>
  );
};

export default Footer