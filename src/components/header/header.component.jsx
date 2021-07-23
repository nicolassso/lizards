import React from 'react'
import { Link } from 'react-router-dom'
import BurgerMenu from '../burger-menu/burger-menu.component'
import './header.styles.scss'

// import { ReactComponent as Logo } from '../../images/lizard-vector.png'

const Header = () => (

    <div className="header">
        <Link className='logo-container' to='/'>
            <h1 className='logo'>LIZARDS</h1>
        </Link>
        
        <BurgerMenu />
    </div>

)

export default Header;