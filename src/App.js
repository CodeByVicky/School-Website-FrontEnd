import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Html Files/Header";
import Home from "./Components/Html Files/Home";
import Footer from "./Components/Html Files/Footer";
import LoginPrinciple from "./Components/Html Files/Login/LoginPrinciple";
import LoginTeacher from "./Components/Html Files/Login/LoginTeacher";
import LoginStudent from "./Components/Html Files/Login/LoginStudent";
import TeacherForm from "./Components/Html Files/Forms/TeacherForm";
import StudentForm from "./Components/Html Files/Forms/StudentForm";
import ClassRoom from "./Components/Html Files/Forms/ClassRoom";
import Dashboard from "./Components/Html Files/Dashboard/Dashboard";
import TeacherEditForm from "./Components/Html Files/EditForm/TecharEditForm";
import StudentEditForm from "./Components/Html Files/EditForm/StudentEditForm";
import TimeTable from "./Components/Html Files/Forms/TimeTable";
import TDashboard from "./Components/Html Files/Dashboard/TDashboard";
import SDashboard from "./Components/Html Files/Dashboard/SDashboard";
import Assign from "./Components/Html Files/EditForm/Assign";
function App() {
  const [isPrincipalLoggedIn, setIsPrincipalLoggedIn] = useState(false);
  const [isTeacherLoggedIn, setIsTeacherLoggedIn] = useState(false);
  const [isStudentLoggedIn, setIsStudentLoggedIn] = useState(false);


  return (
    <Router>
      <Header
        isPrincipalLoggedIn={isPrincipalLoggedIn}
        isTeacherLoggedIn={isTeacherLoggedIn}
        isStudentLoggedIn={isStudentLoggedIn}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/LoginPrinciple"
          element={<LoginPrinciple setIsPrincipalLoggedIn={setIsPrincipalLoggedIn} />}
        />
        <Route
          path="/LoginTeacher"
          element={<LoginTeacher setIsTeacherLoggedIn={setIsTeacherLoggedIn} />}
        />
        <Route
          path="/LoginStudent"
          element={
            <LoginStudent
              setIsStudentLoggedIn={setIsStudentLoggedIn}
              // setIsTeacherLoggedIn={setIsTeacherLoggedIn}
              // setIsPrincipalLoggedIn={setIsPrincipalLoggedIn}
            />
          }
        />
        <Route path="/TeacherForm" element={<TeacherForm />} />
        <Route path="/StudentForm" element={<StudentForm />} />
        <Route path="/ClassRoom" element={<ClassRoom />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/TeacherEditForm" element={<TeacherEditForm />} />
        <Route path="/StudentEditForm" element={<StudentEditForm/>} />
        <Route path="/TimeTable" element={<TimeTable />} />
        <Route path="/TDashboard" element={<TDashboard />} />
        <Route path="/SDashboard" element={<SDashboard />} />
        <Route path="/Assign" element={<Assign />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
