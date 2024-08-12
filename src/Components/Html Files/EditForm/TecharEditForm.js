import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function TeacherForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    teacherId: '',
    mobileNumber: '',
    standard: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Post data to the update API
    axios.post('https://my-school-website.onrender.com/api/updateTech', formData)
      .then(response => {
        alert('Record updated successfully');
        navigate('/Dashboard');
        setError(''); // Clear previous errors
        // Optionally clear form data or redirect if needed
      })
      .catch(error => {
        console.error('Error updating teacher:', error);
        setError('Update failed. Please try again.');
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
                    <h2 className="h3">Update Teacher Record</h2>
                    <h3 className="fs-6 fw-normal text-secondary m-0">
                      Enter details to update
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
                  <div className="col-4">
                    <label htmlFor="teacherId" className="form-label">
                      Teacher ID <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="teacherId"
                      id="teacherId"
                      placeholder="Teacher ID"
                      value={formData.teacherId}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="mobileNumber" className="form-label">
                      Mobile Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="mobileNumber"
                      id="mobileNumber"
                      placeholder="Mobile Number"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="standard" className="form-label">
                      Standard <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="standard"
                      id="standard"
                      placeholder="Standard"
                      value={formData.standard}
                      onChange={handleChange}
                      required
                    />
                  </div>
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="password" className="form-label">
                      Create Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
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
                        Update
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

export default TeacherForm;
