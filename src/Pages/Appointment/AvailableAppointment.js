import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import AvailableService from './AvailableService';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ selected }) => {
    // const [serVices, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(selected, 'PP');
    // useEffect(() => {
    //     fetch(`https://pure-ravine-08552.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattedDate])
    // console.log(serVices)

    const { isLoading, error, data: serVices, refetch } = useQuery(['repoData', formattedDate], () =>
        fetch(`https://pure-ravine-08552.herokuapp.com/available?date=${formattedDate}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading loading={isLoading}></Loading>
    }

    return (
        <div>
            <p className='text-center text-xl text-secondary font-semibold'>Available Appointments on {format(selected, 'PP')}.</p>;
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    serVices?.map(service => <AvailableService setTreatment={setTreatment} key={service._id} serVices={service} />)
                }
            </div>
            {treatment && <BookingModal refetch={refetch} setTreatment={setTreatment} selected={selected} treatment={treatment} />}
        </div>
    );
};

export default AvailableAppointment;

