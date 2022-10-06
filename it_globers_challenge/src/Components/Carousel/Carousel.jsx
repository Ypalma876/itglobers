import React from 'react';
import './Carousel.css';
import NavBar from '../NavBar/NavBar.jsx';

const Carousel = () => {
    return (
        <div className='slider_container animate__animated animate__fadeIn'>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-indicators indicadores">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <NavBar />
                        <img className="d-block w-100" src="./images/bg2.jpg" alt="First slide" />

                        <div className='slider-info'>
                            <div className='slider-info-box'>
                                <p className='slider-info--txtSpace animate__animated animate__bounceInDown slider-info-txt'>ESTAR CÓMODO, <br/>NUNCA FUE TAN FÁCIL</p>
                            </div>

                            <div className='container'>
                                <div className="row">
                                    <div className="col-6 d-flex justify-content-center">
                                        <div className='shop_container'>
                                            <p className='shopp'>SHOP</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item backg">
                        <img className="d-block w-100" src="./images/featurecarousel.jpg" alt="First slide" />
                        <div className='slider-info'>
                            <div className='slider-info-box'>
                            <p className='slider-info--txtSpace animate__animated animate__bounceInDown slider-info-txt'>ESTAR CÓMODO, <br/>NUNCA FUE TAN FÁCIL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;