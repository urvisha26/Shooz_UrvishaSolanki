import React from 'react'
import './Section11.css'

function Section11() {
  return (
    <div className='sec11-container'>
        <div className='sec11-top'>
            <p className='sec11-tag'>FROM THE BLOG</p>
            <h1 className='sec11-title'>Recently Our Posts</h1>
            <p className='sec11-des'>Sit amet conse ctetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore <br />
            magna aliqua.</p>
        </div>
        <div className='sec11-content'>
            <div className='sec11-left'>
                <img src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-2.png?v=1731500928&width=900" alt="" />
                <div className="sec11-left-text-overlay">
            <p>Oct 28 2024 • 0 comments</p>
            <h3>The Future Of Footwear: A Look Ahead</h3>
        </div>
            </div>
            <div className='sec11-right'>
                {/* Card 1 */}
                <div className='sec11-card'>
                    <img src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-1.png?v=1731500921&width=360" alt="" />
                    <div className="sec11-card-text">
                        <p>Oct 28 2024 • 0 comments</p>
                        <h4>Eco-Friendly Footwear: Sustainable Style</h4>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='sec11-card'>
                    <img src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-6.png?v=1731500962&width=360" alt="" />
                    <div className="sec11-card-text">
                        <p>Oct 17 2024 • 0 comments</p>
                        <h4>The Ultimate Guide To Sneaker Care</h4>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='sec11-card'>
                    <img src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-5.png?v=1731500994&width=360" alt="" />
                    <div className="sec11-card-text">
                        <p>Oct 17 2024 • 0 comments</p>
                        <h4>How to Style Your Favorite Sneakers</h4>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Section11
