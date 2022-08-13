import React from 'react';
import './CardidateCard.css'
import ImageIcon from '../../assets/icons/account-circle-filled.svg'

const CandiateCard = ({candidate}) => {
    return (
        <div className='card d-flex align-items-center rounded my-3'>
            <div className='card-top d-flex align-items-start mt-2'>
                <div className='d-flex justify-content-start '>
                    <img src={candidate.icon} alt='icon'/>
                </div>
                <div className='d-flex flex-column px-3'>
                    <p className='fs-4 fw-bold'>{candidate.firstName} {candidate.lastName}</p>
                    <p>{candidate.location}</p>
                    <p>{candidate.gender}</p>
                </div>
                <div className='d-flex flex-column p-2 text-wrap me-2'>
                    <p><span className='fw-bold'>Experience:</span> {candidate.experience}</p>
                    <p><span className='fw-bold text-wrap'>Skills:</span> {
                        candidate.skills.map((skill, id) => skill + ', ')
                    }</p>
                    <p><span className='fw-bold'>Education:</span> {candidate.education}</p>
                </div>
                <div className='d-flex align-content-center score p-2 rounded ms-3'>
                    <h2>{candidate.score}%</h2>
                </div>
            </div>
            <div className='card-bottom d-flex align-items-center justify-content-around p-2'>
                <div className='text-primary p-1'>View Resume</div>
                <button className='btn btn-sm'>Shortlist Candidate</button>
            </div>
        </div>
    );
};

export default CandiateCard;