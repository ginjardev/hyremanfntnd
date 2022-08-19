import React from 'react';
import './CardidateCard.css';
import ImageIcon from '../../assets/icons/account-circle-filled.svg';
import { addToShortlistedCandidates } from '../../redux/slices/candidates';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import MaleDefault from '../../assets/images/defaultmale.jpg';
import FemaleDefault from '../../assets/images/defaultfemale.jpg';


// import { Document, Page,pdfjs } from 'react-pdf';

const CandiateCard = ({ candidate }) => {
  const dispatch = useDispatch();
  const { allCandidates: candidates } = useSelector(
    (state) => state.candidates
  );
  
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e) => {
    setIsActive(!isActive);
    dispatch(addToShortlistedCandidates(candidate));
  }

  return (
    <div className="card d-flex align-items-center rounded my-3 w-75">
      <div className="card-top d-flex align-items-start mt-2">
        <div className="d-flex justify-content-start w-25">
          <img src={candidate.gender === 'M' ? MaleDefault : FemaleDefault}
           alt="icon" style={{borderRadius: '50%'}} className='img-thumbnail' maxHeight='100%' maxWidth='100%'/>
        </div>
        <div className="d-flex flex-column px-3 w-25">
          <p className="fs-4 fw-bold">
            {candidate?.user?.first_name} {candidate?.user?.last_name}
          </p>
          <p>
            {candidate.country}, {candidate.region}
          </p>
          <p>{candidate.gender === 'M' ? 'Male' : 'Female'}</p>
        </div>
        <div className="d-flex flex-column p-2 w-50 text-wrap me-2">
          <p>
            <span className="fw-bold">Education:</span> {candidate.education}
          </p>
          <p>
            <span className="fw-bold">Experience:</span>{' '}
            {candidate.experience_level}
          </p>
          <p>
            <span className="fw-bold text-wrap">Skills: </span>
            {candidate.skills.map((skill, index) => skill.name + ', ')}
          </p>
        </div>
        {/* <div className='d-flex align-content-center score p-2 rounded ms-3'>
                    <h2>{candidate.score}%</h2>
                </div> */}
      </div>
      <div className="card-bottom d-flex align-items-center justify-content-around p-2">
        <a
          className="text-primary p-1"
          style={{ textDecoration: 'none' }}
          href={
            candidate.resume
          }
          target="_blank"
          rel="noreferrer"
        >
          View Resume
        </a>
        <button
          className={
            isActive ? 'btn btn-light px-5 disabled' : 'btn btn-primary px-5'
          }
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          {isActive ? 'Candidate Shortlisted' : 'Shortlist Candidate'}

        </button>
      </div>
    </div>
  );
};

export default CandiateCard;
