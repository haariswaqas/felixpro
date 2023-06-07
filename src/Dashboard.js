import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [showStudentDetails, setShowStudentDetails] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showTimetable, setShowTimetable] = useState(false);
  const [showAccommodation, setShowAccommodation] = useState(false);

  const toggleStudentDetails = () => {
    setShowStudentDetails(!showStudentDetails);
  };

  const toggleCourses = () => {
    setShowCourses(!showCourses);
  };

  const toggleDepartments = () => {
    setShowDepartments(!showDepartments);
  };

  const toggleResults = () => {
    setShowResults(!showResults);
  };

  const toggleTimetable = () => {
    setShowTimetable(!showTimetable);
  };

  const toggleAccommodation = () => {
    setShowAccommodation(!showAccommodation);
  };

  const courses = ['Calculus', 'Digital Circuits', 'Applied Electricity', 'Database Management'];

  const studentName = 'Felix Azaglo';
  const department = 'Computer Engineering';
  const studentId = '10951571';

  return (
    <div className="container">
      <h1>Dashboard</h1>

      <button className="toggle-btn" onClick={toggleStudentDetails}>
        Student Details
      </button>
      {showStudentDetails && (
        <div className="section">
          <h2>Student Details:</h2>
          <p>Name: {studentName}</p>
          <p>Department: {department}</p>
          <p>Student ID: {studentId}</p>
        </div>
      )}

      <button className="toggle-btn" onClick={toggleCourses}>
        Courses
      </button>
      {showCourses && (
        <div className="section">
          <h2>Courses:</h2>
          <ul>
            {courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      )}

      <button className="toggle-btn" onClick={toggleResults}>
        Results
      </button>
      {showResults && (
        <div className="section">
          <h2>Results:</h2>
          {/* Add your results content here */}
        </div>
      )}

      <button className="toggle-btn" onClick={toggleTimetable}>
        Timetable
      </button>
      {showTimetable && (
        <div className="section">
          <h2>Timetable:</h2>
          {/* Add your timetable content here */}
        </div>
      )}

      <button className="toggle-btn" onClick={toggleAccommodation}>
        Accommodation
      </button>
      {showAccommodation && (
        <div className="section">
          <h2>Accommodation:</h2>
          {/* Add your accommodation content here */}
        </div>
      )}

      <button className="toggle-btn" onClick={toggleDepartments}>
        Departments
      </button>
      {showDepartments && (
        <div className="section">
          <h2>Departments:</h2>
          {/* Add your departments content here */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;