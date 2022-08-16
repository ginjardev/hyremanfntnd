import React, { useState, useEffect } from 'react';
import DashboardNav from '../../Components/DashboardHeader/DashbooardNav';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { calculateRange, sliceData } from '../../utils/table-pagination';
import { useSelector, useDispatch } from 'react-redux';

import '../styles.css';
import DoneIcon from '../../assets/icons/done.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import RefundedIcon from '../../assets/icons/refunded.svg';
import CandidatesList from '../../constants/candidatesList';
import BackButton from '../../assets/icons/back-button';
import CopyUrl from '../../assets/icons/copy-url';
import Facebook from '../../assets/icons/facebook';
import Twitter from '../../assets/icons/twitter';
import LinkedIn from '../../assets/icons/linkedin';
import More from '../../assets/icons/more';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

const all_orders = [
  {
    fullname: 'Regina Boatema',
    email: 'reginaboatema@gmail.com',
    phone: '0209414362',
    skillsMatch: '98%',
    testScore: 0,
    owner: 'Mista Boakye',
    stage: 'Interview',
  },
  {
    fullname: 'Caroline Enyonam',
    email: 'reginaboatema@gmail.com',
    phone: '0209414362',
    skillsMatch: '98%',
    testScore: 0,
    owner: 'Mista Boakye',
    stage: 'Interview',
  },
  {
    fullname: 'Veronique Abakah',
    email: 'reginaboatema@gmail.com',
    phone: '0209414362',
    skillsMatch: '98%',
    testScore: 0,
    owner: 'Mista Boakye',
    stage: 'Interview',
  },
  {
    fullname: 'Mista Boakye',
    email: 'reginaboatema@gmail.com',
    phone: '0209414362',
    skillsMatch: '98%',
    testScore: 0,
    owner: 'Mista Boakye',
    stage: 'Interview',
  },
  {
    fullname: 'Slim Bansi',
    email: 'reginaboatema@gmail.com',
    phone: '0209414362',
    skillsMatch: '98%',
    testScore: 0,
    owner: 'Mista Boakye',
    stage: 'Interview',
  },
  {
    fullname: 'Amen Olabode',
    email: 'reginaboatema@gmail.com',
    phone: '0209414362',
    skillsMatch: '98%',
    testScore: 0,
    owner: 'Mista Boakye',
    stage: 'Interview',
  },
  {
    fullname: 'Timothy Asare',
    email: 'reginaboatema@gmail.com',
    phone: '0209414362',
    skillsMatch: '98%',
    testScore: 0,
    owner: 'Mista Boakye',
    stage: 'Interview',
  },
  {
    fullname: 'Samuel Setsofia',
    email: 'reginaboatema@gmail.com',
    phone: '0209414362',
    skillsMatch: '98%',
    testScore: 0,
    owner: 'Mista Boakye',
    stage: 'Interview',
  },
  {
    fullname: 'Miriam Wamey',
    email: 'reginaboatema@gmail.com',
    phone: '0209414362',
    skillsMatch: '98%',
    testScore: 0,
    owner: 'Mista Boakye',
    stage: 'Interview',
  },
  {
    fullname: 'Joy Eziashi',
    email: 'reginaboatema@gmail.com',
    phone: '0209414362',
    skillsMatch: '98%',
    testScore: 0,
    owner: 'Mista Boakye',
    stage: 'Interview',
  },
  {
    fullname: 'Shulamite John',
    email: 'reginaboatema@gmail.com',
    phone: '0209414362',
    skillsMatch: '98%',
    testScore: 0,
    owner: 'Mista Boakye',
    stage: 'Interview',
  },
  {
    fullname: 'Benedicta Frema Boamah',
    email: 'reginaboatema@gmail.com',
    phone: '0209414362',
    skillsMatch: '98%',
    testScore: 0,
    owner: 'Mista Boakye',
    stage: 'Interview',
  },
  {
    fullname: 'Somto Chike-Nwaka',
    email: 'reginaboatema@gmail.com',
    phone: '0209414362',
    skillsMatch: '98%',
    testScore: 0,
    owner: 'Mista Boakye',
    stage: 'Interview',
  },
  {
    fullname: 'Oluwawemimo Olapade',
    email: 'reginaboatema@gmail.com',
    phone: '0209414362',
    skillsMatch: '98%',
    testScore: 0,
    owner: 'Mista Boakye',
    stage: 'Interview',
  },
];

