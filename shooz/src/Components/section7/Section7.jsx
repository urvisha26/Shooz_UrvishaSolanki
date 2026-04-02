import React from 'react'
import './Section7.css'

const products = [
  { id: 1, name: 'Classic White Tennis Sneakers', price: '$25.00', img: '/img/1.webp' },
  { id: 2, name: 'Classic White Tennis Sneakers', price: '$25.00', img: '/img/2.webp' },
  { id: 3, name: 'Classic White Tennis Sneakers', price: '$25.00', img: '/img/3.webp' },
  { id: 4, name: 'Waterproof Hiking Boots', price: '$25.00', img: '/img/2.webp' },
  { id: 5, name: 'Waterproof Hiking Boots', price: '$25.00', img: '/img/4.avif' },
  { id: 6, name: 'Waterproof Hiking Boots', price: '$25.00', img: '/img/3.webp' },
  { id: 7, name: 'Classic Leather Sneakers', price: '$21.00', img: '/img/5.avif' },
  { id: 8, name: 'Classic Leather Sneakers', price: '$21.00', img: '/img/4.avif' },
  { id: 9, name: 'Classic Leather Sneakers', price: '$21.00', img: '/img/5.avif' },
];

function Section7() {
  return (
    <div className='sec7-container'>
        <div className="sec7-header">
        <span className="sec7-subtitle">SEASON'S END SALE</span>
        <h1 className="sec7-main-title">Huge discounts on last season’s styles</h1>
        <p className="sec7-desc">
          Himenaeos nascetur tristique consequat mus ad.<br />
          Accumsan fringilla in laoreet id bibendum et.
        </p>
      </div>
      <div className="sec7-grid">
        {products.map((item) => (
          <div key={item.id} className="sec7-item">
            <div className="sec7-img-box">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="sec7-details">
              <h3 className="sec7-name">{item.name}</h3>
              <p className="sec7-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Section7
