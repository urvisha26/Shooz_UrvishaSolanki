import React from 'react'
import './Section5.css'

function Section5() {
  return (
    <div>
        <div className='sec5-top'>
            <p className='sec5-tag'>STYLISH AND COMFORTABLE FOR EVERY SEASON</p>
            <h1 className='sec5-title'>Boots & Booties</h1>
            <p className='sec5-p'>Check out our collection of the top New Products <br /> that encourage conversion.</p>
        </div>
        <div className='sec5-container'>
            <div className='sec5-card'>
                <img src="/img/sec5-1.webp" alt="" className='sec5-img' />
                <div className="sec5-label-wrapper"><a href="#" className='sec5-label'>Athletic Footwear</a></div>
                
            </div>
            <div className='sec5-card'>
                <img src="/img/sec5-2.webp" alt="" className='sec5-img' />
                <div className="sec5-label-wrapper"><a href="#" className='sec5-label'>Luxury Leather Shoes</a></div>
                
            </div>
            <div className='sec5-card'>
                <img src="/img/sec5-3.webp" alt="" className='sec5-img' />
                <div className="sec5-label-wrapper"><a href="#" className='sec5-label'>Sustainable Footwear</a></div>
                
            </div>
            <div className='sec5-card'>
                <img src="/img/sec5-4.webp" alt="" className='sec5-img' />
                <div className="sec5-label-wrapper"><a href="#" className='sec5-label'>Sandals & Slides</a></div>
                
            </div>
            
        </div>
      
    </div>
  )
}

export default Section5
