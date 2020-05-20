import React from 'react'
import './menu-item.scss'
const MenuItem=({title,image})=>(

    <div style={{backgroundImage:`url(${image})`}} className='menu-item'>
    <div className='content'>
      <div className='title'>{title}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem;