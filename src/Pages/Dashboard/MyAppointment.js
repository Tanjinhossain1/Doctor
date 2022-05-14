import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyAppointment = () => {
    const [user] = useAuthState(auth)
    const [appointment, setAppointment] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointment(data))
        }
    }, [user])
    // patient
    console.log(appointment)
    return (
        <div>
            <h1 className=''>MyAppointment: {appointment.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointment.map((appoint,index) => <tr>
                            <th>{index+1}</th>
                            <td>{appoint.patientName}</td>
                            <td>{appoint.date}</td>
                            <td>{appoint.slot}</td>
                            <td>{appoint.treatment}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;