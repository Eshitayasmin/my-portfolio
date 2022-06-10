import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate();
    return (
        <div className='text-center mt-32  h-screen'>
            <h1 className='text-2xl text-blue-500'>Coming soon....</h1>
            <button onClick={() => navigate('/')} className='btn btn-sm mt-3 btn-accent text-white'>Back to Home</button>
        </div>
    );
};

export default Blogs;