import React from 'react'
import './categoria-preview.styles.scss'
import CategoriaItem from '../categoria-item/categoria-item.component';

const Categoria = ({title, items})  => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item, idx) => idx < 3)
                .map(({id, ...otherItemProps}) => (
                    <CategoriaItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)

export default Categoria;