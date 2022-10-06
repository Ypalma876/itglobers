import React from 'react';

const Products = () => {
    return (
        <div>
            <div className="portfolio_container">
                <div className='columna1'>
                    <img className='images' src="./images/umbrella.jpg" alt="people with umbrella" />
                </div>

                <div className='columna2'>
                    <div className='text_container d-flex'>
                        <div className='my-auto mx-auto'>
                            <img src="./images/pufiRAIN.jpg" alt="pufiRAIN" className='pufi_img'/>
                            <h2 className='pufi_txt'>Pufi RAIN</h2>
                            <br/>
                            <p className='pufi_txt'>Descripción del producto. Este es un texto simulado</p>
                            <br/><br/>
                            <p className='pufi_txt'>Ver más</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio_container">
                <div className='columna2'>
                    <div className='text_container d-flex'>
                        <div className='my-auto mx-auto'>
                            <img src="./images/pufiPuff.png" alt="pufiPuff" className='pufi_img'/>
                            <h2 className='pufi_txt'>Pufi PUFF</h2>
                            <br/>
                            <p className='pufi_txt'>Descripción del producto. Este es un texto simulado</p>
                            <br/><br/>
                            <p className='pufi_txt'>&gt; Ver más</p>
                        </div>
                    </div>
                </div>

                <div className='columna1'>
                    <img className='images' src="./images/pufiPuff.jpg" alt="people with umbrella" />
                </div>
            </div>

            <div className="portfolio_container">
                <div className='columna1'>
                    <img className='images' src="./images/puffiCART.webp" alt="people with umbrella" />
                </div>

                <div className='columna2'>
                    <div className='text_container d-flex'>
                        <div className='my-auto mx-auto'>
                            <img src="./images/cart.webp" alt="pufiCART" className='pufi_img'/>
                            <h2 className='pufi_txt'>Pufi CART</h2>
                            <br/>
                            <p className='pufi_txt'>Descripción del producto. Este es un texto simulado</p>
                            <br/><br/>
                            <p className='pufi_txt'>Ver más</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio_container">
                <div className='columna2'>
                    <div className='text_container d-flex'>
                        <div className='my-auto mx-auto'>
                            <img src="./images/pNAP.jpg" alt="pufiNAP" className='pufi_img'/>
                            <h2 className='pufi_txt'>Pufi NAP</h2>
                            <br/>
                            <p className='pufi_txt'>Descripción del producto. Este es un texto simulado</p>
                            <br/><br/>
                            <p className='pufi_txt'>&gt; Ver más</p>
                        </div>
                    </div>
                </div>

                <div className='columna1'>
                    <img className='images' src="./images/pufiNAP.webp" alt="people with umbrella" />
                </div>
            </div>
        </div>
    );
};

export default Products;