import React from 'react';
import './Banner.css';

const About = () => {
    return (
        <div id="about" className='py-12 bg-about'>
            <h3 className='text-center text-3xl text-pink-300 mb-3'>About Me</h3>
          
            <p className='mx-8 lg:mx-48 text-justify leading-8 tracking-wider text-xl text-white'>I am Eshita Yasmin. I am a final year student in the Zoology Department at Eden Mohila College, Dhaka. I am a Full Stack Web Developer. I can build responsive web applications through front-end , back-end and database. I have created 15 projects using HTML, CSS, Bootstrap, Tailwind, DaisyUI, Javascript, React, Node, Express, Mongodb etc. I like to solve various mathematical and logical problems. That's why I find satisfaction in learning new things through programming. I want to build myself as a skilled web developer through my best efforts.</p>
        </div>
    );
};

export default About;