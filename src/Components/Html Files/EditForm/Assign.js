import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Assign() {
  const [classId, setClassId] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://my-school-website.onrender.com/api/assign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ classId, teacherName }),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Assigsuccessful');
        navigate('/Dashboard');
        setError('');
      } else {
        const errorResult = await response.json();
        setError(errorResult.error || 'An error occurred');
        setSuccessMessage('');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('An error occurred while making the request');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h5 className="card-title mb-4">Assign Task</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="classId">Class Id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="classId"
                    value={classId}
                    onChange={(e) => setClassId(e.target.value)}
                    placeholder="Enter class ID"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="teacherName">Teacher Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="teacherName"
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                    placeholder="Enter teacher name"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-4">Assign</button>
              </form>
              {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assign;
