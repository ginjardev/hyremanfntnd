import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RecruiterSignup from './pages/Authentication/RecruiterSignup';
import ApplicantSignup from './pages/Authentication/ApplicantSignup';
import HomePage from './pages/Home/Home';
import Login from './pages/Authentication/Login';
import ResumeBankEntry from './pages/Entry/ResumeBankEntry';
import CandidatesEntry from './pages/Entry/CandidatesEntry';
import DashboardEntry from './pages/Entry/DashboardEntry';
import ProfileEntry from './pages/Entry/ProfileEntry';
import JobsEntry from './pages/Entry/JobsEntry';
import SettingsEntry from './pages/Entry/SettingsEntry';
import TestLibraryEntry from './pages/Entry/TestLibraryEntry';
import CandidateList from './pages/Candidates/Candidates';
import CandidateOverview from './pages/Candidates/CandidatesOverview';
import CandidatesList from './constants/candidatesList';
import CalendarEvent from './pages/Candidates/CalendarEvent';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/recruiter-signup" element={<RecruiterSignup />} />
        <Route path="/applicant-signup" element={<ApplicantSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resume-bank" element={<ResumeBankEntry />} />
        <Route
          path="/candidates"
          element={<CandidatesEntry child={<CandidateList />} />}
        />
        <Route
          path="/candidates-details"
          element={<CandidatesEntry child={<CandidateOverview />} />}
        />
        <Route path="/dashboard-access" element={<DashboardEntry />} />
        <Route path="/jobs" element={<JobsEntry />} />
        <Route path="/profile" element={<ProfileEntry />} />
        <Route path="/setting" element={<SettingsEntry />} />
        <Route path="/test-library" element={<TestLibraryEntry />} />
        
      </Routes>
    </Router>
  );
}

export default App;
