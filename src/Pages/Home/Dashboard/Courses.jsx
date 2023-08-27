import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/courses')
      .then(response => response.json())
      .then(data => {
        setCourses(data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
   <>
   <h1 className='font-bold text-4xl'>Our Courses</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
      
      {courses.map((course, index) => (
        <div key={index} className="card w-84 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{course.courseName}</h2>
            <p>Course Code: {"CSE-324"}</p>
            <p>Course Credit:  {course.courseCredit} </p>
            <p>Instructor: {course.courseInstructor}</p>
           
       
           
           <button className="btn btn-primary mt-4 w-15"><Link to={`/dashboard/courseDetails/${course._id}`}>View Details</Link></button>
           
          </div>
        </div>
      ))}
    </div>
   </>
  );
};

export default Courses;
