import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Banner.css';
import {useNavigate } from 'react-router-dom';


const Contact = () => {
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        navigate('/welcome');

    }
    return (
        <div  id="contact" className='bg-contact py-12 '>
             <h1 className='text-3xl text-center text-blue-600 mb-6'>Contact Me</h1>
            <div className='block lg:flex justify-around contact-background  lg:ml-4'>
                <div className='mt-4 mx-16 lg:mx-4 lg:mt-24 mb-8'>
                    <div className='mb-4'>
                        <p><FontAwesomeIcon className='bg-red-400 p-1 text-white rounded-full' icon={faPhone} /> <span className='ml-3'>(+088)1626 549198</span></p>
                    </div>
                    <div className='mb-4'>
                        <p><FontAwesomeIcon className='bg-red-400 p-1 text-white rounded-full' icon={faEnvelope} /><span className='ml-3'>eshita.emc2k17@gmail.com</span></p>
                     
                    </div>
                    <div className='mb-3'>
                        <p><FontAwesomeIcon className='bg-red-400 w-4 h-4 p-1 text-white rounded-full' icon={faLocationPin} /> <span className='ml-3'>West Dhanmondi, Dhaka</span></p>
                       
                    </div>

                </div>

                <div className=''>
                    <form onSubmit={handleSubmit} target="_blank" method="POST" action="https://formsubmit.co/eshita.emc2k17@gmail.com" enctype="multipart/form-data" className='grid justify-items-center'>
                        <input className='w-72 lg:w-96 rounded-lg p-3 mb-3' name='email' type="text" placeholder='Email Address' required />
                        <input className='w-72 lg:w-96 rounded-lg p-3 mb-3' name='subject' type="text" placeholder='Subject' required />
                        <textarea className='w-72 lg:w-96 rounded-lg p-3 mb-3' name="message" id="" cols="40" rows="4" placeholder='Your Message' required></textarea>
                        <button type="submit" class="btn w-72 lg:w-96 btn-block">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;