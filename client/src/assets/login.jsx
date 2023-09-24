import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate=useNavigate()

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

     // handleSubmit to send data to the sarver side
    const handleSubmit=(e)=>{
        e.preventDefault()
        //using axios to post the data
        //Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser
        axios.post('http://localhost:3001/login',
        {
            email,
            password
        }
        )
        .then(result=>{
          console.log(result)
          if(result.data==="Success"){
            navigate('/home')
  
          }
        })
        .catch(err=>console.log(err))

    }







  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form
        //to send data to the sarver side
        onSubmit={handleSubmit}
        >
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
                onChange={(e)=>{setEmail(e.target.value)}}
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
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Register
            </button>
          </div>
          <p>
            Don't Have an Account <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
