import React, { useState } from "react";
import axios from "axios";

function TimeTable() {
  const [formData, setFormData] = useState({
    tableId: "",
    standard: "",
   
    mathStart: "",
    mathEnd: "",
    sciStart: "",
    sciEnd: "",
    engStart: "",
    engEnd: "",
    hisStart: "",
    hisEnd: "",
    sMathStart: "",
    sMathEnd: "",
    sSciStart: "",
    sSciEnd: "",
    sHisStart: "",
    sHisEnd: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://my-school-website.onrender.com/api/createTable", formData)
      .then((response) => {
        alert("Timetable created successfully.");
        setFormData({
          tableId: "",
          standard: "",
         
          mathStart: "",
          mathEnd: "",
          sciStart: "",
          sciEnd: "",
          engStart: "",
          engEnd: "",
          hisStart: "",
          hisEnd: "",
          sMathStart: "",
          sMathEnd: "",
          sSciStart: "",
          sSciEnd: "",
          sHisStart: "",
          sHisEnd: "",
        });
      })
      .catch((error) => {
        console.error("There was an error creating the timetable!", error);
        setError("An error occurred while creating the timetable.");
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
                    <h2 className="h3">Create Timetable</h2>
                    <h3 className="fs-6 fw-normal text-secondary m-0">
                      Enter details to create Timetable
                    </h3>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  {/* Table ID and Standard */}
                  <div className="col-6">
                    <label htmlFor="tableId" className="form-label">
                      Timetable Id <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="tableId"
                      id="tableId"
                      placeholder="Table Id"
                      value={formData.tableId}
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

                 

                  {/* Subjects for Monday to Friday */}
                  <div className="col-12">
                    <label className="form-label">Select subjects for Monday to Friday</label>
                  </div>

                  <div className="col-4">
                    <label htmlFor="mathStart" className="form-label">
                      Math <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="col-4">
                    <label htmlFor="mathStart" className="form-label">
                      Start Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="mathStart"
                      id="mathStart"
                      placeholder="Start Time"
                      value={formData.mathStart}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-4">
                    <label htmlFor="mathEnd" className="form-label">
                      End Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="mathEnd"
                      id="mathEnd"
                      placeholder="End Time"
                      value={formData.mathEnd}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-4">
                    <label htmlFor="sciStart" className="form-label">
                      Science <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="col-4">
                    <label htmlFor="sciStart" className="form-label">
                      Start Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="sciStart"
                      id="sciStart"
                      placeholder="Start Time"
                      value={formData.sciStart}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-4">
                    <label htmlFor="sciEnd" className="form-label">
                      End Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="sciEnd"
                      id="sciEnd"
                      placeholder="End Time"
                      value={formData.sciEnd}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-4">
                    <label htmlFor="engStart" className="form-label">
                      English <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="col-4">
                    <label htmlFor="engStart" className="form-label">
                      Start Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="engStart"
                      id="engStart"
                      placeholder="Start Time"
                      value={formData.engStart}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-4">
                    <label htmlFor="engEnd" className="form-label">
                      End Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="engEnd"
                      id="engEnd"
                      placeholder="End Time"
                      value={formData.engEnd}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-4">
                    <label htmlFor="hisStart" className="form-label">
                      History <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="col-4">
                    <label htmlFor="hisStart" className="form-label">
                      Start Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="hisStart"
                      id="hisStart"
                      placeholder="Start Time"
                      value={formData.hisStart}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-4">
                    <label htmlFor="hisEnd" className="form-label">
                      End Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="hisEnd"
                      id="hisEnd"
                      placeholder="End Time"
                      value={formData.hisEnd}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  

                  {/* Saturday Timings */}
                  <div className="col-12">
                    <label className="form-label">Saturday</label>
                  </div>

                  <div className="col-6">
                    <label htmlFor="sMathStart" className="form-label">
                      Math Start Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="sMathStart"
                      id="sMathStart"
                      placeholder="Start Time"
                      value={formData.sMathStart}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label htmlFor="sMathEnd" className="form-label">
                      Math End Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="sMathEnd"
                      id="sMathEnd"
                      placeholder="End Time"
                      value={formData.sMathEnd}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label htmlFor="sSciStart" className="form-label">
                      Science Start Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="sSciStart"
                      id="sSciStart"
                      placeholder="Start Time"
                      value={formData.sSciStart}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label htmlFor="sSciEnd" className="form-label">
                      Science End Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="sSciEnd"
                      id="sSciEnd"
                      placeholder="End Time"
                      value={formData.sSciEnd}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label htmlFor="sHisStart" className="form-label">
                      History Start Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="sHisStart"
                      id="sHisStart"
                      placeholder="Start Time"
                      value={formData.sHisStart}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label htmlFor="sHisEnd" className="form-label">
                      History End Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="sHisEnd"
                      id="sHisEnd"
                      placeholder="End Time"
                      value={formData.sHisEnd}
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

export default TimeTable;
