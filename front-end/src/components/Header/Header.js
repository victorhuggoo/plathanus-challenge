import React from 'react';
import logo from '../../images/logo.png';
import { FaSearch } from 'react-icons/fa'

import './Header.css'

function Header() {

    return (

        <header id="header">
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#whatwedo">What we do?</a></li>
                    <li><a href="javascript:void(0)">Testimonial</a></li>
                    <li><a href="#abrirModal">Config</a></li>
                </ul>
            </nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="search-box">
                <input type="text" name="search" id="search" placeholder="Search..." />
                <FaSearch />
            </div>
        </header>
    );
}

export default Header;