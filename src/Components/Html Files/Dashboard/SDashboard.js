import React, { useState, useEffect } from "react";
import "../../Css Files/Dashboard.css";
import { Link } from "react-router-dom";
function SDashboard() {
  const [menuType, setMenuType] = useState("default");
  const [heading, setHeading] = useState("STUDENT LIST");
  const [studentList, setStudentList] = useState([]);
  const [tableList, setTableList] = useState([]);

  //alert(isStandard)

  useEffect(() => {
    const storedStandard = localStorage.getItem('isStandard');
    fetch("https://my-school-website.onrender.com/api/idStudentInfo", {
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
          console.log(data)
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



  function StudentInfo() {
    setHeading("STUDENT LIST");
    setMenuType("student")
    
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

      <div className="table-responsive">
<table className="content-table table table-bordered table-hover d-none d-md-table">
  <thead className="thead-light">
    <tr>
      <th>Serial No.</th>
      <th>Student Id</th>
      <th>Full Name</th>
      <th>Standard</th>
     
    
    </tr>
  </thead>
  <tbody className="body">
  {studentList.map((student, index) => (
      <tr key={student.id}>
     <td>{index + 1}</td>
     <td>{student.studentId}</td>
      <td>{student.firstName} {student.lastName}</td>
      <td>{student.standard}</td>
    
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

export default SDashboard;
