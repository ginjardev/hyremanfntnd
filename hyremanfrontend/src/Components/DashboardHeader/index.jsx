import React from 'react';

import './styles.css';
import NotificationIcon from '../../assets/icons/notification.svg';
import SettingsIcon from '../../assets/icons/settings.svg';

function DashboardHeader ({ btnText, onClick }) {
    return(
        <div className='dashbord-header-container'>
            <h4>RESUME BANK</h4>

            <div className='dashbord-header-right'>
                {btnText && 
                    <button className='dashbord-header-btn' onClick={onClick}>
                        Create  
                    </button>
                }

                <img 
                    src={NotificationIcon}
                    alt='notification-icon'
                    className='dashbord-header-icon' />

                <img
                    className='dashbord-header-avatar'
                    src='https://reqres.in/img/faces/9-image.jpg' />
            </div>
        </div>
    )
}

export default DashboardHeader;