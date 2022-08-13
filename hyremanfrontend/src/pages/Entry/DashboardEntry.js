import React from 'react';
import sidebar_menu from '../../constants/sidebar-menu';
import SideBar from '../../components/Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dasboard';

const DashboardEntry = () => {
    return (
        <div>
            <div className='dashboard-container'>
                <SideBar menu={sidebar_menu} />
                <div className='dashboard-body'>
                    <Dashboard/>
                </div>
            </div>
        </div>
    );
};

export default DashboardEntry;