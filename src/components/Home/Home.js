import React from 'react';
import Navbar from '../Shared/Navbar';
import About from './About';
import Banner from './Banner';
import './Banner.css';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <div className='banner h-screen'>
            <Banner></Banner>
            </div>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;