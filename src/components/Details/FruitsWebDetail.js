import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import fruits1 from '../../images/fruitsWeb/fruits-1.png';
import fruits2 from '../../images/fruitsWeb/fruits-2.png';
import fruits3 from '../../images/fruitsWeb/fruits-3.png';
import '../Home/Banner.css';

const FruitsWebDetail = () => {
    return (
        <div className='bg-project-detail h-screen py-12 block lg:flex justify-evenly h-screen w-screen'>
        <div className='w-10/12 mx-auto lg:mx-2 lg:w-4/12 lg:h-96'>
            <div class="carousel ">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={fruits2} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={fruits1} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={fruits3} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
      
        </div>
        <div className='w-10/12 lg:w-6/12 mx-4 lg:mx-2  mt-4'>
           <div className='block lg:flex items-center'>
           <h1 className='text-2xl text-blue-500 font-semibold mt-4'>AR Fruits Warehouse</h1>
            <div className='ml-0 lg:ml-4'>
            <button class="live-site-btn"><a target="blank" href="https://ar-fruits-warehouse.web.app/">Live Site</a></button>

            <button class="live-site-btn ml-3"><a target="blank" href="https://github.com/Eshitayasmin/ar-fruits-warehouse-client">Client Github</a></button>
            <button class="live-site-btn ml-3"><a target="blank" href="https://github.com/Eshitayasmin/ar-fruits-warehouse-server">Server Github</a></button>
        </div>
           </div>
            <p className='mt-3 text-xl text-purple-500'>Description:</p>
            <ul>
                <li><FontAwesomeIcon className='text-blue-500' icon={faCircleRight} /><span className='pl-2'>Implemented Login System Using Firebase.</span></li>
                <li><FontAwesomeIcon className='text-blue-500' icon={faCircleRight} /><span className='pl-2'>Once signed up user can login later.</span></li>
                <li><FontAwesomeIcon className='text-blue-500' icon={faCircleRight} /><span className='pl-2'>If a user forgets his password, he can reset the password.</span></li>
                <li><FontAwesomeIcon className='text-blue-500' icon={faCircleRight} /><span className='pl-2'>If the user wants, he can add, update and delete any product.</span></li>
                <li><FontAwesomeIcon className='text-blue-500' icon={faCircleRight} /><span className='pl-2'>If you are not logged in, you will not be able to enter the private route.</span></li>
            </ul>
            <h4 className='mt-3 text-xl text-purple-500'>Technologies: </h4>
            <p> React js, React Router, React Bootstrap, React-firebase-hooks, React Toastify, React-hook-form, Axios, Firebase.</p>


        </div>

    </div>
    );
};

export default FruitsWebDetail;