import React from 'react';
import logoSrc from '../assets/NebulaCart-logo.svg'
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__brand">
                <Link to="/" className="footer__logo" aria-label="Nebula Cart - Home">
                    {logoSrc ? <img src={logoSrc} alt="Nebula Cart" /> : <span className="footer__logoText">Nebula Cart</span>}
                </Link>

                <p className="footer__desc">
                    Nebula Cart — simple, fast and clean shopping UI.
                </p>
                </div>

                <nav className="footer__links" aria-label="Footer links">
                <div className="footer__col">
                    <h4>Shop</h4>
                    <Link to="/">Products</Link>
                    <Link to="/">Categories</Link>
                    <Link to="/">Top Rated</Link>
                </div>

                <div className="footer__col">
                    <h4>Support</h4>
                    <Link to="/">Help Center</Link>
                    <Link to="/">Shipping</Link>
                    <Link to="/">Returns</Link>
                </div>
                </nav>
            </div>

            <div className="footer__bottom">
                <span>© {new Date().getFullYear()} Nebula Cart</span>
                <span className="footer__sep" aria-hidden="true">•</span>
                <span>Built with React</span>
            </div>
        </footer>
    )
}

export default Footer