import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const BookingModal = ({ treatment, selected, setTreatment,refetch }) => {
    const { slots, name, _id } = treatment;
    const [user] = useAuthState(auth);
    const date =  format(selected, 'PP')
    console.log(selected)
    const modalDetailHandle = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: date,
            slot,
            patient: user?.email,
            patientName: user?.displayName,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                toast(data)
                if (data.success) {
                    toast(`Appointment is set, ${date} at ${slot}`)

                } 
                else {
                    toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch()
                setTreatment(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center">Booking For: {name}</h3>
                    <form onSubmit={modalDetailHandle} className='grid grid-cols-1 justify-items-center gap-3 mt-5'>
                        <input type="text" value={format(selected, 'PP')} className="input input-bordered w-full max-w-xs" readOnly disabled />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" value={user?.displayName} readOnly disabled />
                        <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs" value={user?.email} readOnly disabled />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-primary bg-gradient-to-r from-primary to-secondary  w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;