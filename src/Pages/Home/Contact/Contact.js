import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import Buttons from '../../Shared/Buttons/Buttons';


const Contact = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className='text-center mb-12'>
            <div className=' w-1/4 mx-auto py-12'>
                <h5 className='text-secondary font-bold'>Contact Us</h5>
                <h2 className='text-2xl text-white'>Stay connected with us</h2>
                <input className='mt-6 w-full rounded-md px-4 py-1' placeholder='Email Address' type="email" name="" id="" />
                <br />
                <input className='mt-4 w-full rounded-md px-4 py-1' placeholder='Subject' type="text" name="" id="" />
                <br />
                <textarea className='mt-4 w-full rounded-md px-4 py-1' name="" placeholder='Your Message' id="" cols="10" rows="5" ></textarea>
         <div className='mt-6'>
         <Buttons>Submit</Buttons>
         </div>
           
            </div>
        </div>
    );
};

export default Contact;