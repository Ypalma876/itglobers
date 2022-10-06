import React from 'react';
import Carousel from '../Carousel/Carousel.jsx';
import Products from '../Products.js';
import Gallery from '../Gallery/Gallery.js';
import './Home.css'
import Newsletter from '../Newsletter/Newsletter.js';

const Home = () => {
    return ( 
        <div>
            <Carousel />
            <Products />
            <Gallery />
            <Newsletter />
        </div>
        
    );
};

export default Home;