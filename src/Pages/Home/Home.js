import React from 'react';
import Exceptional from '../Exceptional/Exceptional';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';

import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Exceptional />
            <MakeAppointment />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;