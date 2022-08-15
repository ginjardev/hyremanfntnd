import React, {useState} from 'react';
import TagsInput from '../TagsInput';
import Tools from '../Tools';

const SearchBar = ({getResumesByTag, filterName}) => {

    console.log(filterName);
    const onChange=(e)=>{
        const value = e.target.value;
        getResumesByTag(value,'gender');
        console.log(value);
        
    }


    return (
        <div className='search-bar-container'>
            <div className='col-3 bg-info align-items-center m-2 search-bar'>
                <div className='p-3 border-bottom'>
                    <label for="location" class="form-label">Education</label>
                    <TagsInput filterName={"education"} getResumesByTag={getResumesByTag}/>
                </div>
                <div className='p-3 border-bottom'>
                    <label for="location" class="form-label">Gender</label>
                    <select class="form-select" aria-label="Default select example" onChange={onChange}>
                        <option value="">Select Gender</option>
                        <option value="F">Female</option>
                        <option value="M" >Male</option>
                    </select>
                </div>
                <div className='p-3 border-bottom'>
                    <label for="location" class="form-label">Location</label>
                    <TagsInput filterName={"region"} getResumesByTag={getResumesByTag}/>
                </div>
                <div className='p-3 border-bottom'>
                    <label for="location" class="form-label">Country</label>
                    <TagsInput filterName={"country"} getResumesByTag={getResumesByTag}/>
                </div>
                <div className='p-3 border-bottom'>
                    <label for="location" class="form-label">Tools</label>
                    <Tools/>
                </div>
                <div className='p-3 border-bottom'>
                    <label for="location" class="form-label">Skills &amp; Expertise</label>
                    <TagsInput filterName={"skill"} getResumesByTag={getResumesByTag}/>
                </div>
                <div className='p-3 border-bottom'>
                    <label for="location" class="form-label">Experience</label>
                    <Tools/>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;