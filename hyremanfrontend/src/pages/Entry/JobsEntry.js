import React from "react";
import sidebar_menu from "../../constants/sidebar-menu";
import SideBar from "../../components/Sidebar/Sidebar";
import Jobs from "../Jobs/Jobs";

const JobsEntry = () => {
  return (
    <div>
      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />
        <div className="dashboard-body">
          <Jobs />
        </div>
      </div>
    </div>
  );
};

export default JobsEntry;
