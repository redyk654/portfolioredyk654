import React, { useState } from 'react';
import './Navbar.css';
import '../fontawesome-free-5.15.3-web/css/all.min.css';
import logo from '../images/bitmoji.png';
import profil from '../images/profil2.png';
import Banner from './Banner';

export default function Navbar() {

    const [toogleMenu, setToogleMenu] = useState(false);

    return (
        <header>
            <Banner />
            <img src={profil} alt="" className="profil" />
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav className={`navbar ${toogleMenu ? 'active' : ''}`}>
                <li><a href="#">About me</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </nav>
        </header>
    )
}
