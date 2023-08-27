import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './layout/Main';
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Home/Dashboard/Dashboard';
import Courses from './Pages/Home/Dashboard/Courses';
import Instructors from './Pages/Home/Dashboard/Instructors';
import Students from './Pages/Home/Dashboard/Students';
import DetailedResults from './Pages/Home/Dashboard/DetailedResults';
import CourseDetails from './Pages/Home/Dashboard/CourseDetails';
import UpdateCourse from './Pages/Home/Dashboard/UpdateCourse';
import StudentRanking from './Pages/Home/Dashboard/StudentRanking';
import DashboardHome from './Pages/Home/Dashboard/DashoardHome';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
     {
      path: "/",
      element: <Home></Home>,
     },
     {
      path: "/about",
      element: <Home></Home>,
     },
    
     
    ],
   
  },
{
path: "/dashboard",
element: <Dashboard></Dashboard>,
children:[
  {
    path: '/dashboard/home',
    element: <DashboardHome></DashboardHome>,
  },
  {
    path:'/dashboard/courses',
    element:<Courses></Courses>,
  },
  {
    path:'/dashboard/instructors',
    element:<Instructors></Instructors>,
  },
  {
    path:'/dashboard/students',
    element:<Students></Students>,
  },
  {
    path: '/dashboard/detailedResults/:id',
    element: <DetailedResults></DetailedResults>,
    
  },
  {
    path: '/dashboard/courseDetails/:id',
    element: <CourseDetails></CourseDetails>,
    
  },
  {
    path: '/dashboard/updateCourse/:id',
    element: <UpdateCourse></UpdateCourse>,
  },

  {
    path: '/dashboard/studentRanking',
    element: <StudentRanking></StudentRanking>,
  },
  
  

]
},

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
