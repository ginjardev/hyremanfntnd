import React from 'react';
import DashboardNav from '../../components/DashboardHeader/DashbooardNav';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '../../components/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Add from '../../assets/icons/Add';
import Account from '../../assets/icons/account-circle-filled.svg';
import Facebook from '../../assets/icons/facebook';
import Twitter from '../../assets/icons/twitter';
import LinkedIn from '../../assets/icons/linkedin';
import Edit from '../../assets/icons/edit';
import ChevronDown from '../../assets/icons/chevron-sort-down';

import '../styles.css';

function Candidates() {
  const outerTheme = createTheme({
    palette: {
      primary: {
        main: '#000',
      },
    },
  });
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value, setValue] = React.useState(1);

  return (
    <div className="dashboard-content">
      <DashboardNav navTitle="Resume Bank" />
      <div className="flex-row h-100">
        <div className="flex-col flex-2">
          <div className="flex-2 border p-4 m-4 shadow-sm">
            <div className="flex-row ">
              <img src={Account} alt="Account" />
              <div className="flex-col mt-2 ms-3">
                <span className="text-black text-bold mb-2">
                  Regina Boatema
                </span>
                <span className="text-gray">Accra</span>
              </div>
              <div className="flex-row h-5 ms-5 mt-3 flex-3">
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
              <div className="flex-row flex-1 justify-content-start mt-3 hover">
                <Edit />
              </div>
            </div>
            <div className="flex-row mt-4">
              <div className="flex-col flex-1 text-gray  font-small">
                <span className="py-1">Email</span>
                <span className="py-1">Gender</span>
                <span className="py-1">Phone</span>
                <span className="py-1">Country</span>
                <span className="py-1">Stage</span>
              </div>
              <div className="flex-col flex-3 fw-normal font-small">
                <span className="py-1">caroline.kpogo@gmail.com</span>
                <span className="py-1">Female</span>
                <span className="py-1">02091515362</span>
                <span className="py-1">Ghana</span>
                <div className="flex-row ">
                  <span className="py-1 me-2">Interview</span>
                  <div>
                    <ChevronDown />
                  </div>
                </div>
              </div>
              <div className="flex-col flex-1 text-gray font-small">
                <span className="py-1">Years of Experience</span>
                <span className="py-1">Resume</span>
                <span className="py-1">Cover Letter</span>
                <span className="py-1">Expected Salary</span>
                <span className="py-1">Expected Salary</span>
              </div>
              <div className="flex-col flex-1 fw-normal font-small">
                <span className="py-1">2</span>
                <span className="py-1 hover text-extrabold">View</span>
                <span className="py-1 hover text-extrabold">View</span>
                <span className="py-1">2000</span>
                <span className="py-1">2000</span>
              </div>
            </div>
            <div className="flex-row font-medium mt-5">
              <span className="text-gray flex-1">Experience</span>
              <div className="flex-8">
                <div className="flex-row my-1">
                  <span className="text-black mx-4">
                    Senior Mobile Engineer at Hubtel Ghana Limited
                  </span>
                  <span className="text-gray">2019 - 2021</span>
                </div>
                <div className="flex-row my-1">
                  <span className="text-black mx-4">
                    Mobile Developer at MEST Africa
                  </span>
                  <span className="text-gray">2018 - 2019</span>
                </div>
                <div className="flex-row my-1">
                  <span className="text-black mx-4">
                    Mobile Engineer at MEST Africa
                  </span>
                  <span className="text-gray">2016 - 2018</span>
                </div>
              </div>
            </div>
            <div className="flex-row font-medium my-2">
              <span className="text-gray flex-1">Education</span>
              <div className="flex-8">
                <div className="flex-row my-1">
                  <span className="text-black mx-4">
                    Bachelor of Science in Computer Engineering at University of
                    Ghana
                  </span>
                  <span className="text-gray">2010 - 2016</span>
                </div>
                <div className="flex-row my-1">
                  <span className="text-black mx-4">
                    Fellow Association of Mobile Developers Ghana
                  </span>
                  <span className="text-gray">2019 - 2021</span>
                </div>
              </div>
            </div>
            <div className="flex-row font-medium my-2">
              <span className="text-gray flex-1">Skills</span>
              <div className="flex-8">
                <div className="flex-row my-1">
                  <span className="text-black mx-4">Angular</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 border mb-4 ms-4 me-4 shadow-sm p-4">
            <span className="fw-bold">Assessment</span>
          </div>
        </div>
        <div className="flex-1 border mb-4 me-4 mt-4 shadow-sm">
          {' '}
          <Box>
            <ThemeProvider theme={outerTheme}>
              <Tabs value={value} onChange={handleChange} textColor="primary">
                <Tab className="mx-5" label="Jobs" {...a11yProps(0)} />
                <Tab className="mx-5" label="Appointments" {...a11yProps(1)} />
                <Tab className="mx-5" label="Notes" {...a11yProps(2)} />
              </Tabs>
            </ThemeProvider>
          </Box>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="flex-row justify-content-center">
              <div className="d-inline-flex justify-content-center align-items-center px-5 py-2 border rounded-5 hover">
                <div className=" p-1 rounded-circle border-blue me-4">
                  <Add fill={'#0964D8'} />
                </div>
                <span>Add appointment</span>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </div>
      </div>
    </div>
  );
}

export default Candidates;
