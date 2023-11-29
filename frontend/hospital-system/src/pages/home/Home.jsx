import React from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  return (
    <div className="container">
      <Link to={"/DoctorDetail"}>
        <button className="button1">Doctor Details</button>
      </Link>
      <Link to={"/ViewDoctorDetails"}>
        <button className="button1">View Doctor Details</button>
      </Link>
      <Link to={"/MedicalService"}>
        <button className="button1">Medical Services</button>
      </Link>
      <Link to={"/ViewMedicalService"}>
        <button className="button1">View Medical Services</button>
      </Link>
    </div>
  );
};

export default Home;
