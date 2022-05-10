import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableService from './AvailableService';

const AvailableAppointment = ({ selected }) => {
    const [serVices, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])

    return (
        <div>
            <p className='text-center text-xl text-secondary font-semibold'>Available Appointments on {format(selected, 'PP')}.</p>;

            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    serVices.map(service => <AvailableService key={service._id} serVices={service}/>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;