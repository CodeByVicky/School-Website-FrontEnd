import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginStudent({ setIsStudentLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
 

  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('https://my-school-website.onrender.com/api/loginStu', { email, password })
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem('setIsPrincipalLoggedIn',false)
              localStorage.setItem('setIsTeacherLoggedIn',false)
              localStorage.setItem('setIsStudentLoggedIn',true)

         //     setIsPrincipalLoggedIn(false);
         //     setIsTeacherLoggedIn(false);
              setIsStudentLoggedIn(true);
          fetch("https://my-school-website.onrender.com/api/StaFindStudent", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch student standard');
                }
                return response.json();
            })
            .then((data) => {
              // or wherever you want to navigate after login
             
              localStorage.setItem('isStandard', data); 
              
              //  alert(data)
              navigate('/SDashboard');
            })
            .catch((error) => console.error("Error fetching student data:", error));
        



         
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
        setError('Invalid email or password');
      });
  };

  return (
    <div className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
            <div className="bg-white p-4 p-md-5 rounded shadow-sm">
              <div className="row">
                <div className="col-12">
                  <div className="mb-5">
                    <h2 className="h3">Student Login</h2>
                    <h3 className="fs-6 fw-normal text-secondary m-0">
                      Enter details to Login
                    </h3>
                  </div>
                </div>
              </div>
              <form onSubmit={handleLogin}>
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email Id <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Enter  Email Id"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="password" className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  {error && (
                    <div className="col-12">
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    </div>
                  )}
                  <div className="col-12">
                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-primary"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginStudent;
