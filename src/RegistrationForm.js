import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./RegistrationForm.css";

function RegistrationForm () {
  const [studentId, setStudentId] = useState('');
  const [department, setDepartment] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleCourseSelection = (e) => {
    const courseId = e.target.value;
    const isSelected = e.target.checked;

    if (isSelected) {
      setSelectedCourses([...selectedCourses, courseId]);
    } else {
      setSelectedCourses(selectedCourses.filter((course) => course !== courseId));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log('Registration details:', studentId, department, selectedCourses);
    // Reset the form
    setStudentId('');
    setDepartment('');
    setSelectedCourses([]);
  };

  return (
    <div className="container">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={handleStudentIdChange}
            required
          />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={handleDepartmentChange}
            required
          />
        </div>
        <div>
          <label>Courses:</label>
          <ul>
            <li>
              <label>
                <input
                  type="checkbox"
                  value="Calculus"
                  checked={selectedCourses.includes('Calculus')}
                  onChange={handleCourseSelection}
                />
                Calculus
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  value="Programming with Engineers"
                  checked={selectedCourses.includes('Programming with Engineers')}
                  onChange={handleCourseSelection}
                />
                Programming with Engineers
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  value="Digital Circuits"
                  checked={selectedCourses.includes('Digital Circuits')}
                  onChange={handleCourseSelection}
                />
                Digital Circuits
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  value="Applied Electricity"
                  checked={selectedCourses.includes('Applied Electricity')}
                  onChange={handleCourseSelection}
                />
                Applied Electricity
              </label>
            </li>
          </ul>
        </div>
        <button type="submit">Register</button>
      </form>
      <Link to="/">Go back to Homepage</Link>
    </div>
  );
};

export default RegistrationForm;
