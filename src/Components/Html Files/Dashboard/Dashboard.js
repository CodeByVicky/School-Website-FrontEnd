import React, { useState, useEffect } from "react";
import "../../Css Files/Dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Dashboard() {
  const [menuType, setMenuType] = useState("default");
  const [heading, setHeading] = useState("TEACHER LIST");
  const [totalData, setTotalData] = useState("--");
  const [totalDataS, setTotalDataS] = useState("--");

  const [presentData, setPresentData] = useState("--");
  const [absentData, setAbsentData] = useState("--");
  const [teacherList, setTeacherList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [classList, setClassList] = useState([]);
  const [teachers, setTeachers] = useState(teacherList);

  useEffect(() => {
    fetch("https://my-school-website.onrender.com/api/teacherInfo")
      .then((response) => response.json())
      .then((data) => {
        setTeacherList(data);
        setTeachers(data)

        setTotalData(data.length); // Set totalData with the length of the data
      })
      .catch((error) => console.error("Error fetching teacher data:", error));

    fetch("https://my-school-website.onrender.com/api/studentInfo")
      .then((response) => response.json())
      .then((data) => {
        setStudentList(data)
        setTotalDataS(data.length);
      })
      .catch((error) => console.error("Error fetching student data:", error));

    fetch("https://my-school-website.onrender.com/api/classInfo")
      .then((response) => response.json())
      .then((data) => setClassList(data))
      .catch((error) => console.error("Error fetching class data:", error));
  }, []);





 const deleteRecord = async (teacherId) => {
 
    try {
        await axios.post('https://my-school-website.onrender.com/api/deleteTech', { teacherId }); // Send teacherId in the body
        alert('Teacher successfully deleted');
        const updatedTeacherList = teacherList.filter(teacher => teacher.teacherId !== teacherId);
        setTeacherList(updatedTeacherList); // Update the original teacherList state
        setTeachers(updatedTeacherList); // Update the filtered teachers state
        setTotalData(updatedTeacherList.length);
       // console.log(updatedTeacherList)
    } catch (error) {
        console.error("Error deleting teacher:", error);
        alert('An error occurred while deleting the teacher.');
    }
};

const deleteRecordS = async (studentId) => {
 
  try {
      await axios.post('https://my-school-website.onrender.com/api/deleteStu', { studentId }); // Send teacherId in the body
      alert('Teacher successfully deleted');
      const updatedStudentList = studentList.filter(student => student.studentId !== studentId);
      setStudentList(updatedStudentList); // Update the original teacherList state
     
      setTotalDataS(updatedStudentList.length);
     // console.log(updatedTeacherList)
  } catch (error) {
      console.error("Error deleting teacher:", error);
      alert('An error occurred while deleting the teacher.');
  }
};






  function StudentInfo() {
    setHeading("STUDENT LIST");
    setMenuType("student");
    setTotalDataS(totalDataS);
    setPresentData("--");
    setAbsentData("--");
  }

  function TeacherInfo() {
    setHeading("TEACHER LIST");
    setMenuType("default");
    setTotalData(totalData);
    setPresentData("--");
    setAbsentData("--");
  }

  function AssignTeacher() {
    setHeading("ASSIGN TEACHER");
  }

  return (
    <div className="mainContainer">
      {heading === 'TEACHER LIST' && (
        <div className="dashboard-body">
          {/* Option Buttons */}
          <div className="row option col-12 col-md-6 mx-auto justify-content-center">
            <div className="col-12 col-md-4 mb-2 mb-md-0 d-flex justify-content-center">
              <button
                onClick={TeacherInfo}
                type="button"
                className="btn btn-outline-primary"
                style={{ width: "80%" }}
              >
                Teacher List
              </button>
            </div>
            <div className="col-12 col-md-4 mb-2 mb-md-0 d-flex justify-content-center">
              <button
                onClick={StudentInfo}
                type="button"
                className="btn btn-outline-primary"
                style={{ width: "80%" }}
              >
                Student List
              </button>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <button
                onClick={AssignTeacher}
                type="button"
                className="btn btn-outline-primary"
                style={{ width: "80%" }}
              >
                Assign Teachers
              </button>
            </div>
          </div>

          {/* Heading */}
          <div className="row option col-6 mx-auto justify-content-center">
            <h2 className="text-center w-100 headingBold">{heading}</h2>
          </div>

          {/* Data Boxes */}
          <div className="containerD">
            <div className="main-box row">
              {[
                { label: "Total", value: totalData, type: "default" },
                { label: "Present", value: presentData, type: "present" },
                { label: "Absent", value: absentData, type: "absent" },
              ].map((item, index) => (
                <div key={index} className="col-12 col-md-4 mb-3">
                  <div className={`box box${index + 1} text-center`}>
                    <h3 className="total">{item.label}</h3>
                    <h1 className="total">{item.value}</h1>
                    <a
                      className="total r"
                      onClick={() => setMenuType(item.type)}
                      href="#"
                    >
                      Show List
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conditional Rendering Based on menuType */}
          {menuType === "default" && (
            <div className="container1">
              {/* Search Bar */}
              <div className="searchbar">
                <div className="container2">
                  <div className="row justify-content-end">
                    <div className="col-12 col-md-6 col-lg-5 d-flex justify-content-end">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control input-text"
                          placeholder="Search ..."
                          aria-label="Search users"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button
                            onClick={() => console.log("Search term changed")}
                            className="btn btn-outline-warning"
                            type="button"
                          >
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsive Table */}
              <div className="table-responsive">
                <table className="content-table table table-bordered table-hover d-none d-md-table">
                  <thead className="thead-light">
                    <tr>
                      <th>Serial No.</th>
                      <th>Teacher Id</th>
                      <th>Full Name</th>
                      <th>Mobile No</th>
                      <th>Email Id</th>
                      <th>Password</th>
                      <th className="Action">Edit</th>
                      <th className="Action">Delete</th>
                    </tr>
                  </thead>
                  <tbody className="body">
                    {teacherList.map((teacher, index) => (
                      <tr key={teacher.id}>
                        <td>{index + 1}</td>
                        <td>{teacher.teacherId}</td>
                        <td>{teacher.firstName} {teacher.lastName}</td>
                        <td>{teacher.mobileNumber}</td>
                        <td>{teacher.email}</td>
                        <td>{teacher.password}</td>
                        <td>
                          <Link className="delete-link" to="/TeacherEditForm">
                            Edit
                          </Link>
                        </td>
                        <td>
                          <a
                            className="delete-link"
                            onClick={() => deleteRecord(teacher.teacherId)} // Pass the student ID to deleteRecord
                            style={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Mobile View */}
                <div className="d-block d-md-none">
                  {teacherList.map((teacher, index) => (
                    <div key={teacher.id} className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Serial No.: {index + 1}</h5>
                        <p className="card-text"><strong>Teacher Id:</strong> {teacher.teacherId}</p>
                        <p className="card-text"><strong>Full Name:</strong> {teacher.firstName} {teacher.lastName}</p>
                        <p className="card-text"><strong>Mobile No:</strong> {teacher.mobileNumber}</p>
                        <p className="card-text"><strong>Email Id:</strong> {teacher.email}</p>
                        <p className="card-text"><strong>Password:</strong> {teacher.password}</p>
                        <p className="card-text">
                          <Link className="delete-link" to="/TeacherEditForm">Edit</Link>
                          <a className="delete-link" href="#">Delete</a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {heading === 'STUDENT LIST' && (
        <div className="dashboard-body">


          {/* Option Buttons */}
          <div className="row option col-12 col-md-6 mx-auto justify-content-center">
            <div className="col-12 col-md-4 mb-2 mb-md-0 d-flex justify-content-center">
              <button
                onClick={TeacherInfo}
                type="button"
                className="btn btn-outline-primary"
                style={{ width: "80%" }}
              >
                Teacher List
              </button>
            </div>
            <div className="col-12 col-md-4 mb-2 mb-md-0 d-flex justify-content-center">
              <button
                onClick={StudentInfo}
                type="button"
                className="btn btn-outline-primary"
                style={{ width: "80%" }}
              >
                Student List
              </button>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <button
                onClick={AssignTeacher}
                type="button"
                className="btn btn-outline-primary"
                style={{ width: "80%" }}
              >
                Assign Teachers
              </button>
            </div>
          </div>

          {/* Heading */}
          <div className="row option col-6 mx-auto justify-content-center">
            <h2 className="text-center w-100 headingBold">{heading}</h2>
          </div>

          {/* Data Boxes */}
          <div className="containerD">
            <div className="main-box row">
              {[
                { label: "Total", value: totalDataS, type: "default" },
                { label: "Present", value: presentData, type: "present" },
                { label: "Absent", value: absentData, type: "absent" },
              ].map((item, index) => (
                <div key={index} className="col-12 col-md-4 mb-3">
                  <div className={`box box${index + 1} text-center`}>
                    <h3 className="total">{item.label}</h3>
                    <h1 className="total">{item.value}</h1>
                    <a
                      className="total r"
                      onClick={() => setMenuType(item.type)}
                      href="#"
                    >
                      Show List
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conditional Rendering Based on menuType */}
          {/* student info */}

          <div className="container1">
            {/* Search Bar */}
            <div className="searchbar">
              <div className="container2">
                <div className="row justify-content-end">
                  <div className="col-12 col-md-6 col-lg-5 d-flex justify-content-end">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control input-text"
                        placeholder="Search ..."
                        aria-label="Search users"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button
                          onClick={() => console.log("Search term changed")}
                          className="btn btn-outline-warning"
                          type="button"
                        >
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsive Table */}
            <div className="table-responsive">
              <table className="content-table table table-bordered table-hover d-none d-md-table">
                <thead className="thead-light">
                  <tr>
                    <th>Serial No.</th>
                    <th>Student Id</th>
                    <th>Full Name</th>
                    <th>Standard</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th className="Action">Edit</th>
                    <th className="Action">Delete</th>
                  </tr>
                </thead>
                <tbody className="body">
                  {studentList.map((student, index) => (
                    <tr key={student.id}>
                      <td>{index + 1}</td>
                      <td>{student.studentId}</td>
                      <td>{student.firstName} {student.lastName}</td>
                      <td>{student.standard}</td>
                      <td>{student.email}</td>
                      <td>{student.password}</td>
                      <td>
                        <Link className="delete-link" to="/StudentEditForm">
                          Edit
                        </Link>
                      </td>
                      <td>
                      <a 
                className="delete-link" 
                onClick={() => deleteRecordS(student.studentId)} // Pass the student ID to deleteRecord
                style={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
              >
                Delete
              </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile View */}
              <div className="d-block d-md-none">
                {studentList.map((student, index) => (
                  <div key={student.id} className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Serial No.: {index + 1}</h5>
                      <p className="card-text"><strong>Student Id:</strong> {student.id}</p>
                      <p className="card-text"><strong>Full Name:</strong> {student.name}  {student.name}</p>
                      <p className="card-text"><strong>Standard:</strong> {student.standard}</p>
                      <p className="card-text"><strong>Email Id:</strong> {student.email}</p>
                      <p className="card-text"><strong>Password:</strong> {student.password}</p>
                      <p className="card-text">
                        <Link className="delete-link" to="/TeacherEditForm">Edit</Link>
                        <a className="delete-link" href="#">Delete</a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>


        </div>
      )}




      {heading === 'ASSIGN TEACHER' && (
        <div className="dashboard-body">


          {/* Option Buttons */}
          <div className="row option col-12 col-md-6 mx-auto justify-content-center">
            <div className="col-12 col-md-4 mb-2 mb-md-0 d-flex justify-content-center">
              <button
                onClick={TeacherInfo}
                type="button"
                className="btn btn-outline-primary"
                style={{ width: "80%" }}
              >
                Teacher List
              </button>
            </div>
            <div className="col-12 col-md-4 mb-2 mb-md-0 d-flex justify-content-center">
              <button
                onClick={StudentInfo}
                type="button"
                className="btn btn-outline-primary"
                style={{ width: "80%" }}
              >
                Student List
              </button>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <button
                onClick={AssignTeacher}
                type="button"
                className="btn btn-outline-primary"
                style={{ width: "80%" }}
              >
                Assign Teachers
              </button>
            </div>
          </div>

          {/* Heading */}
          <div className="row option col-6 mx-auto justify-content-center">
            <h2 className="text-center w-100 headingBold">{heading}</h2>
          </div>

          {/* Data Boxes */}
          {/* <div className="containerD">
        <div className="main-box row">
          {[
            { label: "Total User", value: totalData, type: "default" },
            { label: "Present", value: presentData, type: "present" },
            { label: "Absent", value: absentData, type: "absent" },
          ].map((item, index) => (
            <div key={index} className="col-12 col-md-4 mb-3">
              <div className={`box box${index + 1} text-center`}>
                <h3 className="total">{item.label}</h3>
                <h1 className="total">{item.value}</h1>
                <a
                  className="total r"
                  onClick={() => setMenuType(item.type)}
                  href="#"
                >
                  Show List
                </a>
              </div>
            </div>
          ))}
        </div>
      </div> */}

          {/* Conditional Rendering Based on menuType */}
          {/* student info */}

          <div className="container1">
            {/* Search Bar */}
            <div className="searchbar">
              <div className="container2">
                <div className="row justify-content-end">
                  <div className="col-12 col-md-6 col-lg-5 d-flex justify-content-end">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control input-text"
                        placeholder="Search ..."
                        aria-label="Search users"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button
                          onClick={() => console.log("Search term changed")}
                          className="btn btn-outline-warning"
                          type="button"
                        >
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsive Table */}
            <div className="table-responsive">
              <table className="content-table table table-bordered table-hover d-none d-md-table">
                <thead className="thead-light">
                  <tr>
                    <th>Serial No.</th>
                    <th>Class Id</th>

                    <th>Standerd</th>
                    <th>Timeing(Mon to Fri)</th>
                    <th>Timeing(Sat)</th>
                    <th>Teacher Name</th>
                    <th className="Action">Edit</th>
                    <th className="Action">Assign</th>
                    <th className="Action">Delete</th>
                  </tr>
                </thead>
                <tbody className="body">
                  {classList.map((classList, index) => (
                    <tr key={classList.id}>
                      <td>{index + 1}</td>
                      <td>{classList.classId}</td>

                      <td>{classList.standard}</td>
                      <td>{classList.mStartTime} to {classList.mEndTime}</td>
                      <td>{classList.sStartTime} to {classList.sEndTime}</td>
                      <td>{classList.teacherName}</td>

                      <td>
                        <a className="delete-link" href="#">
                          Edit
                        </a>
                      </td>

                      <td>
                      <Link className="delete-link" to="/Assign">
                          Assign
                        </Link>
                      </td>
                      <td>
                        <a className="delete-link" href="#">
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile View */}
              <div className="d-block d-md-none">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Serial No.: 1</h5>
                    <p className="card-text"><strong>Class Id:</strong> JD123</p>
                    <p className="card-text"><strong>Class Name:</strong> raven</p>
                    <p className="card-text"><strong>Standerd:</strong> 12</p>
                    <p className="card-text"><strong>Timeing(Mon to Fri):</strong>12 to 6</p>
                    <p className="card-text"><strong>Timeing(Sat):</strong>12 to 4</p>
                    <p className="card-text"><strong>Teacher Name:</strong> vicky</p>
                    <p className="card-text">
                      <a className="delete-link" href="#">Edit</a> |
                      <a className="delete-link" href="#"> Assign</a> |
                      <a className="delete-link" href="#"> Delete</a>
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>


        </div>
      )}

    </div>
  );
}

export default Dashboard;
