import React from 'react';
import logo from '../Logo-Airbnb-1536x557.png';

const Header = () => {
    return (
        <nav className='d-flex navbar navbar-light bg-light shadow p-1'>
            <img src={logo} alt="Airbnb Icon" width="155" height="55" className="ms-5 mt-3 mb-3 " />
        </nav>
    );
};

export default Header;