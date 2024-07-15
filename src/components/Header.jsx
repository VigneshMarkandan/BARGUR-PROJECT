import React, { useState } from 'react';
import Logo from '../assets/img/Logo-original.png';


const Header = () => {
    const [dropdown, setDropdown] = useState({});

    const handleDropdown = (index) => {
        setDropdown((prevDropdown) => ({
            ...prevDropdown,
            [index]: !prevDropdown[index]
        }));
    };

    return (
        <header>
            <div className="top-bar">
                <div className="language-toggle">
                    <a href="/">English</a> | <a href='/'>हिन्दी</a>
                </div>
                <div className='font-size'>
                    <a href='/'>A-</a>
                    <a href='/'>A</a>
                    <a href='/'>A+</a>
                </div>
            </div>
            <div className="logo-nav">
                <div className="logo">
                    <img src={Logo} alt="IIM Logo" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                   
                        <i className="uil uil-search"></i> {/* Update this with the correct path to your search icon */}
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li className="dropdown">
                        <a href='/' onFocus={() => handleDropdown(1)}>Programmes</a>
                        {dropdown[1] && (
                            <ul className="dropdown-menu">
                                <li><a href='/'>B.E.(ECE)</a></li>
                                <li><a href='/'>B.E.(EEE)</a></li>
                                <li><a href='/'>B.E.(CSE)</a></li>
                                <li><a href='/'>B.E.(MECH)</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href='/'>Administration</a></li>
                    <li><a href='/'>Academics</a></li>
                    <li><a href='/'>Centers/Facilites</a></li>
                    <li><a href='/'>Departments</a></li>
                    <li><a href='/'>COE</a></li>
                    <li><a href='/'>My GCEB</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
