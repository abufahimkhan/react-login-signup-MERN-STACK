import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();

  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //using axios to post the data
    //Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser
    // Axios is a popular JavaScript library that is used for making HTTP requests in both Node.js environments and web browsers.
    // It provides a simple and consistent API for sending HTTP requests and handling responses.
    // In the code you've provided, Axios is used to make a POST request to a local server running on http://localhost:3001/signup.
    // POST method is used to submit data to be processed to a specified resource.
    //  It is often used to send data to a server to create or update a resource,
    //   such as submitting form data or sending data to an API.
    axios
      .post("http://localhost:3001/signup", {
        name,
        email,
        password,
      })
      .then((result) => console.log(result));
    navigate("/login").catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Signup</h2>
        <form
          // //to send data to the sarver side
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>

            <input
              className="form-control rounded-0"
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>

              <input
                className="form-control rounded-0"
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Password</strong>
              </label>

              <input
                className="form-control rounded-0"
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Register
            </button>
          </div>
        </form>
        <p>
          Already Have an Account <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
export default Signup;
