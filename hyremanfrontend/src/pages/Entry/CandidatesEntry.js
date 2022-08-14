import React from 'react';
import sidebar_menu from '../../constants/sidebar-menu';
import SideBar from '../../Components/Sidebar/Sidebar';
import Candidates from '../Candidates/Candidates';

const CandidatesEntry = ({ child }) => {
  return (
    <div>
      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />
        <div className="dashboard-body">{child}</div>
      </div>
    </div>
  );
};

export default CandidatesEntry;
