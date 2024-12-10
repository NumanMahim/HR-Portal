import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import HRDashboard from "./pages/HRDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Profile from "./pages/Profile";
import ApplyLeave from "./pages/ApplyLeave";
import EmployeeList from "./pages/EmployeeList"; // Import EmployeeList
import SignUp from "./pages/SignUp"; // Import SignUp

function App() {
  const [user, setUser] = useState(null); // Stores logged-in user details

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<Login setUser={setUser} />} />

        {/* Sign Up Route */}
        <Route path="/signup" element={<SignUp />} />

        {/* Redirect to Dashboards Based on Role */}
        <Route
          path="/dashboard"
          element={
            user?.role === "HR" ? (
              <Navigate to="/hr-dashboard" />
            ) : user?.role === "Employee" ? (
              <Navigate to="/employee-dashboard" />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* HR Dashboard Route */}
        <Route
          path="/hr-dashboard"
          element={user?.role === "HR" ? <HRDashboard user={user} /> : <Navigate to="/" />}
        />

        {/* Employee Dashboard Route */}
        <Route
          path="/employee-dashboard"
          element={user?.role === "Employee" ? <EmployeeDashboard user={user} /> : <Navigate to="/" />}
        />

        {/* Profile Route */}
        <Route
          path="/profile"
          element={user ? <Profile user={user} /> : <Navigate to="/" />}
        />

        {/* Apply Leave Route */}
        <Route
          path="/apply-leave"
          element={
            user?.role === "Employee" ? <ApplyLeave user={user} /> : <Navigate to="/" />
          }
        />

        {/* Employee List Route */}
        <Route
          path="/employee-list"
          element={
            user?.role === "HR" ? <EmployeeList user={user} /> : <Navigate to="/" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
