import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function StudentEditForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    studentId: '',
    standard: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); 
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // Add success state

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
    axios.post('https://my-school-website.onrender.com/api/updateStu', formData)
      .then(response => {
        alert('Student record updated successfully');
        navigate('/TDashboard');
        setError(''); // Clear previous errors
      })
      .catch(error => {
        console.error('Error updating student:', error);
        setError('Update failed. Please try again.');
        setSuccess(''); // Clear previous success messages
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
                    <h2 className="h3">Update Student Record</h2>
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
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="studentId" className="form-label">
                      Student Id
                    </label>
                    <input
                      type="non"
                      className="form-control"
                      name="studentId"
                      id="studentId"
                      placeholder="Student Id"
                      value={formData.studentId}
                      onChange={handleChange}
                      readOnly
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="standard" className="form-label">
                      Standard
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="standard"
                      id="standard"
                      placeholder="Standard"
                      value={formData.standard}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="email" className="form-label">
                      Email Id
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  {error && (
                    <div className="col-12">
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    </div>
                  )}
                  {success && (
                    <div className="col-12">
                      <div className="alert alert-success" role="alert">
                        {success}
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

export default StudentEditForm;
