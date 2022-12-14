import React, { useState, useEffect } from "react";
import SignupNav from '../../Components/SignupNav';
import Logo from "../../assets/logo/HyremanAsset.svg";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(true);


  const handleSubmit = (e) => {
    setIsActive(!isActive);
    e.preventDefault();

    fetch("https://hyremanbackend.herokuapp.com/users/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('token', data.token);
        if(data.user.is_recruiter === true){
          navigate('/resume-bank');
        }
        else{ 
          navigate("https://forms.gle/BxJeweXXKUuAjaHR8");
        }
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <SignupNav />
        <div className="container-fluid d-flex justify-content-around m-2">
          <div className="w-40">
            <img src={Logo} alt="Hyreman" className="m-4" />
          </div>
          <div className="w-50 d-flex justify-content-center mt-5">
            <div className="w-75 d-flex align-content-center justify-content-center mt-5">
              <form
                className="d-flex flex-column rounded p-4 loginBox h-70 shadow-sm"
                onSubmit={handleSubmit}
              >
                <div className="text-center">
                  <p className="fs-4">Login Account</p>
                  <p>Input your details to gain access</p>
                </div>
                <div className="row">
                  <div className="">
                    <label for="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Enter Email"
                      id="inputEmail4"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="">
                    <label
                      for="inputPassword3"
                      className="col-sm-2 col-form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                      id="inputPassword3"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="m-4 d-flex justify-content-center">
                  <button class ="btn btn-primary px-5" type="submit">
                  <span class={isActive ? '' : "spinner-border spinner-border-sm"} role="status" aria-hidden="true"></span>&nbsp;
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
