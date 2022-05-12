import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
            <InfoCard bgClasses='bg-gradient-to-r from-secondary to-primary ' title={'Opening Hours'} img={clock} />
            <InfoCard bgClasses='bg-neutral' title={'Visit our location'} img={marker} />
            <InfoCard bgClasses='bg-gradient-to-r from-secondary to-primary' title={'Contact us now'} img={phone} />
        </div>
    );
};

export default Info;