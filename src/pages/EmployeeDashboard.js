import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/EmployeeDashboard.css";

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  const handleViewProfileClick = () => {
    navigate("/profile"); 
  };

  const handleApplyLeaveClick = () => {
    navigate("/apply-leave"); 
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Employee Dashboard</h1>
      <div className="dashboard-grid">
        <div
          className="dashboard-card card-profile"
          onClick={handleViewProfileClick}
        >
          <div className="card-icon">👤</div>
          <h3>View Profile</h3>
          <p>Access and update your personal details.</p>
        </div>

        <div
          className="dashboard-card card-leave"
          onClick={handleApplyLeaveClick}
        >
          <div className="card-icon">📝</div>
          <h3>Apply for Leave</h3>
          <p>Submit leave requests and track their status.</p>
        </div>

        <div className="dashboard-card card-schedule">
          <div className="card-icon">📅</div>
          <h3>My Schedule</h3>
          <p>View your assigned work schedules.</p>
        </div>

        <div className="dashboard-card card-attendance">
          <div className="card-icon">✅</div>
          <h3>Attendance</h3>
          <p>Regularize and monitor attendance records.</p>
        </div>

        <div className="dashboard-card card-feedback">
          <div className="card-icon">💬</div>
          <h3>Feedback</h3>
          <p>Provide feedback or raise concerns with HR.</p>
        </div>

        <div className="dashboard-card card-performance">
          <div className="card-icon">📊</div>
          <h3>Performance</h3>
          <p>View your performance metrics and goals.</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
