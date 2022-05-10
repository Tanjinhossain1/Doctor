import React from 'react';
import appointmentImage from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';
import Buttons from '../../Shared/Buttons/Buttons';



const MakeAppointment = () => {
    return (
        <div style={{
            backgroundImage: `url(${appointmentImage})`,
            backgroundSize: 'cover'
        }}>
            <div className="mt-20 mb-12   text-white">
                <div className="flex justify-between w-3/4 mx-auto  items-center">
                    <img className="mt-[-110px] w-2/4  hidden lg:block" alt='Appointment' src={doctor}  />
                    <div className='lg:w-2/4 py-8'>
                        <p className='text-secondary font-bold'>Appointment</p>
                        <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Buttons>Get Started</Buttons>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;