import React from 'react';
import './Newsletter.css';
import { BsArrowRightShort } from "react-icons/bs";


const Newsletter = () => {
    return (
        <div>
            <div className="news" >
                <p className="text-ig">NEWSLETTER</p>
                <p className="text-hashtag">SUSCRIBITE <br/><p className="subheading">Y enterate de todas las novedades</p>
                </p>
                
            </div>
            <div className='newsletter'>
                <form action="https://formspree.io/f/{form_id}" method="post">
                    <div className='form_items'>
                        <input 
                            name="Email" 
                            id="email" 
                            type="email" 
                            placeholder='Ingresa tu email'
                            className='form_input'
                        />
                        <button type="submit" className='submit_btn'>
                            {<BsArrowRightShort size={"1.5rem"} />}
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
        
    );
};

export default Newsletter;