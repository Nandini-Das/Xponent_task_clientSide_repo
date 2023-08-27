import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/courses')
      .then(response => {
        setInstructors(response.data);
      })
      .catch(error => {
        console.error('Error fetching instructors:', error);
      });
  }, []);

  return (
    <div>
      <h1 className='text-4xl'> Our Instructors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {instructors.map((instructor, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <h2 className="card-title">{instructor.courseInstructor}</h2>
              {/* <img src={instructor.img} alt={instructor.courseInstructor} className="card-image h-48" /> */}
              <p>Taken Course: {instructor.courseName}</p>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
