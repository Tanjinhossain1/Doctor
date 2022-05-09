import React from 'react';
import Exceptional from '../Exceptional/Exceptional';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Exceptional />
        </div>
    );
};

export default Home;