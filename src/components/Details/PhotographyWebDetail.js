import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import photography1 from '../../images/photographyWeb/photography-1.png';
import photography2 from '../../images/photographyWeb/photography-2.png';
import photography3 from '../../images/photographyWeb/photography-3.png';

import '../Home/Banner.css';

const PhotographyWebDetail = () => {
    return (
        <div className='bg-project-detail h-screen py-12 block lg:flex justify-evenly '>
        <div className='w-full lg:w-6/12 mx-auto lg:mx-1 lg:h-96 mt-4'>
            <div class="carousel w-8/12 mx-auto">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={photography3} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={photography2} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={photography1} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
      
        </div>
        <div className='w-10/12 lg:w-6/12 px-4 lg:px-0  mt-4'>
           <div className='block lg:flex items-center'>
           <h1 className='text-2xl text-blue-500 font-semibold mt-4'>AR Photography</h1>
            <div className='ml-0 lg:ml-4'>
            <button class="live-site-btn"><a target="blank" href="https://ar-photography-73631.firebaseapp.com/">Live Site</a></button>

            <button class="live-site-btn ml-3"><a target="blank" href="https://github.com/Eshitayasmin/ar-photography">Client Github</a></button>
           
        </div>
           </div>
            <p className='mt-3 text-xl text-purple-500'>Description:</p>
            <ul>
                <li><FontAwesomeIcon className='text-blue-500' icon={faCircleRight} /><span className='pl-2'>Implemented Login System Using Firebase.</span></li>
                <li><FontAwesomeIcon className='text-blue-500' icon={faCircleRight} /><span className='pl-2'>Once signed up user can login later.</span></li>
                <li><FontAwesomeIcon className='text-blue-500' icon={faCircleRight} /><span className='pl-2'>Sent email verification.</span></li>
                <li><FontAwesomeIcon className='text-blue-500' icon={faCircleRight} /><span className='pl-2'>If a user forgets his password, he can reset the password.</span></li>
                <li><FontAwesomeIcon className='text-blue-500' icon={faCircleRight} /><span className='pl-2'>Logged in users will be able to provide reviews.</span></li>
            </ul>
            <h4 className='mt-3 text-xl text-purple-500'>Technologies: </h4>
            <p> React js, React Router, React Bootstrap, React Toastify,  Firebase.</p>


        </div>

    </div>
    );
};

export default PhotographyWebDetail;