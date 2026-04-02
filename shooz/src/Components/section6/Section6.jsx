import React from 'react'
import './Section6.css'

function Section6() {
  return (
    <div className='sec6-container'>
         <div className='sec6-top'>
            <p className='sec6-tag1'>FASHION SNEAKERS</p>
            <h1 className='sec6-title1'>Timeless styles for everyday wear</h1>
            <p className='sec6-p1'>High-performance footwear for sports and <br /> workouts</p>
        </div>
        <div className="sec6-wrapper">
      <div className="sec6-grid">
        
        {/* Top Row - 3 Items */}
        <div className="sec6-card">
          <img src="/img/sec6-1.webp" className="sec6-img" alt="Shoes" />
          <div className="sec6-overlay">
            <p className="sec6-tag">COMFORT MEETS FASHION</p>
            <h2 className="sec6-title">Discover shoes that look great</h2>
            <a href="#" className="sec6-btn">SHOP NOW</a>
          </div>
        </div>

        <div className="sec6-card">
          <img src="/img/sec6-2.webp" className="sec6-img" alt="Shoes" />
          <div className="sec6-overlay">
            <p className="sec6-tag">ELEVATE YOUR LOOK</p>
            <h2 className="sec6-title">Find the perfect pair of shoes</h2>
            <a href="#" className="sec6-btn">SHOP NOW</a>
          </div>
        </div>

        <div className="sec6-card">
          <img src="/img/sec6-3.webp" className="sec6-img" alt="Shoes" />
          <div className="sec6-overlay">
            <p className="sec6-tag">STEP INTO STYLE</p>
            <h2 className="sec6-title">The latest trends in footwear</h2>
            <a href="#" className="sec6-btn">SHOP NOW</a>
          </div>
        </div>

        {/* Bottom Row - 2 Items (Spanning columns) */}
        <div className="sec6-card-wide">
          <img src="/img/sec6-4.webp" className="sec6-img" alt="Shoes" />
          <div className="sec6-overlay">
            <p className="sec6-tag">SHOP BY BRAND</p>
            <h2 className="sec6-title">Find your favorite brands and styles</h2>
            <a href="#" className="sec6-btn">SHOP NOW</a>
          </div>
        </div>

        <div className="sec6-card-wide">
          <img src="/img/sec6-5.webp" className="sec6-img" alt="Shoes" />
          <div className="sec6-overlay">
            <p className="sec6-tag">SALE AND CLEARANCE</p>
            <h2 className="sec6-title">Shop our latest deals and discounts</h2>
            <a href="#" className="sec6-btn">SHOP NOW</a>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Section6
