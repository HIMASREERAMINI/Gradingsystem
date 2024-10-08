import React from "react";
import './Subjects.css';

function Subjects() {
  return (
    <div className="subjects-section">
      <h2>Subjects for this Semester</h2>
      <table className="subjects-table">
        <thead>
          <tr>
            <th>Courses</th>
            <th>Semester</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JAVA FULL STACK DEVELOPMENT</td>
            <td>ODD SEMESTER</td>
            <td>2 DAYS AGO</td>
          </tr>
          <tr>
            <td>APPLIED PHYSICS</td>
            <td>ODD SEMESTER</td>
            <td>3 DAYS AGO</td>
          </tr>
          <tr>
            <td>SOFTWARE VERIFICATION</td>
            <td>ODD SEMESTER</td>
            <td>5 DAYS AGO</td>
          </tr>
          <tr>
            <td>MATHEMATICS</td>
            <td>ODD SEMESTER</td>
            <td>1 DAY AGO</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Subjects;
