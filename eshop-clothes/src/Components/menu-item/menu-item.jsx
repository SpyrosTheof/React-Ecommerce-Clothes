import React from 'react'
import './menu-item.scss'
const MenuItem=({title,image,size})=>(

    <div className={`menu-item ${size}`}>
      <div
      className='background-image'
      style={{
        backgroundImage: `url(${image})`
      }}
    />
    <div className='content'>
      <div className='title'>{title.toUpperCase()}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem;