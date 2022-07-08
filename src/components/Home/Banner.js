import React from 'react';
import './Banner.css';
import TypeWriterEffect from 'react-typewriter-effect';

const Banner = () => {


    return (
        <div className='flex items-center justify-center'>
            <div className='mt-36 lg:mt-60'>
                <h3 className='text-center text-xl'>Hi, This is</h3>
                <h1 className='text-center text-4xl text-red-400 font-serif mb-1'>Eshita Yasmin</h1>
              

                <div>
                    <h1 className='flex'> <span className='static-text'>I am a</span>
                        <span className='ml-3 dynamic-texts'>
                            <TypeWriterEffect
                              
                                startDelay={2000}
                                cursorColor="#e4c3bc"
                                multiText={[
                                    'Full Stack Web Developer',
                                    'Mern Stack Developer',
                                    'Javascript Developer',
                                    'React Developer',
                                    
                                ]}
                                multiTextDelay={1000}
                                typeSpeed={30}
                                multiTextLoop
                            />
                        </span></h1>

                </div>

                <div className='text-center'>
                    <button class="btn btn-info mt-3 mr-5 text-white"><a target="blank" href="https://drive.google.com/file/d/1ejVTp9jLHUX-m4UuiTAcG_AOrvPizXS4/view?usp=sharing">Download Resume</a></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;