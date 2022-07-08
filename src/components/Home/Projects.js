import React from 'react';
import parts from '../../images/parts-background.png';
import fruits from '../../images/fruits-background-website.png';
import photography from '../../images/photography-background-website.png';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Projects = () => {
    const navigate = useNavigate();
    return (
        <div id="projects" className='py-12 bg-projects'>
            <h1 className='text-center text-3xl font-semibold text-blue-600 mb-4'>My Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-6 lg:mx-28'>
                <div className='mb-6 border-2 bg-project mx-5'>
                    <img className='img-fluid mx-auto' src={parts} alt="" />
                   <div className='text-center p-2'>
                   <h1 className='text-xl text-sky-600'>AR Parts Manufacurer</h1>
                    <p>This is a parts manufacturer website.</p>
                    <button class="live-site-btn"><a target="blank" href="https://ar-parts-manufacturer.web.app/">Live Site</a></button>

                    <button onClick={() => navigate('/partsWebDetail')} class="details-btn">Details</button>
                   </div>
                </div>
                <div className='mb-6 bg-project border-2 mx-5'>
                    <img className='img-fluid' src={fruits} alt="" />
                   <div className='text-center p-2'>
                   <h1 className='text-xl text-sky-600'>AR Fruits Warehouse</h1>
                    <p>This is a warehouse management website.</p>
                    <button class="live-site-btn"><a target="blank" href="https://ar-fruits-warehouse.web.app/">Live Site</a></button>
                    <button onClick={() => navigate('/fruitsWebDetail')}  class="details-btn">Details</button>
                   </div>
                </div>
                <div className='mb-6 bg-project border-2 mx-5'>
                    <img className='img-fluid' src={photography} alt="" />
                    <div className='text-center p-2'>
                    <h1 className='text-xl text-sky-600'>AR Photography</h1>
                    <p>This is an independent service provider website.</p>
                    <button class="live-site-btn"><a target="blank" href="https://ar-photography-73631.firebaseapp.com/">Live Site</a></button>
                    <button onClick={() => navigate('/photographyWebDetail')}  class="details-btn">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;