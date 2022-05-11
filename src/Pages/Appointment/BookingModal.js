import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selected }) => {
    const { slots, name } = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-center">Booking For: {name}</h3>
                    <form className='grid grid-cols-1 justify-items-center gap-3 mt-5'>
                        <input type="text" value={format(selected, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-primary bg-gradient-to-r from-primary to-secondary  w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;