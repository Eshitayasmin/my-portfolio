import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import About from './About';
import Banner from './Banner';
import './Banner.css';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
             <Navbar></Navbar>
            <div className='banner h-screen'>
                <Banner></Banner>
            </div>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;