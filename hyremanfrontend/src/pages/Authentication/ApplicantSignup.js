import React, { useState } from "react";
import SignupNav from "../../components/SignupNav";
import Logo from "../../assets/logo/HyremanAsset.svg";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const ApplicantSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRecruiter, setIsRecruiter] = useState(false);

  let navigate = useNavigate("/applicant-signup");

  const handleSubmit = (e) => {
    e.preventDefault();

    // send data to backend
    fetch("https://hyremanbackend.herokuapp.com/users/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        confirm_password: password,
        is_recruiter: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setIsRecruiter(false);
        navigate("/login");
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
            <form
              onSubmit={handleSubmit}
              className="w-75 d-flex align-content-center justify-content-center mt-5"
            >
              <div className=" d-flex flex-column rounded p-4 loginBox h-75 shadow-sm">
                <div className="text-center">
                  <p className="fs-4">Create Account</p>
                  <p>Get started by creating a candidate’s account</p>
                </div>
                <div className="row">
                  <div className="col">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      placeholder="Enter First name"
                      aria-label="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Enter Last name"
                      aria-label="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="">
                    <label for="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email"
                      id="inputEmail4"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      name="password"
                      className="form-control"
                      placeholder="Enter Password"
                      id="inputPassword3"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="m-4 d-flex justify-content-center">
                  <button class="btn btn-primary px-5" type="submit">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantSignup;
