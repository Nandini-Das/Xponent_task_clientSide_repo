import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineHome, AiOutlineBook, AiOutlineUser, AiOutlineTeam } from 'react-icons/ai';
import { FaTrophy } from 'react-icons/fa';
const Dashboard = () => {
  return (
    <div className="flex h-1/2">
      <nav className="w-1/4 h-screen bg-gray-500 p-4">
        <ul className="space-y-5 text-xl text-white">
         
          <li >
            <Link className="flex items-center mt-12" to="/dashboard/courses"> <AiOutlineBook className="ml-2 mr-2" /> Courses</Link>
          </li>
          <li >
            <Link className="flex items-center" to="/dashboard/instructors">  <AiOutlineUser className="ml-2 mr-2" /> Instructors</Link>
          </li>
          <li >
            <Link className="flex items-center" to="/dashboard/students"> <AiOutlineTeam className="ml-2 mr-2" /> Students </Link>
          </li>

          <hr />
          <li >
            <Link className="flex items-center" to="/dashboard/studentRanking"> <FaTrophy className="ml-2 mr-2" /> Student Ranking </Link>
          </li>
          <li >
            <Link className="flex items-center" to="/"> <AiOutlineHome className="ml-2 mr-2" /> Home </Link>
          </li>
        </ul>
      </nav>
      <main className="w-3/4 p-4">
           <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashboard;
