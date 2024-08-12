import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPrinciple({setIsPrincipalLoggedIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 
  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('https://my-school-website.onrender.com/api/loginAdmin', { email, password })
      .then(response => {
        if (response.status === 200) {    
          localStorage.setItem('setIsPrincipalLoggedIn',true)
          localStorage.setItem('setIsTeacherLoggedIn',false)
          localStorage.setItem('setIsStudentLoggedIn',false)
          setIsPrincipalLoggedIn(true)
          navigate('/Dashboard');
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
                    <h2 className="h3">Principal Login</h2>
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
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="name@example.com"
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

export default LoginPrinciple;
