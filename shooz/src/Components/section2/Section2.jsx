import React from 'react'
import './Section2.css'
const data=[
    {
        id:1,
        tag:"TRENDING",
        title:"Men Collection",
        Image:"/img/sec2-1.webp",
    },
        {
        id:2,
        tag:"LATEST",
        title:"Women Collection",
        Image:"/img/sec2-2.webp",
    },
        {
        id:3,
        tag:"COMFORT",
        title:"Kid Collection",
        Image:"/img/sec2-3.webp",
    },
]

function Section2() {
  return (
    <div className='sec2-container'>
        <div className='sec2-wrapper'>
            {data.map((item)=>(
                <div 
                    key={item.id}
                    className='sec2-card'
                >
                    <div className='sec2-content'>
                        <p className='sec2-tag'>{item.tag}</p>
                        <h2 className='sec2-title'>{item.title}</h2>
                        <button className='sec2-btn'>SHOP NOW</button> 

                    </div>
                    <div className='sec2-image'>
                        <img src={item.Image} alt="" />

                    </div>
                </div>
            )
            
        )}
        </div>
      
    </div>
  )
}

export default Section2
