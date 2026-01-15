
import cart from '../assets/NebulaCart-logo.svg';
import menuLight from '../assets/menu-light.svg'
import menuDark from '../assets/menu-dark.svg'
import searchSvg from '../assets/search-svg.svg'
import { useState } from 'react';
import Sidebar from './Sidebar';

const Header = () => {
    const [collapse, setCollapse] = useState(false)

    const handleCollapse = () => {
        setCollapse(!collapse)
    }

    return (
        <>
            <div className="header">
                <img className='header__img' src={cart} alt="Nebula Cart" />

                <div className="header__input">
                    <input type="search" placeholder='Buscar productos...'/>
                    <button> <img src={searchSvg} alt="" /> </button>
                </div>

                <button className='header__btn' onClick={() => setCollapse(true)} > <img src={menuLight} alt="menu light" /> </button>
            </div>
            <Sidebar handleCollapse={handleCollapse} collapse={collapse}/>
        </>
    )
}

export default Header