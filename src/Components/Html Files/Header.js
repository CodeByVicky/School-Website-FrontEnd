import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Css Files/Header.css';

function Header({ isPrincipalLoggedIn, isTeacherLoggedIn, isStudentLoggedIn }) {
  const [login, setLogin] = useState('default');

  useEffect(() => {
    const PrincipalLoggedIn = localStorage.getItem('setIsPrincipalLoggedIn') === 'true';
    const TeacherLoggedIn = localStorage.getItem('setIsTeacherLoggedIn') === 'true';
    const StudentLoggedIn = localStorage.getItem('setIsStudentLoggedIn') === 'true';

    if (PrincipalLoggedIn || isPrincipalLoggedIn) {
      setLogin('principal');
    } else if (TeacherLoggedIn || isTeacherLoggedIn) {
      setLogin('teacher');
    } else if (StudentLoggedIn || isStudentLoggedIn) {
      setLogin('student');
    } else {
      setLogin('default');
    }
  }, [isPrincipalLoggedIn, isTeacherLoggedIn, isStudentLoggedIn]); // Updated dependencies

  const handleLogout = () => {
    setLogin('default'); // Reset the login state to 'default'
    localStorage.removeItem('isStandard');
    localStorage.setItem('setIsPrincipalLoggedIn', 'false');
    localStorage.setItem('setIsTeacherLoggedIn', 'false');
    localStorage.setItem('setIsStudentLoggedIn', 'false');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-1">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Class Room</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>

            {login === 'principal' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/ClassRoom">Create Classroom</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/dropdown-link"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Create Account
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/TeacherForm">Teacher Account</Link></li>
                    <li><Link className="dropdown-item" to="/StudentForm">Student Account</Link></li>
                  </ul>
                </li>
              </>
            )}

            {login === 'teacher' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/TimeTable">Create TimeTable</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/StudentForm">Create Student Account</Link>
                </li>
              </>
            )}
          </ul>

          {login !== 'default' ? (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link onClick={handleLogout} className="nav-link active" to="/">Logout</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={login === 'principal' ? '/Dashboard' : login === 'teacher' ? '/TDashboard' : '/SDashboard'}>
                  Dashboard
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/LoginStudent">Student Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/LoginTeacher">Teacher Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/LoginPrinciple">Principal Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
