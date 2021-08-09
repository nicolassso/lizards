import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
// import Logo from '../../images/logo-guitar.PNG'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  const scrollView = () => {
    document.getElementById("nuestras-guitarras").scrollIntoView(true);
  }

  return (
    <>
      <nav className='navbar active'>
        <div className='navbar-container'>              
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className="section-left">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item active'>
                <Link 
                  to='/eventos' 
                  className='nav-links' 
                  onClick={closeMobileMenu}>
                  Eventos
                </Link>
              </li>
              <li className='nav-item active'>
                <Link
                  to='/historias'
                  href={scrollView}
                  className='nav-links'
                  onClick={closeMobileMenu}>
                  Historias
                </Link>
              </li>
              </ul>

          </div>
          <div className="section-center">
            {/* <img className='navbar-logo active' alt='logo' src={Logo} height='200px' /> */}
            <Link className='logo-container' to='/home'>
            <h1 className='logo'>LIZARDS</h1>
        </Link>
          </div>
          <div className="section-right">
            <ul className={click ? 'nav-menu active-2' : 'nav-menu'}>
              <li className='nav-item active'>
                <Link
                  to='/videos'
                  href={scrollView}
                  className='nav-links'
                  onClick={closeMobileMenu}>
                  Videos
                </Link>
              </li>
              <li className='nav-item active'>
                <Link
                  to='/contacto'
                  href={scrollView}
                  className='nav-links'
                  onClick={closeMobileMenu}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;