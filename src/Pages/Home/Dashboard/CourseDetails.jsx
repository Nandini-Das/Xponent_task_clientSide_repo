import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { id } = useParams();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/courses/${ id }`)
      .then(response => response.json())
      .then(data => {
        setCourse(data);
      })
      .catch(error => {
        console.error('Error fetching course:', error);
      });
  }, [id]);
console.log(course.id)
  return (
    <div>
      <h1>Course Detail</h1>
      {course ? (
        <div className="card w-84 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{course.courseName}</h2>
            <p>Credit: {course.courseCredit}</p>
            <p>Instructor: {course.courseInstructor}</p>
            <p>Enrolled Students: {course.enrolledStudent}</p>
            <p>Exam Date: {course.examDate}</p>
            <p>Outline: {course.courseOutline}</p>
            <button className="btn btn-primary mt-4 w-20"><Link to={`/dashboard/updateCourse/${id}`}>Update</Link></button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CourseDetails;
