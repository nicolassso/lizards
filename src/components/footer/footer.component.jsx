import React from 'react'
// import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Footer.scss'

function Footer() {
    return (
        <div className="footer-container">
            <section className="social-media">
                <div className="social-media-wrap">
                    <small className="website-rights">
                        <a 
                        exact href='www.linkedin.com/in/nicolas-leal-silveyra'
                        target='_blank'
                        >
                        Nicolás Leal © 2021
                        </a>
                    </small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
