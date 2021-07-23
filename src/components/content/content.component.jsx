import React from 'react'
import CATEGORIAS_DATA from '../pages/homepage/categorias-data';
import Categoria from '../categoria-preview/categoria-preview.component';
import './content.styles.scss'

class Content extends React.Component {
    constructor(props){ 
        super(props);

        this.state = {
            collections: CATEGORIAS_DATA
        }
    }

    render() {
        const {collections} = this.state;

        return(
        <div className='content'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <Categoria key={id} {...otherCollectionProps}/>
                    
                ))
            }
        </div>)
        
    }
}

export default Content;