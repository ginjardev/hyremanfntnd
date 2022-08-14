import React from "react";
import sidebar_menu from "../../constants/sidebar-menu";
import SideBar from "../../Components/Sidebar/Sidebar";

const TestLibraryEntry = () => {
  return (
    <div>
      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />
        <div className="dashboard-body">
          <h2>Test Library</h2>
        </div>
      </div>
    </div>
  );
};

export default TestLibraryEntry;
