import React from 'react';
import Logo from '../assets/HyremanLogo.svg'
const SignupNav = () => {
    return (
        <div>
            <nav className='navbar border-bottom'>
                <img src={Logo} alt='Hyreman Logo' className='px-3' width="140" height="60" />
            </nav>
        </div>
    );
};

export default SignupNav;