import React from 'react';
import Buttons from '../Shared/Buttons/Buttons';

const AvailableService = ({ serVices }) => {
    const { slots, name } = serVices;
    return (
        <div>
            <div class="card text-center w-96 lg:w-72 xl:w-80 2xl:w-96 bg-base-100 my-4 mx-auto shadow-xl">
                <div class="card-body">
                    <h2 class="text-2xl text-secondary text-semibold">{name}</h2>
                    {
                        slots.length ? <span> {slots[0]}</span> : <span className='text-red-600 font-semibold'>No Slot Available</span>
                    }
                    <p> {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <button className="btn btn-primary text-white text-bold bg-gradient-to-r from-secondary to-primary w-3/4 mx-auto" disabled={slots.length===0}>Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AvailableService;