import React from 'react';
import parts from '../../images/parts-background.png';
import fruits from '../../images/fruits-background-website.png';
import photography from '../../images/photography-background-website.png';
import './Banner.css';

const Projects = () => {
    return (
        <div id="projects" className='bg-orange-50 py-12'>
            <h1 className='text-center text-3xl font-semibold text-blue-600 mb-4'>My Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-6 lg:mx-28'>
                <div className='mb-6'>
                    <img className='w-96' src={parts} alt="" />
                    <h1 className='text-xl'>AR Parts Manufacurer</h1>
                    <p>This is a parts manufacturer website.</p>
                    <button class="live-site-btn"><a target="blank" href="https://ar-parts-manufacturer.web.app/">Live Site</a></button>
                </div>
                <div className='mb-6'>
                    <img className='w-96' src={fruits} alt="" />
                    <h1 className='text-xl'>AR Fruits Warehouse</h1>
                    <p>This is a warehouse management website.</p>
                    <button class="live-site-btn"><a target="blank" href="https://ar-fruits-warehouse.web.app/">Live Site</a></button>
                </div>
                <div className='mb-6'>
                    <img className='w-96' src={photography} alt="" />
                    <h1 className='text-xl'>AR Photography</h1>
                    <p>This is an independent service provider website.</p>
                    <button class="live-site-btn"><a target="blank" href="https://ar-photography-73631.firebaseapp.com/">Live Site</a></button>
                </div>
            </div>
        </div>
    );
};

export default Projects;