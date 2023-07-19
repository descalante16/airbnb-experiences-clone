import React from 'react';
import '../App.css'
import photoGrid from '../images/photo-grid.png'
const Hero = () => {
    return (
        <div>
            <section>
            <img src={photoGrid} alt="Photogrid" width="1145" height="556" className="img-fluid mx-auto d-block "/>
                <h1 className='mx-5 font-pop fw-semibold'>Online Experiences</h1>
                <h3 className='mx-5 font-pop fw-normal mb-5 '>Join unique interactive activities led by 
                    one-of-a-kind hosts—all without leaving home.
                </h3>
            </section>
        </div>
    );
};

export default Hero;