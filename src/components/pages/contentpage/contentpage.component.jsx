import React from 'react'
import CATEGORIAS_DATA from '../contentpage/categorias-data.jsx';
import Categoria from '../../categoria-preview/categoria-preview.component';
import Navbar from '../../navbar/Navbar';

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
                        collections
                        .filter((item, idx) => idx < 3)
                        .map(({id, ...otherCollectionProps}) => (
                            <Categoria key={id} {...otherCollectionProps}/>
                            
                        ))
                    }
                </div>
        </>)
        
    }
}

export default ContentPage;