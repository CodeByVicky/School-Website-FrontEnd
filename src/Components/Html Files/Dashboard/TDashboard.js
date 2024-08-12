import React, { useState, useEffect } from "react";
import "../../Css Files/Dashboard.css";
import axios from "axios";
import { Link } from "react-router-dom";
function TDashboard() {
  const [menuType, setMenuType] = useState("default");
  const [heading, setHeading] = useState("STUDENT LIST");
  const [totalData, setTotalData] = useState("--");
  const [presentData, setPresentData] = useState("--");
  const [absentData, setAbsentData] = useState("--");
  const [studentList, setStudentList] = useState([]);
  const [tableList, setTableList] = useState([]);
  
  useEffect(() => {
    const storedStandard = localStorage.getItem('isStandard');
    fetch("https://my-school-website.onrender.com/api/idTeacherInfo", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ standard: storedStandard }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setStudentList(data);
          setTotalData(data.length)
          //console.log(data)
        } else {
          console.error("Unexpected response format:", data);
        }
      })
      .catch((error) => console.error("Error fetching student data:", error));




    fetch("https://my-school-website.onrender.com/api/tableInfo")
    .then((response) => response.json())
    .then((data) => {
      setTableList(data)
     
    })




    .catch((error) => console.error("Error fetching student data:", error));
  }, []);


  const deleteRecord = async (studentId) => {
  
    try {
        await axios.post('https://my-school-website.onrender.com/api/deleteStu', { studentId }); // Send teacherId in the body
        alert('Teacher successfully deleted');
        const updatedStudentList = studentList.filter(student => student.studentId !== studentId);
        setStudentList(updatedStudentList); // Update the original teacherList state
       
        setTotalData(updatedStudentList.length);
       // console.log(updatedTeacherList)
    } catch (error) {
        console.error("Error deleting teacher:", error);
        alert('An error occurred while deleting the teacher.');
    }
  };
  

  function StudentInfo() {
    setHeading("STUDENT LIST");
    setMenuType("student")
    setTotalData(totalData);
    setPresentData("--");
    setAbsentData("--");
  }

  function ShowTimeTable(){
    setHeading("TIME TABLES");
  }

 

 
  return (
    

    <div className="mainContainer">




{heading === 'STUDENT LIST' && (
      <div className="dashboard-body">

          
      {/* Option Buttons */}
      <div className="row option col-12 col-md-6 mx-auto justify-content-center">
        
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
            onClick={ShowTimeTable}
            type="button"
            className="btn btn-outline-primary"
            style={{ width: "80%" }}
          >
            Show TimeTable
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
        <Link className="delete-link"
         
        to="/StudentEditForm">
          Edit
        </Link>
      </td>
      <td>
      <a 
                className="delete-link" 
                onClick={() => deleteRecord(student.studentId)} // Pass the student ID to deleteRecord
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
                          <a 
                className="delete-link" 
                onClick={() => deleteRecord(student.id)} // Pass the student ID to deleteRecord
                style={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
              >
                Delete
              </a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div> 
</div>

</div>



    </div>
    )}


{heading === "TIME TABLES" && (
        <div className="dashboard-body">
        
      <div className="row option col-12 col-md-6 mx-auto justify-content-center">
        
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
            onClick={ShowTimeTable}
            type="button"
            className="btn btn-outline-primary"
            style={{ width: "80%" }}
          >
            Show TimeTables
          </button>
        </div>
      </div>

    
      <div className="row option col-6 mx-auto justify-content-center">
        <h2 className="text-center w-100 headingBold">{heading}</h2>
      </div>

      {/* <div className="table-responsive">
<table className="content-table table table-bordered table-hover d-none d-md-table">
  <thead className="thead-light">
    <tr>
      <th>Serial No.</th>
      <th>TimeTable Id</th>
      <th>Standard</th>
      <th>Mathematic(M)</th>
      <th>Science(M)</th>
      <th>English(M)</th>
      <th>History(M)</th>

      <th>Mathematic(S)</th>
      <th>Science(S)</th>
     
      <th>History(S)</th>
      <th className="Action">Edit</th>
      <th className="Action">Delete</th>
    </tr>
  </thead>
  <tbody className="body">
    {tableList.map((table,index)=>(
    <tr key={table.id}>
      <td>{index + 1}</td>
      <td>{table.tableId}</td>
      <td>{table.standard}</td>
      <td>{table.mathStart} to {table.mathEnd}</td>
      <td>{table.sciStart} to {table.sciEnd}</td>
      <td>{table.engStart} to {table.engEnd}</td>
      <td>{table.hisStart} to {table.hisEnd}</td>
      <td>{table.sMathStart} to {table.sMathEnd}</td>
      <td>{table.sSciStart} to {table.sSciEnd}</td>
      <td>{table.sHisStart} to {table.sHisEnd}</td>
      <td>
        <Link className="delete-link" to="/StudentEditForm">
          Edit
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


<div className="d-block d-md-none">
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">Serial No.: 1</h5>
      <p className="card-text"><strong>Teacher Id:</strong> JD123</p>
      <p className="card-text"><strong>Full Name:</strong> John Doe</p>
      <p className="card-text"><strong>Mobile No:</strong> 1234567890</p>
      <p className="card-text"><strong>Roll Number:</strong> thevicky144@gmail.com</p>
      <p className="card-text"><strong>Password:</strong> thevicky144</p>
      <p className="card-text">
        <a className="delete-link" href="#">Edit</a> | 
        <a className="delete-link" href="#">Delete</a>
      </p>
    </div>
  </div>
 
</div>
</div> */}
        </div>
      )}


    </div>
  
  );
}

export default TDashboard;
