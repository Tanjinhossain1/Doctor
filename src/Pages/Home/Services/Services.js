import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service/Service';

const Services = () => {
    const services = [
        { id: 1, title: 'Fluoride Treatment', img: fluoride, description: "Fluoride treatments are typically professional treatments concentration of fluoride that will apply to reduce the risk of cavities." },
        { id: 2, title: 'Cavity Filling', img: cavity, description: "Amalgam Fillings: Amalgam has been used by dental it is the most researched material used for filling cavities." },
        { id: 3, title: 'Teeth Whitening', img: whitening, description: "Best Teeth Whitening At LASER DENTAL In Uttara. We Utilise World's Most Advanced Teeth Whitening System." }
    ];

    return (
        <div className='mb-12'>
            <div className='text-center mt-20 mb-10'>
                <h3 className='font-bold text-secondary'>OUR SERVICES</h3>
                <h3 className='text-2xl'>Services We Provide</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                services.map( service => <Service key={service.id} service={service} />
                )
                }

            </div>
        </div>
    );
};

export default Services;