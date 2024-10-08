import React from "react";
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>KL University</h2>
        <p>LEARNING MANAGEMENT</p>
      </div>
      <ul className="sidebar-menu">
        <li>Dashboard</li>
        <li>Courses</li>
        <li>Sections</li>
        <li>Grades</li>
        <li>Subjects</li>
        <li>Teachers</li>
        <li>Administrators</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
