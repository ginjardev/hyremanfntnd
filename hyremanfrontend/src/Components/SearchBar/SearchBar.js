import React from 'react';
import TagsInput from '../TagsInput';
import Tools from '../Tools';

const SearchBar = () => {
    return (
        <div className='search-bar-container'>
            <div className='col-3 bg-info align-items-center m-2 search-bar'>
                <div className='p-3 border-bottom'>
                    <label for="location" class="form-label">Education</label>
                    <TagsInput/>
                </div>
                <div className='p-3 border-bottom'>
                    <label for="location" class="form-label">Gender</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Female</option>
                        <option value="1">Male</option>
                    </select>
                </div>
                <div className='p-3 border-bottom'>
                    <label for="location" class="form-label">Location</label>
                    <TagsInput/>
                </div>
                <div className='p-3 border-bottom'>
                    <label for="location" class="form-label">Country</label>
                    <TagsInput/>
                </div>
                <div className='p-3 border-bottom'>
                    <label for="location" class="form-label">Tools</label>
                    <Tools/>
                </div>
                <div className='p-3 border-bottom'>
                    <label for="location" class="form-label">Skills &amp; Expertise</label>
                    <TagsInput/>
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