import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='text-center my-20'>
          <button className='btn-primary p-5 font-semibold'><Link to='dashboard'>Go to Dashboard</Link></button>
        </div>
    );
};

export default Home;