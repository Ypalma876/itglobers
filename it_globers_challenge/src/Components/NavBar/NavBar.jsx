import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
    return (
        <div>
            <div className='container navBar'>
                <div className="row">

                    <div className="col logo">
                        <img src="./images/logo.png" alt='' className='pufi pufi_logo'/>
                    </div>

                    <div className="col-5 d-flex justify-content-center all_pufi_container">
                        <div className='pufi_container'>
                            <img src="./images/puf.png" alt='' className='pufi'/>
                            <p className='pufi_p'>PUFI PUFF</p>
                        </div>
                        <div className='puff_center pufi_container pufi_right'>
                            <img src="./images/umbrela.png" alt='' className='pufi'/>
                            <p className='pufi_p'>PUFI RAIN</p>
                        </div>
                        <div className='puff_center pufi_container pufi_right'>
                            <img src="./images/cart.png" alt='' className='pufi_2 '/>
                            <p className='pufi_p'>PUFI CART</p>
                        </div>
                        <div className='puff_center pufi_container pufi_right'>
                            <img src="./images/nap.png" alt='' className='pufi_2'/>
                            <p className='pufi_p'>PUFI NAP</p>
                        </div>
                    </div> 

                    <div className="col d-flex justify-content-end user_content">
                        <p className="mi_cuenta">
                            MI CUENTA
                            <IoIosArrowDown />
                        </p>
                        {/* <div className='division'></div> */}
                        <p className='mi_cuenta mi_compra'>|  MI COMPRA</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;