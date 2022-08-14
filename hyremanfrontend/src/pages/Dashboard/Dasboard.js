import React from "react";
import DashboardNav from "../../Components/DashboardHeader/DashbooardNav";

const Dashboard = () => {
  return (
    <div className="main">
      <DashboardNav navTitle="Work Dashboard" />

      <div class="box-container">
        <div class="row box-container">
          <div class="col-3 filter">Welcome, dear user!</div>
          <div class="col-8 result">What's your play for today?</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