function Candidates() {
  const { shortlistedCandidates } = useSelector((state) => state.candidates);
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [orders, setOrders] = useState(shortlistedCandidates);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [tab, setTab] = useState('one');

  useEffect(() => {
    setPagination(calculateRange(shortlistedCandidates, 5));
    setOrders(sliceData(shortlistedCandidates, page, 5));
  }, []);

  // Search
  const __handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== '') {
      let search_results = orders.filter(
        (item) =>
          item.first_name.toLowerCase().includes(search.toLowerCase()) ||
          item.last_name.toLowerCase().includes(search.toLowerCase()) ||
          item.product.toLowerCase().includes(search.toLowerCase())
      );
      setOrders(search_results);
    } else {
      __handleChangePage(1);
    }
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Change Page
  const __handleChangePage = (new_page) => {
    setPage(new_page);
    setOrders(sliceData(shortlistedCandidates, new_page, 5));
  };

  return (
    <div className="dashboard-content">
      <DashboardNav navTitle="Resume Bank" />
      <div>
        <div className="flex-row m-3 w-full justify-content-between px-5">
          <div className="flex-row">
            <div className="flex-row back-button hover">
              <BackButton />
            </div>
            <div className="flex-col title-location">
              <span className="title-location-title">Junior Web Developer</span>
              <div className="flex-row">
                <span className="title-location-type">Full Time</span>
                <span className="title-location-location">Accra, Ghana</span>
              </div>
            </div>
            <div className="flex-row">
              <span className="copy-url hover">Copy Job url</span>
              <div className="hover m-0">
                <CopyUrl />
              </div>
            </div>
          </div>
          <div className="flex-row h-5">
            <span className="me-2">Share on</span>
            <div className="p-2 border d-flex justify-content-center align-items-center rounded-circle mx-1 hover">
              <Facebook />
            </div>
            <div className="p-2 border d-flex justify-content-center align-items-center rounded-circle mx-1 hover">
              <Twitter />
            </div>
            <div className="p-2 border d-flex justify-content-center align-items-center rounded-circle mx-1 hover">
              <LinkedIn />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end m-3 pe-5">
          <Button
            icon={<></>}
            title="Submit Candidate"
            className="btn btn-sm pe-3"
          />
        </div>
        <Box className="ms-5" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <ThemeProvider theme={outerTheme}>
            <Tabs value={value} onChange={handleChange} textColor="primary">
              <Tab label="JOB DETAILS" {...a11yProps(0)} />
              <Tab label="CANDIDATES" {...a11yProps(1)} />
              <Tab label="NOTES" {...a11yProps(2)} />
            </Tabs>
          </ThemeProvider>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="table-head">
            <table>
              <thead className="">
                <th className="py-3">
                  <input type="checkbox" name="name1" />
                </th>
                <th className="text-black">Full Name</th>
                <th className="text-black">Email</th>
                <th className="text-black">Phone Number</th>
                <th className="text-black">Skills Match</th>
                <th className="text-black">Test Score</th>
                <th className="text-black">Owner</th>
                <th className="text-black">Stage</th>
                <th></th>
              </thead>

              {orders.length !== 0 ? (
                <tbody>
                  {orders.map((candidate, index) => {
                    return (
                      <tr
                        className="bg-light hover"
                        key={index}
                        onClick={() => {
                          navigate('/candidates-details', { state: candidate });
                        }}
                      >
                        <td>
                          <input type="checkbox" name="name1" />
                          &nbsp;
                        </td>
                        <td>
                          <span>
                            {candidate.user.first_name}{' '}
                            {candidate.user.last_name}
                          </span>
                        </td>
                        <td>
                          <span>{candidate.user.email}</span>
                        </td>
                        <td>
                          <div>
                            <span>{candidate.phone}</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <span
                              className="text-pass"
                              // className={
                              //   parseInt(candidate.skillsMatch.replace('%', '')) >
                              //   50
                              //     ? 'text-pass'
                              //     : 'text-fail'
                              // }
                            >
                              98%
                            </span>
                          </div>
                        </td>
                        <td>
                          <span>{100}</span>
                        </td>
                        <td>
                          <span>{'Admin'}</span>
                        </td>
                        <td>
                          <span>{'Schedule Interview'}</span>
                        </td>
                        <td className="hover">
                          <More />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : null}
            </table>

            {shortlistedCandidates.length !== 0 ? (
              <div className="dashboard-content-footer bg-light">
                {pagination.map((item, index) => (
                  <span
                    key={index}
                    className={
                      item === page ? 'active-pagination' : 'pagination'
                    }
                    onClick={() => __handleChangePage(item)}
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <div className="dashboard-content-footer bg-light">
                <span className="empty-table">No data</span>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div>
    </div>
  );
}

export default Candidates;
