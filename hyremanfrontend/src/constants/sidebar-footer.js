import LogoutIcon from '../assets/icons/logout.svg';
import SettingsIcon from '../assets/icons/settings.svg';


const SidebarFooter = [
    {
        id: 1,
        icon: SettingsIcon,
        path: '/setting',
        title: 'Setting',
    },
    {
        id: 2,
        icon: LogoutIcon,
        path: '/logout',
        title: 'Log Out',
    },
]

export default SidebarFooter;