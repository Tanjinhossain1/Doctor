import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'
import Loading from '../Loading/Loading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51L0j3OFuLz5Y1W90JfJ4aPsQk26Sw18FKES7T70zrdNvsBho1uGq5Awnm5STU8LrSZCkMTPfN0bRAvV6Mq1fIfAD007cwlDQ8L')
    const { id } = useParams();
    const { isLoading, data: booked } = useQuery(['specificBooking', id], () =>
        fetch(`https://pure-ravine-08552.herokuapp.com/booking/${id}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading loading={isLoading}></Loading>
    }
    const { patientName, slot, treatment, date, price } = booked;
    return (
        <div>
            <div class="card w-50 mx-auto max-w-md shadow-2xl my-12">
                <div class="card-body">
                    <p className='text-secondary font-bold'>Hello, {patientName}</p>
                    <p className='text-2xl'>Please Pay For: <span className='text-blue-500 font-bold'>{treatment}</span></p>
                    <p>Your Appointment: <span className='text-orange-800'>{date}</span> at <span className='text-orange-800'>{slot}</span></p>
                    <p>price: ${price}</p>
                </div>
            </div>
            <div class="card mx-auto w-50 max-w-md shadow-2xl my-12">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booked={booked}></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;