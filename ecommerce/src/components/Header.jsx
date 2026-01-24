import { useState } from 'react';
import cart from '../assets/NebulaCart-logo.svg';
import searchSvg from '../assets/search-svg.svg'
import { Link } from 'react-router-dom';

const Header = ({filters, setFilters}) => {

    const handleChange = (e) => {
        //console.log(e.target.value)
        setFilters(prev => ({...prev, search: e.target.value.toLowerCase()}))
        console.log(filters)
    }

    return (
        <>
            <div className="header">
                <Link to={'/'}><img className='header__img' src={cart} alt="Nebula Cart" /></Link>

                <div className="header__input">
                    <input onChange={handleChange} type="search" placeholder='Buscar productos...'/>
                    <button> <img src={searchSvg} alt="" /> </button>
                </div>
            </div>
        </>
    )
}

export default Header