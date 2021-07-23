import React from 'react'
import CATEGORIAS_DATA from '../homepage/categorias-data';
import Categoria from '../../categoria-preview/categoria-preview.component';
import Navbar from '../../navbar/Navbar';
import './contentpage.styles.scss';

class ContentPage extends React.Component {
    constructor(props){ 
        super(props);

        this.state = {
            collections: CATEGORIAS_DATA
        }
    }

    render() {
        const {collections} = this.state;

        return(
            <>
                <Navbar />

                <div className='content-page'>

                    {
                        collections.map(({id, ...otherCollectionProps}) => (
                            <Categoria key={id} {...otherCollectionProps}/>
                            
                        ))
                    }
                </div>
        </>)
        
    }
}

export default ContentPage;