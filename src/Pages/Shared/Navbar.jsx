import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-700 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-lg font-bold">CourseLouge</div>
          <div className="space-x-4">
            <Link to="/" className="text-white hover:underline">Home</Link>
            <Link to="/about" className="text-white hover:underline">About</Link>
            <Link to="/contact" className="text-white hover:underline">Contact</Link>
          </div>
          <div>
            <Link to="/logout" className="text-white hover:underline">Login</Link>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;