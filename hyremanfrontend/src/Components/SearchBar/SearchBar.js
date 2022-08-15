import React, {useState} from 'react';
import TagsInput from '../TagsInput';
import Tools from '../Tools';

const SearchBar = ({getResumesByTag, filterName}) => {

    console.log(filterName);

    const onChangeGender=(e)=>{
        const value = e.target.value;
        getResumesByTag(value,'gender');
        console.log(value);
        
    }

    const onChangeExperience=(e)=>{
        const value = e.target.value;
        getResumesByTag(value,'experience_level');
        console.log(value);
    }

    const onChangeEducation=(e)=>{
        const value = e.target.value;
        getResumesByTag(value,'education');
        console.log(value);
    }


    const onChangeCountry=(e)=>{
        const value = e.target.value;
        getResumesByTag(value,'country');
        console.log(value);
    }

    const onChangeRegion=(e)=>{
        const value = e.target.value;
        getResumesByTag(value,'region');
        console.log(value);
    }

    return (
        <div className='search-bar-container'>
            <div className='col-3 bg-info align-items-center m-2 search-bar'>
                <div className='p-3 border-bottom'>
                    <label for="education" class="form-label">Education</label>
                    <select class="form-select" aria-label="Default select example" onChange={onChangeEducation}>
                        <option value="">Select Education</option>
                        <option value="SSCE">SSCE</option>
                        <option value="Bachelor of Arts" >Bachelor of Arts</option>
                        <option value="Bachelor of Science">Bachelor of Science</option>
                        <option value="Master of Science">Master of Science</option>
                        <option value="Master of Business Administration">Master of Business Administration</option>
                    </select>
                </div>
                <div className='p-3 border-bottom'>
                    <label for="gender" class="form-label">Gender</label>
                    <select class="form-select" aria-label="Default select example" onChange={onChangeGender}>
                        <option value="">Select Gender</option>
                        <option value="F">Female</option>
                        <option value="M" >Male</option>
                    </select>
                </div>
                <div className='p-3 border-bottom'>
                    <label for="region" class="form-label">Region</label>
                    <select class="form-select" aria-label="Default select example" onChange={onChangeRegion}>
                        <option value="">Select Region</option>
                        <option value="Kumasi">Kumasi</option>
                        <option value="Greater Accra" >Greater Accra</option>
                        <option value="Lagos" >Lagos</option>
                        <option value="Takoradi" >Takoradi</option>
                        <option value="Abuja" >Abuja</option>
                    </select>
                </div>
                <div className='p-3 border-bottom'>
                    <label for="country" class="form-label">Country</label>
                    <select class="form-select" aria-label="Default select example" onChange={onChangeCountry}>
                        <option value="">Select Country</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Nigeria">Nigeria</option>
                    </select>
                </div>
                {/* <div className='p-3 border-bottom'>
                    <label for="location" class="form-label">Tools</label>
                    <Tools/>
                </div>
                <div className='p-3 border-bottom'>
                    <label for="location" class="form-label">Skills &amp; Expertise</label>
                    <TagsInput filterName={"skill"} getResumesByTag={getResumesByTag}/>
                </div> */}
                <div className='p-3 border-bottom'>
                    <label for="Experience Level" class="form-label">Experience Level</label>
                    <select class="form-select" aria-label="Default select example" onChange={onChangeExperience}>
                        <option value="">Select Experience Level</option>
                        <option value="Entry Level">Entry Level</option>
                        <option value="Mid Level">Mid Level</option>
                        <option value="Senior Level">Senior Level</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;