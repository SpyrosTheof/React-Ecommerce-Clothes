import React from 'react';
import './collection-item.scss';

const CollectionItem =({name,price,imageUrl})=>(

    <div className="collection-item">
        <div className='collection-image'>
            <div
            className='image'
            style={{backgroundImage:`url(${imageUrl})`}}
            />
            <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='name'>{price}</span>
            </div>
        </div>
    </div>

)

export default CollectionItem;