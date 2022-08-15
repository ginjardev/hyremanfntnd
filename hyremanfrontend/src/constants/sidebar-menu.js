import DashboardIcon from '../assets/icons/dashboard.svg';
import JobsIcon from '../assets/icons/job1.svg';
import CandidatesIcon from '../assets/icons/candidates.svg';
import TestLibraryIcon from '../assets/icons/testlibrary.svg';
import ResumeBankIcon from '../assets/icons/resumebank.svg';
import LogoutIcon from '../assets/icons/logout.svg'
import SettingsIcon from '../assets/icons/settings.svg'

const sidebar_menu = [

    {
        id: 1,
        icon: DashboardIcon,
        path: '/dashboard-access',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: JobsIcon,
        path: '#',
        title: 'Jobs',
    },
    {
        id: 3,
        icon: CandidatesIcon,
        path: '/candidates',
        title: 'Candidates',
    },
    {
        id: 4,
        icon: TestLibraryIcon,
        path: '#',
        title: 'Test Library',
    },
    {
        id: 5,
        icon: ResumeBankIcon,
        path: '/resume-bank',
        title: 'Resume Bank',
    },
    {
        id: 6,
        icon: SettingsIcon,
        path: '#',
        title: 'Setting',
    },
    {
        id: 7,
        icon: LogoutIcon,
        path: '/',
        title: 'Log Out',
    },
]

export default sidebar_menu;