import React, { useState } from "react";
import axios from "axios";

function ClassRoom() {
  const [formData, setFormData] = useState({
    classId: "",
    className: "",
    standard: "",
    mStartTime: "",
    mEndTime: "",
    sStartTime: "",
    sEndTime: ""
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://my-school-website.onrender.com/api/createClass", formData)
      .then((response) => {
        alert("Classroom created successfully.");
        setFormData({
          classId: "",
          className: "",
          standard: "",
          mStartTime: "",
          mEndTime: "",
          sStartTime: "",
          sEndTime: ""
        });
      })
      .catch((error) => {
        console.error("There was an error creating the classroom!", error);
        setError('An error occurred while creating the classroom.');
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
                    <h2 className="h3">Create Classroom</h2>
                    <h3 className="fs-6 fw-normal text-secondary m-0">
                      Enter details to create classroom
                    </h3>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  <div className="col-4">
                    <label htmlFor="className" className="form-label">
                      Teacher Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="className"
                      id="className"
                      placeholder="Class Name"
                      value={formData.className}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-4">
                    <label htmlFor="classId" className="form-label">
                      Class Id <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="classId"
                      id="classId"
                      placeholder="Class Id"
                      value={formData.classId}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-4">
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

                  <div className="col-12">
                    <label className="form-label">
                      Monday to Friday
                    </label>
                  </div>

                  <div className="col-6">
                    <label htmlFor="mStartTime" className="form-label">
                      Start Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="mStartTime"
                      id="mStartTime"
                      placeholder="Start Time"
                      value={formData.mStartTime}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label htmlFor="mEndTime" className="form-label">
                      End Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="mEndTime"
                      id="mEndTime"
                      placeholder="End Time"
                      value={formData.mEndTime}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">
                      Saturday
                    </label>
                  </div>

                  <div className="col-6">
                    <label htmlFor="sStartTime" className="form-label">
                      Start Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="sStartTime"
                      id="sStartTime"
                      placeholder="Start Time"
                      value={formData.sStartTime}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label htmlFor="sEndTime" className="form-label">
                      End Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="sEndTime"
                      id="sEndTime"
                      placeholder="End Time"
                      value={formData.sEndTime}
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
                      <button
                        className="btn btn-lg btn-primary"
                        type="submit"
                      >
                        Create
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

export default ClassRoom;
