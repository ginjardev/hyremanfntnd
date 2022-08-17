import React from 'react';
import Button from '../Button';

import Bell from '../../assets/icons/bell.svg';
import AccountCircle from '../../assets/icons/account-circle.svg';
import Add from '../../assets/icons/add-plus.svg';

const DashboardNav = ({ navTitle }) => {
  return (
    <div className="m-3">
      <nav className="navbar border-bottom rounded border">
        <h3 className="nav-title px-4">{navTitle}</h3>
        <div className="d-flex justify-content-around align-items-center px-2 dash">
          <div className="">
            {/* <Button
              icon={<img src={Add} alt="add icon" />}
              title="Add"
              className="btn btn-sm pe-3"
            /> */}
          </div>
          {/* <div className="circle">
            <img src={Bell} alt="notification bell" />
          </div> */}
          <div className="">
            {/* <img src={AccountCircle} alt="notification bell" /> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardNav;
