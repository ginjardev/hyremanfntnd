import React from 'react';
import Logo from '../assets/logo/HyremanLogoTwo.svg';
import { NavLink } from 'react-router-dom';
const SignupNav = () => {
    return (
        <div>
            <nav className='navbar border-bottom'>
                <NavLink to='/'>
                    <img src={Logo} alt='Hyreman Logo' className='px-3' width="140" height="60" />
                </NavLink>
            </nav>
        </div>
    );
};

export default SignupNav;