import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const ScoreChart = () => {
    const [studentScores, setStudentScores] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:5000/studentScores')
        .then(response => {
          setStudentScores(response.data);
        })
        .catch(error => {
          console.error('Error fetching student scores:', error);
        });
    }, []);
  
    const chartData = {
      labels: studentScores.map(student => student.studentName),
      datasets: [
        {
          label: 'Total Score',
          data: studentScores.map(student => student.totalScore),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderWidth: 1,
        },
      ],
    };
  
    return (
      <div>
        <h2>Student Scores Chart</h2>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    );
  };
  export default ScoreChart;