import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import React from 'react'

const Loginn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        if (res.data === "success") {
          console.log("the response", res);
          toast.success(
            "Login Successful"
            // position: toast.POSITION.TOP_RIGHT,
          );
          navigate("/frontPage");
        }
      })
      .catch((err) => {
        toast.success(err);
      });
  };
  return (
    <div>
      <div className="loginContainer">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="formH2">Login</h2>
          <div className="formDiv">
            <label htmlFor="email" className="label">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="input"
            />
            <label htmlFor="password" className="label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="input"
            />

            <button className="submit button" type="submit">
              login
            </button>
          </div>
        </form>
        <div className="signUp">
          <p>Don't have an account?</p>
          <Link to="/signup">
            <button className="signUpBtn button">SignUp</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loginn;
