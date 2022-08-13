import React, {useEffect, useState} from 'react';
import { useLocation, NavLink } from 'react-router-dom';

import SideBarItem from './SidebarItem';

import './styles.css';
import logo from '../../assets/logo/HyremanLogo.svg';
import LogoutIcon from '../../assets/icons/logout.svg';
import SettingsIcon from '../../assets/icons/settings.svg'

function SideBar ({ menu }) {
    const location = useLocation();

    const [active, setActive] = useState(1);


    useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname])

    const __navigate = (id) => {
        setActive(id);
    }

    return(
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>
                    <NavLink to='/'>
                        <img src={logo} alt="Hyreman logo" />
                    </NavLink>
                </div>

                <div className='sidebar-container'>
                    <div className='sidebar-items'>
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
                    </div>
                    {/* <div className='sidebar-footer mb-2'>
                            <img src={LogoutIcon} alt='icon-logout' className='sidebar-item-icon' />
                            <span className='sidebar-item-label'>Log Out</span>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

export default SideBar;