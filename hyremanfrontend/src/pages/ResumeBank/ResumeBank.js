import React, { useState, useEffect } from "react";
import DashboardNav from "../../Components/DashboardHeader/DashbooardNav";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "../styles.css";

import CandiateCard from "../../Components/CandidateCard/CandiateCard";
// import CandidatesList from "../../constants/candidatesList";
import { calculateRange, sliceData } from "../../utils/table-pagination";

const ResumeBank = () => {
  const [candidates, setCandidates] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  const token = localStorage.getItem("token");

//   console.clear();
  console.log(token);

  useEffect(() => {
    getResumes();
    setCandidates(sliceData(candidates, page, 4)); 
    setPagination(calculateRange(candidates, 4));
  }, []);

  const getResumes = () => {
    fetch("https://hyremanbackend.herokuapp.com/users/applicants/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data[2].skills[0].name);
        setCandidates(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  const getResumesByTag = (tag, filterName) => {
    fetch(`https://hyremanbackend.herokuapp.com/users/applicants/?${filterName}=${tag}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCandidates(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
//   useEffect(() => {
//     setPagination(calculateRange(candidates, 4));
//     }, []);

  const __handleChangePage = (new_page) => {
    setPage(new_page);
    setCandidates(sliceData(candidates, new_page, 4));
  };

  return (
    <div className="">
      <DashboardNav navTitle="Resume Bank" />
      <div className="d-flex justify-content-between content">
        <SearchBar getResumesByTag={getResumesByTag} />
            <div className=" card-holder m-3">
          <div className="pagination d-flex align-content-center">
            <h3>Explore Candidates </h3>
            {candidates.length !== 0 ? (
              <div className="dashboard-content-footer">
                {pagination.map((item, index) => (
                  <span
                    key={index}
                    className={
                      item === page ? "active-pagination" : "pagination"
                    }
                    onClick={() => __handleChangePage(item)}
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <div className="dashboard-content-footer">
                <span className="empty-table">No data</span>
              </div>
            )}
          </div>
          {candidates.length !== 0
            ? candidates.map((candidate, id) => (
                <CandiateCard candidate={candidate} />
              ))
            : "No Candidates to display"}
        </div>
      </div>
    </div>
  );
};

export default ResumeBank;
