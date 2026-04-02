import React from 'react'
import './Section12.css'

function Section12() {
  return (
    <div className='sec12-container'>
        <div className='sec12-left'>
            <p className='sec12-p'>SUBSCRIBE TO OUR NEWS ARTICLES</p>
            
            {/* Added this wrapper to make them sit side-by-side */}
            <div className='input-group'>
                <input 
                    type='email' 
                    placeholder='Your email' 
                    className='sec12-input' 
                />
                <button className='sec12-btn'>SUBSCRIBE</button>
            </div>
        </div>

        <div className='sec12-right'>
            <img 
                src="https://qx-shooz.myshopify.com/cdn/shop/files/newslatter-image.jpg?v=1731408076&width=1920" 
                alt="Shoes Newsletter" 
            />
        </div>
    </div>
  )
}

export default Section12