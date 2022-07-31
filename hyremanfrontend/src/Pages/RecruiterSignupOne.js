import React from 'react';
import SignupNav from '../Components/SignupNav';
import Logo from '../assets/Asset-3hyreman.svg';

const RecruiterSignupOne = () => {
    return (
        <div>
            <SignupNav/>
            <div className='container-fluid row m-1'>
                <div className='col border-end'>
                    <img src={Logo} alt='Hyreman'  className='m-5'/>
                </div>
                <div className='col border-start d-flex justify-content-center'>
                    <div className='d-flex d-flex flex-column p-3 formbox'>
                        <div>
                            <p>Create Account</p>
                            <p>Get started by creating a recruiter's account</p>
                        </div>
                        <form className=''>
                            <div className='text-start'>    
                                <label>First Name</label><br/>
                                <input type='text' placeholder='Enter name' required/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default RecruiterSignupOne;