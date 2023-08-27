import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateCourse = () => {
  const { id } = useParams();
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();

  useEffect(() => {
    axios.get(`http://localhost:5000/courses/${ id }`)
      .then(response => {
        reset(response.data);
      })
      .catch(error => {
        console.error('Error fetching course:', error);
      });
  }, [id, reset]);
  
  const onSubmit = (data) => {
    const { _id, ...updatedData } = data;
  
    axios.patch(`http://localhost:5000/courses/${id}`, updatedData)
      .then(response => {
        console.log('Course updated:', response.data);
        // Show a success alert
        Swal.fire({
          icon: 'success',
          title: 'Course Updated',
          text: 'The course information has been updated successfully.',
        });
      })
      .catch(error => {
        console.error('Error updating course:', error);
        // Handle error scenarios here
        // Show an error alert
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while updating the course.',
        });
      });
  };
  

  return (
    <div>
      <h1 className='font-bold text-4xl'>Edit Course</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">Course Name</label>
            <input
              type="text"
              {...register('courseName', { required: true })}
              className="input"
            />
            {errors.courseName && <span className="text-red-500">Course Name is required</span>}
          </div>
          <div className="form-control">
            <label className="label">Course Credit</label>
            <input
              type="text"
              {...register('courseCredit', { required: true })}
              className="input"
            />
            {errors.courseCredit && <span className="text-red-500">Course Credit is required</span>}
          </div>
          <div className="form-control">
            <label className="label">Course Instructor </label>
            <input
              type="text"
              {...register('courseInstructor', { required: true })}
              className="input"
            />
            {errors.courseName && <span className="text-red-500">Course Instructor is required</span>}
          </div>
          
          <div className="form-control">
            <label className="label">Exam Date</label>
            <input
              type="text"
              {...register('examDate', { required: true })}
              className="input"
            />
            {errors.courseName && <span className="text-red-500">Enrolled student is required</span>}
          </div>
          <div className="form-control">
            <label className="label">Enrolled Student</label>
            <input
              type="text"
              {...register('enrolledStudent', { required: true })}
              className="input"
            />
            {errors.courseName && <span className="text-red-500">Enrolled student is required</span>}
          </div>
          <div className="form-control">
            <label className="label">Passed Student</label>
            <input
              type="text"
              {...register('passedStudents', { required: true })}
              className="input"
            />
            {errors.courseName && <span className="text-red-500">Passed students is required</span>}
          </div>
         
        </div>
       
        <button type="submit" className="btn btn-primary">
          Update Course
        </button>
      </form>
    </div>
  );
};

export default UpdateCourse;
