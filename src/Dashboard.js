import React from "react";
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-cards">
      <div className="card" style={{ backgroundColor: "#66cc66" }}>
        <h3>500</h3>
        <p>Dashboard</p>
      </div>
      <div className="card" style={{ backgroundColor: "#66cccc" }}>
        <h3>50</h3>
        <p>Students</p>
      </div>
      <div className="card" style={{ backgroundColor: "#ffcc66" }}>
        <h3>2</h3>
        <p>Courses</p>
      </div>
    </div>
  );
}

export default Dashboard;
