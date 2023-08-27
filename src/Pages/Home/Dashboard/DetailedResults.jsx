import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailedResults = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [totalScore, setTotalScore] = useState(0); 
  useEffect(() => {
    axios.get(`http://localhost:5000/students/${id}`)
      .then(response => {
        setStudent(response.data);

        const total = response.data.detailResult.reduce((acc, result) => acc + result.score, 0);
        setTotalScore(total);
      })
      
      .catch(error => {
        console.error('Error fetching student details:', error);
      });
  }, [id]);

  return (
    <div>
      <h1>Detailed Results </h1>
      {student ? (
        <div>
          <h2>{student.studentName}'s Detailed Results</h2>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Grade</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {student.detailResult.map((result, index) => (
                <tr key={index}>
                  <td>{result.courseName}</td>
                  <td>{result.grade}</td>
                  <td>{result.score}</td>

                </tr>
              ))}
            </tbody>
          </table>
          <hr />
          <div className='p-12'>Total Score:  {totalScore}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailedResults;
