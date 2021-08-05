import React from 'react'
import './categoria-item.styles.scss'

const CategoriaItem = ({id, name, text, imageUrl}) => (
    <div className='collection-item'>
        <div 
        className='image'
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            {/* <span className="text">{text}</span>    */}
        </div>
    </div>
)

export default CategoriaItem;