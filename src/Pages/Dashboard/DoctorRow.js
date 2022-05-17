import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const DoctorRow = ({ doctor, index, refetch }) => {
    const navigate = useNavigate()
    const { name, img, specialty, email } = doctor;
    const handleDelete = (email) => {
        fetch(`http://localhost:5000/deleteDoctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    navigate('/home')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Doctor ${name} is Delete`)
                    refetch()
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img alt={name} src={img} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => handleDelete(email)} class="btn btn-xs btn-error text-white">DELETE</button></td>
        </tr>
    );
};

export default DoctorRow;