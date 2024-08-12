import React, { useState } from "react";
import axios from 'axios';

function StudentForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    studentId: '',
    standard: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Post data to the API
    axios.post('https://my-school-website.onrender.com/api/createStu', formData)
      .then(response => {
        alert('Student record added successfully');
        
        // Reset form fields
        setFormData({
          firstName: '',
          lastName: '',
          studentId: '',
          standard: '',
          email: '',
          password: ''
        });
      })
      .catch(error => {
        console.error('Error registering student:', error);
        setError('Registration failed. Please try again.');
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
                    <h2 className="h3">Student Registration</h2>
                    <h3 className="fs-6 fw-normal text-secondary m-0">
                      Enter details to register
                    </h3>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  <div className="col-6">
                    <label htmlFor="firstName" className="form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="lastName" className="form-label">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="studentId" className="form-label">
                      Student Id <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="studentId"
                      id="studentId"
                      placeholder="Student Id"
                      value={formData.studentId}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="standard" className="form-label">
                      Standard <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="standard"
                      id="standard"
                      placeholder="Standard"
                      value={formData.standard}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="email" className="form-label">
                      Email Id <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="password" className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
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
                      <button className="btn btn-lg btn-primary" type="submit">
                        Sign up
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

export default StudentForm;
