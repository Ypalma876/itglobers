import React from 'react';
import Carousel from '../Carousel/Carousel.jsx';
import Products from '../Products.js';
import Gallery from '../Gallery/Gallery.js';
import './Home.css'

const Home = () => {
    return ( 
        <div>
            <Carousel />
            <Products />
            <Gallery />
        </div>
        
    );
};

export default Home;