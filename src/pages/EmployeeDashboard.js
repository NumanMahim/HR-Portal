import React from "react";
import "../styles/EmployeeDashboard.css";

const EmployeeDashboard = ({ user }) => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, {user.email}</h1>
        <p>Your Employee Dashboard</p>
      </header>
      
      <div className="dashboard-content">
        <div className="card">
          <h2>My Profile</h2>
          <p>View and update your personal details.</p>
          <button className="btn btn-primary">View Profile</button>
        </div>

        <div className="card">
          <h2>Submit Leave Request</h2>
          <p>Apply for leave and check your request status.</p>
          <button className="btn btn-primary">Submit Leave</button>
        </div>

        <div className="card">
          <h2>Leave Status</h2>
          <p>Check the status of your leave requests.</p>
          <button className="btn btn-primary">View Leave Status</button>
        </div>

        <div className="card">
          <h2>Attendance Regularization</h2>
          <p>Request corrections for attendance records.</p>
          <button className="btn btn-primary">Request Regularization</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
