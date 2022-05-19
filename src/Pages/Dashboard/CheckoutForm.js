import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const CheckoutForm = ({ booked }) => {
    const { patientName, patient, price, _id } = booked;
    const stripe = useStripe();
    const elements = useElements()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [transjection, setTransjection] = useState('');
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://pure-ravine-08552.herokuapp.com/create-payment-indent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    navigate('/home')
                }
                return res.json()
            })
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    })

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error?.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        setSuccess('')
        setProcessing(true)
        // consfirm card error
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message)
            setProcessing(false)
        }
        if (paymentIntent) {
            setTransjection(paymentMethod.id)
            setCardError('')
            console.log(paymentIntent)
            setSuccess('Payment SuccessFully done');
            toast.success('Your Payment is SuccessFull!')

            const payment = {
                appointment: _id,
                transactionId: paymentMethod.id,
            }
            fetch(`https://pure-ravine-08552.herokuapp.com/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json()).then(data => {
                console.log(data)
                setProcessing(false)
            })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }} />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
            {
                success && <div className='text-green-600'>
                    <p>  {success}</p>
                    <p className=''>Your Transjection id: {transjection}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;