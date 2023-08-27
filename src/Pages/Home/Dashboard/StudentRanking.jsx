import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentRanking = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/studentScores')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching student scores:', error);
      });
  }, []);

  return (
    <div>
      <h1>Student Ranking</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.studentName}</td>
              <td>{student.totalScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentRanking;
