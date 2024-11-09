import React from 'react'
import { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import logo from "../img/logo3.png";
import { Link } from "react-router-dom";

function SignUp( ) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpButtonPressed = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      alert("User Creation Successful");
      alert("Login Successful");
      window.location.href = "/scene";
    } catch (error) {
      console.log('Error logging in:', error.code);
    }
  };


  {/* Got inspo from https://mdbootstrap.com/docs/standard/extended/login/ */}
  return (
    <section className="login">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="login-form col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={signUpButtonPressed}>
            <div className="header">
              <div className="text">
                <h1 className="font-only-heading">REGISTER</h1>
              </div>
              <div className="underline"></div>
            </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-light hero-learn-btn-2"
                >
                  Register
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0 text-white">
                 Already have an account? <Link to="/Login" className="btn btn-link-light p-0">Login Now</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp