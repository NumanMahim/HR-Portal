import React, { useState, useEffect } from "react";
import "../styles/HRDashboard.css";

const HRDashboard = () => {
  const [pendingLeaves, setPendingLeaves] = useState(0);
  const [totalEmployees, setTotalEmployees] = useState(0);

  useEffect(() => {
    // Fetch data from backend or Firestore for pending leaves and employees count
    // Simulated data fetching for now
    setPendingLeaves(5); // Example: 5 pending leave requests
    setTotalEmployees(50); // Example: 50 employees
  }, []);

  return (
    <div className="hr-dashboard-container">
      <header className="dashboard-header">
        <h1>HR Dashboard</h1>
        <p>Manage your employees and HR processes efficiently</p>
      </header>

      <div className="dashboard-overview">
        <div className="card">
          <h3>Total Employees</h3>
          <p>{totalEmployees}</p>
        </div>
        <div className="card">
          <h3>Pending Leave Requests</h3>
          <p>{pendingLeaves}</p>
        </div>
      </div>

      <div className="dashboard-sections">
        {/* Employee Management Section */}
        <div className="section">
          <h2>Manage Employees</h2>
          <p>View, add, or update employee details.</p>
          <button className="btn btn-primary">Go to Employee Management</button>
        </div>

        {/* Leave Requests Section */}
        <div className="section">
          <h2>Leave Requests</h2>
          <p>Approve or reject employee leave requests.</p>
          <button className="btn btn-primary">View Leave Requests</button>
        </div>

        {/* Attendance Management Section */}
        <div className="section">
          <h2>Attendance Management</h2>
          <p>View and manage employee attendance records.</p>
          <button className="btn btn-primary">Manage Attendance</button>
        </div>

        {/* Reports Section */}
        <div className="section">
          <h2>Generate Reports</h2>
          <p>View and export HR-related reports.</p>
          <button className="btn btn-primary">Generate Reports</button>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
