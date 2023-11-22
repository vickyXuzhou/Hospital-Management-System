// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })

      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="container">
        <div className="formSection">
          <form onSubmit={handleSubmit}>
            <h2 className="formH2">Register</h2>
            <div className="formDiv">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="input"
              />
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                name="email"
                className="input"
              />
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="input"
              />

              <button className="submit" type="submit">
                submit
              </button>
            </div>
          </form>
          <p>Already have an account?</p>
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
