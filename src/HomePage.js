import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";

const HomePage = () => {
  const engineeringPrograms = ['Program A', 'Program B', 'Program C'];

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to the Homepage!</h1>
      <h1 className="title">Welcome to the University Of Ghana School of Engineering</h1>
      <h2>WE MAKE THINGS WORK!!! </h2>
      <h3>Engineering Programs Offered:</h3>
      <ul className="program-list">
        {engineeringPrograms.map((program, index) => (
          <li key={index}>{program}</li>
        ))}
      </ul>
      <p className="homepage-description">Please login to continue.</p>
      <div className="homepage-links">
        <Link className="homepage-link" to="/login">Login</Link>
        <Link className="homepage-link" to="/registration">Register</Link>
        <Link className="homepage-link" to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default HomePage;
