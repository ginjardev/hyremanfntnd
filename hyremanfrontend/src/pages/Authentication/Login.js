import React from 'react';
import SignupNav from '../../components/SignupNav';
import Logo from '../../assets/logo/HyremanAsset.svg';
import './Login.css'
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div>
        <div>
            <SignupNav/>
        <div className='container-fluid d-flex justify-content-around m-2'>
            <div className='w-40'>
                <img src={Logo} alt='Hyreman'  className='m-4'/>
            </div>
            <div className='w-50 d-flex justify-content-center mt-5'>
                    <div className='w-75 d-flex align-content-center justify-content-center mt-5'>
                    <div className=' d-flex flex-column rounded p-4 loginBox h-70 shadow-sm'>
                        <div className='text-center'>
                            <p className='fs-4'>Create Account</p>
                            <p>Get started by creating a candidate’s account</p>
                        </div>
                <div className="row">
                    <div className=''>
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter Email" id="inputEmail4"/>
                    </div>
                </div>
                <div className='row'>
                    <div className="">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter Password" id="inputPassword3" />
                    </div>
                </div>
                <div className='m-4 d-flex justify-content-center'>
                    <NavLink to='/dashboard'>
                        <button class="btn btn-primary px-5" type="submit" disabled>Login</button>
                    </NavLink>
                </div>
            </div>                        
                    </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Login;