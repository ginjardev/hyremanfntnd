import React from 'react';
import SideBar from '../../components/Sidebar/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
const ProfileEntry = () => {
    return (
        <div>
            <div className='dashboard-container'>
                <SideBar menu={sidebar_menu} />
                <div className='dashboard-body'>
                    <h2>Profile</h2>
                </div>
            </div>
        </div>
    );
};

export default ProfileEntry;