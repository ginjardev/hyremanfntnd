import React, {useState, useEffect} from 'react';
import DashboardNav from '../../components/DashboardHeader/DashbooardNav';
import SearchBar from '../../components/SearchBar/SearchBar';
import '../styles.css'

import CandiateCard from '../../components/CandidateCard/CandiateCard';
import CandidatesList from '../../constants/candidatesList';
import {calculateRange, sliceData} from '../../utils/table-pagination'

const ResumeBank = () => {

    const [candidates, setCandidates] = useState(CandidatesList);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(CandidatesList, 4));
        setCandidates(sliceData(CandidatesList, page, 4));
    }, []);

    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setCandidates(sliceData(CandidatesList, new_page, 4));
    }

    return (
        <div className=''>
            <DashboardNav navTitle='Resume Bank'/>
            <div className='d-flex justify-content-between content'>
                <SearchBar/>
                <div className=' card-holder m-3'>
                    <div className='pagination d-flex align-content-center'>
                    <h3>Explore Candidates </h3>
                    {
                        candidates.length !== 0 ?
                        <div className='dashboard-content-footer'>
                            {pagination.map((item, index) => (
                                <span 
                                    key={index} 
                                    className={item === page ? 'active-pagination' : 'pagination'}
                                    onClick={() => __handleChangePage(item)}>
                                        {item}
                                </span>
                            ))}
                        </div>
                    : 
                        <div className='dashboard-content-footer'>
                            <span className='empty-table'>No data</span>
                        </div>
                    }

                    </div>
                    {
                        candidates.length !== 0 ? 
                        candidates.map((candidate, id)=> (
                                <CandiateCard candidate={candidate}/>
                        ) )
                        : 'No Candidates to display'
                    }
                </div>
            </div>

        </div>
    );
};

export default ResumeBank;