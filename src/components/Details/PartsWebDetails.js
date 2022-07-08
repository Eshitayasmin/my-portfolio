import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import parts1 from '../../images/partsWeb/parts-1.png';
import parts2 from '../../images/partsWeb/part-2.png';
import parts3 from '../../images/partsWeb/parts-3.png';
import '../Home/Banner.css';


const PartsWebDetails = () => {
    return (
            <div className='bg-project-detail h-screen py-12 block lg:flex justify-evenly w-screen h-screen'>
            <div className='w-11/12 lg:w-4/12 mx-auto lg:mx-2 lg:h-96'>
                <div class="carousel">
                    <div id="slide1" class="carousel-item relative w-full">
                        <img src={parts1} class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide2" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full">
                        <img src={parts2} class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" class="carousel-item relative w-full">
                        <img src={parts3} class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" class="btn btn-circle">❮</a>
                            <a href="#slide1" class="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
          
            </div>
            <div className='w-10/12 lg:w-6/12 px-4 lg:px-2'>
               <div className='block lg:flex items-center'>
               <h1 className='text-2xl text-blue-500 font-semibold mt-4'>AR Parts Manufacturer</h1>
                <div className='ml-0 lg:ml-4'>
                <button class="live-site-btn"><a target="blank" href="https://ar-parts-manufacturer.web.app/">Live Site</a></button>

                <button class="live-site-btn ml-3"><a target="blank" href="https://github.com/Eshitayasmin/parts-manufacturer-client">Client Github</a></button>
                <button class="live-site-btn ml-3"><a target="blank" href="https://github.com/Eshitayasmin/parts-manufacturer-server">Server Github</a></button>
            </div>
               </div>
                <p className='mt-3 text-xl text-purple-500'>Description:</p>
                <ul>
                    <li><FontAwesomeIcon className='text-blue-500' icon={faCircleRight} /><span className='pl-2'>Implemented Login System Using Firebase.</span></li>
                    <li><FontAwesomeIcon className='text-blue-500' icon={faCircleRight} /><span className='pl-2'>Admin can add or delete products.</span></li>
                    <li><FontAwesomeIcon className='text-blue-500' icon={faCircleRight} /><span className='pl-2'>Logged in users will be able to purchase the product via credit card.</span></li>
                    <li><FontAwesomeIcon className='text-blue-500' icon={faCircleRight} /><span className='pl-2'>Logged in users will be able to purchase the product via credit card.</span></li>
                    <li><FontAwesomeIcon className='text-blue-500' icon={faCircleRight} /><span className='pl-2'>Logged in users will be able to provide reviews.</span></li>
                </ul>
                <h4 className='mt-3 text-xl text-purple-500'>Technologies: </h4>
                <p> React js, React Router, React-hook-form, React Query, Tailwind Css, Daisy UI, Stripe, Firebase, Express js, Mongodb.</p>


            </div>

        </div>
     
    );
};

export default PartsWebDetails;