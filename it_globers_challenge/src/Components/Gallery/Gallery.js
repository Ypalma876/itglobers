import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='container'>
            
            <div className="intro" >
                <p className="text-ig">INSTAGRAM</p>
                <p className="text-hashtag">#ESPUFI</p>
            </div>

            <div className='row gallery'>
                <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                    <img className=' gallery_img' src='./images/Ugallery.jpg' />
                </div>
                <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                    <img className=' gallery_img' src='./images/puffiCART.webp' />
                </div>
                <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                    <img className=' gallery_img' src='./images/pufiPuff.jpg' />
                </div>
                <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                    <img className=' gallery_img' src='./images/puff2Gall.jpg' />
                </div>
                <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                    <img className=' gallery_img' src='./images/pufiNAP.webp' />
                </div>
                <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                    <img className=' gallery_img' src='./images/puff3Gall.jpg' />
                </div>
            </div>
        </div>
    );
};

export default Gallery;