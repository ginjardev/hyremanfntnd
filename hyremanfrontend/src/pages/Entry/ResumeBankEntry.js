import React from "react";
import ResumeBank from "../ResumeBank/ResumeBank";
import SideBar from "../../Components/Sidebar/Sidebar";
import sidebar_menu from "../../constants/sidebar-menu";
import "../../App.css";

const ResumeBankEntry = () => {
  return (
    <div>
      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />
        <div className="dashboard-body">
          <ResumeBank />
        </div>
      </div>
    </div>
  );
};

export default ResumeBankEntry;
