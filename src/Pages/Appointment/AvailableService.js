import React from 'react';


const AvailableService = ({ serVices, setTreatment }) => {
    const { slots, name } = serVices;
console.log(slots)
    return (
        <div>
            <div className="card text-center w-96 lg:w-72 xl:w-80 2xl:w-96 bg-base-100 my-4 mx-auto shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-secondary text-semibold">{name}</h2>
                    {
                        slots.length ? <span> {slots[0]}</span> : <span className='text-red-600 font-semibold'>No Slot Available</span>
                    }
                    <p> {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                    {/* <button className="btn btn-primary text-white text-bold " ></button> */}

                    <label onClick={() => setTreatment(serVices)} disabled={slots.length === 0} htmlFor="booking-modal" className="btn modal-button bg-gradient-to-r from-secondary to-primary w-3/4 text-white border-0 mx-auto">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableService;