import React from "react";
import HomeImage from "../../assets/images/HyremanBackgroundImage.svg";
import "./Home.css";
import RoundedButton from "../../Components/Buttons/RoundedButton";
import TransparentButton from "../../Components/Buttons/TransparentButton";
import RightArrow from "../../assets/icons/chevron-right.svg";
import Logo from "../../assets/logo/HyremanLogo.svg";
import { NavLink } from "react-router-dom";

const Home = () => {
  let imageStyle = {
    backgroundImage: `url(${HomeImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="position-relative" style={imageStyle}>
      <div className="landing-image" style={{ height: "100vh", width:"100%"}}>
        <div>
          <nav className="d-flex align-content-center justify-content-between w-100">
            <div className="d-flex align-content-center justify-content-around p-5 navLeft">
              <img src={Logo} alt="hyreman Logo" width="35%" />
              <div className=" d-flex align-content-center justify-content-around">
                <TransparentButton title="Why Hyreman" />
                <TransparentButton title="Blog" />
              </div>
            </div>
            <div className="d-flex align-content-center justify-content-around p-5 navRight">
              <div className="d-flex align-content-center justify-content-around">
                <NavLink to="login">
                  <TransparentButton title="Login" />
                </NavLink>
                <NavLink to="/recruiter-signup">
                  <TransparentButton title="Signup" />
                </NavLink>
              </div>
              <NavLink to="/applicant-signup">
                <RoundedButton
                  title="Upload Resume"
                  className="ps-4 pe-4 py-2 rounded-pill text-white border border-primary bg-primary "
                />
              </NavLink>
            </div>
          </nav>

          <div className="d-flex justify-content-center text-center mt-5">
            <div className="w-50">
              <h1 className="fw-bold text-white" style={{fontSize:"90px" }}>
                <span style={{ color: "#D2D620" }}>Exposing</span> job seekers
                to
                <br />
                better opportunities
              </h1>
              <p className="text-white py-1" style={{fontSize:"22px" }}>
                Searching for candidates can be stressful. Let’s help <br />
                make it stress-free
              </p>
              <NavLink to="recruiter-signup">
                <RoundedButton
                  title="Discover Talents"
                  className="px-4 py-2 rounded-pill text-white border border-primary   bg-primary my-2"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
