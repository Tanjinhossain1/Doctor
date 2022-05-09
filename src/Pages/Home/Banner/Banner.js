import React from 'react';
import chair from '../../../assets/images/chair.png'
const Banner = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${chair})`
                
            }} class="hero min-h-screen  ">
                <div class="hero-content  flex-col lg:flex-row-reverse">
                    <img className='sm:w-4/4 md:w-4/4 lg:w-2/4' alt='chair' src={chair} />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here!</h1>
                        <p class="py-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary text-white text-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;