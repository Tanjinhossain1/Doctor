import React from 'react';
import chair from '../../../assets/images/chair.png'
import Buttons from '../../Buttons/Buttons';
const Banner = () => {
    return (
        <div>
            <div  className="hero min-h-screen bg-no-repeat low--dark">
                <div className="hero-content   flex-col lg:flex-row-reverse">
                    <img className='sm:w-4/4 md:w-4/4 lg:w-2/4' alt='chair' src={chair} />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
                        <p className="py-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Buttons />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;