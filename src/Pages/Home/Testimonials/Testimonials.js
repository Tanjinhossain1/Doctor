import React from 'react';
import quote from '../../../assets/icons/quote.svg'

const Testimonials = () => {
    return (
        <section>
            <div className='flex items-center my-28 justify-between mx-12'>
                <div>
                    <h1 className='font-bold text-secondary'>Testimonial</h1>
                    <h2 className='text-2xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='' width={192} height={168} src={quote} alt="" />
                </div>
            </div>
            <div>
          
            </div>
        </section>
    );
};

export default Testimonials;