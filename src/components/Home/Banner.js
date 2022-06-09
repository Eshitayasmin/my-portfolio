import React from 'react';
import './Banner.css';
const Banner = () => {
   
    return (
        <div className='flex items-center justify-center'>
            <div className='mt-36 lg:mt-60'>
            <h3 className='text-center text-xl'>Hi, This is</h3>
            <h1 className='text-center text-4xl text-red-400 font-serif mb-1'>Eshita Yasmin</h1>
            <h2 className='text-center text-2xl mb-1'>I am a <span className='text-blue-400'>Full Stack Web Developer</span></h2>
            <div className='text-center'>
            <button class="btn btn-info mt-3 mr-5 text-white"><a target="blank" href="https://drive.google.com/file/d/1ejVTp9jLHUX-m4UuiTAcG_AOrvPizXS4/view?usp=sharing">Download Resume</a></button>
            <button class="btn btn-accent mt-3 text-white">Hire Me</button>
            </div>
            </div>
        </div>
    );
};

export default Banner;