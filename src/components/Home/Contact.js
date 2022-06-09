import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Banner.css';
library.add(fab);

const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault();

    }
    return (
        <div  id="contact" className='bg-blue-100 py-12 w-screen'>
             <h1 className='text-3xl text-center text-purple-500 mb-6'>Contact Me</h1>
            <div className='block lg:flex justify-around contact-background ml-32 lg:ml-4'>
                <div className='mt-4 lg:mt-24 mb-8'>
                    <div className='mb-2'>
                        <p><FontAwesomeIcon className='bg-red-400 p-1 text-white rounded-full' icon={faPhone} /> <span>(+088)1626 549198</span></p>
                    </div>
                    <div className='mb-2'>
                        <p><FontAwesomeIcon className='bg-red-400 p-1 text-white rounded-full' icon={faEnvelope} /><span>eshita.emc2k17@gmail.com</span></p>
                     
                    </div>
                    <div>
                        <p><FontAwesomeIcon className='bg-red-400 w-4 h-4 p-1 text-white rounded-full' icon={faLocationPin} /> <span>West Dhanmondi, Dhaka</span></p>
                       
                    </div>
                        <div className='flex mt-3'>
                        <div className='mr-5'>
                           <p><a href="https://www.facebook.com/eshita.yasmin.39"> <FontAwesomeIcon className='bg-blue-600 p-1 rounded-full text-white' icon={faFacebookF} /></a></p>
                        </div>
                        <div className='mr-5'>
                            <a href="https://www.linkedin.com/in/eshita-yasmin-92a598241/"><FontAwesomeIcon className='bg-blue-600 w-4 h-4 p-1 rounded-full text-white' icon={faLinkedin}/></a>
                        </div>
                        <div>
                          <a href="https://github.com/Eshitayasmin"><FontAwesomeIcon className='bg-blue-600 p-1 rounded-full text-white' icon={faGithub} /></a>
                        </div>
                        </div>

                </div>

                <div className=''>
                    <form onSubmit={handleSubmit} target="_blank" method="POST" action="https://formsubmit.co/eshita.emc2k17@gmail.com" enctype="multipart/form-data" className='grid justify-items-center'>
                        <input className='w-96 rounded-lg p-3 mb-3' name='email' type="text" placeholder='Email Address' required />
                        <input className='w-96 rounded-lg p-3 mb-3' name='subject' type="text" placeholder='Subject' required />
                        <textarea className='w-96 rounded-lg p-3 mb-3' name="message" id="" cols="40" rows="4" placeholder='Your Message' required></textarea>
                        <button type="submit" class="btn w-96 btn-block">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;