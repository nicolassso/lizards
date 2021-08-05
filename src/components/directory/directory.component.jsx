import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

import image1 from '../../images/fotos_richi/DSC05965.jpg';
import image2 from '../../images/fotos_richi/DSC06663.jpg';
import image3 from '../../images/fotos_richi/DSC06439.jpg';
import image4 from '../../images/fotos_richi/DSC06595.jpg';
import image5 from '../../images/fotos_richi/DSC05899.jpg';


class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Madrid',
          imageUrl: image1,
          id: 1,
          linkUrl: '/madrid'
        },
        {
          title: 'Barcelona',
          imageUrl: image2,
          id: 2,
          linkUrl: '/barcelona'
        },
        {
          title: 'Málaga',
          imageUrl: image3,
          id: 3,
          linkUrl: '/malaga'
        },
        {
          title: 'Eventos',
          imageUrl: image4,
          size: 'large',
          id: 4,
          linkUrl: '/eventos'
        },
        {
          title: 'Historias',
          imageUrl: image5,
          size: 'large',
          id: 5,
          linkUrl: '/historias'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;