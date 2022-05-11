import React, { useState } from 'react';
import 'react-day-picker/dist/style.css';
import Footer from '../Shared/Footer/Footer';
import AppointBanner from './AppointBanner/AppointBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    
    return (
        <div>
            <AppointBanner selected={selected} setSelected={setSelected}/>
            <AvailableAppointment selected={selected} setSelected={setSelected} />
            <Footer />
        </div>
    );
};

export default Appointment;