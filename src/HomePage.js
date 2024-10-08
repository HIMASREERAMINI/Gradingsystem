import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Subjects from "./Subjects";
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      
      <Sidebar />
      <div className="main-content">
        <Dashboard />
        <Subjects />
      </div>
    </div>
  );
}

export default HomePage;
